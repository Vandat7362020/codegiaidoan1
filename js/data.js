const diemden_arr = [
    { id: 1, tendiemden: "Vịnh Hạ Long", "ghichu": "Vịnh Hạ Long được Unesco nhiều lần công nhận là Di sản thiên nhiên của Thế giới với hàng nghìn hòn đảo được làm nên bởi tạo hoá kỳ vĩ và sống động. Vịnh Hạ Long có phong cảnh tuyệt đẹp nên nơi đây là một điểm du lịch rất hấp dẫn với du khách trong nước và quốc tế." },
    { id: 2, tendiemden: "Vịnh Lan Hạ", "ghichu": "Vịnh Lan Hạ là một trong những điểm du lịch đẹp hấp dẫn ở đảo cát bà, và đang trở thành một điểm du lịch hấp dẫn của vùng đông bắc bởi vẻ đẹp nguyên sơ, kỳ thú của thiên nhiên và ngày càng thu hút đông khách du lịch trong nước, ngoài nước. Đến với Vịnh Lan Hạ du khách sẽ được hòa mình vào cũng thiên nhiên,với một bầu không khí đầy mát mẻ và trong lành." },
    { id: 3, tendiemden: "Đảo Cát Bà", "ghichu": "Quần đảo Cát Bà gồm 367 đảo nằm phía nam vịnh Hạ Long. Trong đó, đảo Cát Bà là điểm đến thu hút du khách. Nơi đây mang cảnh sắc đặc trưng của vùng vịnh Hạ Long với những dãy núi đá vôi và vùng biển lặng xanh ngắt." },
];
let nv_arr = [
    { id: 1, ten: "Lê Hoàng Hoa", phone: "0918123456", phai: "Nữ", ghichu: "Dễ thương" },
    { id: 2, ten: "Nguyễn Trúc Quỳnh", phone: "0914123451", phai: true, ghichu: "Dễ mến" },
    { id: 3, ten: "Nguyễn Hoàng Thu", phone: "0938123461", phai: "Nam", ghichu: "Học giỏi" },
    { id: 4, ten: "Phạm Ngọc Độ", phone: "0112345632", phai: false, ghichu: "Hát hay" },
    { id: 5, ten: "Đào Hải Công", phone: "042125690", phai: "Nam", ghichu: "Nhanh nhẹn" },
    { id: 6, ten: "Trần Thanh Sơn", phone: "052169036", phai: "Nam", ghichu: "Khỏe khắn" }
];
const duthuyen_arr = [
    { id: 1, ten: "Du Thuyền Ambassador", diachi: "Du thuyền Ambassador được thiết kế tinh tế đặc biệt với 46 cabin giống như một khách sạn sang trọng đẳng cấp giữa lòng vịnh Hạ Long chắc chắn sẽ là sự lựa chọn hoàn hảo nhất để khám phá vẻ đẹp của di sản kỳ quan thiên nhiên thế giới vịnh Hạ.", "hinh": "images/ambassador1.jpg" },
    { id: 2, ten: "Du Thuyền Capella", diachi: "Bắt đầu hành trình đầu tiên vào tháng 8 năm 2020, Du thuyền Capella mang đến trải nghiệm kỳ nghỉ sang trọng, đẳng cấp hoàn toàn mới trên Vịnh Lan Hạ. Du thuyền là sự giao hòa của thiết kế du thuyền hiện đại và phong cách kiến trúc Đông Dương đặc sắc.", "hinh": "images/capellla.jpg" },
    { id: 3, ten: "Du Thuyền Catherine", diachi: "Du thuyền Catherine sở hữu một không gian sang trọng, tiện nghi với phong cách Đông Dương ấn tượng sẽ được khai trương vào tháng 09/2023. Catherine có sức chứa khách ngủ đêm lên tới 117 hành khách với chiều dài lên tới 90m và rộng 15m.", "hinh": "images/catherine.jpg" },
    { id: 4, ten: "Du Thuyền Grand Pioneers", diachi: "Được thiết kế theo phong cách và tiêu chuẩn của siêu du thuyền quốc tế, du thuyền Essence Grand Superyacht (có tên đầy đủ là Essence Grand Ha Long Bay SuperYacht) mang hơi thở của một resort đẳng cấp 6 sao giữa lòng di sản,diện tích các hạng phòng từ 45m2 và đều có ban công riêng đem lại không gian riêng tư và dễ chịu, để bạn có thể ngắm nhìn thiên nhiên bất cứ khi nào.", "hinh": "images/grand.jpg" },
    { id: 5, ten: "Du Thuyền Stellar of the Seas", diachi: "Du thuyền Stellar of the Seas là một trong những du thuyền nổi tiếng nhất vịnh Hạ Long. Du thuyền được thiết kế với 22 cabin, bể bơi, cùng sân golf mini. Các phòng có trang thiết bị sang trọng rộng rãi với đầy đủ tiện nghi và view rộng toàn cảnh vịnh rất đẹp.", "hinh": "images/stellar.jpg" },
    { id: 6, ten: "Du Thuyền Heritage Bình Chuẩn Cát Bà", diachi: "Du thuyền Heritage Cruises Bình Chuẩn có kiến trúc độc đáo, thiết kế mang đậm nét truyền thống và lịch sử. Với 20 phòng rộng rãi và tất cả các cabin có bồn tắm cạnh cửa kính lớn,có ban công với tầm nhìn toàn cảnh vịnh Lan Hạ. Trên du thuyền nhiều tiện nghi nổi bật mà du thuyền thường không có như phòng tranh, thư viện, gian hàng bán đồ lưu niệm, quầy bar liền kề hồ bơi.", "hinh": "images/heritage.jpg" }
];
export { nv_arr, duthuyen_arr, diemden_arr };
