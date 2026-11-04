import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import type { Participant, SceneCalibrationSettings } from '../../types/temple';
import { TOTAL_MAIN_MATS } from '../../systems/SeatManager';
import { getImageCalibratedSeatPosition } from '../../systems/SceneCalibration';
import { createKneelingMatTexture } from './templeResources';

/**
 * Permanent congregation prayer cushions in IMAGE BACKGROUND mode.
 * The existing procedural temple already renders its own fixed mats;
 * mounting this only in image mode avoids duplicated cushions.
 *
 * The base 104 cushions never disappear when a worshipper walks to the altar
 * or leaves the LIVE. Temporary overflow positions also get a cushion while
 * they are assigned, without changing the existing seat coordinates.
 */
export function FixedPrayerMats({
  sceneCalibration,
  participants,
}: {
  sceneCalibration: SceneCalibrationSettings;
  participants: Participant[];
}) {
  const { gl } = useThree();
  const frameRef = useRef<THREE.InstancedMesh>(null);
  const cushionRef = useRef<THREE.InstancedMesh>(null);

  const texture = useMemo(
    () => createKneelingMatTexture(Math.min(gl.capabilities.getMaxAnisotropy(), 8)),
    [gl],
  );
  useEffect(() => () => texture.dispose(), [texture]);

  // Permanent main seats plus active overflow seats: never relocate anyone.
  const overflowIds = useMemo(
    () => [...new Set(participants
      .filter(p => p.seatIndex >= TOTAL_MAIN_MATS && !p.isDeparting)
      .map(p => p.seatIndex))].slice(0, 120).sort((a, b) => a - b),
    [participants],
  );
  const seatIndexes = useMemo(
    () => [
      ...Array.from({ length: TOTAL_MAIN_MATS }, (_, idx) => idx),
      ...overflowIds,
    ],
    [overflowIds],
  );

  useLayoutEffect(() => {
    if (!frameRef.current || !cushionRef.current) return;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < seatIndexes.length; i++) {
      const seat = getImageCalibratedSeatPosition(seatIndexes[i], sceneCalibration);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(1, 1, 1);
      dummy.position.set(seat.x, 0.015, seat.z);
      dummy.updateMatrix();
      frameRef.current.setMatrixAt(i, dummy.matrix);

      dummy.position.set(seat.x, 0.034, seat.z);
      dummy.updateMatrix();
      cushionRef.current.setMatrixAt(i, dummy.matrix);
    }
    frameRef.current.count = seatIndexes.length;
    cushionRef.current.count = seatIndexes.length;
    frameRef.current.instanceMatrix.needsUpdate = true;
    cushionRef.current.instanceMatrix.needsUpdate = true;
    frameRef.current.computeBoundingSphere();
    cushionRef.current.computeBoundingSphere();
  }, [seatIndexes, sceneCalibration]);

  // Instancing gives two draw calls for all 104 permanent cushions.
  const capacity = TOTAL_MAIN_MATS + 120;
  return (
    <group name="fixed-prayer-mats" renderOrder={1}>
      <instancedMesh ref={frameRef} args={[undefined, undefined, capacity]} receiveShadow>
        <boxGeometry args={[0.66, 0.026, 0.61]} />
        <meshStandardMaterial color="#8b5529" metalness={0.18} roughness={0.8} />
      </instancedMesh>
      <instancedMesh ref={cushionRef} args={[undefined, undefined, capacity]} receiveShadow>
        <boxGeometry args={[0.59, 0.028, 0.54]} />
        <meshStandardMaterial map={texture} color="#f3d1b4" roughness={0.94} metalness={0.02} />
      </instancedMesh>
    </group>
  );
}
