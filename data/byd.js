/*
 * BYD: giá niêm yết theo bảng giá BYD Bitcar tháng 10/2026 (bydvn.com.vn). Thông số lấy từ trang sản phẩm của đại lý;
 * mục nào trang không công bố rõ thì để trống (hiển thị "—") thay vì suy đoán.
 */
(window.CAR_BRANDS = window.CAR_BRANDS || []).push({
  id: 'byd',
  name: 'BYD',
  country: 'Trung Quốc',
  color: '#d70c19',
  models: [
    {
      id: 'dolphin',
      name: 'Dolphin',
      type: 'Hatchback điện hạng B',
      common: {
        specs: {
          'Nhiên liệu': 'Điện',
          'Hộp số': '1 cấp (xe điện)',
          'Số chỗ ngồi': '5',
          'Động cơ': '1 mô-tơ điện',
          'Công suất': '70 kW (94 hp)',
          'Tăng tốc 0-100 km/h': '12,3 giây',
          'Dẫn động': 'FWD (cầu trước)',
          'Loại pin': 'BYD Blade Battery (LFP)',
          'Dung lượng pin': '44,9 kWh',
          'Quãng đường một lần sạc': '435 km (NEDC)',
          'Trọng lượng không tải': '1.520 kg',
          'Dung tích khoang hành lý': '1.310 L (gập hàng ghế sau)',
          'Mâm / lốp': '16 inch, 195/60R16'
        },
        interior: { 'Màn hình giải trí': '12,8 inch xoay' },
        features: { 'Túi khí': '6 túi khí' }
      },
      variants: [{ name: 'GLX', price: 569 }]
    },
    {
      id: 'atto-2',
      name: 'Atto 2',
      type: 'SUV điện hạng B',
      common: {
        specs: {
          'Nhiên liệu': 'Điện',
          'Hộp số': '1 cấp (xe điện)',
          'Số chỗ ngồi': '5',
          'Công suất': '130 kW (174 hp)',
          'Tăng tốc 0-100 km/h': '8,3 giây',
          'Loại pin': 'BYD Blade Battery (LFP)',
          'Dung lượng pin': '45,12 kWh',
          'Quãng đường một lần sạc': '380 km (NEDC)'
        },
        interior: {},
        features: { 'Túi khí': '6 túi khí' }
      },
      variants: [{ name: 'Atto 2', price: 669 }]
    },
    {
      id: 'atto-3',
      name: 'Atto 3',
      type: 'SUV điện hạng C',
      common: {
        specs: {
          'Nhiên liệu': 'Điện',
          'Hộp số': '1 cấp (xe điện)',
          'Số chỗ ngồi': '5',
          'Công suất': '150 kW (201 hp)',
          'Dẫn động': 'FWD (cầu trước)',
          'Loại pin': 'BYD Blade Battery (LFP)',
          'Dung tích khoang hành lý': '1.340 L (gập hàng ghế sau)'
        },
        interior: { 'Màn hình giải trí': '12,8 inch xoay' },
        features: { 'Túi khí': '7 túi khí' }
      },
      variants: [
        {
          name: 'Dynamic', price: 766,
          specs: {
            'Dung lượng pin': '49,92 kWh',
            'Quãng đường một lần sạc': '410 km (NEDC)',
            'Tăng tốc 0-100 km/h': '7,9 giây',
            'Trọng lượng không tải': '1.680 kg',
            'Mâm / lốp': '17 inch, 215/60R17'
          }
        },
        {
          name: 'Premium', price: 886,
          specs: {
            'Dung lượng pin': '60,48 kWh',
            'Quãng đường một lần sạc': '480 km (NEDC)',
            'Tăng tốc 0-100 km/h': '7,3 giây',
            'Trọng lượng không tải': '1.750 kg',
            'Mâm / lốp': '18 inch, 235/50R18'
          }
        }
      ]
    },
    {
      id: 'seal',
      name: 'Seal',
      type: 'Sedan điện hạng D',
      common: {
        specs: {
          'Nhiên liệu': 'Điện',
          'Hộp số': '1 cấp (xe điện)',
          'Số chỗ ngồi': '5',
          'Loại pin': 'BYD Blade Battery (LFP)',
          'Dung lượng pin': '82,56 kWh'
        },
        interior: {},
        features: { 'Túi khí': '7 túi khí' }
      },
      variants: [
        { name: 'Advanced', price: 1119, specs: { 'Dẫn động': 'RWD (cầu sau)' } },
        {
          name: 'Performance', price: 1359,
          specs: {
            'Động cơ': '2 mô-tơ điện',
            'Công suất': '390 kW (522 hp)',
            'Tăng tốc 0-100 km/h': '3,8 giây',
            'Dẫn động': 'AWD (2 cầu)',
            'Quãng đường một lần sạc': '460 km (NEDC)'
          }
        }
      ]
    },
    {
      id: 'han',
      name: 'Han',
      type: 'Sedan điện hạng E',
      common: {
        specs: {
          'Nhiên liệu': 'Điện',
          'Hộp số': '1 cấp (xe điện)',
          'Số chỗ ngồi': '5',
          'Tăng tốc 0-100 km/h': '3,9 giây',
          'Dẫn động': 'AWD (2 cầu)',
          'Loại pin': 'BYD Blade Battery (LFP)',
          'Dung lượng pin': '88,44 kWh',
          'Quãng đường một lần sạc': '521 km (NEDC)',
          'Trọng lượng không tải': '2.250 kg',
          'Dung tích khoang hành lý': '450 L',
          'Mâm / lốp': '19 inch, 245/45R19'
        },
        interior: { 'Màn hình giải trí': '15,6 inch xoay' },
        features: { 'Túi khí': '9 túi khí' }
      },
      variants: [{ name: 'Performance', price: 1489 }]
    },
    {
      id: 'm6',
      name: 'M6',
      type: 'MPV điện 7 chỗ',
      common: {
        specs: {
          'Nhiên liệu': 'Điện',
          'Hộp số': '1 cấp (xe điện)',
          'Số chỗ ngồi': '7',
          'Công suất': '120 kW (161 hp)',
          'Tăng tốc 0-100 km/h': '10,1 giây',
          'Dẫn động': 'FWD (cầu trước)',
          'Loại pin': 'BYD Blade Battery (LFP)',
          'Dung lượng pin': '55,4 kWh',
          'Quãng đường một lần sạc': '420 km (NEDC)',
          'Trọng lượng không tải': '1.800 kg',
          'Dung tích khoang hành lý': '950 L (gập hàng ghế sau: 1.330 L)',
          'Mâm / lốp': '17 inch, 225/55R17'
        },
        interior: {},
        features: { 'Túi khí': '6 túi khí' }
      },
      variants: [{ name: 'Standard', price: 756 }]
    },
    {
      id: 'sealion-8',
      name: 'Sealion 8',
      type: 'SUV điện hạng D',
      common: {
        specs: {
          'Nhiên liệu': 'Điện',
          'Hộp số': '1 cấp (xe điện)',
          'Tăng tốc 0-100 km/h': '4,9 giây',
          'Loại pin': 'BYD Blade Battery (LFP)',
          'Dung lượng pin': '108,8 kWh',
          'Quãng đường một lần sạc': '530 km (NEDC)'
        },
        interior: {},
        features: { 'Túi khí': '7 túi khí' }
      },
      variants: [{ name: 'Performance', price: 1569 }]
    },
    {
      id: 'seal-5',
      name: 'Seal 5 DM-i',
      type: 'Sedan hybrid sạc ngoài hạng C',
      common: {
        specs: {
          'Nhiên liệu': 'Xăng (hybrid sạc ngoài)',
          'Số chỗ ngồi': '5',
          'Tăng tốc 0-100 km/h': '7,5 giây',
          'Loại pin': 'BYD Blade Battery (LFP)',
          'Dung lượng pin': '18,3 kWh',
          'Quãng đường chạy điện': '120 km (NEDC)'
        },
        interior: {},
        features: { 'Túi khí': '6 túi khí' }
      },
      variants: [{ name: 'Premium DM-i', price: 696 }]
    },
    {
      id: 'sealion-6',
      name: 'Sealion 6 DM-i',
      type: 'SUV hybrid sạc ngoài hạng C',
      common: {
        specs: {
          'Nhiên liệu': 'Xăng (hybrid sạc ngoài)',
          'Số chỗ ngồi': '5',
          'Công suất': '160 kW (215 hp)',
          'Tăng tốc 0-100 km/h': '8,3 giây',
          'Loại pin': 'BYD Blade Battery (LFP)',
          'Dung lượng pin': '18,3 kWh',
          'Quãng đường chạy điện': '100 km (NEDC)'
        },
        interior: {},
        features: { 'Túi khí': '7 túi khí' }
      },
      variants: [
        { name: 'Dynamic', price: 799 },
        { name: 'Premium', price: 899 }
      ]
    },
    {
      id: 'm9',
      name: 'M9 DM-i',
      type: 'MPV hybrid sạc ngoài cao cấp',
      common: {
        specs: {
          'Nhiên liệu': 'Xăng (hybrid sạc ngoài)',
          'Số chỗ ngồi': '6-7',
          'Tăng tốc 0-100 km/h': '8,5 giây',
          'Dung lượng pin': '36,6 kWh',
          'Quãng đường tối đa (điện + xăng)': 'Trên 1.000 km'
        },
        interior: {},
        features: { 'Túi khí': '7 túi khí' }
      },
      variants: [
        { name: 'Advanced', price: 1999 },
        { name: 'Premium', price: 2388 }
      ]
    }
  ]
});
