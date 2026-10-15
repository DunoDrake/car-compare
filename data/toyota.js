(window.CAR_BRANDS = window.CAR_BRANDS || []).push({
  id: 'toyota',
  name: 'Toyota',
  country: 'Nhật Bản',
  color: '#eb0a1e',
  models: [
    {
      id: 'raize',
      name: 'Raize',
      type: 'SUV hạng A',
      common: {
        specs: {
          'Động cơ': '1.0L Turbo, 3 xi-lanh',
          'Công suất': '98 hp',
          'Mô-men xoắn': '140 Nm',
          'Hộp số': 'Vô cấp D-CVT',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.030 x 1.710 x 1.605 mm',
          'Chiều dài cơ sở': '2.525 mm',
          'Khoảng sáng gầm': '200 mm',
          'Dung tích bình xăng': '36 L',
          'Dung tích khoang hành lý': '369 L',
          'Phanh': 'Đĩa trước / tang trống sau'
        },
        interior: {
          'Chất liệu ghế': 'Nỉ',
          'Ghế lái': 'Chỉnh tay',
          'Màn hình giải trí': '9 inch',
          'Màn hình táp-lô': 'LCD kỹ thuật số 7 inch',
          'Điều hòa': 'Tự động',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '6 loa',
          'Cửa gió hàng ghế sau': false,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử VSC': true,
          'Hỗ trợ khởi hành ngang dốc HAC': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Sau',
          'Cảnh báo điểm mù': true,
          'Cảnh báo phương tiện cắt ngang khi lùi': true,
          'Cruise control': false,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        { name: '1.0 Turbo', price: 510, specs: { 'Mâm / lốp': '17 inch, 205/60R17' } }
      ]
    },
    {
      id: 'vios',
      name: 'Vios',
      type: 'Sedan hạng B',
      common: {
        specs: {
          'Động cơ': '1.5L Dual VVT-i, 4 xi-lanh',
          'Công suất': '107 hp @ 6.000 rpm',
          'Mô-men xoắn': '140 Nm @ 4.200 rpm',
          'Hộp số': 'Vô cấp CVT',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.425 x 1.730 x 1.475 mm',
          'Chiều dài cơ sở': '2.550 mm',
          'Khoảng sáng gầm': '133 mm',
          'Dung tích bình xăng': '42 L',
          'Phanh': 'Đĩa trước / tang trống sau'
        },
        interior: {
          'Chất liệu ghế': 'Nỉ',
          'Ghế lái': 'Chỉnh tay 6 hướng',
          'Màn hình giải trí': '9 inch',
          'Màn hình táp-lô': 'Đồng hồ analog + LCD 4.2 inch',
          'Điều hòa': 'Chỉnh tay',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '6 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '3 túi khí',
          'Cân bằng điện tử VSC': false,
          'Hỗ trợ khởi hành ngang dốc HAC': false,
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
          name: '1.5E MT', price: 458,
          specs: { 'Hộp số': 'Số sàn 5 cấp', 'Mâm / lốp': '15 inch, 185/60R15' },
          interior: { 'Màn hình giải trí': '7 inch' },
          features: { 'Kết nối Apple CarPlay / Android Auto': false }
        },
        {
          name: '1.5E CVT', price: 488,
          specs: { 'Mâm / lốp': '15 inch, 185/60R15' }
        },
        {
          name: '1.5G CVT', price: 545,
          specs: { 'Mâm / lốp': '16 inch, 195/50R16' },
          interior: { 'Chất liệu ghế': 'Da tổng hợp', 'Điều hòa': 'Tự động', 'Ghế lái': 'Chỉnh điện 6 hướng' },
          features: { 'Túi khí': '7 túi khí', 'Cân bằng điện tử VSC': true, 'Hỗ trợ khởi hành ngang dốc HAC': true, 'Cruise control': true, 'Chìa khóa thông minh & Start/Stop': true, 'Đèn pha': 'LED', 'Cảm biến đỗ xe': 'Trước & sau' }
        }
      ]
    },
    {
      id: 'corolla-cross',
      name: 'Corolla Cross',
      type: 'SUV hạng C',
      common: {
        specs: {
          'Động cơ': '1.8L Dual VVT-i, 4 xi-lanh',
          'Công suất': '138 hp @ 6.400 rpm',
          'Mô-men xoắn': '172 Nm @ 4.000 rpm',
          'Hộp số': 'Vô cấp CVT',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.460 x 1.825 x 1.620 mm',
          'Chiều dài cơ sở': '2.640 mm',
          'Khoảng sáng gầm': '161 mm',
          'Dung tích bình xăng': '47 L',
          'Phanh': 'Đĩa trước / đĩa sau',
          'Mâm / lốp': '18 inch, 225/50R18'
        },
        interior: {
          'Chất liệu ghế': 'Da',
          'Ghế lái': 'Chỉnh điện 8 hướng',
          'Màn hình giải trí': '10.1 inch',
          'Màn hình táp-lô': 'LCD 7 inch',
          'Điều hòa': 'Tự động 2 vùng',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '6 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '7 túi khí',
          'Cân bằng điện tử VSC': true,
          'Hỗ trợ khởi hành ngang dốc HAC': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng thông minh',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': true,
          'Cốp điện': true,
          'Toyota Safety Sense': true,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        { name: '1.8V', price: 820 },
        {
          name: '1.8 HEV', price: 865,
          specs: { 'Động cơ': '1.8L Hybrid (xăng + mô-tơ điện)', 'Công suất': '122 hp (tổng hợp)', 'Hộp số': 'e-CVT', 'Dung tích bình xăng': '36 L' },
          interior: { 'Cửa sổ trời': true }
        }
      ]
    },
    {
      id: 'innova-cross',
      name: 'Innova Cross',
      type: 'MPV 7 chỗ',
      common: {
        specs: {
          'Động cơ': '2.0L Dynamic Force, 4 xi-lanh',
          'Công suất': '172 hp @ 6.600 rpm',
          'Mô-men xoắn': '205 Nm @ 4.500 rpm',
          'Hộp số': 'Vô cấp CVT',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '7',
          'Kích thước D x R x C': '4.755 x 1.850 x 1.795 mm',
          'Chiều dài cơ sở': '2.850 mm',
          'Khoảng sáng gầm': '185 mm',
          'Dung tích bình xăng': '52 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da tổng hợp',
          'Ghế lái': 'Chỉnh điện 8 hướng',
          'Màn hình giải trí': '10.1 inch',
          'Màn hình táp-lô': 'LCD 7 inch',
          'Điều hòa': 'Tự động 2 vùng',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '6 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử VSC': true,
          'Hỗ trợ khởi hành ngang dốc HAC': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': true,
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': false,
          'Cốp điện': false,
          'Toyota Safety Sense': false,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: '2.0G', price: 730,
          specs: { 'Số chỗ ngồi': '8', 'Mâm / lốp': '17 inch, 215/60R17' },
          interior: { 'Ghế lái': 'Chỉnh tay 6 hướng', 'Chất liệu ghế': 'Nỉ' }
        },
        {
          name: '2.0V', price: 825,
          specs: { 'Mâm / lốp': '18 inch, 225/50R18' },
          interior: { 'Cửa sổ trời': 'Toàn cảnh' },
          features: { 'Toyota Safety Sense': true, 'Camera lùi': '360 độ', 'Cruise control': 'Thích ứng thông minh', 'Cốp điện': true }
        },
        {
          name: '2.0 HEV', price: 960,
          specs: { 'Động cơ': '2.0L Hybrid (xăng + mô-tơ điện)', 'Công suất': '183 hp (tổng hợp)', 'Hộp số': 'e-CVT', 'Mâm / lốp': '18 inch, 225/50R18' },
          interior: { 'Cửa sổ trời': 'Toàn cảnh', 'Hệ thống loa': '9 loa JBL' },
          features: { 'Toyota Safety Sense': true, 'Camera lùi': '360 độ', 'Cruise control': 'Thích ứng thông minh', 'Cốp điện': true, 'Sạc không dây': true }
        }
      ]
    },
    {
      id: 'fortuner',
      name: 'Fortuner',
      type: 'SUV 7 chỗ khung gầm rời',
      common: {
        specs: {
          'Động cơ': '2.7L 2TR-FE, 4 xi-lanh',
          'Công suất': '164 hp @ 5.200 rpm',
          'Mô-men xoắn': '245 Nm @ 4.000 rpm',
          'Hộp số': 'Tự động 6 cấp',
          'Dẫn động': '4x2 (cầu sau)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '7',
          'Kích thước D x R x C': '4.795 x 1.855 x 1.835 mm',
          'Chiều dài cơ sở': '2.745 mm',
          'Khoảng sáng gầm': '279 mm',
          'Dung tích bình xăng': '80 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da',
          'Ghế lái': 'Chỉnh điện 8 hướng',
          'Màn hình giải trí': '9 inch',
          'Màn hình táp-lô': 'Đồng hồ analog + LCD 4.2 inch',
          'Điều hòa': 'Tự động 2 vùng',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '6 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '7 túi khí',
          'Cân bằng điện tử VSC': true,
          'Hỗ trợ khởi hành ngang dốc HAC': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': true,
          'Cảm biến áp suất lốp TPMS': false,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': false,
          'Cốp điện': true,
          'Toyota Safety Sense': false,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: '2.7AT 4x2', price: 1155,
          specs: { 'Mâm / lốp': '18 inch, 265/60R18' }
        },
        {
          name: 'Legender 2.7AT 4x2', price: 1290,
          specs: { 'Mâm / lốp': '20 inch, 265/50R20' },
          interior: { 'Hệ thống loa': '11 loa JBL', 'Cửa sổ trời': true },
          features: { 'Toyota Safety Sense': true, 'Cruise control': 'Thích ứng thông minh', 'Sạc không dây': true }
        },
        {
          name: 'Legender 2.7AT 4x4', price: 1395,
          specs: { 'Dẫn động': '4x4 (2 cầu)', 'Mâm / lốp': '20 inch, 265/50R20' },
          interior: { 'Hệ thống loa': '11 loa JBL', 'Cửa sổ trời': true },
          features: { 'Toyota Safety Sense': true, 'Cruise control': 'Thích ứng thông minh', 'Sạc không dây': true }
        }
      ]
    }
  ]
});
