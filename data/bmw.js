(window.CAR_BRANDS = window.CAR_BRANDS || []).push({
  id: 'bmw',
  name: 'BMW',
  country: 'Đức',
  color: '#0066b1',
  models: [
    {
      id: '3-series',
      name: '3 Series',
      type: 'Sedan hạng sang hạng D',
      common: {
        specs: {
          'Động cơ': '2.0L TwinPower Turbo, 4 xi-lanh',
          'Công suất': '156 hp @ 4.500-6.500 rpm',
          'Mô-men xoắn': '250 Nm @ 1.350-4.300 rpm',
          'Hộp số': 'Tự động Steptronic 8 cấp',
          'Dẫn động': 'RWD (cầu sau)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.709 x 1.827 x 1.442 mm',
          'Chiều dài cơ sở': '2.851 mm',
          'Khoảng sáng gầm': '140 mm',
          'Dung tích bình xăng': '59 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da Vernasca',
          'Ghế lái': 'Chỉnh điện, nhớ vị trí',
          'Màn hình giải trí': 'iDrive 8.5 cong 14.9 inch',
          'Màn hình táp-lô': 'BMW Curved Display 12.3 inch',
          'Điều hòa': 'Tự động 3 vùng',
          'Vô lăng': 'Bọc da, đa chức năng',
          'Hệ thống loa': '12 loa',
          'Đèn nội thất': 'Ambient Light',
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử DSC': true,
          'Hỗ trợ khởi hành ngang dốc': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng thông minh',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': true,
          'Cốp điện': true,
          'Kết nối Apple CarPlay / Android Auto': 'Không dây'
        }
      },
      variants: [
        {
          name: '320i Sport Line', price: 1379,
          specs: { 'Mâm / lốp': '17 inch, 225/50R17' },
          interior: { 'Hệ thống loa': '6 loa', 'Chất liệu ghế': 'Da tổng hợp Sensatec' },
          features: { 'Cruise control': 'Cruise control thường' }
        },
        {
          name: '320i M Sport', price: 1512,
          specs: { 'Mâm / lốp': '18 inch, 225/45R18, thiết kế M' },
          interior: { 'Hệ thống loa': '12 loa', 'Vô lăng': 'Bọc da M, thể thao', 'Chất liệu ghế': 'Da Vernasca' },
          features: { 'Cruise control': 'Thích ứng thông minh' }
        },
        {
          name: '330i M Sport', price: 1789,
          specs: { 'Công suất': '258 hp @ 5.000-6.500 rpm', 'Mô-men xoắn': '400 Nm @ 1.550-4.400 rpm', 'Mâm / lốp': '18 inch, 225/45R18, thiết kế M' },
          interior: { 'Hệ thống loa': '16 loa Harman Kardon', 'Vô lăng': 'Bọc da M, thể thao', 'Cửa sổ trời': true },
          features: { 'Màn hình HUD': true, 'Camera lùi': '360 độ' }
        }
      ]
    },
    {
      id: 'x3',
      name: 'X3',
      type: 'SUV hạng sang hạng D',
      common: {
        specs: {
          'Động cơ': '2.0L TwinPower Turbo, 4 xi-lanh',
          'Công suất': '184 hp @ 5.000-6.500 rpm',
          'Mô-men xoắn': '300 Nm @ 1.350-4.000 rpm',
          'Hộp số': 'Tự động Steptronic 8 cấp',
          'Dẫn động': 'RWD (cầu sau)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.755 x 1.891 x 1.689 mm',
          'Chiều dài cơ sở': '2.864 mm',
          'Khoảng sáng gầm': '204 mm',
          'Dung tích bình xăng': '65 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da Vernasca',
          'Ghế lái': 'Chỉnh điện, nhớ vị trí',
          'Màn hình giải trí': 'iDrive 12.3 inch cảm ứng',
          'Màn hình táp-lô': 'BMW Live Cockpit Professional 12.3 inch',
          'Điều hòa': 'Tự động 3 vùng',
          'Vô lăng': 'Bọc da, đa chức năng',
          'Hệ thống loa': '12 loa Harman Kardon',
          'Đèn nội thất': 'Ambient Light',
          'Cửa sổ trời': 'Toàn cảnh'
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử DSC': true,
          'Hỗ trợ khởi hành ngang dốc': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng thông minh',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED Adaptive',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': true,
          'Cốp điện': true,
          'Kết nối Apple CarPlay / Android Auto': 'Không dây'
        }
      },
      variants: [
        {
          name: 'sDrive20i', price: 1855,
          specs: { 'Mâm / lốp': '18 inch, 225/60R18' },
          interior: { 'Cửa sổ trời': false },
          features: { 'Camera lùi': true }
        },
        {
          name: 'xDrive30i M Sport', price: 2079,
          specs: { 'Công suất': '252 hp @ 5.200-6.500 rpm', 'Mô-men xoắn': '350 Nm @ 1.450-4.800 rpm', 'Dẫn động': 'xDrive (4 bánh toàn thời gian)', 'Mâm / lốp': '19 inch, 245/50R19, thiết kế M' },
          interior: { 'Vô lăng': 'Bọc da M, thể thao' },
          features: { 'Màn hình HUD': true }
        }
      ]
    },
    {
      id: 'x5',
      name: 'X5',
      type: 'SUV hạng sang cỡ lớn',
      common: {
        specs: {
          'Động cơ': '3.0L TwinPower Turbo, 6 xi-lanh thẳng hàng',
          'Công suất': '381 hp @ 5.200-6.250 rpm',
          'Mô-men xoắn': '520 Nm @ 1.850-5.000 rpm',
          'Hộp số': 'Tự động Steptronic Sport 8 cấp',
          'Dẫn động': 'xDrive (4 bánh toàn thời gian)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.935 x 2.004 x 1.765 mm',
          'Chiều dài cơ sở': '2.975 mm',
          'Khoảng sáng gầm': '209 mm',
          'Dung tích bình xăng': '83 L',
          'Phanh': 'Đĩa trước / đĩa sau'
        },
        interior: {
          'Chất liệu ghế': 'Da Vernasca',
          'Ghế lái': 'Chỉnh điện, nhớ vị trí, massage',
          'Màn hình giải trí': 'iDrive 14.9 inch cong',
          'Màn hình táp-lô': 'BMW Curved Display 12.3 inch',
          'Điều hòa': 'Tự động 4 vùng',
          'Vô lăng': 'Bọc da, đa chức năng',
          'Hệ thống loa': '16 loa Harman Kardon',
          'Đèn nội thất': 'Ambient Light',
          'Cửa sổ trời': 'Toàn cảnh Sky Lounge'
        },
        features: {
          'Túi khí': '8 túi khí',
          'Cân bằng điện tử DSC': true,
          'Hỗ trợ khởi hành ngang dốc': true,
          'Camera lùi': '360 độ',
          'Cảm biến đỗ xe': 'Trước & sau',
          'Cruise control': 'Thích ứng thông minh',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED Laser',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': true,
          'Cốp điện': true,
          'Màn hình HUD': true,
          'Kết nối Apple CarPlay / Android Auto': 'Không dây'
        }
      },
      variants: [
        {
          name: 'xDrive40i xLine', price: 3899,
          specs: { 'Mâm / lốp': '20 inch, 275/45R20' },
          interior: { 'Hệ thống loa': '16 loa Harman Kardon' },
          features: { 'Đèn pha': 'LED Adaptive' }
        },
        {
          name: 'xDrive40i M Sport', price: 3489,
          specs: { 'Mâm / lốp': '21 inch, 275/40R21, thiết kế M' },
          interior: { 'Hệ thống loa': '16 loa Harman Kardon', 'Vô lăng': 'Bọc da M, thể thao', 'Chất liệu ghế': 'Da Merino' },
          features: { 'Đèn pha': 'LED Laser' }
        }
      ]
    }
  ]
});
