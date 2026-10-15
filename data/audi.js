(window.CAR_BRANDS = window.CAR_BRANDS || []).push({
  id: 'audi',
  name: 'Audi',
  country: 'Đức',
  color: '#bb0a30',
  models: [
    {
      id: 'q3',
      name: 'Q3',
      type: 'SUV hạng sang cỡ nhỏ',
      common: {
        specs: {
          'Động cơ': '1.4L TFSI, 4 xi-lanh tăng áp',
          'Công suất': '150 hp @ 5.000-6.000 rpm',
          'Mô-men xoắn': '250 Nm @ 1.500-3.500 rpm',
          'Hộp số': 'Ly hợp kép S tronic 7 cấp',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.484 x 1.856 x 1.585 mm',
          'Chiều dài cơ sở': '2.680 mm',
          'Khoảng sáng gầm': '170 mm',
          'Dung tích bình xăng': '58 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da Milano',
          'Ghế lái': 'Chỉnh điện, nhớ vị trí',
          'Màn hình giải trí': 'MMI 10.1 inch cảm ứng',
          'Màn hình táp-lô': 'Audi virtual cockpit 10.25 inch',
          'Điều hòa': 'Tự động 3 vùng',
          'Vô lăng': 'Bọc da 3 chấu đa chức năng',
          'Hệ thống loa': '10 loa Audi sound system',
          'Đèn nội thất': '30 màu',
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng thông minh',
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
          name: 'SUV TFSI Advanced', price: 2099,
          specs: { 'Mâm / lốp': '18 inch, 235/50R18' }
        },
        {
          name: 'Sportback TFSI S line', price: 2199,
          specs: { 'Mâm / lốp': '19 inch, 235/45R19, gói thể thao S line', 'Kích thước D x R x C': '4.500 x 1.850 x 1.560 mm' },
          interior: { 'Hệ thống loa': '15 loa Bang & Olufsen', 'Cửa sổ trời': 'Toàn cảnh' },
          features: { 'Camera lùi': '360 độ', 'Cảnh báo điểm mù': true }
        }
      ]
    },
    {
      id: 'q5',
      name: 'Q5',
      type: 'SUV hạng sang hạng D',
      common: {
        specs: {
          'Động cơ': '2.0L TFSI, 4 xi-lanh tăng áp',
          'Công suất': '265 hp @ 5.000-6.500 rpm',
          'Mô-men xoắn': '370 Nm @ 1.600-4.500 rpm',
          'Hộp số': 'Ly hợp kép S tronic 7 cấp',
          'Dẫn động': 'quattro (4 bánh toàn thời gian)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.682 x 1.893 x 1.662 mm',
          'Chiều dài cơ sở': '2.819 mm',
          'Khoảng sáng gầm': '190 mm',
          'Dung tích bình xăng': '70 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da Valcona',
          'Ghế lái': 'Chỉnh điện, nhớ vị trí',
          'Màn hình giải trí': 'MMI 10.1 inch cảm ứng',
          'Màn hình táp-lô': 'Audi virtual cockpit plus 12.3 inch',
          'Điều hòa': 'Tự động 3 vùng',
          'Vô lăng': 'Bọc da, chỉnh điện',
          'Hệ thống loa': '10 loa Audi sound system',
          'Đèn nội thất': '30 màu',
          'Cửa sổ trời': 'Toàn cảnh'
        },
        features: {
          'Túi khí': '8 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng thông minh',
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
          name: '45 TFSI quattro S line', price: 2849,
          specs: { 'Mâm / lốp': '19 inch, 235/55R19, gói thể thao S line' },
          interior: { 'Hệ thống loa': '19 loa Bang & Olufsen', 'Chất liệu ghế': 'Da Valcona, ghế thể thao' }
        },
        {
          name: 'Sportback 45 TFSI quattro S line', price: 2949,
          specs: { 'Kích thước D x R x C': '4.689 x 1.893 x 1.660 mm', 'Mâm / lốp': '20 inch, 255/45R20' },
          interior: { 'Hệ thống loa': '19 loa Bang & Olufsen', 'Chất liệu ghế': 'Da Valcona, ghế thể thao' },
          features: { 'Đèn pha': 'LED Matrix, đèn OLED phía sau' }
        }
      ]
    },
    {
      id: 'a6',
      name: 'A6',
      type: 'Sedan hạng sang hạng E',
      common: {
        specs: {
          'Động cơ': '2.0L TFSI, 4 xi-lanh tăng áp',
          'Công suất': '245 hp @ 5.000-6.000 rpm',
          'Mô-men xoắn': '370 Nm @ 1.600-4.300 rpm',
          'Hộp số': 'Ly hợp kép S tronic 7 cấp',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.939 x 1.886 x 1.457 mm',
          'Chiều dài cơ sở': '2.924 mm',
          'Khoảng sáng gầm': '150 mm',
          'Dung tích bình xăng': '73 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da Valcona',
          'Ghế lái': 'Chỉnh điện, nhớ vị trí',
          'Màn hình giải trí': 'MMI touch 10.1 inch + 8.6 inch (điều hòa)',
          'Màn hình táp-lô': 'Audi virtual cockpit plus 12.3 inch',
          'Điều hòa': 'Tự động 4 vùng',
          'Vô lăng': 'Bọc da, chỉnh điện',
          'Hệ thống loa': '10 loa Audi sound system',
          'Đèn nội thất': '30 màu',
          'Cửa sổ trời': 'Toàn cảnh'
        },
        features: {
          'Túi khí': '8 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng thông minh',
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
          name: '45 TFSI', price: 2690,
          specs: { 'Mâm / lốp': '18 inch, 245/45R18' }
        }
      ]
    }
  ]
});
