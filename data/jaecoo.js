(window.CAR_BRANDS = window.CAR_BRANDS || []).push({
  id: 'jaecoo',
  name: 'Jaecoo',
  country: 'Trung Quốc',
  color: '#2f6f4f',
  models: [
    {
      id: 'j5',
      name: 'J5',
      type: 'SUV hạng B',
      common: {
        specs: { 'Số chỗ ngồi': '5' },
        interior: {},
        features: {}
      },
      variants: [
        { name: 'Premium (xăng)', price: 599, specs: { 'Nhiên liệu': 'Xăng' } },
        { name: 'SHS-H Premium (hybrid)', price: 669, specs: { 'Nhiên liệu': 'Xăng (hybrid)' } },
        { name: 'SHS-H Flagship (hybrid)', price: 749, specs: { 'Nhiên liệu': 'Xăng (hybrid)' } },
        { name: 'EV Flagship', price: 749, specs: { 'Nhiên liệu': 'Điện' } }
      ]
    },
    {
      id: 'j7',
      name: 'J7',
      type: 'SUV hạng C',
      common: {
        specs: { 'Số chỗ ngồi': '5' },
        interior: {},
        features: {}
      },
      variants: [
        { name: 'Flagship (FWD)', price: 799, specs: { 'Dẫn động': 'FWD (cầu trước)' } },
        { name: 'AWD', price: 849, specs: { 'Dẫn động': 'AWD (4 bánh)' } },
        { name: 'PHEV', price: 969, specs: { 'Động cơ': '1.5L Turbo + mô-tơ điện (plug-in hybrid)', 'Nhiên liệu': 'Xăng + điện (plug-in hybrid)', 'Dẫn động': 'FWD (cầu trước)' } }
      ]
    }
  ]
});
