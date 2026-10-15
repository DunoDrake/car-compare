/*
 * Công thức giá lăn bánh (ước tính), đối chiếu với bảng tính của oto360.net (tháng 10/2026):
 *   lăn bánh = giá niêm yết
 *            + giá niêm yết × tỷ lệ trước bạ theo nơi đăng ký
 *            + lệ phí biển số (theo nơi đăng ký)
 *            + phí kiểm định + phí bảo trì đường bộ (1 năm) + bảo hiểm TNDS bắt buộc (1 năm)
 *            - hỗ trợ trước bạ của hãng / đại lý (tùy chọn, % trên tiền trước bạ)
 * Xe điện: trước bạ 0%. Bán tải: phí bảo trì đường bộ và TNDS theo loại xe bán tải.
 * Chưa gồm bảo hiểm vật chất, phụ kiện, phí dịch vụ đại lý, khuyến mãi tiền mặt.
 */
window.CAR_ONROAD = {
  updated: '10/2026',
  source: 'oto360.net',
  fees: {
    inspection: 100000,
    roadMaintenance: 1560000,
    roadMaintenancePickup: 2160000,
    insurance: { seats5: 530700, seats7: 943400, pickup: 480700 },
    plateBigCity: 14000000,
    plateOther: 140000
  },
  // [tên nơi đăng ký, tỷ lệ trước bạ %, true nếu lệ phí biển số mức cao (Hà Nội, TP.HCM)]
  regions: [
    ['TP HCM', 10, true], ['Hà Nội', 12, true], ['Đà Nẵng', 10], ['TP HCM (Bình Dương cũ)', 10, true],
    ['Đồng Nai', 10], ['Cần Thơ', 10], ['Hải Phòng', 12], ['Nghệ An', 10], ['Thái Nguyên', 10], ['Quảng Ninh', 12],
    ['Phú Thọ (Vĩnh Phúc cũ)', 10], ['TP HCM (Bà Rịa Vũng Tàu cũ)', 10, true], ['Khánh Hòa', 10], ['An Giang', 10],
    ['Bắc Ninh (Bắc Giang cũ)', 10], ['Thái Nguyên (Bắc Kạn cũ)', 10], ['Cà Mau (Bạc Liêu cũ)', 10], ['Bắc Ninh', 10],
    ['Vĩnh Long (Bến Tre cũ)', 10], ['Đồng Nai (Bình Phước cũ)', 10], ['Lâm Đồng (Bình Thuận cũ)', 10],
    ['Gia Lai (Bình Định cũ)', 10], ['Cà Mau', 10], ['Cao Bằng', 12], ['Gia Lai', 10], ['Tuyên Quang (Hà Giang cũ)', 10],
    ['Ninh Bình (Hà Nam cũ)', 10], ['Hà Tĩnh', 11], ['Hải Phòng (Hải Dương cũ)', 10], ['Cần Thơ (Hậu Giang cũ)', 10],
    ['Phú Thọ (Hòa Bình cũ)', 10], ['Hưng Yên', 10], ['An Giang (Kiên Giang cũ)', 10], ['Quảng Ngãi (Kon Tum cũ)', 10],
    ['Lai Châu', 10], ['Lâm Đồng', 10], ['Lạng Sơn', 12], ['Lào Cai', 12], ['Tây Ninh (Long An cũ)', 10],
    ['Ninh Bình (Nam Định cũ)', 10], ['Ninh Bình', 10], ['Khánh Hòa (Ninh Thuận cũ)', 10], ['Phú Thọ', 10],
    ['Đắk Lắk (Phú Yên cũ)', 10], ['Quảng Trị (Quảng Bình cũ)', 10], ['Đà Nẵng (Quảng Nam cũ)', 10], ['Quảng Ngãi', 10],
    ['Quảng Trị', 10], ['Cần Thơ (Sóc Trăng cũ)', 10], ['Sơn La', 12], ['Tây Ninh', 10], ['Hưng Yên (Thái Bình cũ)', 10],
    ['Thanh Hóa', 10], ['Huế', 10], ['Đồng Tháp (Tiền Giang cũ)', 10], ['Vĩnh Long (Trà Vinh cũ)', 10], ['Tuyên Quang', 10],
    ['Vĩnh Long', 10], ['Lào Cai (Yên Bái cũ)', 10], ['Đắk Lắk', 10], ['Lâm Đồng (Đắk Nông cũ)', 10], ['Điện Biên', 10],
    ['Đồng Tháp', 10]
  ]
};
