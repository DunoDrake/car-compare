(window.CAR_BRANDS = window.CAR_BRANDS || []).push({
  id: 'suzuki',
  name: 'Suzuki',
  country: 'Nhật Bản',
  color: '#e30613',
  models: [
    {
      id: 'xl7',
      name: 'XL7',
      type: 'MPV lai SUV 7 chỗ',
      common: {
        specs: {
          'Động cơ': '1.5L K15B Smart Hybrid (SHVS), 4 xi-lanh',
          'Công suất': '103 hp @ 6.000 rpm',
          'Mô-men xoắn': '138 Nm @ 4.400 rpm',
          'Hộp số': 'Tự động 4 cấp',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng (mild hybrid)',
          'Số chỗ ngồi': '7',
          'Kích thước D x R x C': '4.450 x 1.775 x 1.710 mm',
          'Chiều dài cơ sở': '2.740 mm',
          'Khoảng sáng gầm': '200 mm',
          'Dung tích bình xăng': '45 L',
          'Phanh': 'Đĩa trước / tang trống sau'
        },
        interior: {
          'Chất liệu ghế': 'Da tổng hợp',
          'Ghế lái': 'Chỉnh tay',
          'Màn hình giải trí': '10 inch',
          'Màn hình táp-lô': 'Đồng hồ analog + LCD nhỏ',
          'Điều hòa': 'Tự động',
          'Vô lăng': 'Thể thao D-cut, tích hợp phím điều khiển',
          'Hệ thống loa': '6 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false
        },
        features: {
          'Túi khí': '2 túi khí',
          'Cân bằng điện tử ESP': true,
          'Hỗ trợ khởi hành ngang dốc HHC': true,
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Sau',
          'Cruise control': true,
          'Phanh tay điện tử & Auto Hold': false,
          'Cảm biến áp suất lốp TPMS': false,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Sạc không dây': false,
          'Kết nối Apple CarPlay / Android Auto': 'Không dây'
        }
      },
      variants: [
        {
          name: 'Hybrid Black Edition', price: 599,
          specs: { 'Mâm / lốp': '16 inch, 195/60R16, màu đen' }
        }
      ]
    },
    {
      id: 'fronx',
      name: 'Fronx',
      type: 'SUV lai coupe hạng A',
      common: {
        specs: {
          'Động cơ': '1.5L Smart Hybrid (mild hybrid), 4 xi-lanh',
          'Công suất': '99 hp',
          'Mô-men xoắn': '135 Nm',
          'Hộp số': 'Tự động',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng (mild hybrid)',
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': 'Đang cập nhật',
          'Khoảng sáng gầm': 'Đang cập nhật',
          'Phanh': 'Đĩa trước / tang trống sau'
        },
        interior: {
          'Chất liệu ghế': 'Da pha nỉ',
          'Ghế lái': 'Chỉnh cơ',
          'Màn hình giải trí': 'Cảm ứng, kết nối không dây',
          'Màn hình táp-lô': 'LCD',
          'Điều hòa': 'Tự động',
          'Vô lăng': 'Bọc da, đa chức năng',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': false,
          'Màn hình HUD': true
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESP': true,
          'Camera lùi': true,
          'Cruise control': 'Thích ứng thông minh (ADAS)',
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': true,
          'Sạc không dây': true,
          'Kết nối Apple CarPlay / Android Auto': 'Không dây'
        }
      },
      variants: [
        { name: 'GLX Plus', price: 649 },
        { name: 'GL', price: 520, features: { 'Cruise control': 'Đang cập nhật', 'Hỗ trợ giữ làn': 'Đang cập nhật', 'Phanh tự động khẩn cấp': 'Đang cập nhật', 'Sạc không dây': 'Đang cập nhật', 'Kết nối Apple CarPlay / Android Auto': 'Đang cập nhật' }, interior: { 'Màn hình HUD': 'Đang cập nhật', 'Chất liệu ghế': 'Đang cập nhật' } },
        { name: 'GLX', price: 599, features: { 'Cruise control': 'Đang cập nhật', 'Hỗ trợ giữ làn': 'Đang cập nhật', 'Phanh tự động khẩn cấp': 'Đang cập nhật', 'Sạc không dây': 'Đang cập nhật', 'Kết nối Apple CarPlay / Android Auto': 'Đang cập nhật' }, interior: { 'Màn hình HUD': 'Đang cập nhật' } }
      ]
    }
  ]
});
