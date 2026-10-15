(window.CAR_BRANDS = window.CAR_BRANDS || []).push({
  id: 'ford',
  name: 'Ford',
  country: 'Mỹ',
  color: '#003478',
  models: [
    {
      id: 'ranger',
      name: 'Ranger',
      type: 'Bán tải',
      common: {
        specs: {
          'Động cơ': '2.0L Turbo diesel, 4 xi-lanh',
          'Công suất': '170 hp @ 3.500 rpm',
          'Mô-men xoắn': '405 Nm @ 1.750-2.500 rpm',
          'Hộp số': 'Tự động 6 cấp',
          'Dẫn động': '4x2 (cầu sau)',
          'Nhiên liệu': 'Dầu diesel',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '5.370 x 1.918 x 1.884 mm',
          'Chiều dài cơ sở': '3.270 mm',
          'Khoảng sáng gầm': '235 mm',
          'Dung tích bình xăng': '80 L',
          'Phanh': 'Đĩa trước / tang trống sau'
        },
        interior: {
          'Chất liệu ghế': 'Nỉ',
          'Ghế lái': 'Chỉnh tay 6 hướng',
          'Màn hình giải trí': 'SYNC 4A 10.1 inch',
          'Màn hình táp-lô': 'LCD 8 inch',
          'Điều hòa': 'Tự động',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '6 loa',
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HLA': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Sau',
          'Cruise control': true,
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': false,
          'Chế độ lái': 'Normal / Eco / Tow-Haul / Slippery',
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'XLS 2.0 4x2 AT', price: 726,
          specs: { 'Mâm / lốp': '16 inch, 255/70R16' },
          features: { 'Đèn pha': 'Halogen', 'Chìa khóa thông minh & Start/Stop': false, 'Cảm biến đỗ xe': false }
        },
        {
          name: 'XLS 2.0 4x4 AT', price: 795,
          specs: { 'Dẫn động': '4x4 (2 cầu, gài cầu điện tử)', 'Mâm / lốp': '17 inch, 255/65R17' },
          features: { 'Đèn pha': 'Halogen', 'Chìa khóa thông minh & Start/Stop': false, 'Cảm biến đỗ xe': false }
        },
        {
          name: 'Wildtrak 2.0 Bi-Turbo 4x4 AT', price: 973,
          specs: { 'Động cơ': '2.0L Bi-Turbo diesel, 4 xi-lanh', 'Công suất': '210 hp @ 3.750 rpm', 'Mô-men xoắn': '500 Nm @ 1.750-2.000 rpm', 'Hộp số': 'Tự động 10 cấp', 'Dẫn động': '4x4 (2 cầu, gài cầu điện tử)', 'Mâm / lốp': '18 inch, 265/60R18' },
          interior: { 'Chất liệu ghế': 'Da, chỉ khâu cam', 'Ghế lái': 'Chỉnh điện 8 hướng', 'Hệ thống loa': '8 loa B&O' },
          features: { 'Camera lùi': '360 độ', 'Cảm biến đỗ xe': 'Trước & sau', 'Cruise control': 'Thích ứng thông minh', 'Sạc không dây': true, 'Chế độ lái': 'Normal / Eco / Tow-Haul / Slippery / Sand / Mud-Rut' }
        },
        {
          name: 'Wildtrak 3.0 V6 4x4 AT', price: 1093,
          specs: { 'Động cơ': '3.0L V6 Turbo diesel', 'Công suất': '240 hp @ 3.250 rpm', 'Mô-men xoắn': '600 Nm @ 1.750-2.250 rpm', 'Hộp số': 'Tự động 10 cấp', 'Dẫn động': '4x4 (2 cầu, gài cầu điện tử)', 'Mâm / lốp': '18 inch, 265/60R18' },
          interior: { 'Chất liệu ghế': 'Da, chỉ khâu cam', 'Ghế lái': 'Chỉnh điện 8 hướng', 'Hệ thống loa': '8 loa B&O' },
          features: { 'Camera lùi': '360 độ', 'Cảm biến đỗ xe': 'Trước & sau', 'Cruise control': 'Thích ứng thông minh', 'Sạc không dây': true, 'Chế độ lái': 'Normal / Eco / Tow-Haul / Slippery / Sand / Mud-Rut' }
        },
        {
          name: 'Raptor 3.0 V6 EcoBoost', price: 1299,
          specs: { 'Động cơ': '3.0L EcoBoost V6 tăng áp kép', 'Công suất': '392 hp @ 5.650 rpm', 'Mô-men xoắn': '583 Nm @ 3.500 rpm', 'Hộp số': 'Tự động 10 cấp', 'Nhiên liệu': 'Xăng', 'Dẫn động': '4x4 (2 cầu, gài cầu điện tử)', 'Mâm / lốp': '17 inch, 285/70R17 (địa hình)', 'Kích thước D x R x C': '5.381 x 2.028 x 1.922 mm', 'Khoảng sáng gầm': '272 mm' },
          interior: { 'Chất liệu ghế': 'Da, ghế thể thao Recaro', 'Ghế lái': 'Chỉnh điện 8 hướng', 'Hệ thống loa': '10 loa B&O', 'Màn hình táp-lô': 'LCD 12.4 inch', 'Màn hình giải trí': 'SYNC 4A 12 inch' },
          features: { 'Camera lùi': '360 độ', 'Cảm biến đỗ xe': 'Trước & sau', 'Cruise control': 'Thích ứng thông minh', 'Sạc không dây': true, 'Chế độ lái': 'Normal / Sport / Baja / Rock Crawl / Mud-Sand / Slippery', 'Hệ thống treo': 'Fox Racing bypass' }
        }
      ]
    },
    {
      id: 'everest',
      name: 'Everest',
      type: 'SUV 7 chỗ khung gầm rời',
      common: {
        specs: {
          'Động cơ': '2.0L Turbo diesel, 4 xi-lanh',
          'Công suất': '170 hp @ 3.500 rpm',
          'Mô-men xoắn': '405 Nm @ 1.750-2.500 rpm',
          'Hộp số': 'Tự động 6 cấp',
          'Dẫn động': '4x2 (cầu sau)',
          'Nhiên liệu': 'Dầu diesel',
          'Số chỗ ngồi': '7',
          'Kích thước D x R x C': '4.914 x 1.923 x 1.842 mm',
          'Chiều dài cơ sở': '2.900 mm',
          'Khoảng sáng gầm': '200 mm',
          'Dung tích bình xăng': '80 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da',
          'Ghế lái': 'Chỉnh điện 8 hướng',
          'Màn hình giải trí': 'SYNC 4A 10.1 inch',
          'Màn hình táp-lô': 'LCD 8 inch',
          'Điều hòa': 'Tự động 2 vùng',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '8 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HLA': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': true,
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': false,
          'Cốp điện': true,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'Active 2.0 4x2 AT', price: 1129,
          specs: { 'Mâm / lốp': '18 inch, 255/65R18' },
          interior: { 'Chất liệu ghế': 'Da tổng hợp', 'Ghế lái': 'Chỉnh điện 8 hướng', 'Hệ thống loa': '6 loa', 'Điều hòa': 'Tự động 2 vùng' },
          features: { 'Đèn pha': 'LED', 'Cốp điện': false }
        },
        {
          name: 'Sport 2.0 4x2 AT', price: 1209,
          specs: { 'Mâm / lốp': '20 inch, 255/55R20' },
          interior: { 'Hệ thống loa': '8 loa' }
        },
        {
          name: 'Platinum 2.0 4x2 AT', price: 1335,
          specs: { 'Mâm / lốp': '20 inch, 255/55R20' },
          interior: { 'Hệ thống loa': '8 loa', 'Cửa sổ trời': true },
          features: { 'Camera lùi': '360 độ', 'Cruise control': 'Thích ứng thông minh' }
        },
        {
          name: 'Platinum 2.0 Bi-Turbo 4x4 AT', price: 1440,
          specs: { 'Động cơ': '2.0L Bi-Turbo diesel, 4 xi-lanh', 'Công suất': '210 hp @ 3.750 rpm', 'Mô-men xoắn': '500 Nm @ 1.750-2.000 rpm', 'Hộp số': 'Tự động 10 cấp', 'Dẫn động': '4x4 (2 cầu, gài cầu điện tử)', 'Mâm / lốp': '20 inch, 255/55R20' },
          interior: { 'Hệ thống loa': '12 loa B&O', 'Cửa sổ trời': 'Toàn cảnh', 'Màn hình giải trí': 'SYNC 4A 12 inch' },
          features: { 'Camera lùi': '360 độ', 'Cruise control': 'Thích ứng thông minh', 'Sạc không dây': true, 'Đèn pha': 'LED Matrix' }
        },
        {
          name: 'Platinum+ 2.3 EcoBoost 4x4 AT', price: 1629,
          specs: { 'Động cơ': '2.3L EcoBoost, 4 xi-lanh tăng áp', 'Công suất': 'Đang cập nhật', 'Mô-men xoắn': 'Đang cập nhật', 'Hộp số': 'Tự động 10 cấp', 'Nhiên liệu': 'Xăng', 'Dẫn động': '4x4 (2 cầu, gài cầu điện tử)', 'Mâm / lốp': '21 inch' },
          interior: { 'Hệ thống loa': '12 loa B&O', 'Cửa sổ trời': 'Toàn cảnh', 'Màn hình giải trí': 'SYNC 4A 12 inch' },
          features: { 'Camera lùi': '360 độ', 'Cruise control': 'Thích ứng thông minh', 'Sạc không dây': true, 'Đèn pha': 'LED Matrix' }
        }
      ]
    },
    {
      id: 'territory',
      name: 'Territory',
      type: 'SUV hạng C',
      common: {
        specs: {
          'Động cơ': '1.5L EcoBoost, 4 xi-lanh tăng áp',
          'Công suất': '160 hp @ 5.500 rpm',
          'Mô-men xoắn': '248 Nm @ 1.500-3.500 rpm',
          'Hộp số': 'Ly hợp kép 7 cấp',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.630 x 1.935 x 1.706 mm',
          'Chiều dài cơ sở': '2.726 mm',
          'Khoảng sáng gầm': '190 mm',
          'Dung tích bình xăng': '57 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da tổng hợp',
          'Ghế lái': 'Chỉnh điện 6 hướng',
          'Màn hình giải trí': '12 inch',
          'Màn hình táp-lô': 'LCD 7 inch',
          'Điều hòa': 'Tự động',
          'Vô lăng': 'Bọc da, chỉnh 4 hướng',
          'Hệ thống loa': '6 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HLA': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Sau',
          'Cruise control': true,
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': false,
          'Cốp điện': false,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'Trend', price: 739,
          specs: { 'Mâm / lốp': '17 inch, 225/65R17' },
          interior: { 'Chất liệu ghế': 'Nỉ', 'Ghế lái': 'Chỉnh tay 6 hướng', 'Hệ thống loa': '4 loa' },
          features: { 'Túi khí': '4 túi khí' }
        },
        {
          name: 'Titanium', price: 819,
          specs: { 'Mâm / lốp': '18 inch, 235/55R18' }
        },
        {
          name: 'Titanium X', price: 875,
          specs: { 'Mâm / lốp': '19 inch, 235/50R19' },
          interior: { 'Ghế lái': 'Chỉnh điện 8 hướng', 'Hệ thống loa': '8 loa', 'Cửa sổ trời': 'Toàn cảnh' },
          features: { 'Camera lùi': '360 độ', 'Cảm biến đỗ xe': 'Trước & sau', 'Cruise control': 'Thích ứng thông minh', 'Cốp điện': true, 'Sạc không dây': true }
        }
      ]
    }
  ]
});
