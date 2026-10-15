(window.CAR_BRANDS = window.CAR_BRANDS || []).push({
  id: 'mitsubishi',
  name: 'Mitsubishi',
  country: 'Nhật Bản',
  color: '#e60012',
  models: [
    {
      id: 'xpander',
      name: 'Xpander',
      type: 'MPV 7 chỗ',
      common: {
        specs: {
          'Động cơ': 'MIVEC 1.5L, 4 xi-lanh',
          'Công suất': '104 hp @ 6.000 rpm',
          'Mô-men xoắn': '141 Nm @ 4.000 rpm',
          'Hộp số': 'Tự động 4 cấp',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '7',
          'Kích thước D x R x C': '4.595 x 1.750 x 1.750 mm',
          'Chiều dài cơ sở': '2.775 mm',
          'Khoảng sáng gầm': '205 mm',
          'Dung tích bình xăng': '45 L',
          'Phanh': 'Đĩa trước / tang trống sau'
        },
        interior: {
          'Chất liệu ghế': 'Nỉ',
          'Ghế lái': 'Chỉnh tay 6 hướng',
          'Màn hình giải trí': '9 inch',
          'Màn hình táp-lô': 'Đồng hồ analog + LCD 4.2 inch',
          'Điều hòa': 'Chỉnh tay, cửa gió hàng 2',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '6 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '2 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HAC': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Sau',
          'Cruise control': false,
          'Cảm biến áp suất lốp TPMS': false,
          'Đèn pha': 'Halogen',
          'Chìa khóa thông minh & Start/Stop': false,
          'Sạc không dây': false,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'MT', price: 568,
          specs: { 'Hộp số': 'Số sàn 5 cấp', 'Mâm / lốp': '15 inch, 185/65R15' },
          interior: { 'Màn hình giải trí': '7 inch', 'Hệ thống loa': '4 loa' },
          features: { 'Camera lùi': false, 'Cảm biến đỗ xe': false, 'Kết nối Apple CarPlay / Android Auto': false }
        },
        {
          name: 'AT', price: 598,
          specs: { 'Mâm / lốp': '16 inch, 205/55R16' },
          interior: { 'Điều hòa': 'Chỉnh tay, cửa gió hàng 2' }
        },
        {
          name: 'AT Premium', price: 659,
          specs: { 'Mâm / lốp': '17 inch, 205/55R17' },
          interior: { 'Chất liệu ghế': 'Da tổng hợp', 'Điều hòa': 'Tự động', 'Hệ thống loa': '6 loa' },
          features: { 'Túi khí': '4 túi khí', 'Cruise control': true, 'Đèn pha': 'LED', 'Chìa khóa thông minh & Start/Stop': true, 'Camera lùi': '360 độ', 'Cảm biến đỗ xe': 'Trước & sau', 'Cảm biến áp suất lốp TPMS': true }
        }
      ]
    },
    {
      id: 'xpander-cross',
      name: 'Xpander Cross',
      type: 'MPV lai SUV 7 chỗ',
      common: {
        specs: {
          'Động cơ': 'MIVEC 1.5L, 4 xi-lanh',
          'Công suất': '104 hp @ 6.000 rpm',
          'Mô-men xoắn': '141 Nm @ 4.000 rpm',
          'Hộp số': 'Tự động 4 cấp',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '7',
          'Kích thước D x R x C': '4.500 x 1.800 x 1.750 mm',
          'Chiều dài cơ sở': '2.775 mm',
          'Khoảng sáng gầm': '225 mm',
          'Dung tích bình xăng': '45 L',
          'Phanh': 'Đĩa trước / tang trống sau',
          'Mâm / lốp': '17 inch, 205/55R17'
        },
        interior: {
          'Chất liệu ghế': 'Da tổng hợp',
          'Ghế lái': 'Chỉnh tay 6 hướng',
          'Màn hình giải trí': '9 inch',
          'Màn hình táp-lô': 'Đồng hồ analog + LCD 4.2 inch',
          'Điều hòa': 'Tự động, cửa gió hàng 2',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '6 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '4 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HAC': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': true,
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': false,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        { name: 'Cross', price: 699 }
      ]
    },
    {
      id: 'xforce',
      name: 'Xforce',
      type: 'SUV hạng B',
      common: {
        specs: {
          'Động cơ': 'MIVEC 1.5L, 4 xi-lanh',
          'Công suất': '105 hp @ 6.000 rpm',
          'Mô-men xoắn': '141 Nm @ 4.000 rpm',
          'Hộp số': 'Vô cấp CVT',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.390 x 1.810 x 1.660 mm',
          'Chiều dài cơ sở': '2.650 mm',
          'Khoảng sáng gầm': '222 mm',
          'Dung tích bình xăng': '42 L',
          'Phanh': 'Đĩa trước / tang trống sau'
        },
        interior: {
          'Chất liệu ghế': 'Da tổng hợp',
          'Ghế lái': 'Chỉnh tay 6 hướng',
          'Màn hình giải trí': '12.3 inch',
          'Màn hình táp-lô': 'LCD 8 inch',
          'Điều hòa': 'Tự động',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '4 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '4 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HAC': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Sau',
          'Cruise control': true,
          'Cảm biến áp suất lốp TPMS': false,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': false,
          'Chế độ lái': 'Normal / Wet / Gravel / Mud',
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'GLX', price: 605,
          specs: { 'Mâm / lốp': '17 inch, 225/60R17' },
          interior: { 'Chất liệu ghế': 'Nỉ', 'Màn hình giải trí': '8 inch', 'Màn hình táp-lô': 'Đồng hồ analog + LCD 4.2 inch', 'Điều hòa': 'Chỉnh tay' },
          features: { 'Túi khí': '2 túi khí', 'Cruise control': false, 'Đèn pha': 'Halogen', 'Chìa khóa thông minh & Start/Stop': false }
        },
        {
          name: 'Luxury', price: 665,
          specs: { 'Mâm / lốp': '17 inch, 225/60R17' },
          interior: { 'Màn hình giải trí': '12.3 inch', 'Màn hình táp-lô': 'LCD 8 inch' }
        },
        {
          name: 'Ultimate', price: 720,
          specs: { 'Mâm / lốp': '18 inch, 225/50R18' },
          interior: { 'Hệ thống loa': '8 loa Yamaha Dynamic Sound', 'Màn hình táp-lô': 'LCD 8 inch', 'Chất liệu ghế': 'Da tổng hợp' },
          features: { 'Túi khí': '6 túi khí', 'Camera lùi': '360 độ', 'Cảm biến đỗ xe': 'Trước & sau', 'Cảm biến áp suất lốp TPMS': true, 'Cruise control': 'Thích ứng thông minh', 'Cảnh báo va chạm phía trước FCM': true, 'Cảnh báo điểm mù BSW': true }
        }
      ]
    },
    {
      id: 'destinator',
      name: 'Destinator',
      type: 'SUV 7 chỗ',
      common: {
        specs: {
          'Động cơ': '1.5L Turbo, 4 xi-lanh',
          'Công suất': '163 hp @ 5.500 rpm',
          'Mô-men xoắn': '250 Nm @ 1.700-4.500 rpm',
          'Hộp số': 'Vô cấp CVT',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '7',
          'Kích thước D x R x C': '4.680 x 1.840 x 1.780 mm',
          'Chiều dài cơ sở': '2.815 mm',
          'Khoảng sáng gầm': '214 mm',
          'Dung tích bình xăng': '43 L',
          'Phanh': 'Đĩa trước / đĩa sau',
          'Mâm / lốp': '18 inch, 225/55R18'
        },
        interior: {
          'Chất liệu ghế': 'Da tổng hợp',
          'Ghế lái': 'Chỉnh điện 8 hướng',
          'Màn hình giải trí': '12.3 inch',
          'Màn hình táp-lô': 'LCD 8 inch',
          'Điều hòa': 'Tự động 2 vùng, cửa gió hàng 2 & 3',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '4 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HAC': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng thông minh',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': false,
          'Chế độ lái': 'Normal / Wet / Gravel / Mud',
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'Premium', price: 780,
          interior: { 'Chất liệu ghế': 'Da tổng hợp', 'Hệ thống loa': '4 loa' },
          features: { 'Cảnh báo va chạm phía trước FCM': false, 'Cảnh báo điểm mù BSW': false }
        },
        {
          name: 'Ultimate', price: 855,
          interior: { 'Hệ thống loa': '8 loa Yamaha Dynamic Sound', 'Cửa sổ trời': true, 'Sạc không dây': true },
          features: { 'Sạc không dây': true, 'Cảnh báo va chạm phía trước FCM': true, 'Cảnh báo điểm mù BSW': true, 'Cảnh báo phương tiện cắt ngang RCTA': true }
        }
      ]
    }
  ]
});
