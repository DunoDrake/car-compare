/*
 * Ưu / nhược điểm theo từng phiên bản.
 * Khóa: "<id hãng>|<id mẫu>|<tên phiên bản>" (khớp đúng tên phiên bản trong data/<hãng>.js).
 *   owner    - quan điểm cá nhân, chép nguyên từ file CSV của chủ site.
 *   research - tổng hợp từ bài review/ý kiến chủ xe, kèm nguồn; không trộn với owner.
 */
window.CAR_REVIEWS = {
  'toyota|raize|1.0 Turbo': {
    owner: {
      pros: [
        'Nhỏ gọn, thể thao, gầm thoáng',
        'Ngồi thoải mái, cốp rộng',
        'Hệ thống an toàn vừa đủ',
        'Lái nhẹ nhàng, tiết kiệm nhiên liệu'
      ],
      cons: [
        'Thùng tôn, vỏ mỏng, nhựa nhiều, cách âm kém',
        'Không cruise control, không máy lạnh hàng 2',
        'Động cơ yếu'
      ]
    },
    research: {
      pros: [
        'An toàn tốt trong tầm giá: cân bằng điện tử, kiểm soát lực kéo, hỗ trợ khởi hành ngang dốc, cảnh báo điểm mù, cảnh báo cắt ngang khi lùi',
        'Bán kính vòng quay nhỏ, dễ xoay trở trong ngõ hẹp, bãi đỗ chật',
        'Tiêu hao nhiên liệu khoảng 5,5 – 7,5 L/100 km tùy phố hay cao tốc',
        'Thương hiệu Toyota bền, chi phí bảo dưỡng hợp lý',
        'Gầm cao, thiết kế thể thao, hàng ghế sau để chân khá thoải mái'
      ],
      cons: [
        'Động cơ 1.0L turbo gào lớn khi tăng tốc, vượt xe hoặc lên dốc; cách âm khoang máy chưa tốt',
        'Thiếu ga hành trình, không có cửa gió điều hòa hàng ghế sau',
        'Vật liệu nội thất chủ yếu nhựa cứng',
        'Rung từ động cơ truyền lên vô lăng; khoang hành lý chỉ khoảng 369 L'
      ],
      sources: [
        { name: 'Chợ Tốt Xe: Người dùng đánh giá Toyota Raize', url: 'https://xe.chotot.com/kinh-nghiem/nguoi-dung-danh-gia-toyota-raize.html' }
      ]
    }
  },

  'toyota|vios|1.5E CVT': {
    owner: {
      pros: [
        'Ngồi thoải mái, cốp rộng',
        'Hệ thống an toàn vừa đủ',
        'Lành, bền, tiết kiệm, phụ tùng, bảo dưỡng rẻ',
        'Nồi đồng cối đá, thanh khoản cao'
      ],
      cons: [
        'Thùng tôn, vỏ mỏng, nhựa nhiều, cách âm kém',
        'Không cruise control, không máy lạnh hàng 2'
      ]
    },
    research: {
      pros: [
        'Động cơ 1.5L Dual VVT-i đi cùng hộp số CVT chạy mượt, lành tính, không giật',
        'Tiêu thụ thực tế khoảng 5,5 – 6,5 L/100 km đường hỗn hợp, hiếm khi vượt 8 L/100 km khi kẹt xe',
        'Vô lăng nhẹ ở tốc độ thấp, đầm hơn khi lên cao tốc',
        'Khoang cabin rộng, hàng ghế thứ hai nhiều khoảng để chân'
      ],
      cons: [
        'Tăng tốc không phấn khích như các đối thủ dùng động cơ tăng áp',
        'Thiết kế nội thất nhận nhiều ý kiến trái chiều'
      ],
      sources: [
        { name: 'Chợ Tốt Xe: Người dùng đánh giá xe Vios', url: 'https://xe.chotot.com/kinh-nghiem/nguoi-dung-danh-gia-xe-vios.html' }
      ]
    }
  },

  'suzuki|xl7|Hybrid Black Edition': {
    owner: {
      pros: [
        'Bản full đen nhìn hầm hố, ngồi siêu rộng, thoải mái',
        'Cách âm, hệ thống an toàn tàm tạm',
        'Lành, bền, tiết kiệm, bảo dưỡng rẻ'
      ],
      cons: [
        'Không phanh tay điện tử & auto hold, không cruise control',
        'Chỉ có 2 túi khí'
      ]
    },
    research: {
      pros: [
        'Mild hybrid SHVS: tiêu thụ khoảng 5,36 L/100 km (số liệu Cục Đăng kiểm), thấp hơn bản xăng cũ (6,4 L/100 km)',
        'Xe nhẹ, hàng ghế gập phẳng chở được đồ dài; hàng ghế thứ ba rộng, người cao 1,75 m vẫn còn khoảng trần',
        'Có ga tự động Cruise Control trên vô lăng, nút tắt ESP khi đi bùn cát, CarPlay / Android Auto không dây',
        'Đèn pha full LED, tự động bật tắt'
      ],
      cons: [
        'Toàn bộ ghế chỉnh tay; cốp sau không có nút điện, khoang hành lý hẹp khi chở đủ 7 người',
        'Đồng hồ analog kết hợp LCD nhỏ, màn hình trung tâm 10 inch không lớn',
        'Tay phanh cơ nhô cao giữa hai hàng ghế đầu khá vướng',
        'Trang bị an toàn ở mức phổ thông'
      ],
      note: 'Bài đánh giá ghi bản Hybrid có Cruise Control trên vô lăng, khác với nhận định "không cruise control" trong ý kiến cá nhân; nên kiểm tra trực tiếp trên xe.',
      sources: [
        { name: 'Otoxemay: Ưu và nhược điểm của Suzuki XL7 Hybrid 2024', url: 'https://www.otoxemay.vn/xe-xanh/uu-va-nhuoc-diem-cua-suzuki-xl7-hybrid-2024-vua-ra-mat-tai-viet-nam' }
      ]
    }
  },

  'suzuki|fronx|GLX Plus': {
    owner: {
      pros: [
        'Dáng coupe thể thao, trẻ trung, nhỏ gọn hợp đô thị',
        'Tiện nghi, trang bị an toàn đầy đủ, 6 túi khí',
        'Khung gầm, vỏ tương đối tốt'
      ],
      cons: [
        'Hàng ghế sau trần thấp, cốp nhỏ',
        'Nội thất da xen nỉ',
        'Giá đắt so với cùng phân khúc'
      ]
    },
    research: {
      pros: [
        'Ngoại hình SUV lai coupe năng động, trẻ trung',
        'Là mẫu SUV đô thị duy nhất trong phân khúc dùng hệ động lực hybrid (99 hp, 135 Nm), tối ưu nhiên liệu',
        'Có gói hỗ trợ lái ADAS: ga thích ứng, giữ làn, phanh khẩn cấp tự động',
        'Nhiều tiện nghi: HUD, sạc không dây, CarPlay không dây, cửa gió hàng ghế sau'
      ],
      cons: [
        'Trần hàng ghế sau thấp, không hợp người cao từ 1,75 m',
        'Ghế bọc da pha nỉ làm giảm cảm giác cao cấp; ghế lái chỉnh cơ',
        'Kết quả ANCAP của bản bán tại Úc / New Zealand chỉ 1 sao (lỗi cuộn dây đai hàng ghế sau trong thử va chạm trực diện); ANCAP khuyến cáo chưa dùng hàng ghế sau'
      ],
      note: 'Kết quả ANCAP áp dụng cho xe bán tại Úc và New Zealand; chưa có xác nhận bản bán tại Việt Nam có cùng lỗi hay không, nên hỏi đại lý về nguồn gốc xe và kết quả an toàn trước khi mua.',
      sources: [
        { name: 'Thanh Niên: 4 ưu điểm, 2 nhược điểm của tân binh Suzuki Fronx', url: 'https://thanhnien.vn/4-uu-diem-2-nhuoc-diem-cua-tan-binh-suzuki-fronx-185260503095100398.htm' },
        { name: 'Oto.com.vn: Suzuki Fronx nhận 1 sao an toàn từ ANCAP', url: 'https://oto.com.vn/thi-truong-o-to/suzuki-fronx-nha-1-sao-an-toan-tu-ancap-articleid-y9cm0ha' }
      ]
    }
  },

  'honda|city|L': {
    owner: {
      pros: [
        'Không gian thoải mái, cảm giác lái tốt',
        'Trang bị an toàn đủ dùng, có Honda Sensing',
        'Bền, lành'
      ],
      cons: []
    },
    research: {
      pros: [
        'Thiết kế thể thao, nhiều người chọn làm xe gia đình hơn là xe dịch vụ',
        'Được đánh giá rộng nhất phân khúc sedan hạng B, nội thất đẹp hơn Vios / Accent',
        'Động cơ 1.5L 119 hp bốc và khỏe hơn Vios (107 hp) và Accent (98 hp), tăng tốc không gầm rú nhiều'
      ],
      cons: [
        'Cách âm chưa tốt: tiếng lốp, tiếng môi trường vọng vào cabin, ồn cả khi chạy tốc độ thấp',
        'Camera lùi chất lượng thấp, khó quan sát khi thiếu sáng (ý kiến này từ bài 2023, bản cũ không có cảm biến lùi)'
      ],
      sources: [
        { name: 'Dân Việt: Người dùng chỉ ra ưu nhược điểm Honda City sau 2 năm', url: 'https://danviet.vn/nguoi-dung-chi-ra-uu-nhuoc-diem-honda-city-sau-2-nam-su-dung-hon-thua-gi-toyota-vios-hyundai-accent-20230216201139798-d1075591.html' }
      ]
    }
  },

  'honda|hrv|G': {
    owner: {
      pros: [
        'Dáng đẹp, đi phố hay xa đều được',
        'Nội thất chắc chắn, không ọp ẹp',
        'Đầm chắc, không quá to, quá cao',
        'Cảm giác lái tốt, có Honda Sensing',
        'Lái tốt, không gian đủ dùng, cốp to'
      ],
      cons: [
        'Giá cao so với phân khúc',
        'Ghế giữa hàng 2 gồ lên so với hai bên'
      ]
    },
    research: {
      pros: [
        'Thiết kế coupe thể thao, phù hợp cả nam lẫn nữ',
        'Bán kính vòng quay chỉ 5,7 m, linh hoạt trong đô thị'
      ],
      cons: [
        'Nội thất thiên về đơn giản, khá "trần trụi" và không nhiều chi tiết gây ấn tượng',
        'Khả năng giảm ồn, giảm rung hạn chế; tăng tốc chậm, được nhận xét là một trong những xe chậm nhất phân khúc',
        'Bản G: ghế nỉ, ghế lái chỉnh tay, màn hình giải trí 8 inch; chưa có cửa sổ trời; CVT chế độ Sport không đáp ứng tốt và không có lẫy chuyển số'
      ],
      note: 'Bài đánh giá về HR-V 2024; các chi tiết của bản G có thể khác phiên bản hiện hành.',
      sources: [
        { name: 'Gotech: Ưu nhược điểm Honda HR-V 2024 sau khi lái 1001 km', url: 'https://gotech.vn/uu-nhuoc-diem-honda-hr-v-2024/' }
      ]
    }
  },

  'mazda|mazda3|1.5 Luxury': {
    owner: {
      pros: [
        'Thiết kế sang trọng, bắt mắt',
        'Cảm giác lái tốt',
        'Công nghệ an toàn vừa đủ',
        'Nội thất được'
      ],
      cons: [
        'Hàng sau ngồi để chân không thoải mái'
      ]
    },
    research: {
      pros: [
        'Độ hoàn thiện nội thất cao, nút bấm núm xoay bền, ít xuống cấp sau thời gian dài',
        'Cảm giác lái thể thao, hộp số tự động mượt, tiết kiệm xăng',
        'Gói an toàn i-Activsense (cảnh báo điểm mù, giữ làn, ga thích ứng) được xem là điểm mạnh trong phân khúc',
        'Điều hòa làm lạnh nhanh, hợp khí hậu nóng ẩm'
      ],
      cons: [
        'Hàng ghế sau chật hơn Kia K3 / Hyundai Elantra: để chân và khoảng trần do mui xe dốc',
        'Đèn pha ở một số phiên bản kém hiệu quả khi sương mù hoặc thiếu sáng',
        'Gầm thấp (khoảng 145 mm) bất tiện khi qua đường ngập; vài chủ xe lâu năm phản ánh tiếng động lạ ở cửa sau',
        'Giá cao, giá trị bán lại chưa thật cạnh tranh'
      ],
      note: 'Bài viết cho rằng i-Activsense và 7 túi khí có ở mọi phiên bản, có thể không khớp với bản 1.5 Luxury; nên đối chiếu trang bị thực tế với đại lý.',
      sources: [
        { name: 'Chợ Tốt Xe: Người dùng đánh giá Mazda 3 mới nhất', url: 'https://xe.chotot.com/kinh-nghiem/nguoi-dung-danh-gia-mazda-3.html' }
      ]
    }
  },

  'mitsubishi|xforce|Ultimate': {
    owner: {
      pros: [
        'Thiết kế thể thao, gầm cao',
        'Nhiều công nghệ an toàn, làm lạnh đỉnh, lọc không khí',
        'Không gian nội thất rộng rãi, hàng 2 bằng phẳng, cốp rộng, bệ tì tay có ngăn làm lạnh',
        'Gầm, treo êm'
      ],
      cons: [
        'Nội thất ọp ẹp',
        'Xi nhan sau nhỏ'
      ]
    },
    research: {
      pros: [
        'Tiêu hao nhiên liệu thấp so với CUV hạng B; vào cua và độ chính xác lái tốt',
        'Hàng ghế sau rộng, bảng táp-lô bố trí cân đối, nút bấm dễ thao tác',
        'Dàn âm thanh 8 loa Yamaha, cốp điện, ga thích ứng, cảnh báo và hỗ trợ giảm thiểu va chạm',
        'Bảo dưỡng hợp lý, khoảng 900 nghìn đồng cho mốc 5.000 km'
      ],
      cons: [
        'Màn hình giải trí hay treo hoặc mất kết nối Apple CarPlay',
        'Đèn pha LED chiếu gần chưa đủ sáng ban đêm',
        'Một số chi tiết nhựa nội thất hoàn thiện chưa kỹ',
        'Gói an toàn chủ động chưa có hỗ trợ giữ làn'
      ],
      sources: [
        { name: 'Chợ Tốt Xe: Người dùng đánh giá Mitsubishi Xforce', url: 'https://xe.chotot.com/kinh-nghiem/nguoi-dung-danh-gia-mitsubishi-xforce.html' }
      ]
    }
  },

  'mitsubishi|xpander-cross|Cross': {
    owner: {
      pros: [
        'Thiết kế thể thao, hầm hố, gầm cao',
        'Nhiều công nghệ an toàn, làm lạnh đỉnh, lọc không khí',
        'Không gian nội thất rộng rãi, cốp rộng, bệ tì tay có ngăn làm lạnh',
        'Gầm, treo êm'
      ],
      cons: [
        'Nội thất ọp ẹp',
        'Xi nhan sau nhỏ'
      ]
    },
    research: {
      pros: [
        'Xe cũ Xpander Cross 2021 được đánh giá cao về chất lượng, tính linh hoạt và tiết kiệm nhiên liệu',
        'Phong cách hầm hố hút khách trẻ; được nhận xét là đắt hơn Xpander nhưng xứng đáng đồng tiền',
        'So với Toyota Veloz Cross (cùng mức giá 698 triệu): Xpander Cross thiên về trải nghiệm lái, Veloz Cross nhiều công nghệ an toàn hơn'
      ],
      cons: [
        'Chưa cho cảm giác lái đã, hơi chòng chành khi chạy qua cung đường xấu'
      ],
      note: 'Các nhận xét tổng hợp từ tiêu đề và tóm tắt bài đánh giá của Oto.com.vn (một số cho bản đời cũ); nguồn cho bản 2026 còn ít.',
      sources: [
        { name: 'Oto.com.vn: Đánh giá xe Mitsubishi Xpander Cross', url: 'https://oto.com.vn/danh-gia-xe/mitsubishi/xpander-cross' }
      ]
    }
  }
};
