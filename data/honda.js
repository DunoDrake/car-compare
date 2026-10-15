(window.CAR_BRANDS = window.CAR_BRANDS || []).push({
  id: 'honda',
  name: 'Honda',
  country: 'Nhật Bản',
  color: '#cc0000',
  models: [
    {
      id: 'city',
      name: 'City',
      type: 'Sedan hạng B',
      common: {
        specs: {
          'Động cơ': '1.5L DOHC i-VTEC, 4 xi-lanh',
          'Công suất': '119 hp @ 6.600 rpm',
          'Mô-men xoắn': '145 Nm @ 4.300 rpm',
          'Hộp số': 'Vô cấp CVT',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.589 x 1.748 x 1.467 mm',
          'Chiều dài cơ sở': '2.589 mm',
          'Khoảng sáng gầm': '134 mm',
          'Dung tích bình xăng': '40 L',
          'Phanh': 'Đĩa trước / tang trống sau'
        },
        interior: {
          'Chất liệu ghế': 'Nỉ',
          'Ghế lái': 'Chỉnh tay 6 hướng',
          'Màn hình giải trí': '8 inch',
          'Màn hình táp-lô': 'Đồng hồ analog + LCD 4.2 inch',
          'Điều hòa': 'Tự động',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '8 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '4 túi khí',
          'Cân bằng điện tử VSA': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': false,
          'Cruise control': true,
          'Cảm biến áp suất lốp TPMS': false,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': false,
          'Honda Sensing': false,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'L', price: 539,
          specs: { 'Mâm / lốp': '16 inch, 185/55R16' },
          interior: { 'Chất liệu ghế': 'Da', 'Hệ thống loa': '8 loa' },
          features: { 'Honda Sensing': true, 'Túi khí': '6 túi khí', 'Cảnh báo va chạm phía trước CMBS': true, 'Giữ làn đường LKAS': true, 'Ga tự động thích ứng ACC': true }
        },
        {
          name: 'RS', price: 569,
          specs: { 'Mâm / lốp': '16 inch, 185/55R16, thiết kế thể thao' },
          interior: { 'Chất liệu ghế': 'Da, phối chỉ đỏ', 'Hệ thống loa': '8 loa', 'Vô lăng': 'Bọc da, lẫy chuyển số' },
          features: { 'Honda Sensing': true, 'Túi khí': '6 túi khí', 'Cảnh báo va chạm phía trước CMBS': true, 'Giữ làn đường LKAS': true, 'Ga tự động thích ứng ACC': true, 'Cảm biến đỗ xe': 'Trước & sau' }
        }
      ]
    },
    {
      id: 'hrv',
      name: 'HR-V',
      type: 'SUV hạng B',
      common: {
        specs: {
          'Động cơ': '1.5L DOHC i-VTEC, 4 xi-lanh',
          'Công suất': '119 hp @ 6.600 rpm',
          'Mô-men xoắn': '145 Nm @ 4.300 rpm',
          'Hộp số': 'Vô cấp CVT',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.385 x 1.790 x 1.590 mm',
          'Chiều dài cơ sở': '2.610 mm',
          'Khoảng sáng gầm': '191 mm',
          'Dung tích bình xăng': '40 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da',
          'Ghế lái': 'Chỉnh tay 6 hướng',
          'Màn hình giải trí': '8 inch',
          'Màn hình táp-lô': 'Đồng hồ analog + LCD 4.2 inch',
          'Điều hòa': 'Tự động',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '6 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử VSA': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': false,
          'Cruise control': true,
          'Cảm biến áp suất lốp TPMS': false,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': false,
          'Honda Sensing': false,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'G', price: 669,
          specs: { 'Mâm / lốp': '17 inch, 215/60R17' },
          interior: { 'Chất liệu ghế': 'Nỉ', 'Hệ thống loa': '4 loa' },
          features: { 'Túi khí': '2 túi khí' }
        },
        {
          name: 'L', price: 750,
          specs: { 'Mâm / lốp': '17 inch, 215/55R17' },
          interior: { 'Hệ thống loa': '6 loa', 'Cửa sổ trời': true },
          features: { 'Honda Sensing': true, 'Cảnh báo va chạm phía trước CMBS': true, 'Giữ làn đường LKAS': true, 'Ga tự động thích ứng ACC': true, 'Cảm biến đỗ xe': 'Trước & sau' }
        },
        {
          name: 'e:HEV RS', price: 835,
          specs: { 'Động cơ': '1.5L Atkinson + mô-tơ điện (hybrid e:HEV)', 'Công suất': '131 hp (tổng hợp)', 'Mô-men xoắn': '253 Nm (mô-tơ điện)', 'Hộp số': 'e-CVT (truyền động trực tiếp)', 'Mâm / lốp': '18 inch, 225/50R18' },
          interior: { 'Chất liệu ghế': 'Da, phối chỉ đỏ', 'Hệ thống loa': '6 loa', 'Cửa sổ trời': true },
          features: { 'Honda Sensing': true, 'Cảnh báo va chạm phía trước CMBS': true, 'Giữ làn đường LKAS': true, 'Ga tự động thích ứng ACC': true, 'Cảm biến đỗ xe': 'Trước & sau', 'Cảm biến áp suất lốp TPMS': true, 'Sạc không dây': true }
        }
      ]
    },
    {
      id: 'crv',
      name: 'CR-V',
      type: 'SUV hạng C',
      common: {
        specs: {
          'Động cơ': '1.5L VTEC Turbo, 4 xi-lanh',
          'Công suất': '188 hp @ 6.000 rpm',
          'Mô-men xoắn': '240 Nm @ 1.700-5.000 rpm',
          'Hộp số': 'Vô cấp CVT',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '7',
          'Kích thước D x R x C': '4.691 x 1.866 x 1.681 mm',
          'Chiều dài cơ sở': '2.701 mm',
          'Khoảng sáng gầm': '198 mm',
          'Dung tích bình xăng': '57 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da',
          'Ghế lái': 'Chỉnh điện 8 hướng',
          'Màn hình giải trí': '9 inch',
          'Màn hình táp-lô': 'LCD 10.2 inch',
          'Điều hòa': 'Tự động 2 vùng',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '8 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': true
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử VSA': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera lùi': 'Đa góc nhìn',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng thông minh ACC',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': true,
          'Cốp điện': true,
          'Honda Sensing': true,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'G', price: 1039,
          specs: { 'Mâm / lốp': '18 inch, 235/60R18' },
          interior: { 'Chất liệu ghế': 'Da', 'Ghế lái': 'Chỉnh điện 8 hướng', 'Hệ thống loa': '8 loa', 'Cửa sổ trời': false },
          features: { 'Sạc không dây': false, 'Cốp điện': false }
        },
        {
          name: 'L', price: 1099,
          specs: { 'Mâm / lốp': '18 inch, 235/60R18' },
          interior: { 'Cửa sổ trời': true }
        },
        {
          name: 'L AWD', price: 1250,
          specs: { 'Dẫn động': 'AWD (4 bánh toàn thời gian)', 'Mâm / lốp': '18 inch, 235/60R18' },
          interior: { 'Cửa sổ trời': true }
        },
        {
          name: 'e:HEV L', price: 1170,
          specs: { 'Động cơ': '2.0L Atkinson + 2 mô-tơ điện (hybrid)', 'Công suất': '204 hp (tổng hợp)', 'Mô-men xoắn': '335 Nm (mô-tơ điện)', 'Hộp số': 'e-CVT (truyền động trực tiếp)', 'Số chỗ ngồi': '5', 'Mâm / lốp': '18 inch, 235/60R18' },
          interior: { 'Cửa sổ trời': true }
        },
        {
          name: 'e:HEV RS', price: 1250,
          specs: { 'Động cơ': '2.0L Atkinson + 2 mô-tơ điện (hybrid)', 'Công suất': '204 hp (tổng hợp)', 'Mô-men xoắn': '335 Nm (mô-tơ điện)', 'Hộp số': 'e-CVT (truyền động trực tiếp)', 'Số chỗ ngồi': '5', 'Mâm / lốp': '18 inch, 235/60R18, thiết kế RS' },
          interior: { 'Chất liệu ghế': 'Da, phối chỉ đỏ', 'Hệ thống loa': '12 loa Bose', 'Cửa sổ trời': true },
          features: { 'Camera lùi': 'Đa góc nhìn' }
        }
      ]
    }
  ]
});
