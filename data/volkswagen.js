(window.CAR_BRANDS = window.CAR_BRANDS || []).push({
  id: 'volkswagen',
  name: 'Volkswagen',
  country: 'Đức',
  color: '#001e50',
  models: [
    {
      id: 'virtus',
      name: 'Virtus',
      type: 'Sedan hạng B',
      common: {
        specs: {
          'Động cơ': '1.0L TSI, 3 xi-lanh tăng áp',
          'Công suất': '115 hp @ 5.000-5.500 rpm',
          'Mô-men xoắn': '178 Nm @ 1.750-4.000 rpm',
          'Hộp số': 'Tự động 6 cấp',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.561 x 1.752 x 1.472 mm',
          'Chiều dài cơ sở': '2.651 mm',
          'Khoảng sáng gầm': '145 mm',
          'Dung tích bình xăng': '45 L',
          'Phanh': 'Đĩa trước / tang trống sau'
        },
        interior: {
          'Chất liệu ghế': 'Da tổng hợp',
          'Ghế lái': 'Chỉnh tay 6 hướng',
          'Màn hình giải trí': '10 inch',
          'Màn hình táp-lô': 'Digital Cockpit 8 inch',
          'Điều hòa': 'Tự động',
          'Vô lăng': 'Bọc da, đa chức năng',
          'Hệ thống loa': '6 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Sau',
          'Cruise control': true,
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': false,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'Elegance', price: 949,
          specs: { 'Mâm / lốp': '16 inch, 195/55R16' },
          interior: { 'Chất liệu ghế': 'Nỉ', 'Màn hình giải trí': '8 inch', 'Màn hình táp-lô': 'Đồng hồ analog', 'Hệ thống loa': '4 loa' },
          features: { 'Túi khí': '2 túi khí', 'Cruise control': false, 'Chìa khóa thông minh & Start/Stop': false, 'Đèn pha': 'Halogen' }
        },
        {
          name: 'Luxury', price: 1069,
          specs: { 'Mâm / lốp': '16 inch, 205/55R16' },
          interior: { 'Ghế lái': 'Chỉnh điện 8 hướng' }
        }
      ]
    },
    {
      id: 'tiguan',
      name: 'Tiguan',
      type: 'SUV hạng C',
      common: {
        specs: {
          'Động cơ': '2.0L TSI, 4 xi-lanh tăng áp',
          'Công suất': '184 hp @ 4.500-6.000 rpm',
          'Mô-men xoắn': '320 Nm @ 1.500-4.400 rpm',
          'Hộp số': 'Ly hợp kép DSG 7 cấp',
          'Dẫn động': '4Motion (4 bánh toàn thời gian)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '7',
          'Kích thước D x R x C': '4.734 x 1.839 x 1.673 mm',
          'Chiều dài cơ sở': '2.791 mm',
          'Khoảng sáng gầm': '181 mm',
          'Dung tích bình xăng': '60 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da Vienna',
          'Ghế lái': 'Chỉnh điện 14 hướng, nhớ vị trí',
          'Màn hình giải trí': '9.2 inch',
          'Màn hình táp-lô': 'Digital Cockpit Pro 10.25 inch',
          'Điều hòa': 'Tự động 3 vùng',
          'Vô lăng': 'Bọc da, đa chức năng',
          'Hệ thống loa': '8 loa',
          'Đèn nội thất': 'Ambient 30 màu',
          'Cửa sổ trời': 'Toàn cảnh'
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng thông minh ACC',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED Matrix',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': true,
          'Cốp điện': true,
          'Kết nối Apple CarPlay / Android Auto': 'Không dây'
        }
      },
      variants: [
        {
          name: 'Facelift', price: 1599,
          specs: { 'Mâm / lốp': '18 inch, 235/55R18' },
          interior: { 'Chất liệu ghế': 'Da tổng hợp', 'Ghế lái': 'Chỉnh điện 8 hướng', 'Cửa sổ trời': false, 'Hệ thống loa': '6 loa' },
          features: { 'Camera lùi': true, 'Đèn pha': 'LED', 'Sạc không dây': false }
        },
        {
          name: 'Platinum', price: 1688,
          specs: { 'Mâm / lốp': '19 inch, 235/50R19' }
        }
      ]
    },
    {
      id: 'teramont',
      name: 'Teramont',
      type: 'SUV 7 chỗ cỡ lớn',
      common: {
        specs: {
          'Động cơ': '2.0L TSI, 4 xi-lanh tăng áp',
          'Công suất': '220 hp @ 4.500-6.200 rpm',
          'Mô-men xoắn': '350 Nm @ 1.600-4.400 rpm',
          'Hộp số': 'Tự động 8 cấp',
          'Dẫn động': '4Motion (4 bánh toàn thời gian)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '7',
          'Kích thước D x R x C': '5.037 x 1.989 x 1.768 mm',
          'Chiều dài cơ sở': '2.980 mm',
          'Khoảng sáng gầm': '203 mm',
          'Dung tích bình xăng': '70 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da Vienna',
          'Ghế lái': 'Chỉnh điện 12 hướng, nhớ vị trí',
          'Màn hình giải trí': '9.2 inch',
          'Màn hình táp-lô': 'Digital Cockpit Pro 12.3 inch',
          'Điều hòa': 'Tự động 3 vùng',
          'Vô lăng': 'Bọc da, đa chức năng, sưởi',
          'Hệ thống loa': '8 loa',
          'Đèn nội thất': 'Ambient 30 màu',
          'Cửa sổ trời': 'Toàn cảnh'
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng thông minh ACC',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED Matrix',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': true,
          'Cốp điện': true,
          'Kết nối Apple CarPlay / Android Auto': 'Không dây'
        }
      },
      variants: [
        {
          name: 'X Base', price: 1998,
          specs: { 'Mâm / lốp': '20 inch, 255/50R20' },
          interior: { 'Hệ thống loa': '8 loa' }
        },
        {
          name: 'X Limited', price: 2138,
          specs: { 'Mâm / lốp': '20 inch, 255/50R20' },
          interior: { 'Hệ thống loa': '8 loa' }
        },
        {
          name: 'X Platinum', price: 2168,
          specs: { 'Mâm / lốp': '20 inch, 255/50R20' },
          interior: { 'Hệ thống loa': '12 loa Harman Kardon' },
          features: { 'Màn hình HUD': true }
        },
        {
          name: 'President', price: 2399,
          specs: { 'Mâm / lốp': '20 inch, 255/50R20' },
          interior: { 'Hệ thống loa': '12 loa Harman Kardon', 'Chất liệu ghế': 'Da Nappa' },
          features: { 'Màn hình HUD': true }
        }
      ]
    }
  ]
});
