(window.CAR_BRANDS = window.CAR_BRANDS || []).push({
  id: 'mercedes',
  name: 'Mercedes-Benz',
  country: 'Đức',
  color: '#1a1a1a',
  models: [
    {
      id: 'c-class',
      name: 'C-Class',
      type: 'Sedan hạng sang hạng D',
      common: {
        specs: {
          'Động cơ': '1.5L tăng áp + mild hybrid EQ Boost',
          'Công suất': '204 hp @ 5.800-6.100 rpm',
          'Mô-men xoắn': '300 Nm @ 1.800-4.000 rpm',
          'Hộp số': 'Tự động 9G-TRONIC',
          'Dẫn động': 'RWD (cầu sau)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.751 x 1.820 x 1.437 mm',
          'Chiều dài cơ sở': '2.865 mm',
          'Khoảng sáng gầm': '125 mm',
          'Dung tích bình xăng': '66 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da Artico',
          'Ghế lái': 'Chỉnh điện, nhớ vị trí',
          'Màn hình giải trí': 'MBUX 11.9 inch cảm ứng dọc',
          'Màn hình táp-lô': 'LCD 12.3 inch',
          'Điều hòa': 'Tự động 2 vùng',
          'Vô lăng': 'Bọc da, đa chức năng',
          'Hệ thống loa': '6 loa',
          'Đèn nội thất': '64 màu',
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '7 túi khí',
          'Cân bằng điện tử ESP': true,
          'Hỗ trợ khởi hành ngang dốc': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng DISTRONIC',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED High Performance',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': true,
          'Cốp điện': true,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'C 200 Avantgarde', price: 1599,
          specs: { 'Mâm / lốp': '17 inch, 225/50R17' },
          features: { 'Camera lùi': true, 'Cruise control': 'Cruise control thường', 'Sạc không dây': false }
        },
        {
          name: 'C 200 Avantgarde Plus', price: 1769,
          specs: { 'Mâm / lốp': '18 inch, 225/45R18' },
          interior: { 'Hệ thống loa': 'Burmester 3D 15 loa', 'Cửa sổ trời': 'Toàn cảnh' }
        },
        {
          name: 'C 300 AMG', price: 2099,
          specs: { 'Động cơ': '2.0L tăng áp + mild hybrid EQ Boost', 'Công suất': '258 hp @ 5.800 rpm', 'Mô-men xoắn': '400 Nm @ 2.000-3.200 rpm', 'Mâm / lốp': '19 inch, 245/40R19, thiết kế AMG' },
          interior: { 'Hệ thống loa': 'Burmester 3D 15 loa', 'Cửa sổ trời': 'Toàn cảnh', 'Vô lăng': 'Bọc da AMG, thể thao' },
          features: { 'Màn hình HUD': true }
        }
      ]
    },
    {
      id: 'glc',
      name: 'GLC',
      type: 'SUV hạng sang hạng D',
      common: {
        specs: {
          'Động cơ': '2.0L tăng áp + mild hybrid EQ Boost',
          'Công suất': '204 hp @ 5.800-6.100 rpm',
          'Mô-men xoắn': '320 Nm @ 1.800-4.000 rpm',
          'Hộp số': 'Tự động 9G-TRONIC',
          'Dẫn động': '4MATIC (4 bánh toàn thời gian)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.716 x 1.890 x 1.640 mm',
          'Chiều dài cơ sở': '2.888 mm',
          'Khoảng sáng gầm': '145 mm',
          'Dung tích bình xăng': '62 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da Artico',
          'Ghế lái': 'Chỉnh điện, nhớ vị trí',
          'Màn hình giải trí': 'MBUX 11.9 inch cảm ứng dọc',
          'Màn hình táp-lô': 'LCD 12.3 inch',
          'Điều hòa': 'Tự động 3 vùng',
          'Vô lăng': 'Bọc da, đa chức năng',
          'Hệ thống loa': '12 loa Burmester',
          'Đèn nội thất': '64 màu',
          'Cửa sổ trời': 'Toàn cảnh'
        },
        features: {
          'Túi khí': '7 túi khí',
          'Cân bằng điện tử ESP': true,
          'Hỗ trợ khởi hành ngang dốc': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng DISTRONIC',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED High Performance',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': true,
          'Cốp điện': true,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'GLC 200 4MATIC', price: 2299,
          specs: { 'Mâm / lốp': '19 inch, 235/55R19' }
        },
        {
          name: 'GLC 300 4MATIC', price: 2839,
          specs: { 'Công suất': '258 hp @ 5.800 rpm', 'Mô-men xoắn': '400 Nm @ 2.000-3.200 rpm', 'Mâm / lốp': '20 inch, 255/45R20, thiết kế AMG' },
          interior: { 'Vô lăng': 'Bọc da AMG, thể thao', 'Hệ thống loa': '15 loa Burmester 3D' },
          features: { 'Màn hình HUD': true }
        }
      ]
    },
    {
      id: 'e-class',
      name: 'E-Class',
      type: 'Sedan hạng sang hạng E',
      common: {
        specs: {
          'Động cơ': '2.0L tăng áp + mild hybrid EQ Boost',
          'Công suất': '204 hp @ 6.100 rpm',
          'Mô-men xoắn': '320 Nm @ 1.600-4.000 rpm',
          'Hộp số': 'Tự động 9G-TRONIC',
          'Dẫn động': 'RWD (cầu sau)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.949 x 1.880 x 1.468 mm',
          'Chiều dài cơ sở': '2.961 mm',
          'Khoảng sáng gầm': '140 mm',
          'Dung tích bình xăng': '65 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da Artico',
          'Ghế lái': 'Chỉnh điện, nhớ vị trí',
          'Màn hình giải trí': 'MBUX Superscreen 12.8 inch',
          'Màn hình táp-lô': 'LCD 12.3 inch',
          'Điều hòa': 'Tự động 4 vùng',
          'Vô lăng': 'Bọc da, đa chức năng',
          'Hệ thống loa': 'Burmester 3D',
          'Đèn nội thất': '64 màu',
          'Cửa sổ trời': 'Toàn cảnh'
        },
        features: {
          'Túi khí': '9 túi khí',
          'Cân bằng điện tử ESP': true,
          'Hỗ trợ khởi hành ngang dốc': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau, Parktronic',
          'Cruise control': 'Thích ứng DISTRONIC',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'Digital Light',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': true,
          'Cốp điện': true,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      variants: [
        {
          name: 'E 200 Avantgarde', price: 2449,
          specs: { 'Mâm / lốp': '18 inch, 245/45R18' },
          interior: { 'Hệ thống loa': '6 loa', 'Cửa sổ trời': false },
          features: { 'Đèn pha': 'LED High Performance' }
        },
        {
          name: 'E 200 Exclusive', price: 2589,
          specs: { 'Mâm / lốp': '18 inch, 245/45R18' },
          interior: { 'Chất liệu ghế': 'Da Nappa' }
        },
        {
          name: 'E 300 AMG', price: 3209,
          specs: { 'Công suất': '258 hp @ 5.800 rpm', 'Mô-men xoắn': '400 Nm @ 2.000-3.200 rpm', 'Mâm / lốp': '19 inch, 245/40R19, thiết kế AMG' },
          interior: { 'Chất liệu ghế': 'Da Nappa', 'Vô lăng': 'Bọc da AMG, thể thao' },
          features: { 'Màn hình HUD': true }
        }
      ]
    }
  ]
});
