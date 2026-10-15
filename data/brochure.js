/*
 * Thông số theo TỪNG PHIÊN BẢN, nhập từ brochure chính hãng (PDF) do hãng phát hành tại Việt Nam.
 * Khóa: "<id hãng>/<id mẫu>" -> { source: {name, url}, variants: { "<tên phiên bản trong data>": { specs, interior, features } } }
 * Ưu tiên cao nhất khi hiển thị (ghi đè fill, common, force, variant). Chỉ ghi các mục đã đọc rõ trong brochure.
 */
window.CAR_BROCHURE = {
  'vinfast/vf5': {
    source: { name: 'Brochure VinFast VF 5 (T8/2025)', url: 'https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwf5eb40b2/Document/VF5_Brochure_T82025.pdf' },
    variants: {
      'VF 5': {
        specs: {
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '3.967 x 1.723 x 1.579 mm',
          'Chiều dài cơ sở': '2.514 mm',
          'Khoảng sáng gầm': '160 mm',
          'Dung tích khoang hành lý': '260 L (gập hàng ghế cuối: 900 L)',
          'Trọng lượng không tải': '1.340 kg',
          'Tải trọng': '325 kg',
          'Động cơ': '1 mô-tơ điện',
          'Công suất': '100 kW (134 hp)',
          'Mô-men xoắn': '135 Nm',
          'Tăng tốc 0-100 km/h': '12 giây',
          'Dẫn động': 'FWD (cầu trước)',
          'Chế độ lái': 'Eco / Sport',
          'Loại pin': 'LFP',
          'Dung lượng pin': '37,23 kWh (khả dụng)',
          'Quãng đường một lần sạc': '326 km (NEDC)',
          'Sạc nhanh': '33 phút (10% lên 70%)',
          'Hệ thống treo (trước / sau)': 'Độc lập MacPherson / Dầm xoắn',
          'Phanh': 'Đĩa thông gió / Đĩa',
          'Mâm / lốp': 'Hợp kim 17 inch',
          'Trợ lực lái': 'Điện (EPS)'
        },
        interior: {
          'Chất liệu ghế': 'Giả da',
          'Ghế lái': 'Chỉnh cơ 6 hướng',
          'Ghế phụ': 'Chỉnh cơ 4 hướng',
          'Hàng ghế thứ hai': 'Gập theo tỷ lệ 60:40',
          'Vô lăng': 'Chỉnh cơ 2 hướng, tích hợp nút điều khiển giải trí và ga tự động',
          'Điều hòa': '1 vùng, chỉnh cơ, lọc không khí PM2.5',
          'Màn hình giải trí': '8 inch',
          'Màn hình táp-lô': 'Kỹ thuật số 7 inch',
          'Hệ thống loa': '4 loa',
          'Cổng USB': 'Hàng ghế trước 1 (7,5 W), hàng ghế sau 1 (18 W)',
          'Chìa khóa': 'Chìa khóa từ xa'
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Cruise control': 'Ga tự động',
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Sau',
          'Cảnh báo điểm mù': true,
          'Cảm biến áp suất lốp TPMS': 'iTPMS',
          'Đèn pha': 'Halogen, tự động bật/tắt',
          'Kết nối Apple CarPlay / Android Auto': 'Không dây'
        }
      }
    }
  },

  'vinfast/vf6': {
    source: { name: 'Brochure VinFast VF 6 (thông số VF6S tại Việt Nam)', url: 'https://vinfasthongbang.com/files/category/vf634chxm5b.pdf' },
    variants: {
      'Eco': {
        specs: {
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.241 x 1.834 x 1.580 mm',
          'Chiều dài cơ sở': '2.730 mm',
          'Khoảng sáng gầm': '170 mm',
          'Dung tích khoang hành lý': '350 L (gập hàng ghế cuối: 1.275 L)',
          'Tải trọng': '375 kg',
          'Động cơ': '1 mô-tơ điện',
          'Công suất': '130 kW',
          'Mô-men xoắn': '250 Nm',
          'Tốc độ tối đa': '150 km/h',
          'Tăng tốc 0-100 km/h': 'Dưới 10,5 giây',
          'Dẫn động': 'FWD (cầu trước)',
          'Chế độ lái': 'Eco / Normal / Sport',
          'Loại pin': 'LFP',
          'Dung lượng pin': '59,6 kWh (khả dụng)',
          'Quãng đường một lần sạc': '480 km (NEDC)',
          'Sạc AC tối đa': '7,4 kW (tùy chọn 11 kW)',
          'Sạc nhanh': '25 phút với bộ sạc 250 kW (10% - 70%)',
          'Hệ thống treo (trước / sau)': 'Độc lập MacPherson / Thanh điều hướng đa điểm',
          'Phanh': 'Đĩa / Đĩa',
          'Mâm / lốp': 'Hợp kim 17 inch'
        },
        interior: {
          'Chất liệu ghế': 'Da nhân tạo',
          'Ghế lái': 'Chỉnh cơ 6 hướng',
          'Ghế phụ': 'Chỉnh cơ 4 hướng',
          'Hàng ghế thứ hai': 'Gập theo tỷ lệ 60:40',
          'Vô lăng': 'Chỉnh cơ 4 hướng, tích hợp nút điều khiển giải trí',
          'Điều hòa': 'Tự động, 1 vùng, lọc bụi / phấn hoa',
          'Màn hình giải trí': '12,9 inch',
          'Màn hình HUD': 'Tùy chọn (OPT)',
          'Cửa gió hàng ghế sau': true
        },
        features: {
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true
        }
      }
    }
  },

  'vinfast/vf7': {
    source: { name: 'Brochure VinFast VF 7 (T6/2025)', url: 'https://vinfastkiengiang.vn/public/upload/files/VF7BrochureT062025.pdf' },
    variants: {
      'Eco': {
        specs: {
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.545 x 1.890 x 1.636 mm',
          'Chiều dài cơ sở': '2.840 mm',
          'Khoảng sáng gầm': '190 mm',
          'Động cơ': '1 mô-tơ điện',
          'Công suất': '130 kW',
          'Mô-men xoắn': '250 Nm',
          'Dẫn động': 'FWD (cầu trước)',
          'Chế độ lái': 'Eco / Normal / Sport',
          'Dung lượng pin': '59,6 kWh (khả dụng)',
          'Quãng đường một lần sạc': '498 km (NEDC)',
          'Sạc nhanh': 'Dưới 25 phút (10% - 70%)',
          'Hệ thống treo (trước / sau)': 'Độc lập MacPherson / Thanh điều hướng đa điểm',
          'Mâm / lốp': 'Hợp kim 19 inch'
        },
        interior: {
          'Chất liệu ghế': 'Da nhân tạo',
          'Ghế lái': 'Chỉnh điện 8 hướng',
          'Điều hòa': 'Tự động, 2 vùng; không có lọc bụi mịn Combi 1.0',
          'Màn hình giải trí': '12,9 inch',
          'Màn hình HUD': false,
          'Sạc không dây': false,
          'Hệ thống loa': '6 loa',
          'Cốp sau': 'Chỉnh cơ',
          'Gương chiếu hậu trong xe': 'Chế độ ngày/đêm'
        },
        features: {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera lùi': true,
          'Camera 360': false,
          'Cruise control': 'Tiêu chuẩn',
          'Cảnh báo điểm mù': true,
          'Hỗ trợ giữ làn': false,
          'Phanh tự động khẩn cấp': false,
          'Hỗ trợ lái ADAS': 'Cơ bản (cảnh báo điểm mù, hỗ trợ đỗ sau)',
          'Kết nối Apple CarPlay / Android Auto': true,
          'Đèn pha': 'LED'
        }
      },
      'Plus': {
        specs: {
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.545 x 1.890 x 1.636 mm',
          'Chiều dài cơ sở': '2.840 mm',
          'Khoảng sáng gầm': '190 mm',
          'Động cơ': '1 mô-tơ điện',
          'Công suất': '150 kW (201 hp)',
          'Mô-men xoắn': '310 Nm',
          'Dẫn động': 'FWD (cầu trước)',
          'Chế độ lái': 'Eco / Normal / Sport',
          'Dung lượng pin': '75,6 kWh (khả dụng)',
          'Quãng đường một lần sạc': 'Thông báo sau',
          'Sạc nhanh': 'Dưới 28 phút (10% - 70%)',
          'Hệ thống treo (trước / sau)': 'Độc lập MacPherson / Thanh điều hướng đa điểm',
          'Mâm / lốp': 'Hợp kim 20 inch'
        },
        interior: {
          'Chất liệu ghế': 'Da nhân tạo cao cấp',
          'Ghế lái': 'Chỉnh điện 8 hướng',
          'Điều hòa': 'Tự động, 2 vùng, lọc bụi mịn Combi 1.0 và ion hóa không khí',
          'Màn hình giải trí': '12,9 inch',
          'Màn hình HUD': true,
          'Sạc không dây': true,
          'Hệ thống loa': '8 loa',
          'Cốp sau': 'Chỉnh điện',
          'Gương chiếu hậu trong xe': 'Chống chói tự động'
        },
        features: {
          'Túi khí': '8 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera lùi': true,
          'Camera 360': true,
          'Cruise control': 'Thích ứng',
          'Cảnh báo điểm mù': true,
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': true,
          'Hỗ trợ lái ADAS': 'Đầy đủ (giữ làn, chuyển làn, nhận biết biển báo, phanh tự động khẩn cấp)',
          'Kết nối Apple CarPlay / Android Auto': true,
          'Đèn pha': 'LED, tự động chuyển pha'
        }
      }
    }
  },

  'vinfast/vf8': {
    source: { name: 'Brochure VinFast VF 8 (bản Eco)', url: 'https://vinfastlongbien.com/wp-content/uploads/2023/04/VF8Brochure.pdf' },
    variants: {
      'VF 8': {
        specs: {
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.750 x 1.934 x 1.667 mm',
          'Chiều dài cơ sở': '2.950 mm',
          'Khoảng sáng gầm': '179 mm',
          'Dung tích khoang hành lý': '376 L (gập hàng ghế cuối: 1.373 L)',
          'Trọng lượng không tải': '2.540 kg',
          'Động cơ': '2 mô-tơ điện',
          'Công suất': '260 kW (349 hp)',
          'Mô-men xoắn': '500 Nm',
          'Tăng tốc 0-100 km/h': '6,5 giây',
          'Dẫn động': 'AWD / 2 cầu toàn thời gian',
          'Chế độ lái': 'Eco / Normal',
          'Dung lượng pin': '82 kWh (khả dụng)',
          'Quãng đường một lần sạc': '420 km (WLTP)',
          'Sạc nhanh': 'Tối đa 24 phút (10% - 70%)',
          'Hệ thống treo (trước / sau)': 'Độc lập thông minh / Thanh điều hướng đa điểm',
          'Phanh': 'Đĩa thông gió',
          'Mâm / lốp': 'Hợp kim 19 inch'
        },
        interior: {
          'Màn hình giải trí': '15,6 inch',
          'Màn hình HUD': true,
          'Sạc không dây': true,
          'Hệ thống loa': '8 loa',
          'Điều hòa': 'Tự động, 2 vùng, lọc Combi 1.0 và ion hóa không khí',
          'Cửa sổ trời': 'Chỉnh điện có rèm trần'
        },
        features: {
          'Túi khí': '11 túi khí',
          'Cảm biến áp suất lốp TPMS': 'dTPMS',
          'Đèn pha': 'LED, tự động bật/tắt'
        }
      }
    }
  },

  'vinfast/vf9': {
    source: { name: 'Brochure VinFast VF 9 (T9/2025)', url: 'https://vinfasthanoi.net/upload/files/vf9-brochure-vn-pdf-092025081224.pdf' },
    variants: {
      'Eco': {
        specs: {
          'Số chỗ ngồi': '7',
          'Kích thước D x R x C': '5.118 x 2.254 x 1.696 mm',
          'Chiều dài cơ sở': '3.150 mm',
          'Khoảng sáng gầm': '173,7 mm',
          'Dung tích khoang hành lý': '212 L (gập hàng ghế cuối: 926 L), khoang trước 100 L',
          'Trọng lượng không tải': '2.911 kg',
          'Tải trọng': '550 kg',
          'Động cơ': '2 mô-tơ điện, mỗi mô-tơ 150 kW',
          'Công suất': '402 hp (300 kW)',
          'Mô-men xoắn': '620 Nm',
          'Tốc độ tối đa': '200 km/h',
          'Dẫn động': 'AWD / 2 cầu toàn thời gian',
          'Chế độ lái': 'Eco / Normal / Sport',
          'Loại pin': 'CATL',
          'Dung lượng pin': '123 kWh (khả dụng)',
          'Quãng đường một lần sạc': '626 km (WLTP)',
          'Sạc AC tối đa': '6,6 kW (1 pha), 11 kW (3 pha)',
          'Sạc nhanh': '35 phút (10% - 70%)',
          'Hệ thống treo (trước / sau)': 'Độc lập tay đòn kép / Liên kết đa điểm, giảm chấn khí nén',
          'Phanh': 'Đĩa thông gió / Đĩa thông gió',
          'Mâm / lốp': 'Hợp kim 20 inch'
        },
        interior: {
          'Ghế lái': 'Chỉnh điện 8 hướng, nhớ vị trí',
          'Ghế phụ': 'Chỉnh điện 6 hướng',
          'Điều hòa': 'Tự động, 3 vùng',
          'Màn hình giải trí': '15,6 inch',
          'Màn hình HUD': true,
          'Vô lăng': 'D-cut, bọc da thân thiện môi trường'
        },
        features: {
          'Túi khí': '11 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Cảm biến áp suất lốp TPMS': 'dTPMS',
          'Đèn pha': 'LED Matrix',
          'Hỗ trợ lái ADAS': 'Đầy đủ (hỗ trợ cao tốc, ga thích ứng, giữ làn, cảnh báo điểm mù, phanh tự động khẩn cấp)',
          'Camera 360': true
        }
      },
      'Plus': {
        specs: {
          'Số chỗ ngồi': '7 hoặc 6',
          'Kích thước D x R x C': '5.118 x 2.254 x 1.696 mm',
          'Chiều dài cơ sở': '3.150 mm',
          'Khoảng sáng gầm': '183,5 mm',
          'Dung tích khoang hành lý': '212 L (gập hàng ghế cuối: 926 L), khoang trước 100 L',
          'Trọng lượng không tải': '7 chỗ: 2.968 kg | 6 chỗ: 2.932 kg',
          'Tải trọng': '7 chỗ: 550 kg | 6 chỗ: 475 kg',
          'Động cơ': '2 mô-tơ điện, mỗi mô-tơ 150 kW',
          'Công suất': '402 hp (300 kW)',
          'Mô-men xoắn': '620 Nm',
          'Tốc độ tối đa': '200 km/h',
          'Dẫn động': 'AWD / 2 cầu toàn thời gian',
          'Chế độ lái': 'Eco / Normal / Sport',
          'Loại pin': 'CATL',
          'Dung lượng pin': '123 kWh (khả dụng)',
          'Quãng đường một lần sạc': '602 km (WLTP)',
          'Sạc AC tối đa': '6,6 kW (1 pha), 11 kW (3 pha)',
          'Sạc nhanh': '35 phút (10% - 70%)',
          'Hệ thống treo (trước / sau)': 'Độc lập tay đòn kép / Liên kết đa điểm, giảm chấn khí nén',
          'Phanh': 'Đĩa thông gió / Đĩa thông gió',
          'Mâm / lốp': 'Hợp kim 21 inch'
        },
        interior: {
          'Ghế lái': 'Chỉnh điện 12 hướng, nhớ vị trí, massage, thông gió, sưởi',
          'Ghế phụ': 'Chỉnh điện 10 hướng, massage',
          'Điều hòa': 'Tự động, 3 vùng',
          'Màn hình giải trí': '15,6 inch; màn hình hàng ghế sau 8 inch',
          'Màn hình HUD': true,
          'Cửa sổ trời': 'Trần kính toàn cảnh (tùy chọn)',
          'Vô lăng': 'D-cut, bọc da thân thiện môi trường'
        },
        features: {
          'Túi khí': '11 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Cảm biến áp suất lốp TPMS': 'dTPMS',
          'Đèn pha': 'LED Matrix, đèn pha thích ứng AFS',
          'Hỗ trợ lái ADAS': 'Đầy đủ (hỗ trợ cao tốc, ga thích ứng, giữ làn, cảnh báo điểm mù, phanh tự động khẩn cấp)',
          'Camera 360': true
        }
      }
    }
  },

  'lynkco/01': {
    source: { name: 'Brochure Lynk & Co 01 (thông tin sản phẩm)', url: 'https://lynkco.com.vn/storage/san-pham/01-brochure-vn.pdf' },
    variants: {
      'Hyper': {
        specs: {
          'Động cơ': 'Drive-E 2.0TD T4 Evo Turbo',
          'Công suất': '215 hp @ 5.000 rpm',
          'Mô-men xoắn': '325 Nm @ 1.800-4.500 rpm',
          'Tốc độ tối đa': '210 km/h',
          'Hộp số': 'Tự động 8 cấp (8AT)',
          'Dẫn động': 'FWD (cầu trước)',
          'Kích thước D x R x C': '4.549 x 1.860 x 1.689 mm',
          'Chiều dài cơ sở': '2.734 mm',
          'Khoảng sáng gầm': '213 mm',
          'Trọng lượng không tải': '1.710 kg',
          'Mức tiêu hao nhiên liệu': '7,89 L/100km (hỗn hợp), 9,30 L/100km (đô thị), 7,08 L/100km (ngoài đô thị)',
          'Hệ thống treo (trước / sau)': 'MacPherson + thanh cân bằng / Đa liên kết độc lập + thanh cân bằng',
          'Trợ lực lái': 'Điện (EPAS)',
          'Mâm / lốp': '235/50 R19',
          'Chế độ lái': 'Eco / Comfort / Dynamic',
          'Số chỗ ngồi': '5'
        },
        interior: {
          'Chất liệu ghế': 'Da',
          'Ghế lái': 'Chỉnh điện 8 hướng',
          'Ghế phụ': 'Chỉnh cơ 6 hướng',
          'Vô lăng': 'Bọc da, chỉnh cơ 4 hướng',
          'Điều hòa': '2 vùng độc lập, lọc không khí CN-95',
          'Màn hình giải trí': '12,8 inch',
          'Màn hình táp-lô': 'Kỹ thuật số 12,3 inch',
          'Hệ thống loa': '8 loa',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': 'Toàn cảnh',
          'Hàng ghế thứ hai': 'Gập theo tỷ lệ 60:40',
          'Sạc không dây': false,
          'Ghế lái thông gió': false,
          'Sưởi ghế trước': false
        },
        features: {
          'Túi khí': 'Trước, hông trước và rèm bên',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera 360': true,
          'Cảm biến đỗ xe': 'Sau',
          'Cảm biến áp suất lốp TPMS': 'Trực tiếp',
          'Phanh tay điện tử & Auto Hold': true,
          'Cruise control': 'Thích ứng, có hỗ trợ ùn tắc (ACCQA, TJA)',
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': 'Có, nhận diện người đi bộ',
          'Cảnh báo điểm mù': false,
          'Đèn pha': 'Full LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Cốp điện': true,
          'Kết nối Apple CarPlay / Android Auto': 'Không dây'
        }
      },
      'Hyper Pro': {
        specs: {
          'Động cơ': 'Drive-E 2.0TD T4 Evo Turbo',
          'Công suất': '215 hp @ 5.000 rpm',
          'Mô-men xoắn': '325 Nm @ 1.800-4.500 rpm',
          'Tốc độ tối đa': '210 km/h',
          'Hộp số': 'Tự động 8 cấp (8AT)',
          'Dẫn động': 'FWD (cầu trước)',
          'Kích thước D x R x C': '4.549 x 1.860 x 1.689 mm',
          'Chiều dài cơ sở': '2.734 mm',
          'Khoảng sáng gầm': '213 mm',
          'Trọng lượng không tải': '1.710 kg',
          'Mức tiêu hao nhiên liệu': '7,89 L/100km (hỗn hợp), 9,30 L/100km (đô thị), 7,08 L/100km (ngoài đô thị)',
          'Hệ thống treo (trước / sau)': 'MacPherson + thanh cân bằng / Đa liên kết độc lập + thanh cân bằng',
          'Trợ lực lái': 'Điện (EPAS)',
          'Mâm / lốp': '235/45 R20',
          'Chế độ lái': 'Eco / Comfort / Dynamic',
          'Số chỗ ngồi': '5'
        },
        interior: {
          'Chất liệu ghế': 'Da cao cấp',
          'Ghế lái': 'Chỉnh điện 12 hướng, nhớ vị trí, thông gió',
          'Ghế phụ': 'Chỉnh điện 8 hướng',
          'Vô lăng': 'Bọc da cao cấp, chỉnh cơ 4 hướng',
          'Điều hòa': '2 vùng độc lập, lọc không khí CN-95',
          'Màn hình giải trí': '12,8 inch',
          'Màn hình táp-lô': 'Kỹ thuật số 12,3 inch',
          'Hệ thống loa': '10 loa Harman Kardon Infinity',
          'Cửa gió hàng ghế sau': true,
          'Cửa sổ trời': 'Toàn cảnh',
          'Hàng ghế thứ hai': 'Gập theo tỷ lệ 60:40',
          'Sạc không dây': true,
          'Ghế lái thông gió': true,
          'Sưởi ghế trước': true,
          'Đèn viền nội thất': true
        },
        features: {
          'Túi khí': 'Trước, hông trước và rèm bên',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera 360': true,
          'Cảm biến đỗ xe': 'Trước và sau',
          'Cảm biến áp suất lốp TPMS': 'Trực tiếp',
          'Phanh tay điện tử & Auto Hold': true,
          'Cruise control': 'Thích ứng, có hỗ trợ ùn tắc (ACCQA, TJA)',
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': 'Có, nhận diện người đi bộ',
          'Cảnh báo điểm mù': true,
          'Đèn pha': 'Full LED, thích ứng AFS, tự điều chỉnh độ cao',
          'Chìa khóa thông minh & Start/Stop': true,
          'Cốp điện': true,
          'Kết nối Apple CarPlay / Android Auto': 'Không dây',
          'Hỗ trợ lái ADAS': '20 chức năng, thêm RCTA, CVW, LCW, đỗ xe bán tự động SAP+'
        }
      }
    }
  },

  'lynkco/900': {
    source: { name: 'Brochure Lynk & Co 900 (bản số)', url: 'https://lynkco.com.vn/storage/san-pham/lc900/lynk-co-900-brochure-digital.pdf' },
    variants: {
      '900': {
        specs: {
          'Kích thước D x R x C': '5.240 x 1.999 x 1.810 mm',
          'Chiều dài cơ sở': '3.160 mm',
          'Động cơ': 'Hybrid điện thông minh EM-P (plug-in hybrid), nền tảng SPA Evo',
          'Mô-men xoắn': '1.038 Nm (hiệu năng kết hợp tối đa)',
          'Tăng tốc 0-100 km/h': '4,9 giây',
          'Dung lượng pin': '50 kWh',
          'Quãng đường một lần sạc': '170 km (NEDC, thuần điện)',
          'Sạc nhanh': '17 phút (20% lên 80%)',
          'Quãng đường phanh 100-0 km/h': '33,95 m',
          'Hệ thống treo (trước / sau)': 'Magic Carpet thông minh, khí nén hai buồng kín',
          'Tải trọng giá nóc': '300 kg'
        },
        interior: {
          'Chất liệu ghế': 'Da Nappa cao cấp, đục lỗ thoáng khí (cả 3 hàng)',
          'Hàng ghế thứ hai': 'Xoay điện 90° / 180°',
          'Màn hình giải trí': '30 inch, độ phân giải 6K (trung tâm)',
          'Màn hình táp-lô': 'LCD 12,66 inch',
          'Màn hình HUD': 'AR-HUD 95 inch',
          'Hệ thống loa': '31 loa Harman Kardon, Dolby Atmos 7.1.1',
          'Cửa sổ trời': 'Toàn cảnh',
          'Màn hình hàng ghế sau': 'Treo trần 30 inch + màn điều khiển 6 inch',
          'Kết nối': 'Flyme Link, HUAWEI HiCar, CarLink, CarPlay',
          'Chip xử lý': 'Qualcomm Snapdragon 8295 kép'
        },
        features: {
          'Túi khí': '11 túi khí',
          'Phanh tự động khẩn cấp': 'Hoạt động đến 130 km/h',
          'Cân bằng điện tử ESC': true,
          'Cập nhật phần mềm từ xa OTA': true
        }
      }
    }
  },

  'lynkco/08': {
    source: { name: 'Brochure Lynk & Co 08 EM-P', url: 'https://lynkco.com.vn/storage/san-pham/brochure-08-vn.pdf' },
    variants: {
      'EM-P Pro': {
        specs: {
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.820 x 1.915 x 1.685 mm',
          'Chiều dài cơ sở': '2.848 mm',
          'Khoảng sáng gầm': '186 mm',
          'Trọng lượng không tải': '2.112 kg',
          'Dung tích khoang hành lý': '545 L (gập hàng ghế hai: 1.277 L)',
          'Dung tích bình xăng': '60 L',
          'Động cơ': 'Plug-in hybrid EM-P: xăng 1.5L Turbo (BHE15) + mô-tơ điện PMSM',
          'Công suất': '345 hp (257 kW) kết hợp; xăng 137 hp, điện 208 hp',
          'Mô-men xoắn': '580 Nm kết hợp; xăng 230 Nm, điện 350 Nm',
          'Hộp số': 'Hybrid chuyên dụng 3DHT Evo',
          'Dẫn động': 'FWD (cầu trước)',
          'Tốc độ tối đa': '185 km/h',
          'Tăng tốc 0-100 km/h': '6,75 giây',
          'Loại pin': 'NCM (Niken-Cobalt-Mangan)',
          'Dung lượng pin': '39,6 kWh',
          'Quãng đường một lần sạc': '200 km thuần điện (WLTC)',
          'Mức tiêu hao nhiên liệu': '1,38 L/100km (hỗn hợp)',
          'Sạc nhanh': '28 phút (30% lên 80%, DC 85 kW)',
          'Hệ thống treo (trước / sau)': 'Độc lập MacPherson / Độc lập đa liên kết',
          'Phanh': 'Đĩa thông gió / Đĩa đặc',
          'Mâm / lốp': '235/55 R19'
        },
        interior: {
          'Chất liệu ghế': 'Da Microfiber',
          'Ghế lái': 'Chỉnh điện 12 hướng, nhớ vị trí, làm mát',
          'Ghế phụ': 'Chỉnh điện 10 hướng, nhớ vị trí, làm mát',
          'Điều hòa': '2 vùng độc lập, lọc không khí CN95',
          'Màn hình giải trí': '15,4 inch, độ phân giải 2,5K',
          'Màn hình táp-lô': 'Kỹ thuật số 10,2 inch',
          'Hệ thống loa': '23 loa Harman Kardon, 1.600 W, 7.1.4 kênh',
          'Cửa sổ trời': 'Toàn cảnh, mở được',
          'Sạc không dây': '15 W',
          'Cửa gió hàng ghế sau': true,
          'Vô lăng': 'Microfiber vinyl, đa chức năng',
          'Sưởi ghế trước': false,
          'Ghế massage': false,
          'Hàng ghế thứ hai': 'Gập 40:60, tựa tay trung tâm'
        },
        features: {
          'Túi khí': '7 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera 360': true,
          'Cảm biến đỗ xe': 'Trước và sau',
          'Cảm biến áp suất lốp TPMS': 'Trực tiếp',
          'Phanh tay điện tử & Auto Hold': true,
          'Cruise control': 'Thích ứng toàn dải tốc độ (ACC / FSRA)',
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': true,
          'Cảnh báo điểm mù': true,
          'Đèn pha': 'LED chiếu gần/xa',
          'Cốp điện': true,
          'Chìa khóa thông minh & Start/Stop': true,
          'Kết nối Apple CarPlay / Android Auto': true,
          'Hỗ trợ lái ADAS': '25 tính năng an toàn chủ động'
        }
      },
      'EM-P Halo': {
        specs: {
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.820 x 1.915 x 1.685 mm',
          'Chiều dài cơ sở': '2.848 mm',
          'Khoảng sáng gầm': '186 mm',
          'Trọng lượng không tải': '2.112 kg',
          'Dung tích khoang hành lý': '545 L (gập hàng ghế hai: 1.277 L)',
          'Dung tích bình xăng': '60 L',
          'Động cơ': 'Plug-in hybrid EM-P: xăng 1.5L Turbo (BHE15) + mô-tơ điện PMSM',
          'Công suất': '345 hp (257 kW) kết hợp; xăng 137 hp, điện 208 hp',
          'Mô-men xoắn': '580 Nm kết hợp; xăng 230 Nm, điện 350 Nm',
          'Hộp số': 'Hybrid chuyên dụng 3DHT Evo',
          'Dẫn động': 'FWD (cầu trước)',
          'Tốc độ tối đa': '185 km/h',
          'Tăng tốc 0-100 km/h': '6,75 giây',
          'Loại pin': 'NCM (Niken-Cobalt-Mangan)',
          'Dung lượng pin': '39,6 kWh',
          'Quãng đường một lần sạc': '200 km thuần điện (WLTC)',
          'Mức tiêu hao nhiên liệu': '1,38 L/100km (hỗn hợp)',
          'Sạc nhanh': '28 phút (30% lên 80%, DC 85 kW)',
          'Hệ thống treo (trước / sau)': 'Độc lập MacPherson / Độc lập đa liên kết',
          'Phanh': 'Đĩa thông gió / Đĩa đặc',
          'Mâm / lốp': '255/40 R21'
        },
        interior: {
          'Chất liệu ghế': 'Da Nappa',
          'Ghế lái': 'Chỉnh điện 12 hướng, nhớ vị trí, làm mát, sưởi, massage',
          'Ghế phụ': 'Chỉnh điện 10 hướng, nhớ vị trí, làm mát, sưởi, massage',
          'Điều hòa': '3 vùng độc lập, lọc không khí CN95',
          'Màn hình giải trí': '15,4 inch, độ phân giải 2,5K',
          'Màn hình táp-lô': 'Kỹ thuật số 10,2 inch',
          'Hệ thống loa': '23 loa Harman Kardon, 1.600 W, 7.1.4 kênh',
          'Cửa sổ trời': 'Toàn cảnh, mở được',
          'Sạc không dây': '15 W',
          'Cửa gió hàng ghế sau': true,
          'Vô lăng': 'Microfiber vinyl, đa chức năng, có sưởi',
          'Sưởi ghế trước': true,
          'Ghế massage': true,
          'Hàng ghế thứ hai': 'Gập 40:60, tựa tay trung tâm'
        },
        features: {
          'Túi khí': '7 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera 360': true,
          'Cảm biến đỗ xe': 'Trước và sau',
          'Cảm biến áp suất lốp TPMS': 'Trực tiếp',
          'Phanh tay điện tử & Auto Hold': true,
          'Cruise control': 'Thích ứng toàn dải tốc độ (ACC / FSRA)',
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': true,
          'Cảnh báo điểm mù': true,
          'Đèn pha': 'LED Matrix, thích ứng, tự điều chỉnh góc chiếu',
          'Cốp điện': true,
          'Chìa khóa thông minh & Start/Stop': true,
          'Kết nối Apple CarPlay / Android Auto': true,
          'Hỗ trợ lái ADAS': '25 tính năng an toàn chủ động'
        }
      }
    }
  },

  'lynkco/02': {
    source: { name: 'Brochure Lynk & Co 02', url: 'https://lynkco.com.vn/storage/san-pham/lc02/lynk-co-02-brochure.pdf' },
    variants: {
      'Pro': {
        specs: {
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.460 x 1.845 x 1.573 mm',
          'Chiều dài cơ sở': '2.755 mm',
          'Khoảng sáng gầm': '191 mm',
          'Trọng lượng không tải': '1.820 kg',
          'Dung tích khoang hành lý': '350-450 L',
          'Động cơ': '1 mô-tơ điện, dẫn động cầu sau',
          'Công suất': '200 kW (268 hp)',
          'Mô-men xoắn': '343 Nm',
          'Tốc độ tối đa': '180 km/h',
          'Tăng tốc 0-100 km/h': '5,5 giây',
          'Dẫn động': 'RWD (cầu sau)',
          'Loại pin': 'NCM',
          'Dung lượng pin': '66 kWh',
          'Quãng đường một lần sạc': '435 km (WLTP)',
          'Mức tiêu hao điện năng': '17,6 kWh/100km',
          'Sạc nhanh': '30 phút (10% lên 80%, DC 150 kW)',
          'Hệ thống treo (trước / sau)': 'MacPherson / Liên kết đa điểm',
          'Phanh': 'Đĩa tản nhiệt / Đĩa tản nhiệt, tích hợp Auto Hold',
          'Mâm / lốp': '235/50 R19 (Kumho)'
        },
        interior: {
          'Chất liệu ghế': 'Da nhân tạo',
          'Ghế lái': 'Chỉnh điện 6 hướng, thông gió, nhớ vị trí',
          'Ghế phụ': 'Chỉnh điện 6 hướng, thông gió',
          'Vô lăng': 'Da nhân tạo, chỉnh 4 hướng',
          'Điều hòa': 'Tự động 2 vùng',
          'Màn hình giải trí': '15,4 inch, 2,5K',
          'Màn hình táp-lô': '10,2 inch',
          'Hệ thống loa': '8 loa',
          'Cửa sổ trời': 'Toàn cảnh, cách nhiệt',
          'Sạc không dây': false,
          'Đèn viền nội thất': false,
          'Hàng ghế thứ hai': 'Chia 60:40'
        },
        features: {
          'Túi khí': '7 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera 360': true,
          'Cảm biến đỗ xe': 'Trước và sau',
          'Cảm biến áp suất lốp TPMS': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cruise control': 'Thích ứng (ACC)',
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': true,
          'Cảnh báo điểm mù': true,
          'Đèn pha': 'LED',
          'Cốp điện': true,
          'Chìa khóa thông minh & Start/Stop': true,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      },
      'Halo': {
        specs: {
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.460 x 1.845 x 1.573 mm',
          'Chiều dài cơ sở': '2.755 mm',
          'Khoảng sáng gầm': '191 mm',
          'Trọng lượng không tải': '1.820 kg',
          'Dung tích khoang hành lý': '350-450 L',
          'Động cơ': '1 mô-tơ điện, dẫn động cầu sau',
          'Công suất': '200 kW (268 hp)',
          'Mô-men xoắn': '343 Nm',
          'Tốc độ tối đa': '180 km/h',
          'Tăng tốc 0-100 km/h': '5,5 giây',
          'Dẫn động': 'RWD (cầu sau)',
          'Loại pin': 'NCM',
          'Dung lượng pin': '66 kWh',
          'Quãng đường một lần sạc': '435 km (WLTP)',
          'Mức tiêu hao điện năng': '17,6 kWh/100km',
          'Sạc nhanh': '30 phút (10% lên 80%, DC 150 kW)',
          'Hệ thống treo (trước / sau)': 'MacPherson / Liên kết đa điểm',
          'Phanh': 'Đĩa tản nhiệt / Đĩa tản nhiệt, tích hợp Auto Hold',
          'Mâm / lốp': '235/50 R19 (Continental)'
        },
        interior: {
          'Chất liệu ghế': 'Da nhân tạo',
          'Ghế lái': 'Chỉnh điện 6 hướng, thông gió, nhớ vị trí',
          'Ghế phụ': 'Chỉnh điện 6 hướng, thông gió',
          'Vô lăng': 'Da nhân tạo, chỉnh 4 hướng',
          'Điều hòa': 'Tự động 2 vùng',
          'Màn hình giải trí': '15,4 inch, 2,5K',
          'Màn hình táp-lô': '10,2 inch',
          'Hệ thống loa': '14 loa Harman Kardon, 1.600 W, 7.1 kênh',
          'Cửa sổ trời': 'Toàn cảnh, cách nhiệt',
          'Sạc không dây': '15 W x 2',
          'Đèn viền nội thất': true,
          'Hàng ghế thứ hai': 'Chia 60:40, tích hợp tựa tay'
        },
        features: {
          'Túi khí': '7 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera 360': true,
          'Cảm biến đỗ xe': 'Trước và sau',
          'Cảm biến áp suất lốp TPMS': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cruise control': 'Thích ứng (ACC)',
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': true,
          'Cảnh báo điểm mù': true,
          'Đèn pha': 'LED',
          'Cốp điện': true,
          'Chìa khóa thông minh & Start/Stop': true,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      }
    }
  },

  'lynkco/06': {
    source: { name: 'Brochure Lynk & Co 06', url: 'https://lynkco.com.vn/storage/san-pham/06-brochure-vn.pdf' },
    variants: {
      'Hyper Pro': {
        specs: {
          'Số chỗ ngồi': '5',
          'Kích thước D x R x C': '4.340 x 1.820 x 1.625 mm',
          'Chiều dài cơ sở': '2.640 mm',
          'Khoảng sáng gầm': '172 mm',
          'Trọng lượng không tải': '1.465 kg',
          'Dung tích khoang hành lý': '280 L (gập hàng ghế hai: 1.025 L)',
          'Dung tích bình xăng': '51 L',
          'Động cơ': 'BHE15 1.5L Turbo I4',
          'Công suất': '178 hp @ 5.500 rpm',
          'Mô-men xoắn': '290 Nm @ 2.000-3.500 rpm',
          'Hộp số': 'Ly hợp kép 7 cấp ướt (7DCT)',
          'Dẫn động': 'FWD (cầu trước)',
          'Tốc độ tối đa': '195 km/h',
          'Mức tiêu hao nhiên liệu': '6,98 L/100km (hỗn hợp), 8,87 L/100km (đô thị), 5,87 L/100km (ngoài đô thị) - WLTC',
          'Hệ thống treo (trước / sau)': 'MacPherson + thanh cân bằng / Đa điểm độc lập + thanh cân bằng',
          'Phanh': 'Đĩa thông gió / Đĩa',
          'Mâm / lốp': '215/55 R18',
          'Chế độ lái': 'Eco / Comfort / Sports / Intelligent'
        },
        interior: {
          'Chất liệu ghế': 'Da',
          'Ghế lái': 'Chỉnh điện 6 hướng',
          'Ghế phụ': 'Chỉnh cơ 4 hướng',
          'Vô lăng': 'Bọc da phủ tinh thể bạc, chỉnh cơ 4 hướng, lẫy chuyển số',
          'Điều hòa': 'Tự động 2 vùng, lọc không khí chủ động',
          'Màn hình giải trí': '12,3 inch',
          'Màn hình táp-lô': 'HD 10,25 inch',
          'Cửa sổ trời': 'Toàn cảnh',
          'Cửa gió hàng ghế sau': true,
          'Hàng ghế thứ hai': 'Gập 60:40, tựa tay tích hợp 2 khay ly',
          'Cổng USB': '2 trước, 2 sau'
        },
        features: {
          'Túi khí': 'Trước, hông và rèm',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera 360': true,
          'Cảm biến đỗ xe': 'Sau (4 cảm biến)',
          'Cảm biến áp suất lốp TPMS': 'Trực tiếp',
          'Cruise control': 'Thích ứng (ACCQA) + ICC',
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': 'Có, nhận diện người đi bộ',
          'Cảnh báo điểm mù': true,
          'Đèn pha': 'Full LED, tự động, điều khiển chùm sáng chủ động',
          'Chìa khóa thông minh & Start/Stop': true,
          'Kết nối Apple CarPlay / Android Auto': true
        }
      }
    }
  },

  'lynkco/09': {
    source: { name: 'Brochure Lynk & Co 09', url: 'https://lynkco.com.vn/storage/san-pham/09-brochure-full.pdf' },
    variants: {
      '09': {
        specs: {
          'Số chỗ ngồi': '7',
          'Kích thước D x R x C': '5.042 x 1.977 x 1.780 mm',
          'Chiều dài cơ sở': '2.984 mm',
          'Khoảng sáng gầm': '221 mm',
          'Trọng lượng không tải': '2.120 kg',
          'Động cơ': 'Drive-E 2.0TD T5 Turbo + BSG (mild hybrid 48V)',
          'Công suất': '254 hp (251 hp theo PS) @ 5.500 rpm',
          'Mô-men xoắn': '350 Nm @ 1.800-4.800 rpm',
          'Hộp số': 'Tự động 8 cấp',
          'Dẫn động': 'AWD (4 bánh toàn thời gian)',
          'Tốc độ tối đa': '215 km/h',
          'Mức tiêu hao nhiên liệu': '8,9 L/100km (WLTC)',
          'Hệ thống treo (trước / sau)': 'Độc lập tay đòn kép / Độc lập liên kết đa điểm',
          'Mâm / lốp': '275/45 R20',
          'Chế độ lái': 'Eco / Comfort / Sport / Individual; địa hình Snow / Sand / Mud / Rock'
        },
        interior: {
          'Chất liệu ghế': 'Da Nappa',
          'Ghế lái': 'Chỉnh điện 8 hướng + 4 hướng đệm lưng, nhớ vị trí, làm mát',
          'Ghế phụ': 'Chỉnh điện 8 hướng + 4 hướng đệm lưng, làm mát',
          'Vô lăng': 'Da Nappa, chỉnh cơ 4 hướng',
          'Điều hòa': 'Tự động 2 vùng, lọc PM2.5, cửa gió hàng ghế 2 và 3',
          'Màn hình giải trí': 'Đa tầng: 12 inch + 6 inch',
          'Màn hình táp-lô': 'HD 12,3 inch',
          'Màn hình HUD': true,
          'Hệ thống loa': '14 loa Bose',
          'Cửa sổ trời': 'Toàn cảnh',
          'Sạc không dây': true,
          'Đèn viền nội thất': true,
          'Hàng ghế thứ hai': 'Gập 40:60, tựa tay tích hợp 2 khay ly'
        },
        features: {
          'Túi khí': 'Trước, hông trước và rèm',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Camera 360': 'Có, kèm hỗ trợ quan sát gầm xe 180°',
          'Cảm biến đỗ xe': 'Trước và sau',
          'Cảm biến áp suất lốp TPMS': 'Trực tiếp',
          'Phanh tay điện tử & Auto Hold': true,
          'Cruise control': 'Thích ứng (ACCQA) + hỗ trợ cao tốc HWA',
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': 'Có, nhận diện người đi bộ',
          'Cảnh báo điểm mù': true,
          'Đèn pha': 'LED Pixel, thích ứng AFS',
          'Cốp điện': true,
          'Chìa khóa thông minh & Start/Stop': true,
          'Kết nối Apple CarPlay / Android Auto': true,
          'Hỗ trợ lái ADAS': 'Đầy đủ (ACCQA, HWA, LKA, ELKA Plus, LCA, RCTA, FCTA, APA...)'
        }
      }
    }
  },

  'geely/coolray': {
    source: { name: 'Brochure Geely Coolray 2026', url: 'https://geely.vn/san-pham/coolray/' },
    variants: {
      'Executive': {
        'specs': {
          'Kích thước D x R x C': '4.380 x 1.810 x 1.615 mm',
          'Chiều dài cơ sở': '2.600 mm',
          'Số chỗ ngồi': '5',
          'Động cơ': '1.5L Turbo BHE15-EFZ, 4 xi-lanh',
          'Công suất': '174 PS @ 5.500 rpm',
          'Mô-men xoắn': '290 Nm @ 2.000-3.500 rpm',
          'Hộp số': 'Ly hợp kép 7 cấp (7DCT)',
          'Dẫn động': 'FWD (cầu trước)',
          'Tăng tốc 0-100 km/h': '7,6 giây',
          'Chế độ lái': 'Eco / Comfort / Sport / Adaptive',
          'Hệ thống treo (trước / sau)': 'MacPherson / Thanh xoắn',
          'Dung tích khoang hành lý': '593 L (gập hàng ghế sau: 1.054 L)',
          'Mâm / lốp': '215/60 R17'
        },
        'interior': {
          'Chất liệu ghế': 'Da',
          'Màn hình táp-lô': '8,8 inch',
          'Hệ thống loa': '6 loa',
          'Điều hòa': 'Tự động',
          'Cửa gió hàng ghế sau': true,
          'Màn hình giải trí': '8 inch',
          'Vô lăng': 'Đa chức năng (không bọc da)',
          'Sạc không dây': false,
          'Cửa sổ trời': false,
          'Ghế lái': 'Chỉnh cơ'
        },
        'features': {
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cảm biến đỗ xe': 'Có',
          'Chìa khóa thông minh & Start/Stop': true,
          'Đèn pha': 'LED, tự động',
          'Kết nối Apple CarPlay / Android Auto': true,
          'Túi khí': '2 túi khí',
          'Cruise control': 'Có',
          'Camera lùi': true,
          'Hỗ trợ giữ làn': false,
          'Phanh tự động khẩn cấp': false,
          'Cảnh báo điểm mù': false,
          'Cốp điện': false
        }
      },
      'Premium': {
        'specs': {
          'Kích thước D x R x C': '4.380 x 1.810 x 1.615 mm',
          'Chiều dài cơ sở': '2.600 mm',
          'Số chỗ ngồi': '5',
          'Động cơ': '1.5L Turbo BHE15-EFZ, 4 xi-lanh',
          'Công suất': '174 PS @ 5.500 rpm',
          'Mô-men xoắn': '290 Nm @ 2.000-3.500 rpm',
          'Hộp số': 'Ly hợp kép 7 cấp (7DCT)',
          'Dẫn động': 'FWD (cầu trước)',
          'Tăng tốc 0-100 km/h': '7,6 giây',
          'Chế độ lái': 'Eco / Comfort / Sport / Adaptive',
          'Hệ thống treo (trước / sau)': 'MacPherson / Thanh xoắn',
          'Dung tích khoang hành lý': '593 L (gập hàng ghế sau: 1.054 L)',
          'Mâm / lốp': '215/55 R18'
        },
        'interior': {
          'Chất liệu ghế': 'Da',
          'Màn hình táp-lô': '8,8 inch',
          'Hệ thống loa': '6 loa',
          'Điều hòa': 'Tự động',
          'Cửa gió hàng ghế sau': true,
          'Màn hình giải trí': '14,6 inch',
          'Vô lăng': 'Bọc da, đa chức năng',
          'Sạc không dây': false,
          'Cửa sổ trời': false,
          'Ghế lái': 'Chỉnh cơ'
        },
        'features': {
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cảm biến đỗ xe': 'Có',
          'Chìa khóa thông minh & Start/Stop': true,
          'Đèn pha': 'LED, tự động',
          'Kết nối Apple CarPlay / Android Auto': true,
          'Túi khí': '4 túi khí',
          'Cruise control': 'Có',
          'Camera lùi': true,
          'Hỗ trợ giữ làn': false,
          'Phanh tự động khẩn cấp': false,
          'Cảnh báo điểm mù': false,
          'Cốp điện': false
        }
      },
      'Flagship': {
        'specs': {
          'Kích thước D x R x C': '4.380 x 1.810 x 1.615 mm',
          'Chiều dài cơ sở': '2.600 mm',
          'Số chỗ ngồi': '5',
          'Động cơ': '1.5L Turbo BHE15-EFZ, 4 xi-lanh',
          'Công suất': '174 PS @ 5.500 rpm',
          'Mô-men xoắn': '290 Nm @ 2.000-3.500 rpm',
          'Hộp số': 'Ly hợp kép 7 cấp (7DCT)',
          'Dẫn động': 'FWD (cầu trước)',
          'Tăng tốc 0-100 km/h': '7,6 giây',
          'Chế độ lái': 'Eco / Comfort / Sport / Adaptive',
          'Hệ thống treo (trước / sau)': 'MacPherson / Thanh xoắn',
          'Dung tích khoang hành lý': '593 L (gập hàng ghế sau: 1.054 L)',
          'Mâm / lốp': '215/55 R18'
        },
        'interior': {
          'Chất liệu ghế': 'Da',
          'Màn hình táp-lô': '8,8 inch',
          'Hệ thống loa': '6 loa',
          'Điều hòa': 'Tự động',
          'Cửa gió hàng ghế sau': true,
          'Màn hình giải trí': '14,6 inch',
          'Vô lăng': 'Bọc da, đa chức năng',
          'Sạc không dây': '15 W',
          'Cửa sổ trời': 'Panorama',
          'Ghế lái': 'Chỉnh điện, làm mát',
          'Đèn viền nội thất': '72 màu'
        },
        'features': {
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cảm biến đỗ xe': 'Có',
          'Chìa khóa thông minh & Start/Stop': true,
          'Đèn pha': 'LED, tự động',
          'Kết nối Apple CarPlay / Android Auto': true,
          'Túi khí': '6 túi khí',
          'Cruise control': 'Thích ứng (ICC)',
          'Camera 360': 'Camera 540°',
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': true,
          'Cảnh báo điểm mù': true,
          'Cốp điện': true
        }
      }
    }
  },

  'geely/okavango': {
    source: { name: 'Brochure Geely Okavango', url: 'https://geely.vn/san-pham/okavango/' },
    variants: {
      'Executive': {
        'specs': {
          'Kích thước D x R x C': '4.827 x 1.902 x 1.757 mm',
          'Chiều dài cơ sở': '2.804 mm',
          'Số chỗ ngồi': '7',
          'Động cơ': '1.5L Turbo BHE15-EFZ',
          'Công suất': '174 PS @ 5.500 rpm',
          'Mô-men xoắn': '290 Nm @ 2.000-3.500 rpm',
          'Hộp số': 'Ly hợp kép 7 cấp (7DCT)',
          'Hệ thống treo (trước / sau)': 'MacPherson / Đa liên kết',
          'Mâm / lốp': '235/50 R19',
          'Chế độ lái': 'Eco / Comfort / Sport'
        },
        'interior': {
          'Chất liệu ghế': 'Da',
          'Màn hình táp-lô': 'Kỹ thuật số 10,2 inch',
          'Màn hình giải trí': '14,6 inch',
          'Hệ thống loa': '6 loa',
          'Điều hòa': 'Tự động 2 vùng độc lập',
          'Cửa gió hàng ghế sau': 'Hàng ghế 2 và 3',
          'Sạc không dây': true,
          'Ghế lái': 'Chỉnh điện 6 hướng',
          'Ghế phụ': 'Chỉnh cơ',
          'Ghế làm mát': false
        },
        'features': {
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cảm biến áp suất lốp TPMS': true,
          'Cảm biến đỗ xe': 'Sau',
          'Chìa khóa thông minh & Start/Stop': true,
          'Đèn pha': 'LED, tự động',
          'Kết nối Apple CarPlay / Android Auto': true,
          'Túi khí': '4 túi khí',
          'Camera 360': false,
          'Camera lùi': true,
          'Phanh tự động khẩn cấp': false,
          'Hỗ trợ giữ làn': false,
          'Cảnh báo điểm mù': false,
          'Cốp điện': false
        }
      },
      'Premium': {
        'specs': {
          'Kích thước D x R x C': '4.827 x 1.902 x 1.757 mm',
          'Chiều dài cơ sở': '2.804 mm',
          'Số chỗ ngồi': '7',
          'Động cơ': '1.5L Turbo BHE15-EFZ',
          'Công suất': '174 PS @ 5.500 rpm',
          'Mô-men xoắn': '290 Nm @ 2.000-3.500 rpm',
          'Hộp số': 'Ly hợp kép 7 cấp (7DCT)',
          'Hệ thống treo (trước / sau)': 'MacPherson / Đa liên kết',
          'Mâm / lốp': '235/50 R19',
          'Chế độ lái': 'Eco / Comfort / Sport'
        },
        'interior': {
          'Chất liệu ghế': 'Da',
          'Màn hình táp-lô': 'Kỹ thuật số 10,2 inch',
          'Màn hình giải trí': '14,6 inch',
          'Hệ thống loa': '6 loa',
          'Điều hòa': 'Tự động 2 vùng độc lập',
          'Cửa gió hàng ghế sau': 'Hàng ghế 2 và 3',
          'Sạc không dây': true,
          'Ghế lái': 'Chỉnh điện 6 hướng, nhớ vị trí, làm mát',
          'Ghế phụ': 'Chỉnh điện 4 hướng, làm mát',
          'Ghế làm mát': true
        },
        'features': {
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cảm biến áp suất lốp TPMS': true,
          'Cảm biến đỗ xe': 'Sau',
          'Chìa khóa thông minh & Start/Stop': true,
          'Đèn pha': 'LED, tự động',
          'Kết nối Apple CarPlay / Android Auto': true,
          'Túi khí': '6 túi khí',
          'Camera 360': 'Camera 540°',
          'Phanh tự động khẩn cấp': true,
          'Hỗ trợ giữ làn': true,
          'Cảnh báo điểm mù': true,
          'Cốp điện': true,
          'Hỗ trợ lái ADAS': 'L2: ICC, LKA, BSD, DOW, TSR, IHBC'
        }
      }
    }
  },

  'geely/ex5': {
    source: { name: 'Brochure Geely EX5', url: 'https://drive.google.com/drive/folders/1UzbYPWN0w6gpmxvyCLbM0ebh8Je3x-Gw' },
    variants: {
      'Pro': {
        'specs': {
          'Kích thước D x R x C': '4.615 x 1.901 x 1.670 mm',
          'Chiều dài cơ sở': '2.750 mm',
          'Khoảng sáng gầm': '173 mm',
          'Số chỗ ngồi': '5',
          'Động cơ': '1 mô-tơ điện PMSM, hệ truyền động 11-in-1',
          'Công suất': '214 hp',
          'Mô-men xoắn': '320 Nm',
          'Dẫn động': 'FWD (cầu trước)',
          'Loại pin': 'LFP',
          'Dung lượng pin': '60,22 kWh',
          'Quãng đường một lần sạc': '495 km (NEDC)',
          'Sạc nhanh': 'Khoảng 20 phút (30% lên 80%), DC tối đa 100 kW; AC 11 kW',
          'Chế độ lái': 'Thể thao / Bình thường / Tiết kiệm',
          'Hệ thống treo (trước / sau)': 'MacPherson / Liên kết đa điểm',
          'Mâm / lốp': '225/55 R18'
        },
        'interior': {
          'Chất liệu ghế': 'PVC',
          'Màn hình giải trí': '15,4 inch (2,5K)',
          'Màn hình táp-lô': '10,2 inch',
          'Sạc không dây': '15 W',
          'Điều hòa': 'Tự động, lọc không khí / vi khuẩn',
          'Ghế trước sưởi & thông gió': true,
          'Vô lăng': 'Bọc da, trợ lực điện',
          'Ghế lái': 'Chỉnh điện 6 hướng',
          'Ghế phụ': 'Chỉnh cơ',
          'Hệ thống loa': '6 loa',
          'Cửa sổ trời': false,
          'Màn hình HUD': false,
          'Đèn viền nội thất': false
        },
        'features': {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Camera 360': true,
          'Cảm biến đỗ xe': 'Trước và sau',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED, tự động',
          'Kết nối Apple CarPlay / Android Auto': true,
          'Chìa khóa thông minh & Start/Stop': true,
          'Cruise control': 'Có',
          'Phanh tự động khẩn cấp': false,
          'Hỗ trợ giữ làn': false,
          'Cảnh báo điểm mù': false,
          'Cốp điện': false
        }
      },
      'Max': {
        'specs': {
          'Kích thước D x R x C': '4.615 x 1.901 x 1.670 mm',
          'Chiều dài cơ sở': '2.750 mm',
          'Khoảng sáng gầm': '173 mm',
          'Số chỗ ngồi': '5',
          'Động cơ': '1 mô-tơ điện PMSM, hệ truyền động 11-in-1',
          'Công suất': '214 hp',
          'Mô-men xoắn': '320 Nm',
          'Dẫn động': 'FWD (cầu trước)',
          'Loại pin': 'LFP',
          'Dung lượng pin': '60,22 kWh',
          'Quãng đường một lần sạc': '495 km (NEDC)',
          'Sạc nhanh': 'Khoảng 20 phút (30% lên 80%), DC tối đa 100 kW; AC 11 kW',
          'Chế độ lái': 'Thể thao / Bình thường / Tiết kiệm',
          'Hệ thống treo (trước / sau)': 'MacPherson / Liên kết đa điểm',
          'Mâm / lốp': '225/55 R18'
        },
        'interior': {
          'Chất liệu ghế': 'PVC',
          'Màn hình giải trí': '15,4 inch (2,5K)',
          'Màn hình táp-lô': '10,2 inch',
          'Sạc không dây': '15 W',
          'Điều hòa': 'Tự động, lọc không khí / vi khuẩn',
          'Ghế trước sưởi & thông gió': true,
          'Vô lăng': 'Bọc da, trợ lực điện',
          'Ghế lái': 'Chỉnh điện 6 hướng, nhớ vị trí, massage',
          'Ghế phụ': 'Chỉnh điện 4 hướng',
          'Hệ thống loa': '16 loa Flyme',
          'Cửa sổ trời': 'Panorama',
          'Màn hình HUD': true,
          'Đèn viền nội thất': '256 màu'
        },
        'features': {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Camera 360': true,
          'Cảm biến đỗ xe': 'Trước và sau',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED, tự động',
          'Kết nối Apple CarPlay / Android Auto': true,
          'Chìa khóa thông minh & Start/Stop': true,
          'Cruise control': 'Thích ứng (ACC) + hỗ trợ cao tốc ICA',
          'Phanh tự động khẩn cấp': true,
          'Hỗ trợ giữ làn': true,
          'Cảnh báo điểm mù': true,
          'Cốp điện': true
        }
      }
    }
  },

  'geely/ex2': {
    source: { name: 'Brochure Geely EX2', url: 'https://drive.google.com/drive/folders/13JG4ViaZBGoJgJVEPVrW4CB2jfRWiB-H' },
    variants: {
      'Pro': {
        'specs': {
          'Kích thước D x R x C': '4.135 x 1.805 x 1.580 mm',
          'Chiều dài cơ sở': '2.650 mm',
          'Khoảng sáng gầm': '160 mm',
          'Số chỗ ngồi': '5',
          'Động cơ': '1 mô-tơ điện PMSM, hệ truyền động 11-in-1',
          'Công suất': '115 PS',
          'Mô-men xoắn': '150 Nm',
          'Dẫn động': 'RWD (cầu sau)',
          'Loại pin': 'LFP',
          'Dung lượng pin': '39,4 kWh',
          'Quãng đường một lần sạc': '395 km (NEDC)',
          'Sạc nhanh': 'DC tối đa 70 kW',
          'Chế độ lái': 'Thể thao / Bình thường / Tiết kiệm',
          'Hệ thống treo (trước / sau)': 'McPherson / Đa liên kết',
          'Dung tích khoang hành lý': '375 L (gập hàng ghế sau: 1.320 L), cốp trước 70 L',
          'Mâm / lốp': '205/65 R15'
        },
        'interior': {
          'Màn hình giải trí': '14,6 inch',
          'Màn hình táp-lô': '8,8 inch',
          'Điều hòa': '1 vùng',
          'Cửa gió hàng ghế sau': true,
          'Hàng ghế thứ hai': 'Gập 60:40',
          'Chất liệu ghế': 'Da Vinyl',
          'Ghế lái': 'Chỉnh cơ 6 hướng',
          'Ghế phụ': 'Chỉnh cơ 4 hướng',
          'Hệ thống loa': '4 loa',
          'Sạc không dây': false,
          'Đèn viền nội thất': false
        },
        'features': {
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cảm biến đỗ xe': 'Sau',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED, tự động',
          'Kết nối Apple CarPlay / Android Auto': true,
          'Chìa khóa thông minh & Start/Stop': true,
          'Túi khí': '4 túi khí',
          'Camera lùi': true,
          'Cruise control': false,
          'Phanh tự động khẩn cấp': false,
          'Hỗ trợ giữ làn': false
        }
      },
      'Max': {
        'specs': {
          'Kích thước D x R x C': '4.135 x 1.805 x 1.580 mm',
          'Chiều dài cơ sở': '2.650 mm',
          'Khoảng sáng gầm': '160 mm',
          'Số chỗ ngồi': '5',
          'Động cơ': '1 mô-tơ điện PMSM, hệ truyền động 11-in-1',
          'Công suất': '115 PS',
          'Mô-men xoắn': '150 Nm',
          'Dẫn động': 'RWD (cầu sau)',
          'Loại pin': 'LFP',
          'Dung lượng pin': '39,4 kWh',
          'Quãng đường một lần sạc': '395 km (NEDC)',
          'Sạc nhanh': 'DC tối đa 70 kW',
          'Chế độ lái': 'Thể thao / Bình thường / Tiết kiệm',
          'Hệ thống treo (trước / sau)': 'McPherson / Đa liên kết',
          'Dung tích khoang hành lý': '375 L (gập hàng ghế sau: 1.320 L), cốp trước 70 L',
          'Mâm / lốp': '205/60 R16'
        },
        'interior': {
          'Màn hình giải trí': '14,6 inch',
          'Màn hình táp-lô': '8,8 inch',
          'Điều hòa': '1 vùng',
          'Cửa gió hàng ghế sau': true,
          'Hàng ghế thứ hai': 'Gập 60:40',
          'Chất liệu ghế': 'Da Vinyl',
          'Ghế lái': 'Chỉnh điện 6 hướng',
          'Ghế phụ': 'Chỉnh cơ 4 hướng',
          'Hệ thống loa': '6 loa',
          'Sạc không dây': true,
          'Đèn viền nội thất': '256 màu'
        },
        'features': {
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cảm biến đỗ xe': 'Sau',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED, tự động',
          'Kết nối Apple CarPlay / Android Auto': true,
          'Chìa khóa thông minh & Start/Stop': true,
          'Túi khí': '6 túi khí',
          'Camera 360': 'Camera 540°',
          'Cruise control': 'Thích ứng (ACC)',
          'Phanh tự động khẩn cấp': true,
          'Hỗ trợ giữ làn': 'Cảnh báo lệch làn (LDW)'
        }
      }
    }
  },

  'geely/monjaro': {
    source: { name: 'Brochure Geely Monjaro', url: 'https://drive.google.com/drive/folders/1Dhc9pgSpU-G5MibTnsfKV1wqR0EOKxXK' },
    variants: {
      'Premium': {
        'specs': {
          'Kích thước D x R x C': '4.770 x 1.895 x 1.689 mm',
          'Chiều dài cơ sở': '2.845 mm',
          'Khoảng sáng gầm': '180 mm',
          'Bán kính quay vòng': '5 m',
          'Số chỗ ngồi': '5',
          'Động cơ': '2.0L Turbo',
          'Công suất': '238 hp @ 5.500 rpm',
          'Mô-men xoắn': '350 Nm @ 1.800-4.500 rpm',
          'Hộp số': 'Tự động 8 cấp (8AT)',
          'Dẫn động': '4WD (4 bánh toàn thời gian)',
          'Tiêu chuẩn khí thải': 'Euro V',
          'Chế độ lái': 'Thông minh / Tiết kiệm / Êm ái / Thể thao / Tuyết / Địa hình / Cát',
          'Hệ thống treo (trước / sau)': 'MacPherson / Liên kết đa điểm',
          'Mâm / lốp': '235/50 R19'
        },
        'interior': {
          'Chất liệu ghế': 'Vinyl',
          'Ghế lái': 'Chỉnh điện 8 hướng, nhớ vị trí, massage',
          'Ghế phụ': 'Chỉnh điện 4 hướng, nhớ vị trí',
          'Vô lăng': 'Bọc da microfiber, chỉnh 4 hướng',
          'Màn hình táp-lô': 'TFT 12,3 inch',
          'Màn hình giải trí': '12,3 inch (+ màn hình ghế phụ 12,3 inch)',
          'Điều hòa': 'Tự động 3 vùng, lọc bụi mịn',
          'Cửa sổ trời': 'Panorama',
          'Sạc không dây': true,
          'Đèn viền nội thất': true,
          'Hệ thống loa': '8 loa',
          'Ghế thông gió': 'Ghế lái',
          'Màn hình HUD': false
        },
        'features': {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Camera 360': 'Camera 360° + quan sát gầm xe 180°',
          'Cảm biến đỗ xe': 'Trước và sau',
          'Cảm biến áp suất lốp TPMS': true,
          'Cruise control': 'Thích ứng (ACC) + hỗ trợ cao tốc ICA',
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': true,
          'Cốp điện': true,
          'Đèn pha': 'LED, tự động, điều khiển thông minh IHBC',
          'Chìa khóa thông minh & Start/Stop': true,
          'Kết nối Apple CarPlay / Android Auto': true,
          'Cảnh báo điểm mù': false
        }
      },
      'Flagship': {
        'specs': {
          'Kích thước D x R x C': '4.770 x 1.895 x 1.689 mm',
          'Chiều dài cơ sở': '2.845 mm',
          'Khoảng sáng gầm': '180 mm',
          'Bán kính quay vòng': '5 m',
          'Số chỗ ngồi': '5',
          'Động cơ': '2.0L Turbo',
          'Công suất': '238 hp @ 5.500 rpm',
          'Mô-men xoắn': '350 Nm @ 1.800-4.500 rpm',
          'Hộp số': 'Tự động 8 cấp (8AT)',
          'Dẫn động': '4WD (4 bánh toàn thời gian)',
          'Tiêu chuẩn khí thải': 'Euro V',
          'Chế độ lái': 'Thông minh / Tiết kiệm / Êm ái / Thể thao / Tuyết / Địa hình / Cát',
          'Hệ thống treo (trước / sau)': 'MacPherson / Liên kết đa điểm',
          'Mâm / lốp': '245/45 R20'
        },
        'interior': {
          'Chất liệu ghế': 'Vinyl',
          'Ghế lái': 'Chỉnh điện 8 hướng, nhớ vị trí, massage',
          'Ghế phụ': 'Chỉnh điện 4 hướng, nhớ vị trí',
          'Vô lăng': 'Bọc da microfiber, chỉnh 4 hướng',
          'Màn hình táp-lô': 'TFT 12,3 inch',
          'Màn hình giải trí': '12,3 inch (+ màn hình ghế phụ 12,3 inch)',
          'Điều hòa': 'Tự động 3 vùng, lọc bụi mịn',
          'Cửa sổ trời': 'Panorama',
          'Sạc không dây': true,
          'Đèn viền nội thất': true,
          'Hệ thống loa': '12 loa Infinity',
          'Ghế thông gió': 'Cả hai ghế trước',
          'Màn hình HUD': true
        },
        'features': {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Camera 360': 'Camera 360° + quan sát gầm xe 180°',
          'Cảm biến đỗ xe': 'Trước và sau',
          'Cảm biến áp suất lốp TPMS': true,
          'Cruise control': 'Thích ứng (ACC) + hỗ trợ cao tốc ICA',
          'Hỗ trợ giữ làn': true,
          'Phanh tự động khẩn cấp': true,
          'Cốp điện': true,
          'Đèn pha': 'LED, tự động, điều khiển thông minh IHBC',
          'Chìa khóa thông minh & Start/Stop': true,
          'Kết nối Apple CarPlay / Android Auto': true,
          'Cảnh báo điểm mù': true,
          'Hỗ trợ lái ADAS': 'Thêm RCTA, DOW, LCA, RCW'
        }
      }
    }
  },

  'mg/hs': {
    source: { name: 'Brochure MG HS 1.5T', url: 'https://mgmotor.vn/wp-content/uploads/2024/02/MG-HS.pdf' },
    variants: {
      'Deluxe': {
        'specs': {
          'Kích thước D x R x C': '4.610 x 1.876 x 1.664 mm',
          'Chiều dài cơ sở': '2.720 mm',
          'Khoảng sáng gầm': '145 mm',
          'Trọng lượng không tải': '1.550 kg',
          'Bán kính quay vòng': '5,95 m',
          'Dung tích bình xăng': '55 L',
          'Số chỗ ngồi': '5',
          'Động cơ': '1.5L Turbo, I4',
          'Công suất': '160 hp @ 5.600 rpm',
          'Mô-men xoắn': '250 Nm @ 1.700-4.400 rpm',
          'Hộp số': 'Ly hợp kép 7 cấp (7DCT)',
          'Tiêu chuẩn khí thải': 'Euro V',
          'Mâm / lốp': 'Hợp kim 18 inch, 235/50 R18',
          'Phanh': 'Đĩa / Đĩa',
          'Hệ thống treo (trước / sau)': 'MacPherson / Liên kết đa điểm',
          'Chế độ lái': 'Eco / Normal / Sport / Custom'
        },
        'interior': {
          'Màn hình giải trí': '10,1 inch',
          'Hệ thống loa': '6 loa',
          'Cửa sổ trời': 'Toàn cảnh',
          'Cửa gió hàng ghế sau': true,
          'Hàng ghế thứ hai': 'Gập 60:40',
          'Vô lăng': 'Bọc da, chỉnh cơ 4 hướng',
          'Ghế lái': 'Chỉnh điện 6 hướng',
          'Ghế phụ': 'Chỉnh điện 4 hướng',
          'Chất liệu ghế': 'Da 2 tông màu',
          'Điều hòa': 'Tự động 1 vùng',
          'Màn hình táp-lô': false,
          'Sạc không dây': false,
          'Đèn viền nội thất': false
        },
        'features': {
          'Cân bằng điện tử ESC': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cruise control': 'Có',
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Túi khí': '4 túi khí',
          'Camera lùi': true,
          'Cảm biến đỗ xe': 'Sau',
          'Cảnh báo điểm mù': false,
          'Cốp điện': false
        }
      },
      'Luxury': {
        'specs': {
          'Kích thước D x R x C': '4.610 x 1.876 x 1.664 mm',
          'Chiều dài cơ sở': '2.720 mm',
          'Khoảng sáng gầm': '145 mm',
          'Trọng lượng không tải': '1.550 kg',
          'Bán kính quay vòng': '5,95 m',
          'Dung tích bình xăng': '55 L',
          'Số chỗ ngồi': '5',
          'Động cơ': '1.5L Turbo, I4',
          'Công suất': '160 hp @ 5.600 rpm',
          'Mô-men xoắn': '250 Nm @ 1.700-4.400 rpm',
          'Hộp số': 'Ly hợp kép 7 cấp (7DCT)',
          'Tiêu chuẩn khí thải': 'Euro V',
          'Mâm / lốp': 'Hợp kim 18 inch, 235/50 R18',
          'Phanh': 'Đĩa / Đĩa',
          'Hệ thống treo (trước / sau)': 'MacPherson / Liên kết đa điểm',
          'Chế độ lái': 'Eco / Normal / Sport / Custom, lẫy chuyển số trên vô lăng'
        },
        'interior': {
          'Màn hình giải trí': '10,1 inch',
          'Hệ thống loa': '6 loa',
          'Cửa sổ trời': 'Toàn cảnh',
          'Cửa gió hàng ghế sau': true,
          'Hàng ghế thứ hai': 'Gập 60:40',
          'Vô lăng': 'Bọc da, chỉnh cơ 4 hướng',
          'Ghế lái': 'Chỉnh điện 6 hướng',
          'Ghế phụ': 'Chỉnh điện 4 hướng',
          'Chất liệu ghế': 'Da 1 màu tối',
          'Điều hòa': 'Tự động 2 vùng',
          'Màn hình táp-lô': 'Kỹ thuật số 12,3 inch',
          'Đèn viền nội thất': true,
          'Gương chiếu hậu trong': 'Tự động chống chói'
        },
        'features': {
          'Cân bằng điện tử ESC': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cruise control': 'Có',
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Túi khí': '6 túi khí',
          'Camera 360': true,
          'Cảm biến đỗ xe': 'Trước và sau',
          'Cảnh báo điểm mù': true,
          'Cốp điện': true,
          'Hỗ trợ lái ADAS': 'Thêm RCTA, LCA, DOW, HDC'
        }
      }
    }
  },

  'mg/rx5': {
    source: { name: 'Brochure MG RX5 1.5T', url: 'https://mgmotor.vn/wp-content/uploads/2023/09/LEAFLET-A4_RX5-002-02-phien-ban.pdf' },
    variants: {
      '1.5T STD': {
        'specs': {
          'Kích thước D x R x C': '4.574 x 1.876 x 1.690 mm',
          'Chiều dài cơ sở': '2.708 mm',
          'Khoảng sáng gầm': '196 mm',
          'Trọng lượng không tải': '1.539 kg',
          'Bán kính quay vòng': '5,9 m',
          'Dung tích bình xăng': '55 L',
          'Số chỗ ngồi': '5',
          'Động cơ': '1.5L Turbo, I4 (1.490 cc)',
          'Công suất': '168 hp @ 5.600 rpm',
          'Mô-men xoắn': '275 Nm @ 2.000-4.000 rpm',
          'Hộp số': 'Ly hợp kép 7 cấp ướt (7DCT)',
          'Tiêu chuẩn khí thải': 'Euro V',
          'Phanh': 'Đĩa / Đĩa',
          'Hệ thống treo (trước / sau)': 'MacPherson / Liên kết đa điểm',
          'Mâm / lốp': 'Hợp kim 18 inch, 235/50 R18'
        },
        'interior': {
          'Màn hình giải trí': '14,1 inch',
          'Hệ thống loa': '6 loa',
          'Cửa sổ trời': 'Toàn cảnh',
          'Cửa gió hàng ghế sau': true,
          'Hàng ghế thứ hai': 'Gập 60:40',
          'Chất liệu ghế': 'Nỉ',
          'Ghế lái': 'Chỉnh cơ 6 hướng',
          'Ghế phụ': 'Chỉnh cơ 4 hướng',
          'Điều hòa': 'Tự động 1 vùng',
          'Vô lăng': 'Chỉnh cơ 4 hướng',
          'Sạc không dây': false,
          'Màn hình táp-lô': false
        },
        'features': {
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cruise control': 'Có',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Túi khí': '4 túi khí',
          'Camera lùi': true,
          'Camera 360': false,
          'Cảm biến đỗ xe': 'Sau',
          'Cốp điện': false
        }
      },
      '1.5T LUX': {
        'specs': {
          'Kích thước D x R x C': '4.574 x 1.876 x 1.690 mm',
          'Chiều dài cơ sở': '2.708 mm',
          'Khoảng sáng gầm': '196 mm',
          'Trọng lượng không tải': '1.539 kg',
          'Bán kính quay vòng': '5,9 m',
          'Dung tích bình xăng': '55 L',
          'Số chỗ ngồi': '5',
          'Động cơ': '1.5L Turbo, I4 (1.490 cc)',
          'Công suất': '168 hp @ 5.600 rpm',
          'Mô-men xoắn': '275 Nm @ 2.000-4.000 rpm',
          'Hộp số': 'Ly hợp kép 7 cấp ướt (7DCT)',
          'Tiêu chuẩn khí thải': 'Euro V',
          'Phanh': 'Đĩa / Đĩa',
          'Hệ thống treo (trước / sau)': 'MacPherson / Liên kết đa điểm',
          'Mâm / lốp': 'Hợp kim 19 inch, 235/45 R19'
        },
        'interior': {
          'Màn hình giải trí': '14,1 inch',
          'Hệ thống loa': '6 loa',
          'Cửa sổ trời': 'Toàn cảnh',
          'Cửa gió hàng ghế sau': true,
          'Hàng ghế thứ hai': 'Gập 60:40',
          'Chất liệu ghế': 'Da',
          'Ghế lái': 'Chỉnh điện 6 hướng',
          'Ghế phụ': 'Chỉnh điện 4 hướng',
          'Điều hòa': 'Tự động 2 vùng',
          'Vô lăng': 'Bọc da, chỉnh cơ 4 hướng',
          'Sạc không dây': true,
          'Màn hình táp-lô': 'Kỹ thuật số 12,3 inch'
        },
        'features': {
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Cruise control': 'Có',
          'Cảm biến áp suất lốp TPMS': true,
          'Đèn pha': 'LED',
          'Chìa khóa thông minh & Start/Stop': true,
          'Túi khí': '6 túi khí',
          'Camera 360': true,
          'Cảm biến đỗ xe': 'Trước và sau',
          'Cốp điện': true
        }
      }
    }
  },

  'mg/mg7': {
    source: { name: 'Brochure MG7', url: 'https://mgmotor.vn/wp-content/uploads/2024/08/MG7-Brochure-Vietnamese-web.pdf' },
    variants: {
      '1.5T Luxury': {
        'specs': {
          'Kích thước D x R x C': '4.884 x 1.889 x 1.447 mm',
          'Chiều dài cơ sở': '2.778 mm',
          'Khoảng sáng gầm': '179 mm',
          'Dung tích bình xăng': '65 L',
          'Số chỗ ngồi': '5',
          'Phanh': 'Đĩa / Đĩa',
          'Hệ thống treo (trước / sau)': 'Độc lập McPherson / Liên kết đa điểm',
          'Chế độ lái': 'Eco / Normal / Sport + nút Super Sport trên vô lăng',
          'Động cơ': '1.5L Turbo',
          'Công suất': '167 hp',
          'Mô-men xoắn': '275 Nm',
          'Hộp số': 'Ly hợp kép 7 cấp (7DCT)',
          'Mâm / lốp': '225/50 R18'
        },
        'interior': {
          'Màn hình giải trí': '12,3 inch',
          'Màn hình táp-lô': '10,25 inch',
          'Điều hòa': 'Tự động 2 vùng độc lập, lọc PM2.5',
          'Cửa gió hàng ghế sau': true,
          'Hàng ghế thứ hai': 'Gập 60:40',
          'Ghế lái': 'Chỉnh điện 6 hướng',
          'Sạc không dây': true,
          'Hệ thống loa': '6 loa',
          'Ghế phụ': 'Chỉnh cơ 4 hướng'
        },
        'features': {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Camera 360': true,
          'Cảm biến áp suất lốp TPMS': true,
          'Hỗ trợ lái ADAS': 'ADAS (1R1V): ACC, giữ làn, phanh khẩn cấp, nhận diện biển báo',
          'Đèn pha': 'LED thấu kính',
          'Chìa khóa thông minh & Start/Stop': true
        }
      },
      '2.0T Luxury': {
        'specs': {
          'Kích thước D x R x C': '4.884 x 1.889 x 1.447 mm',
          'Chiều dài cơ sở': '2.778 mm',
          'Khoảng sáng gầm': '179 mm',
          'Dung tích bình xăng': '65 L',
          'Số chỗ ngồi': '5',
          'Phanh': 'Đĩa / Đĩa',
          'Hệ thống treo (trước / sau)': 'Độc lập McPherson / Liên kết đa điểm',
          'Chế độ lái': 'Eco / Normal / Sport + nút Super Sport trên vô lăng',
          'Động cơ': '2.0L Turbo',
          'Công suất': '227 hp',
          'Mô-men xoắn': '380 Nm',
          'Hộp số': 'Tự động 9 cấp (9AT)',
          'Mâm / lốp': '245/40 R19'
        },
        'interior': {
          'Màn hình giải trí': '12,3 inch',
          'Màn hình táp-lô': '10,25 inch',
          'Điều hòa': 'Tự động 2 vùng độc lập, lọc PM2.5',
          'Cửa gió hàng ghế sau': true,
          'Hàng ghế thứ hai': 'Gập 60:40',
          'Ghế lái': 'Chỉnh điện 6 hướng',
          'Sạc không dây': true,
          'Hệ thống loa': '6 loa',
          'Ghế phụ': 'Chỉnh điện 4 hướng'
        },
        'features': {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Camera 360': true,
          'Cảm biến áp suất lốp TPMS': true,
          'Hỗ trợ lái ADAS': 'ADAS (1R1V): ACC, giữ làn, phanh khẩn cấp, nhận diện biển báo',
          'Đèn pha': 'LED thấu kính',
          'Chìa khóa thông minh & Start/Stop': true
        }
      },
      '2.0T Premium': {
        'specs': {
          'Kích thước D x R x C': '4.884 x 1.889 x 1.447 mm',
          'Chiều dài cơ sở': '2.778 mm',
          'Khoảng sáng gầm': '179 mm',
          'Dung tích bình xăng': '65 L',
          'Số chỗ ngồi': '5',
          'Phanh': 'Đĩa / Đĩa',
          'Hệ thống treo (trước / sau)': 'Độc lập McPherson / Liên kết đa điểm',
          'Chế độ lái': 'Eco / Normal / Sport + nút Super Sport trên vô lăng',
          'Động cơ': '2.0L Turbo',
          'Công suất': '227 hp',
          'Mô-men xoắn': '380 Nm',
          'Hộp số': 'Tự động 9 cấp (9AT)',
          'Mâm / lốp': '245/40 R19'
        },
        'interior': {
          'Màn hình giải trí': '12,3 inch',
          'Màn hình táp-lô': '10,25 inch',
          'Điều hòa': 'Tự động 2 vùng độc lập, lọc PM2.5',
          'Cửa gió hàng ghế sau': true,
          'Hàng ghế thứ hai': 'Gập 60:40',
          'Ghế lái': 'Chỉnh điện 6 hướng',
          'Sạc không dây': true,
          'Hệ thống loa': 'Bose 9 loa',
          'Ghế phụ': 'Chỉnh điện 4 hướng',
          'Vô lăng': 'Da Nappa'
        },
        'features': {
          'Túi khí': '6 túi khí',
          'Cân bằng điện tử ESC': true,
          'Hỗ trợ khởi hành ngang dốc HSA': true,
          'Phanh tay điện tử & Auto Hold': true,
          'Camera 360': true,
          'Cảm biến áp suất lốp TPMS': true,
          'Hỗ trợ lái ADAS': 'ADAS (1R1V): ACC, giữ làn, phanh khẩn cấp, nhận diện biển báo',
          'Đèn pha': 'LED thấu kính',
          'Chìa khóa thông minh & Start/Stop': true
        }
      }
    }
  }
};

// "Plus Trần Kính" là bản Plus có trần kính toàn cảnh: kế thừa toàn bộ thông số của Plus.
(function () {
  var plus = window.CAR_BROCHURE['vinfast/vf7'].variants['Plus'];
  var copy = JSON.parse(JSON.stringify(plus));
  copy.interior['Cửa sổ trời'] = 'Trần kính toàn cảnh';
  window.CAR_BROCHURE['vinfast/vf7'].variants['Plus Trần Kính'] = copy;
})();
