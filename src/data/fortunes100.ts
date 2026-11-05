/**
 * 100 balanced-length starter fortune sticks for CHÙA ONLINE, suitable for livestream readings.
 * These are newly written symbolic verses, not a recovered historic/canonical fortune set.
 * Existing fortunes persisted in SQLite/JSON remain authoritative and are not replaced.
 * A card’s classification is fixed in this dataset and NEVER independently randomized.
 */
import { normalizeFortuneRecord, type FortuneRecord, type FortuneCategory } from '../types/temple';

type SeedFortune = {
  fortuneNumber: number;
  title: string;
  category: FortuneCategory;
  poem: string;
  interpretation: string;
  advice: string;
};

const SEED_FORTUNES: SeedFortune[] = [
  {
    "fortuneNumber": 1,
    "title": "Nắng Mới Bình Yên",
    "category": "Đại Cát",
    "poem": "Tĩnh tâm nhìn việc đời,\nVững lòng qua gió sương.",
    "interpretation": "Giữa những đổi thay, tâm an sẽ giúp bạn nhận ra điều tốt đẹp quanh mình. Hãy bình tĩnh trước việc mới và đón nhận từng ngày bằng lòng biết ơn.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 2,
    "title": "Tâm Sáng Giữa Đời",
    "category": "Trung Cát",
    "poem": "Tĩnh tâm nhìn việc đời,\nVững lòng qua gió sương.",
    "interpretation": "Giữa những đổi thay, tâm an sẽ giúp bạn nhận ra điều tốt đẹp quanh mình. Hãy bình tĩnh trước việc mới và đón nhận từng ngày bằng lòng biết ơn.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 3,
    "title": "Gió Lặng Trước Hiên",
    "category": "Bình",
    "poem": "Tĩnh tâm nhìn việc đời,\nVững lòng qua gió sương.",
    "interpretation": "Giữa những đổi thay, tâm an sẽ giúp bạn nhận ra điều tốt đẹp quanh mình. Hãy bình tĩnh trước việc mới và đón nhận từng ngày bằng lòng biết ơn.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 4,
    "title": "Sen Nở Trong Tim",
    "category": "Đại Cát",
    "poem": "Tĩnh tâm nhìn việc đời,\nVững lòng qua gió sương.",
    "interpretation": "Giữa những đổi thay, tâm an sẽ giúp bạn nhận ra điều tốt đẹp quanh mình. Hãy bình tĩnh trước việc mới và đón nhận từng ngày bằng lòng biết ơn.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 5,
    "title": "Bến An Nhiên",
    "category": "Tiểu Cát",
    "poem": "Tĩnh tâm nhìn việc đời,\nVững lòng qua gió sương.",
    "interpretation": "Giữa những đổi thay, tâm an sẽ giúp bạn nhận ra điều tốt đẹp quanh mình. Hãy bình tĩnh trước việc mới và đón nhận từng ngày bằng lòng biết ơn.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 6,
    "title": "Mái Nhà Hòa Thuận",
    "category": "Cần Thận Trọng",
    "poem": "Nhà ấm khi lòng thuận,\nLời hiền hóa sớm mai.",
    "interpretation": "Gia đạo có cơ hội ấm êm khi mọi người chịu lắng nghe nhau. Một lời hỏi han chân thành sẽ giúp hóa giải những điều chưa hiểu.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 7,
    "title": "Bếp Lửa Sum Vầy",
    "category": "Trung Cát",
    "poem": "Nhà ấm khi lòng thuận,\nLời hiền hóa sớm mai.",
    "interpretation": "Gia đạo có cơ hội ấm êm khi mọi người chịu lắng nghe nhau. Một lời hỏi han chân thành sẽ giúp hóa giải những điều chưa hiểu.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 8,
    "title": "Bữa Cơm Đoàn Viên",
    "category": "Tiểu Cát",
    "poem": "Nhà ấm khi lòng thuận,\nLời hiền hóa sớm mai.",
    "interpretation": "Gia đạo có cơ hội ấm êm khi mọi người chịu lắng nghe nhau. Một lời hỏi han chân thành sẽ giúp hóa giải những điều chưa hiểu.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 9,
    "title": "Gia Đình An Vui",
    "category": "Cần Thận Trọng",
    "poem": "Nhà ấm khi lòng thuận,\nLời hiền hóa sớm mai.",
    "interpretation": "Gia đạo có cơ hội ấm êm khi mọi người chịu lắng nghe nhau. Một lời hỏi han chân thành sẽ giúp hóa giải những điều chưa hiểu.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 10,
    "title": "Tiếng Cười Trong Nhà",
    "category": "Trung Cát",
    "poem": "Nhà ấm khi lòng thuận,\nLời hiền hóa sớm mai.",
    "interpretation": "Gia đạo có cơ hội ấm êm khi mọi người chịu lắng nghe nhau. Một lời hỏi han chân thành sẽ giúp hóa giải những điều chưa hiểu.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 11,
    "title": "Đường Công Danh Sáng",
    "category": "Bình",
    "poem": "Chăm lo từng việc nhỏ,\nVững bước trước đường xa.",
    "interpretation": "Công việc có dấu hiệu tiến triển nhờ sự chăm chỉ và giữ chữ tín. Kiên trì hoàn thành việc nhỏ sẽ mở ra cơ hội tốt hơn.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 12,
    "title": "Ngày Mới Chuyên Cần",
    "category": "Đại Cát",
    "poem": "Chăm lo từng việc nhỏ,\nVững bước trước đường xa.",
    "interpretation": "Công việc có dấu hiệu tiến triển nhờ sự chăm chỉ và giữ chữ tín. Kiên trì hoàn thành việc nhỏ sẽ mở ra cơ hội tốt hơn.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 13,
    "title": "Làm Việc Có Tâm",
    "category": "Tiểu Cát",
    "poem": "Chăm lo từng việc nhỏ,\nVững bước trước đường xa.",
    "interpretation": "Công việc có dấu hiệu tiến triển nhờ sự chăm chỉ và giữ chữ tín. Kiên trì hoàn thành việc nhỏ sẽ mở ra cơ hội tốt hơn.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 14,
    "title": "Thuận Lẽ Hợp Tác",
    "category": "Bình",
    "poem": "Chăm lo từng việc nhỏ,\nVững bước trước đường xa.",
    "interpretation": "Công việc có dấu hiệu tiến triển nhờ sự chăm chỉ và giữ chữ tín. Kiên trì hoàn thành việc nhỏ sẽ mở ra cơ hội tốt hơn.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 15,
    "title": "Mở Lối Bằng Tín Nghĩa",
    "category": "Trung Cát",
    "poem": "Chăm lo từng việc nhỏ,\nVững bước trước đường xa.",
    "interpretation": "Công việc có dấu hiệu tiến triển nhờ sự chăm chỉ và giữ chữ tín. Kiên trì hoàn thành việc nhỏ sẽ mở ra cơ hội tốt hơn.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 16,
    "title": "Đèn Sách Chuyên Cần",
    "category": "Tiểu Cát",
    "poem": "Giấy trắng ươm mầm chữ,\nSớm tối luyện tâm bền.",
    "interpretation": "Việc học và công việc đang tiến bộ nhờ sự bền bỉ. Khi tập trung từng bước, bạn sẽ sớm nhận ra thành quả từ nỗ lực của mình.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 17,
    "title": "Bút Mực Tỏa Hương",
    "category": "Cần Thận Trọng",
    "poem": "Giấy trắng ươm mầm chữ,\nSớm tối luyện tâm bền.",
    "interpretation": "Việc học và công việc đang tiến bộ nhờ sự bền bỉ. Khi tập trung từng bước, bạn sẽ sớm nhận ra thành quả từ nỗ lực của mình.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 18,
    "title": "Gia đạo an hòa",
    "category": "Trung Cát",
    "poem": "Giấy trắng ươm mầm chữ,\nSớm tối luyện tâm bền.",
    "interpretation": "Gia đình có dấu hiệu thuận hòa khi mọi người quan tâm và chia sẻ nhiều hơn. Những khúc mắc nhỏ sẽ được hóa giải bằng sự chân thành.",
    "advice": "Hãy giữ lòng từ bi, chủ động quan tâm và sống hòa thuận."
  },
  {
    "fortuneNumber": 19,
    "title": "Trí Sáng Tâm Trong",
    "category": "Bình",
    "poem": "Giấy trắng ươm mầm chữ,\nSớm tối luyện tâm bền.",
    "interpretation": "Việc học và công việc đang tiến bộ nhờ sự bền bỉ. Khi tập trung từng bước, bạn sẽ sớm nhận ra thành quả từ nỗ lực của mình.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 20,
    "title": "Vượt Núi Tìm Chữ",
    "category": "Đại Cát",
    "poem": "Giấy trắng ươm mầm chữ,\nSớm tối luyện tâm bền.",
    "interpretation": "Việc học và công việc đang tiến bộ nhờ sự bền bỉ. Khi tập trung từng bước, bạn sẽ sớm nhận ra thành quả từ nỗ lực của mình.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 21,
    "title": "Khỏe Tâm Vững Thân",
    "category": "Tiểu Cát",
    "poem": "Sớm mai dưỡng thân thể,\nChiều xuống giữ tâm yên.",
    "interpretation": "Sức khỏe và tinh thần sẽ ổn định hơn khi bạn biết cân bằng sinh hoạt. Nghỉ ngơi đúng lúc cũng là cách nuôi dưỡng năng lượng tốt.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 22,
    "title": "Bước Chân An Lành",
    "category": "Bình",
    "poem": "Sớm mai dưỡng thân thể,\nChiều xuống giữ tâm yên.",
    "interpretation": "Sức khỏe và tinh thần sẽ ổn định hơn khi bạn biết cân bằng sinh hoạt. Nghỉ ngơi đúng lúc cũng là cách nuôi dưỡng năng lượng tốt.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 23,
    "title": "Giấc Ngủ Êm Đềm",
    "category": "Đại Cát",
    "poem": "Sớm mai dưỡng thân thể,\nChiều xuống giữ tâm yên.",
    "interpretation": "Sức khỏe và tinh thần sẽ ổn định hơn khi bạn biết cân bằng sinh hoạt. Nghỉ ngơi đúng lúc cũng là cách nuôi dưỡng năng lượng tốt.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 24,
    "title": "Mùa Xuân Sức Sống",
    "category": "Tiểu Cát",
    "poem": "Sớm mai dưỡng thân thể,\nChiều xuống giữ tâm yên.",
    "interpretation": "Sức khỏe và tinh thần sẽ ổn định hơn khi bạn biết cân bằng sinh hoạt. Nghỉ ngơi đúng lúc cũng là cách nuôi dưỡng năng lượng tốt.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 25,
    "title": "Thân Tâm Điều Hòa",
    "category": "Cần Thận Trọng",
    "poem": "Sớm mai dưỡng thân thể,\nChiều xuống giữ tâm yên.",
    "interpretation": "Sức khỏe và tinh thần sẽ ổn định hơn khi bạn biết cân bằng sinh hoạt. Nghỉ ngơi đúng lúc cũng là cách nuôi dưỡng năng lượng tốt.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 26,
    "title": "Chi Tiêu Có Kế Hoạch",
    "category": "Trung Cát",
    "poem": "Đồng tiền do công sức,\nGiữ đủ để mai sau.",
    "interpretation": "Tài chính có thể vững vàng hơn nếu biết tính toán thu chi hợp lý. Chọn sự ổn định lâu dài thay vì nóng vội trước lợi ích trước mắt.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 27,
    "title": "Gom Góp Mùa Lành",
    "category": "Bình",
    "poem": "Đồng tiền do công sức,\nGiữ đủ để mai sau.",
    "interpretation": "Tài chính có thể vững vàng hơn nếu biết tính toán thu chi hợp lý. Chọn sự ổn định lâu dài thay vì nóng vội trước lợi ích trước mắt.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 28,
    "title": "Lộc Đến Từ Chăm Chỉ",
    "category": "Cần Thận Trọng",
    "poem": "Đồng tiền do công sức,\nGiữ đủ để mai sau.",
    "interpretation": "Tài chính có thể vững vàng hơn nếu biết tính toán thu chi hợp lý. Chọn sự ổn định lâu dài thay vì nóng vội trước lợi ích trước mắt.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 29,
    "title": "Giữ Của Bằng Chừng Mực",
    "category": "Trung Cát",
    "poem": "Đồng tiền do công sức,\nGiữ đủ để mai sau.",
    "interpretation": "Tài chính có thể vững vàng hơn nếu biết tính toán thu chi hợp lý. Chọn sự ổn định lâu dài thay vì nóng vội trước lợi ích trước mắt.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 30,
    "title": "Cân Bằng Thu Chi",
    "category": "Bình",
    "poem": "Đồng tiền do công sức,\nGiữ đủ để mai sau.",
    "interpretation": "Tài chính có thể vững vàng hơn nếu biết tính toán thu chi hợp lý. Chọn sự ổn định lâu dài thay vì nóng vội trước lợi ích trước mắt.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 31,
    "title": "Bạn Hiền Gặp Gỡ",
    "category": "Đại Cát",
    "poem": "Lời thương trao đúng lúc,\nTình nghĩa bền tháng năm.",
    "interpretation": "Tình cảm gia đình thêm gắn bó khi bạn dành thời gian cho người thân. Sự quan tâm nhỏ nhưng đúng lúc thường mang lại ấm áp lớn.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 32,
    "title": "Nghĩa Tình Sâu Đậm",
    "category": "Tiểu Cát",
    "poem": "Lời thương trao đúng lúc,\nTình nghĩa bền tháng năm.",
    "interpretation": "Tình cảm gia đình thêm gắn bó khi bạn dành thời gian cho người thân. Sự quan tâm nhỏ nhưng đúng lúc thường mang lại ấm áp lớn.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 33,
    "title": "Một Lời Thăm Hỏi",
    "category": "Bình",
    "poem": "Lời thương trao đúng lúc,\nTình nghĩa bền tháng năm.",
    "interpretation": "Tình cảm gia đình thêm gắn bó khi bạn dành thời gian cho người thân. Sự quan tâm nhỏ nhưng đúng lúc thường mang lại ấm áp lớn.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 34,
    "title": "Chung Tay Giúp Bạn",
    "category": "Trung Cát",
    "poem": "Lời thương trao đúng lúc,\nTình nghĩa bền tháng năm.",
    "interpretation": "Tình cảm gia đình thêm gắn bó khi bạn dành thời gian cho người thân. Sự quan tâm nhỏ nhưng đúng lúc thường mang lại ấm áp lớn.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 35,
    "title": "Tình Thương Lan Tỏa",
    "category": "Tiểu Cát",
    "poem": "Lời thương trao đúng lúc,\nTình nghĩa bền tháng năm.",
    "interpretation": "Tình cảm gia đình thêm gắn bó khi bạn dành thời gian cho người thân. Sự quan tâm nhỏ nhưng đúng lúc thường mang lại ấm áp lớn.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 36,
    "title": "Khởi Đầu Thuận Ý",
    "category": "Cần Thận Trọng",
    "poem": "Mở cửa đón ngày mới,\nBước chậm vẫn đi xa.",
    "interpretation": "Một khởi đầu mới đang rộng mở khi bạn chuẩn bị chu đáo. Cứ vững vàng làm từng bước, đừng quá lo lắng về kết quả trước mắt.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 37,
    "title": "Từng Bước Gây Dựng",
    "category": "Trung Cát",
    "poem": "Mở cửa đón ngày mới,\nBước chậm vẫn đi xa.",
    "interpretation": "Một khởi đầu mới đang rộng mở khi bạn chuẩn bị chu đáo. Cứ vững vàng làm từng bước, đừng quá lo lắng về kết quả trước mắt.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 38,
    "title": "Hạt Giống Nảy Mầm",
    "category": "Bình",
    "poem": "Mở cửa đón ngày mới,\nBước chậm vẫn đi xa.",
    "interpretation": "Một khởi đầu mới đang rộng mở khi bạn chuẩn bị chu đáo. Cứ vững vàng làm từng bước, đừng quá lo lắng về kết quả trước mắt.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 39,
    "title": "Đường Mới Mở Ra",
    "category": "Đại Cát",
    "poem": "Mở cửa đón ngày mới,\nBước chậm vẫn đi xa.",
    "interpretation": "Một khởi đầu mới đang rộng mở khi bạn chuẩn bị chu đáo. Cứ vững vàng làm từng bước, đừng quá lo lắng về kết quả trước mắt.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 40,
    "title": "Dự Định Thành Hình",
    "category": "Tiểu Cát",
    "poem": "Mở cửa đón ngày mới,\nBước chậm vẫn đi xa.",
    "interpretation": "Một khởi đầu mới đang rộng mở khi bạn chuẩn bị chu đáo. Cứ vững vàng làm từng bước, đừng quá lo lắng về kết quả trước mắt.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 41,
    "title": "Chuyến Đi Bình An",
    "category": "Bình",
    "poem": "Đường xa trông mây trắng,\nGiữ hướng giữa ngàn phương.",
    "interpretation": "Hành trình sắp tới thuận lợi hơn nếu bạn có kế hoạch rõ ràng. Giữ tâm bình thản và chuẩn bị kỹ mọi việc trước lúc lên đường.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 42,
    "title": "Trở Về Đoàn Tụ",
    "category": "Trung Cát",
    "poem": "Đường xa trông mây trắng,\nGiữ hướng giữa ngàn phương.",
    "interpretation": "Hành trình sắp tới thuận lợi hơn nếu bạn có kế hoạch rõ ràng. Giữ tâm bình thản và chuẩn bị kỹ mọi việc trước lúc lên đường.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 43,
    "title": "Qua Cầu Đến Bến",
    "category": "Tiểu Cát",
    "poem": "Đường xa trông mây trắng,\nGiữ hướng giữa ngàn phương.",
    "interpretation": "Hành trình sắp tới thuận lợi hơn nếu bạn có kế hoạch rõ ràng. Giữ tâm bình thản và chuẩn bị kỹ mọi việc trước lúc lên đường.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 44,
    "title": "Đường Xa Có Bạn",
    "category": "Cần Thận Trọng",
    "poem": "Đường xa trông mây trắng,\nGiữ hướng giữa ngàn phương.",
    "interpretation": "Hành trình sắp tới thuận lợi hơn nếu bạn có kế hoạch rõ ràng. Giữ tâm bình thản và chuẩn bị kỹ mọi việc trước lúc lên đường.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 45,
    "title": "Bình Minh Lữ Khách",
    "category": "Trung Cát",
    "poem": "Đường xa trông mây trắng,\nGiữ hướng giữa ngàn phương.",
    "interpretation": "Hành trình sắp tới thuận lợi hơn nếu bạn có kế hoạch rõ ràng. Giữ tâm bình thản và chuẩn bị kỹ mọi việc trước lúc lên đường.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 46,
    "title": "Lời Nói Hòa Nhã",
    "category": "Bình",
    "poem": "Lời mềm hơn đá cứng,\nGặp nhau giữ nghĩa tình.",
    "interpretation": "Những hiểu lầm có thể được tháo gỡ khi đôi bên chịu lắng nghe. Hãy nói lời chân thành để giữ gìn sự hòa thuận lâu dài.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 47,
    "title": "Gỡ Mối Hiểu Lầm",
    "category": "Đại Cát",
    "poem": "Lời mềm hơn đá cứng,\nGặp nhau giữ nghĩa tình.",
    "interpretation": "Những hiểu lầm có thể được tháo gỡ khi đôi bên chịu lắng nghe. Hãy nói lời chân thành để giữ gìn sự hòa thuận lâu dài.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 48,
    "title": "Nhường Nhịn Được Lòng",
    "category": "Trung Cát",
    "poem": "Lời mềm hơn đá cứng,\nGặp nhau giữ nghĩa tình.",
    "interpretation": "Những hiểu lầm có thể được tháo gỡ khi đôi bên chịu lắng nghe. Hãy nói lời chân thành để giữ gìn sự hòa thuận lâu dài.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 49,
    "title": "Cầu Nối Tin Yêu",
    "category": "Bình",
    "poem": "Lời mềm hơn đá cứng,\nGặp nhau giữ nghĩa tình.",
    "interpretation": "Những hiểu lầm có thể được tháo gỡ khi đôi bên chịu lắng nghe. Hãy nói lời chân thành để giữ gìn sự hòa thuận lâu dài.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 50,
    "title": "Sóng Yên Trở Lại",
    "category": "Đại Cát",
    "poem": "Lời mềm hơn đá cứng,\nGặp nhau giữ nghĩa tình.",
    "interpretation": "Những hiểu lầm có thể được tháo gỡ khi đôi bên chịu lắng nghe. Hãy nói lời chân thành để giữ gìn sự hòa thuận lâu dài.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 51,
    "title": "Hoa Nở Đúng Mùa",
    "category": "Tiểu Cát",
    "poem": "Đá mòn do nước chảy,\nHoa nở đúng mùa sang.",
    "interpretation": "Thành quả chưa đến ngay nhưng sự nhẫn nại sẽ không uổng phí. Tiếp tục vun bồi việc đang làm, cơ hội tốt sẽ dần rõ ràng.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 52,
    "title": "Thời Gian Thử Lòng",
    "category": "Cần Thận Trọng",
    "poem": "Đá mòn do nước chảy,\nHoa nở đúng mùa sang.",
    "interpretation": "Thành quả chưa đến ngay nhưng sự nhẫn nại sẽ không uổng phí. Tiếp tục vun bồi việc đang làm, cơ hội tốt sẽ dần rõ ràng.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 53,
    "title": "Giữ Nhịp Chân Đều",
    "category": "Trung Cát",
    "poem": "Đá mòn do nước chảy,\nHoa nở đúng mùa sang.",
    "interpretation": "Thành quả chưa đến ngay nhưng sự nhẫn nại sẽ không uổng phí. Tiếp tục vun bồi việc đang làm, cơ hội tốt sẽ dần rõ ràng.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 54,
    "title": "Đợi Mùa Trăng Sáng",
    "category": "Bình",
    "poem": "Đá mòn do nước chảy,\nHoa nở đúng mùa sang.",
    "interpretation": "Thành quả chưa đến ngay nhưng sự nhẫn nại sẽ không uổng phí. Tiếp tục vun bồi việc đang làm, cơ hội tốt sẽ dần rõ ràng.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 55,
    "title": "Bền Chí Thành Công",
    "category": "Cần Thận Trọng",
    "poem": "Đá mòn do nước chảy,\nHoa nở đúng mùa sang.",
    "interpretation": "Thành quả chưa đến ngay nhưng sự nhẫn nại sẽ không uổng phí. Tiếp tục vun bồi việc đang làm, cơ hội tốt sẽ dần rõ ràng.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 56,
    "title": "Gieo Hạt Từ Bi",
    "category": "Trung Cát",
    "poem": "Một lời lành gieo xuống,\nTrăm nụ cười theo sau.",
    "interpretation": "Những việc thiện dù nhỏ vẫn mang đến niềm vui và sự an lành. Khi biết sẻ chia, bạn cũng tìm được sự nhẹ nhõm trong lòng.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 57,
    "title": "Bàn Tay Giúp Người",
    "category": "Bình",
    "poem": "Một lời lành gieo xuống,\nTrăm nụ cười theo sau.",
    "interpretation": "Những việc thiện dù nhỏ vẫn mang đến niềm vui và sự an lành. Khi biết sẻ chia, bạn cũng tìm được sự nhẹ nhõm trong lòng.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 58,
    "title": "Hoa Sen Thiện Hạnh",
    "category": "Đại Cát",
    "poem": "Một lời lành gieo xuống,\nTrăm nụ cười theo sau.",
    "interpretation": "Những việc thiện dù nhỏ vẫn mang đến niềm vui và sự an lành. Khi biết sẻ chia, bạn cũng tìm được sự nhẹ nhõm trong lòng.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 59,
    "title": "Đèn Tâm Soi Sáng",
    "category": "Tiểu Cát",
    "poem": "Một lời lành gieo xuống,\nTrăm nụ cười theo sau.",
    "interpretation": "Những việc thiện dù nhỏ vẫn mang đến niềm vui và sự an lành. Khi biết sẻ chia, bạn cũng tìm được sự nhẹ nhõm trong lòng.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 60,
    "title": "Phước Từ Việc Lành",
    "category": "Bình",
    "poem": "Một lời lành gieo xuống,\nTrăm nụ cười theo sau.",
    "interpretation": "Những việc thiện dù nhỏ vẫn mang đến niềm vui và sự an lành. Khi biết sẻ chia, bạn cũng tìm được sự nhẹ nhõm trong lòng.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 61,
    "title": "Đồng Lúa Trổ Bông",
    "category": "Trung Cát",
    "poem": "Cày sâu rồi gieo giống,\nĐợi nắng chín đồng xa.",
    "interpretation": "Điều bạn kiên trì chăm chút hôm nay có thể mang lại quả lành về sau. Hãy trân trọng nền tảng hiện có và tiến lên từng bước.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 62,
    "title": "Mùa Gặt Yên Vui",
    "category": "Tiểu Cát",
    "poem": "Cày sâu rồi gieo giống,\nĐợi nắng chín đồng xa.",
    "interpretation": "Điều bạn kiên trì chăm chút hôm nay có thể mang lại quả lành về sau. Hãy trân trọng nền tảng hiện có và tiến lên từng bước.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 63,
    "title": "Giọt Mồ Hôi Quý",
    "category": "Cần Thận Trọng",
    "poem": "Cày sâu rồi gieo giống,\nĐợi nắng chín đồng xa.",
    "interpretation": "Điều bạn kiên trì chăm chút hôm nay có thể mang lại quả lành về sau. Hãy trân trọng nền tảng hiện có và tiến lên từng bước.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 64,
    "title": "Hạt Vàng Đầy Sân",
    "category": "Trung Cát",
    "poem": "Cày sâu rồi gieo giống,\nĐợi nắng chín đồng xa.",
    "interpretation": "Điều bạn kiên trì chăm chút hôm nay có thể mang lại quả lành về sau. Hãy trân trọng nền tảng hiện có và tiến lên từng bước.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 65,
    "title": "Nắng Sớm Trên Đồng",
    "category": "Bình",
    "poem": "Cày sâu rồi gieo giống,\nĐợi nắng chín đồng xa.",
    "interpretation": "Điều bạn kiên trì chăm chút hôm nay có thể mang lại quả lành về sau. Hãy trân trọng nền tảng hiện có và tiến lên từng bước.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 66,
    "title": "Duyên Lành Gặp Gỡ",
    "category": "Đại Cát",
    "poem": "Gặp nhau do hữu duyên,\nGiữ nhau bằng thật lòng.",
    "interpretation": "Mối nhân duyên tốt cần sự chân thành và thấu hiểu từ cả hai phía. Hãy vun đắp bằng hành động tử tế thay vì lời hứa vội vàng.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 67,
    "title": "Hiểu Nhau Từng Ngày",
    "category": "Tiểu Cát",
    "poem": "Gặp nhau do hữu duyên,\nGiữ nhau bằng thật lòng.",
    "interpretation": "Mối nhân duyên tốt cần sự chân thành và thấu hiểu từ cả hai phía. Hãy vun đắp bằng hành động tử tế thay vì lời hứa vội vàng.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 68,
    "title": "Tâm Đồng Ý Hợp",
    "category": "Bình",
    "poem": "Gặp nhau do hữu duyên,\nGiữ nhau bằng thật lòng.",
    "interpretation": "Mối nhân duyên tốt cần sự chân thành và thấu hiểu từ cả hai phía. Hãy vun đắp bằng hành động tử tế thay vì lời hứa vội vàng.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 69,
    "title": "Tơ Hồng Chân Thành",
    "category": "Trung Cát",
    "poem": "Gặp nhau do hữu duyên,\nGiữ nhau bằng thật lòng.",
    "interpretation": "Mối nhân duyên tốt cần sự chân thành và thấu hiểu từ cả hai phía. Hãy vun đắp bằng hành động tử tế thay vì lời hứa vội vàng.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 70,
    "title": "Bến Đỗ Tin Cậy",
    "category": "Tiểu Cát",
    "poem": "Gặp nhau do hữu duyên,\nGiữ nhau bằng thật lòng.",
    "interpretation": "Mối nhân duyên tốt cần sự chân thành và thấu hiểu từ cả hai phía. Hãy vun đắp bằng hành động tử tế thay vì lời hứa vội vàng.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 71,
    "title": "Chung Sức Đồng Lòng",
    "category": "Cần Thận Trọng",
    "poem": "Một cây chưa nên bóng,\nNhiều tay dựng mái nhà.",
    "interpretation": "Việc chung có cơ hội thuận lợi khi mọi người biết đồng lòng. Chia sẻ trách nhiệm rõ ràng sẽ giúp vượt qua trở ngại dễ dàng hơn.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 72,
    "title": "Hợp Ý Thành Công",
    "category": "Trung Cát",
    "poem": "Một cây chưa nên bóng,\nNhiều tay dựng mái nhà.",
    "interpretation": "Việc chung có cơ hội thuận lợi khi mọi người biết đồng lòng. Chia sẻ trách nhiệm rõ ràng sẽ giúp vượt qua trở ngại dễ dàng hơn.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 73,
    "title": "Một Nhà Một Hướng",
    "category": "Bình",
    "poem": "Một cây chưa nên bóng,\nNhiều tay dựng mái nhà.",
    "interpretation": "Việc chung có cơ hội thuận lợi khi mọi người biết đồng lòng. Chia sẻ trách nhiệm rõ ràng sẽ giúp vượt qua trở ngại dễ dàng hơn.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 74,
    "title": "Đồng Hành Bền Chí",
    "category": "Đại Cát",
    "poem": "Một cây chưa nên bóng,\nNhiều tay dựng mái nhà.",
    "interpretation": "Việc chung có cơ hội thuận lợi khi mọi người biết đồng lòng. Chia sẻ trách nhiệm rõ ràng sẽ giúp vượt qua trở ngại dễ dàng hơn.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 75,
    "title": "Việc Chung Suôn Sẻ",
    "category": "Trung Cát",
    "poem": "Một cây chưa nên bóng,\nNhiều tay dựng mái nhà.",
    "interpretation": "Việc chung có cơ hội thuận lợi khi mọi người biết đồng lòng. Chia sẻ trách nhiệm rõ ràng sẽ giúp vượt qua trở ngại dễ dàng hơn.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 76,
    "title": "Cửa Sáng Phía Trước",
    "category": "Bình",
    "poem": "Nhìn trời xem gió đổi,\nĐủ duyên mới dong buồm.",
    "interpretation": "Cơ hội mới có thể xuất hiện nhưng vẫn cần suy xét thấu đáo. Hãy tìm hiểu kỹ thông tin trước khi lựa chọn con đường phù hợp.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 77,
    "title": "Nắm Lấy Dịp Lành",
    "category": "Đại Cát",
    "poem": "Nhìn trời xem gió đổi,\nĐủ duyên mới dong buồm.",
    "interpretation": "Cơ hội mới có thể xuất hiện nhưng vẫn cần suy xét thấu đáo. Hãy tìm hiểu kỹ thông tin trước khi lựa chọn con đường phù hợp.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 78,
    "title": "Đón Gió Mới Sang",
    "category": "Tiểu Cát",
    "poem": "Nhìn trời xem gió đổi,\nĐủ duyên mới dong buồm.",
    "interpretation": "Cơ hội mới có thể xuất hiện nhưng vẫn cần suy xét thấu đáo. Hãy tìm hiểu kỹ thông tin trước khi lựa chọn con đường phù hợp.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 79,
    "title": "Thấy Đường Bằng Trí",
    "category": "Cần Thận Trọng",
    "poem": "Nhìn trời xem gió đổi,\nĐủ duyên mới dong buồm.",
    "interpretation": "Cơ hội mới có thể xuất hiện nhưng vẫn cần suy xét thấu đáo. Hãy tìm hiểu kỹ thông tin trước khi lựa chọn con đường phù hợp.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 80,
    "title": "Chọn Đúng Thời Điểm",
    "category": "Trung Cát",
    "poem": "Nhìn trời xem gió đổi,\nĐủ duyên mới dong buồm.",
    "interpretation": "Cơ hội mới có thể xuất hiện nhưng vẫn cần suy xét thấu đáo. Hãy tìm hiểu kỹ thông tin trước khi lựa chọn con đường phù hợp.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 81,
    "title": "Vượt Qua Dốc Núi",
    "category": "Bình",
    "poem": "Dốc cao còn lối nhỏ,\nQua đèo thấy trời xanh.",
    "interpretation": "Khó khăn trước mắt rồi sẽ có lối tháo gỡ nếu bạn không bỏ cuộc. Bình tĩnh tìm nguyên nhân và giải quyết từng việc một.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 82,
    "title": "Thuyền Qua Sóng Lớn",
    "category": "Cần Thận Trọng",
    "poem": "Dốc cao còn lối nhỏ,\nQua đèo thấy trời xanh.",
    "interpretation": "Khó khăn trước mắt rồi sẽ có lối tháo gỡ nếu bạn không bỏ cuộc. Bình tĩnh tìm nguyên nhân và giải quyết từng việc một.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 83,
    "title": "Giữ Vững Tay Chèo",
    "category": "Trung Cát",
    "poem": "Dốc cao còn lối nhỏ,\nQua đèo thấy trời xanh.",
    "interpretation": "Khó khăn trước mắt rồi sẽ có lối tháo gỡ nếu bạn không bỏ cuộc. Bình tĩnh tìm nguyên nhân và giải quyết từng việc một.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 84,
    "title": "Đá Cứng Mài Thành Ngọc",
    "category": "Bình",
    "poem": "Dốc cao còn lối nhỏ,\nQua đèo thấy trời xanh.",
    "interpretation": "Khó khăn trước mắt rồi sẽ có lối tháo gỡ nếu bạn không bỏ cuộc. Bình tĩnh tìm nguyên nhân và giải quyết từng việc một.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 85,
    "title": "Sáng Sau Cơn Mưa",
    "category": "Đại Cát",
    "poem": "Dốc cao còn lối nhỏ,\nQua đèo thấy trời xanh.",
    "interpretation": "Khó khăn trước mắt rồi sẽ có lối tháo gỡ nếu bạn không bỏ cuộc. Bình tĩnh tìm nguyên nhân và giải quyết từng việc một.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 86,
    "title": "Một Lời Vàng Ngọc",
    "category": "Tiểu Cát",
    "poem": "Chữ tín như đèn sáng,\nSoi đường giữa chiều đông.",
    "interpretation": "Chữ tín đang là nền tảng giúp các mối quan hệ thêm bền vững. Giữ lời hứa và sống chân thành sẽ đem lại sự tin tưởng lâu dài.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 87,
    "title": "Hẹn Ngày Giữ Đúng",
    "category": "Bình",
    "poem": "Chữ tín như đèn sáng,\nSoi đường giữa chiều đông.",
    "interpretation": "Chữ tín đang là nền tảng giúp các mối quan hệ thêm bền vững. Giữ lời hứa và sống chân thành sẽ đem lại sự tin tưởng lâu dài.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 88,
    "title": "Chữ Tín Vững Bền",
    "category": "Trung Cát",
    "poem": "Chữ tín như đèn sáng,\nSoi đường giữa chiều đông.",
    "interpretation": "Chữ tín đang là nền tảng giúp các mối quan hệ thêm bền vững. Giữ lời hứa và sống chân thành sẽ đem lại sự tin tưởng lâu dài.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 89,
    "title": "Làm Tròn Bổn Phận",
    "category": "Tiểu Cát",
    "poem": "Chữ tín như đèn sáng,\nSoi đường giữa chiều đông.",
    "interpretation": "Chữ tín đang là nền tảng giúp các mối quan hệ thêm bền vững. Giữ lời hứa và sống chân thành sẽ đem lại sự tin tưởng lâu dài.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 90,
    "title": "Tin Nhau Qua Năm Tháng",
    "category": "Cần Thận Trọng",
    "poem": "Chữ tín như đèn sáng,\nSoi đường giữa chiều đông.",
    "interpretation": "Chữ tín đang là nền tảng giúp các mối quan hệ thêm bền vững. Giữ lời hứa và sống chân thành sẽ đem lại sự tin tưởng lâu dài.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 91,
    "title": "Ngã Rẽ Tươi Sáng",
    "category": "Trung Cát",
    "poem": "Đổi lối không quên gốc,\nTìm đường qua nắng mai.",
    "interpretation": "Một thay đổi đúng thời điểm có thể mở ra hướng đi tươi sáng hơn. Hãy cân nhắc điều phù hợp với sức mình rồi mạnh dạn tiến bước.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 92,
    "title": "Bước Sang Trang Mới",
    "category": "Bình",
    "poem": "Đổi lối không quên gốc,\nTìm đường qua nắng mai.",
    "interpretation": "Một thay đổi đúng thời điểm có thể mở ra hướng đi tươi sáng hơn. Hãy cân nhắc điều phù hợp với sức mình rồi mạnh dạn tiến bước.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 93,
    "title": "Đường Dài Có Hướng",
    "category": "Đại Cát",
    "poem": "Đổi lối không quên gốc,\nTìm đường qua nắng mai.",
    "interpretation": "Một thay đổi đúng thời điểm có thể mở ra hướng đi tươi sáng hơn. Hãy cân nhắc điều phù hợp với sức mình rồi mạnh dạn tiến bước.",
    "advice": "Hãy đón nhận điều tốt đẹp với lòng biết ơn và sự khiêm nhường."
  },
  {
    "fortuneNumber": 94,
    "title": "Thay Đổi Từng Ngày",
    "category": "Tiểu Cát",
    "poem": "Đổi lối không quên gốc,\nTìm đường qua nắng mai.",
    "interpretation": "Một thay đổi đúng thời điểm có thể mở ra hướng đi tươi sáng hơn. Hãy cân nhắc điều phù hợp với sức mình rồi mạnh dạn tiến bước.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 95,
    "title": "Hành Trang Tinh Gọn",
    "category": "Bình",
    "poem": "Đổi lối không quên gốc,\nTìm đường qua nắng mai.",
    "interpretation": "Một thay đổi đúng thời điểm có thể mở ra hướng đi tươi sáng hơn. Hãy cân nhắc điều phù hợp với sức mình rồi mạnh dạn tiến bước.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  },
  {
    "fortuneNumber": 96,
    "title": "Nguồn Cội Trong Tim",
    "category": "Trung Cát",
    "poem": "Nhớ ơn người gieo hạt,\nGiữ nghĩa đến mai sau.",
    "interpretation": "Sự biết ơn và chia sẻ khiến lòng người thêm nhẹ nhàng, thanh thản. Trân trọng những người đã giúp đỡ sẽ nuôi dưỡng phước lành.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 97,
    "title": "Nghĩa Ân Cha Mẹ",
    "category": "Tiểu Cát",
    "poem": "Nhớ ơn người gieo hạt,\nGiữ nghĩa đến mai sau.",
    "interpretation": "Sự biết ơn và chia sẻ khiến lòng người thêm nhẹ nhàng, thanh thản. Trân trọng những người đã giúp đỡ sẽ nuôi dưỡng phước lành.",
    "advice": "Hãy trân trọng thành quả nhỏ và tin vào nỗ lực của bản thân."
  },
  {
    "fortuneNumber": 98,
    "title": "Trọn Lòng Tri Ân",
    "category": "Cần Thận Trọng",
    "poem": "Nhớ ơn người gieo hạt,\nGiữ nghĩa đến mai sau.",
    "interpretation": "Sự biết ơn và chia sẻ khiến lòng người thêm nhẹ nhàng, thanh thản. Trân trọng những người đã giúp đỡ sẽ nuôi dưỡng phước lành.",
    "advice": "Đừng quyết định vội; nên quan sát và chuẩn bị kỹ càng."
  },
  {
    "fortuneNumber": 99,
    "title": "Chia Vui Hạnh Phúc",
    "category": "Trung Cát",
    "poem": "Nhớ ơn người gieo hạt,\nGiữ nghĩa đến mai sau.",
    "interpretation": "Sự biết ơn và chia sẻ khiến lòng người thêm nhẹ nhàng, thanh thản. Trân trọng những người đã giúp đỡ sẽ nuôi dưỡng phước lành.",
    "advice": "Hãy kiên trì từng bước, đừng nóng vội trước những thay đổi."
  },
  {
    "fortuneNumber": 100,
    "title": "Phúc Đến Từ Biết Ơn",
    "category": "Bình",
    "poem": "Nhớ ơn người gieo hạt,\nGiữ nghĩa đến mai sau.",
    "interpretation": "Sự biết ơn và chia sẻ khiến lòng người thêm nhẹ nhàng, thanh thản. Trân trọng những người đã giúp đỡ sẽ nuôi dưỡng phước lành.",
    "advice": "Hãy giữ tâm bình tĩnh, cân nhắc kỹ trước mỗi quyết định."
  }
];

export const DEFAULT_100_FORTUNES: FortuneRecord[] = SEED_FORTUNES.map((seed) =>
  normalizeFortuneRecord({
    fortuneNumber: seed.fortuneNumber,
    fortuneId: `xam_${String(seed.fortuneNumber).padStart(3, '0')}`,
    fortuneTitle: seed.title,
    fortuneType: seed.category,
    shortVerse: seed.poem,
    interpretation: seed.interpretation,
    advice: seed.advice,
    voiceText: '',
    enabled: true,
  }),
);
