(window.CAR_BRANDS = window.CAR_BRANDS || []).push({
  id: 'geely',
  name: 'Geely',
  country: 'Trung Quốc',
  color: '#0b5ed7',
  models: [
    {
      id: 'coolray',
      name: 'Coolray',
      type: 'SUV hạng B',
      common: {
        specs: {
          'Động cơ': '1.5L Turbo BHE15-EFZ, 3 xi-lanh',
          'Công suất': '174 hp',
          'Mô-men xoắn': '290 Nm',
          'Hộp số': 'Ly hợp kép 7 cấp (7DCT)',
          'Dẫn động': 'FWD (cầu trước)',
          'Nhiên liệu': 'Xăng',
          'Số chỗ ngồi': '5',
          'Chế độ lái': 'Eco / Comfort / Sport / Adaptive'
        },
        interior: {},
        features: {}
      },
      variants: [
        { name: 'Executive', price: 499 },
        { name: 'Premium', price: 549 },
        { name: 'Flagship', price: 599 }
      ]
    },
    {
      id: 'okavango',
      name: 'Okavango',
      type: 'SUV 7 chỗ',
      common: {
        specs: { 'Số chỗ ngồi': '7' },
        interior: {},
        features: {}
      },
      variants: [
        { name: 'Executive', price: 739 },
        { name: 'Premium', price: 799 }
      ]
    },
    {
      id: 'ex5',
      name: 'EX5',
      type: 'SUV điện',
      common: {
        specs: {
          'Động cơ': 'Mô-tơ điện',
          'Công suất': '218 hp',
          'Mô-men xoắn': '320 Nm',
          'Hộp số': '1 cấp (xe điện)',
          'Nhiên liệu': 'Điện',
          'Dung lượng pin': '60,22 kWh (LFP)',
          'Quãng đường tối đa': 'Khoảng 495 km',
          'Sạc nhanh DC': '30% đến 80% trong khoảng 20 phút',
          'Số chỗ ngồi': '5'
        },
        interior: {},
        features: {}
      },
      variants: [
        { name: 'Max', price: 839 },
        { name: 'Pro', price: 889 }
      ]
    }
  ]
});
