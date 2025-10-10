document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const questionTable = document.getElementById("questionTable");
    const loadingSpinner = document.getElementById("loading-spinner");
    const pasteButton = document.getElementById("paste-button");
    const clearButton = document.getElementById("clear-button");
  
    const questions = [
      { id: 1, question: "Ai là huynh đệ và cũng là người thầy mà Vương Lâm trong Tiên Nghịch kính trọng nhất ?", answer: "Tư Đồ Nam" },
      { id: 2, question: "Ai là mẹ của Đường Tam?", answer: "A Ngân" },
      { id: 3, question: "Ai là người đứng đầu Vũ Hồn Điện?", answer: "Bỉ Bỉ Đông" },
      { id: 4, question: "Ai là nhân vật chính trong bộ phim hoạt hình trung quốc Thần Mộ ?", answer: "Thần Nam" },
      { id: 5, question: "Bách Lý Đông Quân là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", answer: "Thiếu Niên Bạch Mã Tuý Xuân Phong" },
      { id: 6, question: "Bạch Nguyệt Khôi là tên nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?", answer: "Linh Lung" },
      { id: 7, question: "Bạch Tiểu Thuần là nhân vật chính trong bộ hoạt hình trung quốc nào ?", answer: "Nhất Niệm Vĩnh Hằng" },
      { id: 8, question: "Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng luôn được ai âm thầm giúp đỡ ?", answer: "Đỗ Lăng Phỉ" },
      { id: 9, question: "Bộ phim nào sau đây thuộc tiểu thuyết của tác giả Thiên Tằm Thổ Đậu", answer: "Tất cả đáp án trên (ĐCT, VĐCK, ĐPTK)" },
      { id: 10, question: "Các cấp bậc nào sau đây thuộc phim Đấu Phá Thương Khung ?", answer: "Đấu Tông" },
      { id: 11, question: "Cháu dượng của Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng là ai ?", answer: "Tống Khuyết" },
      { id: 12, question: "Chủ nhân đời trước của Vẫn Lạc Tâm Viêm trong Đấu Phá Thương Khung là ai ?", answer: "Diệu Thiên Hỏa" },
      { id: 13, question: "Công pháp gì giúp Tiêu Viêm trong Đấu Phá Thương Khung hấp thụ nhiều loại dị hỏa ?", answer: "Phần Quyết" },
      { id: 14, question: "Công pháp nào sau đây là của Hàn Lập trong Phàm Nhân Tu Tiên ?", answer: "Tất cả đáp án trên (MVQ, TXC, TNKQ)" },
      { id: 15, question: "Cơ Tử Nguyệt là nhân vật trong các bộ hoạt hình trung quốc nào sau đây ?", answer: "Già Thiên" },
      { id: 16, question: "Dạ Táng còn là biệt danh của ai trong Nhất Niệm Vĩnh Hằng ?", answer: "Bạch Tiểu Thuần" },
      { id: 17, question: "Danh xưng Tàn Thi Bại Thuế là của nhân vật nào trong Hoạ Giang Hồ Chi Bất Lương Nhân ?", answer: "Hàng Thần" },
      { id: 18, question: "Diễm Linh Cơ là nhân vật trong phim hoạt hình trung quốc nào ?", answer: "Thiên Hành Cửu Ca" },
      { id: 19, question: "Diệp Phàm là nhân vật chính trong bộ hoạt hình trung quốc nào ?", answer: "Già Thiên" },
      { id: 20, question: "Diệp Thần trong Tiên Võ Đế Tôn gia nhập Tông Môn nào đầu tiên ?", answer: "Chính Dương Tông" },
      { id: 21, question: "Dược Trần trong Đấu Phá Thương Khung đã từng bị đồ đệ nào phản bội ?", answer: "Hàn Phong" },
      { id: 22, question: "Đại ca của Tiêu Viêm trong Đấu Phá Thương Khung tên gì ?", answer: "Tiêu Đỉnh" },
      { id: 23, question: "Đàm Vân là nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?", answer: "Nghịch Thiên Chí Tôn" },
      { id: 24, question: "Đạo lữ của Hàn Lập là ai ?", answer: "Nam Cung Uyển" },
      { id: 25, question: "Đâu là nhân vật chính trong phim Bách Luyện Thành Thần ?", answer: "La Chinh" },
      { id: 26, question: "Đâu là Thái Cổ Thập Hung trong phim Thế Giới Hoàn Mỹ ?", answer: "Tất cả đáp án trên (ĐTT, CU, CL)" },
      { id: 27, question: "Đâu là tuyệt kỹ số 1 Hạo Thiên Tông mà Đường Hạo dạy cho con trai trong Đấu La Đại Lục ?", answer: "Đại Tu Di Chùy" },
      { id: 28, question: "Đấu Sát Toàn Viên Kiếm là một kỹ năng trong bộ phim hoạt hình trung quốc nào ?", answer: "Thần Ấn Vương Toạ" },
      { id: 29, question: "Độc Cô Bác trong Đấu La Đại Lục có vũ hồn gì ?", answer: "Bích Lân Xà" },
      { id: 30, question: "Em trai ruột của Thạch Hạo trong Thế Giới Hoàn Mỹ là ai ?", answer: "Tần Hạo" },
      { id: 31, question: "Hàn Lập sở hữu những vật phẩm nào dưới đây ?", answer: "Thanh Trúc Phong Vân Kiếm" },
      { id: 32, question: "Hàn Lập trong Phàm Nhân Tu Tiên đến Thất Huyền Môn bái ai làm thầy ?", answer: "Mặc Đại Phu" },
      { id: 33, question: "Hàn Lâp trong Phàm Nhân Tu Tiên gia nhập môn phái nào đầu tiên ?", answer: "Thất Huyền Môn" },
      { id: 34, question: "Hàn Lập trong Phàm Nhân Tu Tiên từng cứu ai mà bị hấp thụ tu vi giảm xuống Luyện Khí Kỳ ?", answer: "Nam Cung Uyển" },
      { id: 35, question: "Hoang Thiên Đế là nhân vật chính trong bộ phim hoạt hình trung quốc nổi tiếng nào ?", answer: "Thế Giới Hoàn Mỹ" },
      { id: 36, question: "Hoắc Vũ Hạo là hậu nhân của ai trong Sử Lai Khắc ?", answer: "Đái Mộc Bạch" },
      { id: 37, question: "Hồn hoàn màu nào mạnh nhất?", answer: "Đỏ" },
      { id: 38, question: "Huân Nhi là công chúa của bộ tộc nào?", answer: "Cổ Tộc" },
      { id: 39, question: "Khi ở Già Nam Học Viện, Tiêu Viêm thu phục được loại dị hỏa nào ?", answer: "Vẫn Lạc Tâm Viêm" },
      { id: 40, question: "Kính Huyền trong Quyến Tư Lượng là hậu duệ của tộc nào ?", answer: "Thần Tộc" },
      { id: 41, question: "Lạc Ly trong Đại Chúa Tể là nhân vật trong Tộc nào ?", answer: "Lạc Thần Tộc" },
      { id: 42, question: "Lâm Động trong Vũ Động Càn Khôn học được Linh Võ Học nào khi vào bia cổ Đại Hoang ?", answer: "Đại Hoang Tù Thiên Chỉ" },
      { id: 43, question: "Lâm Động trong Vũ Động Càn Khôn luyện hóa Tổ Phù nào đầu tiên ?", answer: "Thôn Phệ Tổ Phù" },
      { id: 44, question: "Lâm Động trong Vũ Động Càn Khôn sử dụng vũ khí loại nào sau đây ?", answer: "Thương" },
      { id: 45, question: "Lâm Phong là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", answer: "Vạn Giới Độc Tôn" },
      { id: 46, question: "Lâm Thất Dạ là nhân vật trong bộ phim hoạt hình trung quốc nào sau đây ?", answer: "Trảm Thần" },
      { id: 47, question: "Lâm Thất Dạ trong Trảm Thần sở hữu sức mạnh của vị thần nào ?", answer: "Thiên Sứ" },
      { id: 48, question: "Long Tuyền Kiếm xuất hiện trong bộ phim hoạt hình nào dưới đây ?", answer: "Họa Giang Hồ Chi Bất Lương Nhân" },
      { id: 49, question: "Lục Tuyết Kỳ trong Tru Tiên thuộc Phong nào trong Thanh Vân Môn?", answer: "Tiểu Trúc Phong" },
      { id: 50, question: "Lý Tinh Vân trong Họa Giang Hồ Chi Bất Lương Nhân sử dụng vũ khí nào sau đây ?", answer: "Long Tuyền Kiếm" },
      { id: 51, question: "Lý Trường Thọ trong Sư Huynh A Sư Huynh xuyên không về Hồng Hoang bái sư ở đâu ?", answer: "Độ Tiên Môn" },
      { id: 52, question: 'Man Hồ Tử trong phim "Phàm Nhân Tu Tiên" tu luyện công pháp nào?', answer: "Thác Thiên Ma Công" },
      { id: 53, question: "Mẫu thân của La Phong trong Thôn Phệ Tinh Không tên là gì ?", answer: "Cung Tâm Lan" },
      { id: 54, question: "Mẹ của Mạnh Xuyên trong Thương Nguyên Đồ tên là gì ?", answer: "Bạch Niệm Vân" },
      { id: 55, question: "Mẹ của Tần Trần là ai ?", answer: "Tần Nguyệt Trì" },
      { id: 56, question: "Mẹ của Thạch Hạo trong Thế Giới Hoàn Mỹ tên là gì", answer: "Tần Di Ninh" },
      { id: 57, question: "Mối tình đầu của Diệp Thần trong Tiên Võ Đế Tôn là ai ?", answer: "Cơ Ngưng Sương" },
      { id: 58, question: "Mục đích tu luyện của Vương Lâm trong Tiên Nghịch theo diễn biến phim hiện tại là gì ?", answer: "Báo Thù" },
      { id: 59, question: "Mục Trần trong Đại Chúa Tể liên kết Huyết Mạch với ?", answer: "Cửu U Tước" },
      { id: 60, question: "Mục Vân là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", answer: "Vô Thượng Thần Đế" },
      { id: 61, question: "Nam chính trong bộ hoạt hình trung quốc Ám Hà Truyện là ai ?", answer: "Tô Mộ Vũ" },
      { id: 62, question: "Nam chính trong bộ Quyến Tư Lượng là ai ?", answer: "Kính Huyền" },
      { id: 63, question: "Nghịch Hà Tông là Tông Môn trong bộ hoạt hình trung quốc nào sau đây ?", answer: "Nhất Niệm Vĩnh Hằng" },
      { id: 64, question: "Nghịch Thiên Nhi Hành là một nhân vật trong bộ phim hh3d nào sau đây ?", answer: "Vũ Canh Kỷ" },
      { id: 65, question: "Ngụy Anh (Ngụy Vô Tiện) là nhân vật trong bộ hhtq nào sau đây ?", answer: "Ma Đạo Tổ Sư" },
      { id: 66, question: "Người bạn thuở nhỏ của Trương Tiểu Phàm trong Tru Tiên là ai ?", answer: "Lâm Kinh Vũ" },
      { id: 67, question: "Nhân vật Bách Lý Đồ Minh xuất hiện trong phim hoạt hình nào dưới đây ?", answer: "Trảm Thần Chi Phàm Trần Thần Vực" },
      { id: 68, question: 'Nhân vật chính của "Thần Ấn Vương Tọa" là ai?', answer: "Long Hạo Thần" },
      { id: 69, question: "Nhân vật chính của Đấu La Đại Lục là ai?", answer: "Đường Tam" },
      { id: 70, question: "Nhân vật chính Lý Trường Thọ trong Sư Huynh A Sư Huynh đã tỏ tình với ai ?", answer: "Vân Tiêu" },
      { id: 71, question: "Nhân vật chính trong Thương Nguyên đồ là ai ?", answer: "Mạnh Xuyên" },
      { id: 72, question: "Nhân vật chính trong Yêu Thần Ký tên là gì ?", answer: "Nhiếp Ly" },
      { id: 73, question: "Nhân vật nào luôn bất bại trong phim Hoạt Hình Trung Quốc, được ví như One-Punch Man ?", answer: "Từ Dương" },
      { id: 74, question: "Nhân vật nào sau đây được mệnh danh là Vua Lỳ Đòn trong Đấu Phá Thương Khung ?", answer: "Phượng Thanh Nhi" },
      { id: 75, question: "Nhị ca của Tiêu Viêm trong Đấu Phá Thương Khung tên gì ?", answer: "Tiêu Lệ" },
      { id: 76, question: "Nhiếp Phong là nhân vật chính trong phim hoạt hình trung quốc nào ?", answer: "Chân Võ Đỉnh Phong" },
      { id: 77, question: "Ninh Diêu là một nhân vật trong bộ phim hoạt hình trung quốc nào sau đây ?", answer: "Kiếm Lai" },
      { id: 78, question: "Nữ chính cũng là vợ Đông Bá Tuyết Ưng trong Tuyết Ưng Lĩnh Chủ là ai sau đây ?", answer: "Dư Tĩnh Thu" },
      { id: 79, question: "Nữ chính trong bộ Quyến Tư Lượng là ai ?", answer: "Đồ Lệ" },
      { id: 80, question: "Ông nội của Lâm Động trong Vũ Động Càn Khôn là ai ?", answer: "Lâm Chấn Thiên" },
      { id: 81, question: "Phụ Thân của Lâm Động trong Vũ Động Càn Khôn là ai ?", answer: "Lâm Khiếu" },
      { id: 82, question: "Phương Hàn là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", answer: "Vĩnh Sinh" },
      { id: 83, question: "Phương Hàn trong Vĩnh Sinh nhận được Giao Phục Hoàng Tuyền Đồ từ ai ?", answer: "Bạch Hải Thiện" },
      { id: 84, question: "Phương Hàn trong Vĩnh Sinh xuất thân là gì ở nhà họ Phương ?", answer: "Nô Bộc" },
      { id: 85, question: "Phượng Thanh Nhi trong Đấu Phá Thương Khung thuộc chủng tộc nào ?", answer: "Thiên Yêu Hoàng Tộc" },
      { id: 86, question: "Số hiệu vị thần của main trong Trảm Thần: Phàm Trần Thần Vực là số mấy ?", answer: "003" },
      { id: 87, question: "Sử Lai Khắc Thất Quái đã từng đến nơi nào để luyện tập?", answer: "Hải Thần Đảo" },
      { id: 88, question: "Sư mẫu của Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng là ai ?", answer: "Hứa Mị Nương" },
      { id: 89, question: "Sư phụ của Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng là ai ?", answer: "Lý Thanh Hậu" },
      { id: 90, question: "Sư phụ của Lý Trường Thọ là ai ?", answer: "Tề Nguyên" },
      { id: 91, question: "Sư phụ mà Diệp Thần yêu trong Tiên Võ Đế Tôn là ai ?", answer: "Sở Huyên Nhi" },
      { id: 92, question: "Sư Phụ thứ 2 của Lý Trường Thọ trong phim", answer: "Thái Thanh Thánh Nhân" },
      { id: 93, question: "Tại sao Đường Tam bị Đường Môn truy sát ở tập đầu phim Đấu La Đại Lục ?", answer: "Học trộm tuyệt học bổn môn" },
      { id: 94, question: "Tần Vũ trong Tinh Thần Biến được tặng pháp bảo siêu cấp vip pro nào để tu luyện nhanh chóng ?", answer: "Khương Lan Tháp" },
      { id: 95, question: "Tần Vũ trong Tinh Thần Biến khiếm khuyết đan điền nhờ đâu mới có thể tu luyện ?", answer: "Lưu Tinh Lệ" },
      { id: 96, question: "Thánh nữ nào trong Già Thiên bị nhân vật chính Diệp Phàm lấy mất cái áo lót ?", answer: "Diêu Hi" },
      { id: 97, question: "Thần Thông Bí Cảnh xuất hiện trong bộ phim hoạt hình nào dưới đây ?", answer: "Vĩnh Sinh" },
      { id: 98, question: "Thần vị mà Đường Tam đạt được là gì?", answer: "Hải Thần và Tu La Thần" },
      { id: 99, question: "Thế lực nào là đối thủ lớn nhất của Tiêu Viêm trong Đấu Phá Thương Khung?", answer: "Hồn Điện" },
      { id: 100, question: "Thú cưng Thôn Thôn trong Nguyên Tôn sinh ra có sức mạnh ngang cảnh giới nào ?", answer: "Thái Sơ Cảnh" },
      { id: 101, question: "Tiêu Khinh Tuyết xuất hiện trong bộ hoạt hình nào dưới đây ?", answer: "Tuyệt Thế Chiến Hồn" },
      { id: 102, question: "Tiêu Viêm đã lập nên thế lực nào khi ở Học Viện Già Nam ?", answer: "Bàn Môn" },
      { id: 103, question: "Tiêu Viêm trong Đấu Phá Thương Khung đã Hẹn Ước 3 Năm với ai ?", answer: "Nạp Lan Yên Nhiên" },
      { id: 104, question: "Tiêu Viêm trong Đấu Phá Thương Khung sử dụng loại vũ khí nào sau đây ?", answer: "Thước" },
      { id: 105, question: "Tiêu Viêm trong Đấu Phá Thương Khung thuộc gia tộc nào?", answer: "Tiêu Gia" },
      { id: 106, question: "Tình đầu của Diệp Phàm trong Già Thiên là ai ?", answer: "Lý Tiểu Mạn" },
      { id: 107, question: "Trần Bình An là nam chính trong bộ phim hoạt hình trung quốc nào ?", answer: "Kiếm Lai" },
      { id: 108, question: "Triệu Ngọc Chân là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", answer: "Thiếu Niên Bạch Mã Túy Xuân Phong" },
      { id: 109, question: "Trong bộ Đấu Phá Thương Khung, Tiêu Viêm tìm đến ai để cứu Dược Lão ?", answer: "Phong Tôn Giả" },
      { id: 110, question: "Trong bộ Tiên Nghịch, nhân vật chính Vương Lâm khi ở quê nhà còn có tên khác là gì ?", answer: "Thiết Trụ" },
      { id: 111, question: "Trong Đấu La Đại Lục, Đường Hạo là gì của Đường Tam?", answer: "Cha" },
      { id: 112, question: "Trong Già Thiên, thể chất Diệp Phàm là thể chất gì ?", answer: "Hoang Cổ Thánh Thể" },
      { id: 113, question: "Trong Phàm Nhân Tu Tiên ai bị luyện thành khôi lỗi Khúc Hồn ?", answer: "Trương Thiết" },
      { id: 114, question: "Trong phim Tiên Nghịch, Vương Lâm vô tình có được pháp bảo nghịch thiên nào ?", answer: "Thiên Nghịch Châu" },
      { id: 115, question: "Trong Tiên Nghịch, Vương Lâm nhận được truyền thừa gì ở Cổ Thần Chi Địa ?", answer: "Ký Ức" },
      { id: 116, question: "Trong Tru Tiên, Điền Bất Dịch là thủ tọa của Phong nào?", answer: "Đại Trúc Phong" },
      { id: 117, question: "Trong Vĩnh Sinh - Phương Hàn hẹn ước 10 năm cùng với ai ?", answer: "Hoa Thiên Đô" },
      { id: 118, question: "Trước khi đến Linh Khê Tông, Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng ở đâu ?", answer: "Mạo Nhi Sơn Thôn" },
      { id: 119, question: "Trương Tiểu Phàm trong phim Tru Tiên còn có tên gọi là ?", answer: "Quỷ Lệ" },
      { id: 120, question: "Trương Tiểu Phàm trong Tru Tiên từng được nhận vào môn phái nào?", answer: "Thanh Vân Môn" },
      { id: 121, question: "Tử Nghiên trong Đấu Phá Thương Khung thuộc chủng tộc nào ?", answer: "Thái Hư Cổ Long" },
      { id: 122, question: "Vân Triệt là tên nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?", answer: "Nghịch Thiên Tà Thần" },
      { id: 123, question: "Vũ Canh là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", answer: "Vũ Canh Kỷ" },
      { id: 124, question: "Vũ hồn của Chu Trúc Thanh là gì?", answer: "U Minh Linh Miêu" },
      { id: 125, question: "Vũ hồn của Đới Mộc Bạch là gì?", answer: "Bạch Hổ" },
      { id: 126, question: "Vũ hồn của Mã Hồng Tuấn là gì?", answer: "Hỏa Phượng Hoàng" },
      { id: 127, question: "Vũ hồn của Tiểu Vũ là gì?", answer: "Nhu Cốt Thỏ" },
      { id: 128, question: "Vũ hồn thứ hai của Đường Tam là gì?", answer: "Hạo Thiên Chùy" },
      { id: 129, question: "Vũ khí của Đàm Vân trong Nghịch Thiên Chí Tôn là gì ?", answer: "Hồng Mông Thần Kiếm" },
      { id: 130, question: "Vũ khí mà Tiêu Viêm trong Đấu Phá Thương Khung luôn mang bên mình có tên gọi là gì ?", answer: "Huyền Trọng Xích" },
      { id: 131, question: "Vương Lâm trong phim Tiên Nghịch dựa vào gì để vô địch cùng cảnh giới ?", answer: "Cực Cảnh" },
      { id: 132, question: "Y Lai Khắc Tư là một nhân vật trong bộ phim hoạt hình trung quốc nào sau đây ?", answer: "Cả 1 và 2 (ĐLĐL2, TÂVT)" },
      { id: 133, question: "Ai là người thầy của Đường Tam?", answer: "Đại Sư" },
      { id: 134, question: "Thiên Hoả Tôn Giả trong Đấu Phá Thương Khung dùng thi thể của ai để hồi sinh ?", answer: "Vân Sơn" },
      { id: 135, question: "Lâm Thất Dạ là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", answer: "Trảm Thần" },
      { id: 136, question: "Ám tinh giới được xuất hiện trong bộ phim hoạt hình nào dưới đây ?", answer: "Tinh Thần Biến" },
      { id: 137, question: "Tỉnh Cửu là nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?", answer: "Đại Đạo Triều Thiên" },
      { id: 138, question: "Lý Tinh Vân là một nhân vật trong bộ phim hoạt hình trung quốc nào sau đây ?", answer: "Họa Giang Hồ Chi Bất Lương Nhân" },
      { id: 139, question: "Tần Mục là nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?", answer: "Mục Thần Ký" },
      { id: 140, question: "Tiêu Thần là nhân vật chính trong bộ phim hoạt hình Trung Quốc nào sau đây ?", answer: "Trường Sinh Giới" },
      { id: 141, question: "Tần Nam là nhân vật chính trong bộ hoạt hình trung quốc nào sau đây ?", answer: "Tuyệt Thế Chiến Hồn" },
      { id: 142, question: "Mục đích chính tu luyện của Tần Vũ trong Tinh Thần Biến là gì ??", answer: "Vì muốn được cưới Khương Lập" },
      { id: 143, question: "Khô Lâu Đà Chủ xuất hiện trong bộ phim hoạt hình nào dưới đây ?", answer: "Võ Thần Chúa Tể" },
      { id: 144, question: "Nhân vật chính trong Man Hoang Tiên Giới là ai ?", answer: "Lục Hàng Chi" },
      { id: 145, question: "Mục đích tu luyện của Tần Vũ trong Tinh Thần Biến là gì?", answer: "Vì muốn được cưới Khương Lập" },
      { id: 146, question: "Nhân vật chính trong Quân Tử Vô Tật là ai?", answer: "Dao Cơ" },
      { id: 147, question: "Nhân vật chính trong Đấu Chiến Thiên Hạ là ai?", answer: "Đại Phong" },
      { id: 148, question: "Nhân vật chính trong Ta Có Thể Giác Ngộ Vô Hạn là ai?", answer: "Tiêu Vân" },
      { id: 149, question: "Tại sao Hàn Lập khi gặp Phong Hi không chạy mà ở lại giúp đỡ chế tạo Phong Lôi Sí ?", answer: "Vì đánh không lại" },
      { id: 150, question: "Nhân vật chính trong Quân Tử Vô Tật là ai ?", answer: "Dao Cơ" },
      { id: 151, question: "Vô Tâm trong phim Thiếu Niên Ca Hành còn có tên gọi khác là gì ?", answer: "Diệp An Thế" },
      { id: 152, question: "Trong Phim Na Tra: Ma Đồng Náo Hải, Cha của Ngao Bính tên là ?", answer: "Ngao Quảng" },
      { id: 153, question: "Cô Kiếm Tiên trong phim Thiếu Niên Ca Hành là ai ?", answer: "Lạc Thanh Dương" },
      { id: 154, question: "Nam chính trong phim Ta Là Đại Thần Tiên là ?", answer: "Thời Giang" },
      { id: 155, question: "Trong phim Đại Đạo Triều Thiên, Tỉnh Cửu đã cùng thư đồng đến đâu tu luyện ?", answer: "Thanh Sơn Tông" },
      { id: 156, question: "Nam chính trong phim Sơn Hà Kiếm Tâm là ai ?", answer: "Yến Vô Sư" },
      { id: 157, question: "Thê tử của Điền Bất Dịch trong Tru Tiên là ai ?", answer: "Tô Như" },
      { id: 158, question: "Nam chính của phim Đô Thị Có Y Tiên là ?", answer: "Diệp Bất Phàm" },
      { id: 159, question: "Thế giới trong Mục Thần Ký chia thành mấy đại vực chính ?", answer: "9" },
      { id: 160, question: "Cổ Hà trong Đấu Phá Thương Khung lúc xuất hiện ở Vân Lam Tông là luyện dược sư mấy phẩm ?", answer: "Lục Phẩm" },
      { id: 161, question: "Vương Lâm trong Tiên Nghịch ở đâu có Tiên Ngọc đột phá Anh Biến ?", answer: "Đi cướp (Chỉ là bằng hữu cho mượn tiên ngọc thôi:P)" },
      { id: 162, question: "Nhân Vật chính trong phim Trấn Hồn Nhai là ?", answer: "Hạ Linh" },
      { id: 163, question: "Chu Tước Thánh Sứ trong Tru Tiên Là Ai ?", answer: "U Cơ" },
      { id: 164, question: "Bạch Nguyệt Khôi còn có tên gọi khác là gì ?", answer: "Bà Chủ Bạch (A.K.A Bạch Lão Bản)" },
      { id: 165, question: "Lâm Thất Dạ trong phim Trảm Thần gặp phải biến cố gì ?", answer: "Bị mù (nhìn lên trời thấy vì tinh tú rồi bị chột)" },
      { id: 166, question: "ID game Diệp Tu sử dụng trong phim Toàn Chức Cao Thủ ?", answer: "Cả 1 và 2 (Thách đấu phá đảo rank đồng đoàn)" },
      { id: 167, question: "Trong Kiếm Lai, Khi Ly Châu Động Thiên đứng trước nguy cơ bị hủy diệt, là ai đã đứng ra bảo vệ người dân trong trấn ?", answer: "Tề Tĩnh Xuân (Xuân phong đắc ý)" },
      { id: 168, question: "Nhân vật chính trong Ta Có Thể Giác Ngộ Vô Hạn là ai ?", answer: "Tiêu Vân (Truyện tranh hay hơn)" },
      { id: 169, question: "Nhân vật chính trong phim Tần Thời Minh Nguyệt ?", answer: "Kinh Thiên Minh (phim cổ)" },
      { id: 170, question: "Tư Mã Ý trong phim Hỏa Phụng Liêu Nguyên có tên tự là gì ?", answer: "Trọng Đạt" },
      { id: 171, question: "Dương Khai trong Võ Luyện Đỉnh Phong song tu với ai đầu tiên ?", answer: "Tô Nhan (em này được yêu nhất,lên map lại đi tìm :D)" },
      { id: 172, question: "Ai là chủ nhân của Thôn Thôn trong Nguyên Tôn ?", answer: "Yêu Yêu" },
      { id: 173, question: "Trong phim Đại Đạo Triều Thiên, Triệu Lạp Nguyệt đến từ phong nào ?", answer: "Thần Mạt Phong (Nữ như nam )" },
      { id: 174, question: "Nhân vật chính Duy ngã độc thần", answer: "Ninh Thần (tên phim củ chuối)" },
      { id: 175, question: "Mục Thần Ký được chuyển thể từ tiểu thuyết của tác giả nào?", answer: "Trạch trư/thạch thư" },
      { id: 176, question: "Tần Mục trong Mục Thần Ký lớn lên ở đâu ?", answer: "Tàn Lão Thôn (Toàn người què)" },
      { id: 177, question: "Nhân vật chính trong phim Toàn Chức cao thủ là ai?", answer: "Diệp Tu (Nhất Diệp Chi Thu)" },
      { id: 178, question: "Ai là sư phụ của Diệp Phàm trong Già Thiên?", answer: "Lý Nhược Ngu (Tên 3 chấm...)" },
      { id: 179, question: "Sở Phong trong Tu La Võ Thần có Huyết Mạch gì ?", answer: "Thiên Lôi (chưa thấy phần mới)" },
      { id: 180, question: "Trong Na Tra: Ma Đồng Giáng Thế, Na Tra được sinh ra từ gì?", answer: "Ma Hoàn (Hot hit phòng vé,nhưng mà xem lậu)" },
      { id: 181, question: "Bộ phim Thiên Bảo Phục Yêu Lục lấy bối cảnh thời kỳ nào??", answer: "Đường" },
      { id: 182, question: "Trong phim Đại Đạo Triều Thiên, Tỉnh Cửu đã thu nhận ai làm thư đồng?", answer: "Lưu Thập Tuế (họ liễu chứ nhể)" },
      { id: 183, question: "Nhân vật chính trong phim Vạn Giới Tiên Tung là ai ?", answer: "Diệp Tinh Vân" },
      { id: 184, question: "1 Trong 2 Admin của website HoatHinh3D là ai ? (Biệt danh chính xác ở web) ?", answer: "Từ Dương" },
      { id: 185, question: "Lý Hàn Y trong phim Thiếu Niên Ca Hành sử dụng vũ khí gì ?", answer: "Cả 1 và 2" },
      { id: 186, question: "Trong các bộ phim sau, bộ nào nhân vật chính có hệ thống ?", answer: "Ta Có Thể Giác Ngộ Vô Hạn" },
      { id: 187, question: "Tam Thánh Niết là biệt danh của ai trong Họa Giang Hồ Chi Bất Lương Nhân ?", answer: "Lý Tinh Vân" },
      { id: 188, question: "Sư tỷ của Nguyên Dao trong Phàm Nhân Tu Tiên tên là gì ?", answer: "Nghiên Lệ" },
      { id: 189, question: "Phong Hi trong Phàm Nhân Tu Tiên là yêu thú nào ?", answer: "Liệt phong thú" },
      { id: 190, question: "Trong phim Vạn Cổ Tối Cường Tông, Quân Thường Tiếu chiêu mộ ai làm đệ từ đầu tiên ?", answer: "Lục Thiên Thiên" },
      { id: 191, question: "Liễu Thất Nguyệt trong Thương Nguyên Đồ sử dụng vũ khí gì ?", answer: "Cung" },
      { id: 192, question: "Nhân vật chính trong phim Sư Huynh A Sư Huynh là ai ?", answer: "Lý Trường Thọ" },
      { id: 193, question: "Ai sau đây làm lễ cưới với Lý Mộ Uyển trong Tiên Nghịch thì bị anh Lâm giết ?", answer: "Tôn Chấn Vỹ. (Thực ra là Tôn Trấn Vĩ nhưng đáp án vậy đó :v)" },
      { id: 194, question: "Ôn Thiên Nhân trong Phàm Nhân Tu Tiên tu luyện công pháp gì ?", answer: "Lục Cực Chân Ma Công" },
      { id: 195, question: "Phong Hi trong Phàm Nhân Tu Tiên là yêu thú cấp mấy ?", answer: "9" },
      { id: 196, question: "Trong Đấu Phá Thương Khung, Tiêu Viêm hơn Cổ Hà ở điểm gì ?", answer: "Dị Hỏa" },
      { id: 197, question: "Phong Hi trong Phàm Nhân Tu Tiên vì sao được gọi là Đại Thiện Nhân ?", answer: "Cả 1 và 2" },
      { id: 198, question: "Trong Đấu Phá Thương Khung,khi Vân Lam Tông giải tán thì Vân Vận đã gia nhập tông phái nào ?", answer: "Hoa Tông" },
      { id: 199, question: "Gia gia Thạch Hạo trong phim Thế Giới Hoàn Mỹ tên gì ?", answer: "Thạch Trung Thiên" },
      { id: 200, question: "Con gái của quỷ vương trong Tru Tiên tên là gì?", answer: "Bích Dao" }
    ];
  
  
    function renderQuestions(filteredQuestions, query) {
      loadingSpinner.classList.remove("spinner-hidden");
      setTimeout(() => { 
          if (filteredQuestions.length > 0) {
              questionTable.innerHTML = filteredQuestions
                  .map(q => `<tr><td>${q.question}</td><td>${q.answer}</td></tr>`)
                  .join("");
          } else {
              if (query) {
                  questionTable.innerHTML = `<tr><td colspan="2" style="text-align:center;">Không tìm thấy kết quả cho "${query}"</td></tr>`;
              } else {
                  questionTable.innerHTML = `<tr><td colspan="2" style="text-align:center;">Nhập từ khóa để bắt đầu tìm kiếm...</td></tr>`;
              }
          }
          loadingSpinner.classList.add("spinner-hidden");
      }, 300);
    }
  
    window.filterQuestions = function () {
      const query = searchInput.value.trim().toLowerCase();
      const filteredQuestions = query
        ? questions.filter((q) => q.question.toLowerCase().includes(query))
        : [];
      renderQuestions(filteredQuestions, searchInput.value.trim());
    };
  
    searchInput.addEventListener("input", filterQuestions);
  
    // Chức năng nút dán
    pasteButton.addEventListener("click", () => {
      navigator.clipboard.readText()
        .then(text => {
          searchInput.value = text;
          filterQuestions();
        })
        .catch(err => {
          console.error('Failed to read clipboard contents: ', err);
        });
    });
  
    // Chức năng nút xóa
    clearButton.addEventListener("click", () => {
      searchInput.value = "";
      filterQuestions();
    });
  
    renderQuestions([], "");
  });
  
  
  // --- Hiệu ứng con trỏ chuột tỏa sáng (Interactive Cursor Glow) ---
  const cursorGlow = document.querySelector('.cursor-glow');
  window.addEventListener('mousemove', e => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
  });
  
  
  // --- Hiệu ứng mưa ký tự Matrix (Matrix Rain Background) ---
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const alphabet = 'KiemKhiTruongThanh ';
  
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const rainDrops = [];
  
  for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
  }
  
  const drawMatrix = () => {
      ctx.fillStyle = 'rgba(15, 12, 41, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = '#00f2ff';
      ctx.font = fontSize + 'px monospace';
  
      for (let i = 0; i < rainDrops.length; i++) {
          const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
          ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
  
          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              rainDrops[i] = 0;
          }
          rainDrops[i]++;
      }
  };
  
  setInterval(drawMatrix, 33);
  
  window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  });

  // Nút XÓA
document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    filterQuestions();
    document.getElementById('searchInput').focus();
  });
  
// Nút DÁN – Tự dán nếu có thể, nếu không thì focus để dán thủ công (không hỏi)
document.getElementById('pasteBtn').addEventListener('click', async () => {
    const input = document.getElementById('searchInput');
    input.focus();
  
    // Chỉ thử dán tự động nếu API clipboard khả dụng
    if (navigator.clipboard && typeof navigator.clipboard.readText === 'function') {
      try {
        const text = await navigator.clipboard.readText();
        input.value = text;
        filterQuestions();
      } catch (err) {
  });
