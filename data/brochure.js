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
  }
};

// "Plus Trần Kính" là bản Plus có trần kính toàn cảnh: kế thừa toàn bộ thông số của Plus.
(function () {
  var plus = window.CAR_BROCHURE['vinfast/vf7'].variants['Plus'];
  var copy = JSON.parse(JSON.stringify(plus));
  copy.interior['Cửa sổ trời'] = 'Trần kính toàn cảnh';
  window.CAR_BROCHURE['vinfast/vf7'].variants['Plus Trần Kính'] = copy;
})();
