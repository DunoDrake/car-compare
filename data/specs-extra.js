/*
 * Thông số bổ sung theo mẫu xe, thu thập từ bảng thông số của oto360.net (2026-10-15).
 * - force: ghi đè giá trị ở cấp mẫu (kích thước, trục cơ sở, khoảng sáng gầm), không ghi đè phần riêng của từng phiên bản.
 * - fill : chỉ điền khi dữ liệu chính (data/<hãng>.js) chưa có nhãn đó.
 * Thứ tự ưu tiên khi hiển thị: fill < common < force < variant.
 */
window.CAR_SPECS_EXTRA = {
 "ford/ranger": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "5.362 x 1.918 x 1.875 mm",
    "Chiều dài cơ sở": "3.270 mm",
    "Khoảng sáng gầm": "235 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Hai cầu chủ động / 4x4",
    "Hộp số": "Số tự động 10 cấp/ 10AT",
    "Hệ thống treo (trước / sau)": "Hệ thống treo độc lập, tay đòn kép, lò xo trọ, thanh cân bằng và ống giảm chấn/ Loại nhíp với ống giảm chấn",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, ESP"
   }
  }
 },
 "ford/everest": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.914 x 1.923 x 1.842 mm",
    "Chiều dài cơ sở": "2.900 mm",
    "Khoảng sáng gầm": "200 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Dẫn động 2 cầu bán thời gian/ 4x4",
    "Hộp số": "Hộp số tự động 10 cấp điện tử",
    "Hệ thống treo (trước / sau)": "Độc lập, lò xo trụ và thanh cân bằng / Lò xo trụ, ống giảm chấn lớn và thanh ổn định liên kết kiểu Watts Linkage",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "7"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "Phanh tay điện tử"
   }
  }
 },
 "ford/territory": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.630 x 1.935 x 1.706 mm",
    "Chiều dài cơ sở": "2.726 mm",
    "Khoảng sáng gầm": "190 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Dẫn động một cầu / 4x2",
    "Hộp số": "Số tự động 7 cấp",
    "Hệ thống treo (trước / sau)": "Treo độc lập, lò xo trụ, thanh cân bằng, giảm chấn thủy lực",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, ESP, FCW, AEB"
   }
  }
 },
 "geely/coolray": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.330 x 1.800 x 1.609 mm",
    "Chiều dài cơ sở": "2.600 mm",
    "Khoảng sáng gầm": "180 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước",
    "Hộp số": "7 DCT",
    "Hệ thống treo (trước / sau)": "Macpherson / Thanh xoắn",
    "Phanh": "Đĩa / Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, ESC, TCS, EBD, AEB, Phanh tay điện tử, giữ tự động"
   }
  }
 },
 "geely/okavango": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.827 x 1.902 x 1.757 mm",
    "Chiều dài cơ sở": "2.804 mm",
    "Khoảng sáng gầm": "194 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "MacPherson / Đa liên kết",
    "Phanh": "Đĩa / Đĩa",
    "Số chỗ ngồi": "7",
    "Động cơ (bản tham chiếu)": "BHE15-EFZ",
    "Công suất (bản tham chiếu)": "174 hp @ 5.500 rpm",
    "Mô-men xoắn (bản tham chiếu)": "290 Nm @ 2.000-3.500 rpm",
    "Hộp số (bản tham chiếu)": "7 DCT",
    "Dẫn động (bản tham chiếu)": "Cầu trước FWD"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "Hệ thống chống bó cứng phanh (ABS); Hệ thống phân bổ lực phanh (EBD); Phanh tay điện tử (EPB); Hệ thống giữ phanh tự động (Auto Hold); Hệ thống phanh "
   }
  }
 },
 "geely/ex5": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.615 x 1.901 x 1.670 mm",
    "Chiều dài cơ sở": "2.750 mm",
    "Khoảng sáng gầm": "173 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "FWD",
    "Hộp số": "Hộp số điện giảm tốc",
    "Hệ thống treo (trước / sau)": "Macpherson/ Liên kết đa điểm",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {
    "Vô lăng": "Vô lăng được bọc da cao cấp, tích hợp các nút điều khiển chức năng tiện lợi và hỗ trợ trợ lực điện, mang đến cảm giác cầm nắm chắc tay và…",
    "Sạc không dây": "EX5 tích hợp sạc không dây công suất 15W, giúp sạc nhanh cho các thiết bị di động."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, ESC, TCS, EBD, AEB, Phanh tay điện tử, Giữ phanh tự động"
   }
  }
 },
 "geely/ex2": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.135 x 1.805 x 1.580 mm",
    "Chiều dài cơ sở": "2.650 mm",
    "Khoảng sáng gầm": "160 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "McPherson / Đa liên kết (Multi-link)",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "5",
    "Động cơ (bản tham chiếu)": "Động cơ điện 39,4 kWh. Phạm vi di chuyển 395 km 1 lần sạc đầy pin (NEDC)",
    "Công suất (bản tham chiếu)": "115 PS",
    "Mô-men xoắn (bản tham chiếu)": "150 Nm",
    "Dẫn động (bản tham chiếu)": "Dẫn động cầu sau (RWD)"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "Hệ thống chống bó cứng phanh (ABS); Phân bổ lực phanh điện tử (EBD); Phanh tay điện tử (EPB); Phanh khẩn cấp tự động (AEB); Hệ thống cân bằng điện tử "
   }
  }
 },
 "geely/monjaro": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.770 x 1.895 x 1.689 mm",
    "Chiều dài cơ sở": "2.845 mm",
    "Khoảng sáng gầm": "180 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "Macpherson/Liên kết đa điểm",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "5",
    "Động cơ (bản tham chiếu)": "2.0T",
    "Công suất (bản tham chiếu)": "238 hp @ 5.500 rpm",
    "Mô-men xoắn (bản tham chiếu)": "350 Nm @ 1.800-4.500 rpm",
    "Hộp số (bản tham chiếu)": "8 AT",
    "Dẫn động (bản tham chiếu)": "4WD"
   },
   "interior": {
    "Vô lăng": "Vô lăng bọc da microfiber mềm mại, thiết kế vừa vặn và sang trọng.",
    "Màn hình giải trí": "Ngay chính giữa bảng điều là màn hình giải trí trung tâm 12.3 inch có kết nối Apple CarPlay, Android Auto và Bluetooth.",
    "Hệ thống loa": "Một điểm nhấn độc đáo của Monjaro là hệ thống âm thanh được tích hợp trực tiếp vào tựa đầu ghế lái."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, ESC, TCS, EBD, AEB, Phanh tay điện tử (EPB), Giữ phanh tự động (Auto Hold)"
   }
  }
 },
 "honda/city": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.594 x 1.748 x 1.467 mm",
    "Chiều dài cơ sở": "2.600 mm",
    "Khoảng sáng gầm": "134 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước FWD",
    "Hộp số": "Vô cấp CVT",
    "Hệ thống treo (trước / sau)": "Kiểu MacPherson / Giằng xoắn",
    "Phanh": "Phanh đĩa / Phanh đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "VSA, ABS, EBD, BA, CMBS"
   }
  }
 },
 "honda/hrv": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.385 x 1.790 x 1.590 mm",
    "Chiều dài cơ sở": "2.610 mm",
    "Khoảng sáng gầm": "181 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước - FWD",
    "Hộp số": "Vô cấp CVT",
    "Hệ thống treo (trước / sau)": "Macpherson / Giằng Xoắn",
    "Phanh": "Đĩa tản nhiệt / Phanh đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {
    "Vô lăng": "Vô lăng 3 chấu bọc da cao cấp mang lại cảm giác cầm nắm chắc chắn và sang trọng.",
    "Màn hình giải trí": "Màn hình giải trí cảm ứng 8 inch với độ phân giải cao được thiết kế hiện đại, mang đến trải nghiệm hình ảnh sắc nét và mượt mà."
   },
   "features": {
    "Công nghệ phanh / an toàn": "Phanh tay điện tử, chế độ giữ phanh tự động, CMBS, AHA, VSA, TCS, ABS, EBD, VGR, BA"
   }
  }
 },
 "honda/crv": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.691 x 1.866 x 1.681 mm",
    "Chiều dài cơ sở": "2.701 mm",
    "Khoảng sáng gầm": "208 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "FWD",
    "Hộp số": "E-CVT",
    "Hệ thống treo (trước / sau)": "Macpherson / Liên kết đa điểm",
    "Phanh": "Đĩa tản nhiệt / Phanh đĩa"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA, VSA, TCS, Phanh tay điện tử"
   }
  }
 },
 "hyundai/accent": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.535 x 1.765 x 1.485 mm",
    "Chiều dài cơ sở": "2.670 mm",
    "Khoảng sáng gầm": "165 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "FWD",
    "Hộp số": "iVT",
    "Hệ thống treo (trước / sau)": "McPherson/Thanh cân bằng",
    "Phanh": "Đĩa/ Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA, ESC, VSM, kiểm soát lực kéo"
   }
  }
 },
 "hyundai/creta": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.315 x 1.790 x 1.660 mm",
    "Chiều dài cơ sở": "2.610 mm",
    "Khoảng sáng gầm": "200 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước FWD",
    "Hộp số": "CVT",
    "Hệ thống treo (trước / sau)": "MacPherson / Thanh cân bằng",
    "Phanh": "Đĩa / Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA, ESC, TCS, phanh tay điện tử và giữ tự động"
   }
  }
 },
 "hyundai/stargazer": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.575 x 1.780 x 1.710 mm",
    "Chiều dài cơ sở": "2.780 mm",
    "Khoảng sáng gầm": "205 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước FWD",
    "Hộp số": "CVT",
    "Hệ thống treo (trước / sau)": "Mac Pherson / Thanh cân bằng",
    "Phanh": "Đĩa / Đĩa",
    "Số chỗ ngồi": "7"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA"
   }
  }
 },
 "jaecoo/j5": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.380 x 1.860 x 1.650 mm",
    "Chiều dài cơ sở": "2.620 mm",
    "Khoảng sáng gầm": "176 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "MacPherson / Đa điểm",
    "Phanh": "Đĩa thông gió / Đĩa",
    "Số chỗ ngồi": "5",
    "Động cơ (bản tham chiếu)": "Động cơ xăng 1,5 Turbo",
    "Công suất (bản tham chiếu)": "108(145)/5.500 kW(HP)/rpm",
    "Mô-men xoắn (bản tham chiếu)": "210 Nm @ 1.750-4.000 rpm",
    "Hộp số (bản tham chiếu)": "CVT",
    "Dẫn động (bản tham chiếu)": "Cầu trước"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "Hệ thống chống bó cứng phanh ABS; Phân phối lực phanh điện tử EBD; Hỗ trợ phanh khẩn cấp BA;"
   }
  }
 },
 "jaecoo/j7": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.500 x 1.865 x 1.680 mm",
    "Chiều dài cơ sở": "2.672 mm",
    "Khoảng sáng gầm": "196 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "FWD",
    "Hộp số": "7DCT",
    "Hệ thống treo (trước / sau)": "Macpherson / Đa điểm",
    "Phanh": "Đĩa thông gió / Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {
    "Màn hình giải trí": "Màn hình trung tâm 14,8 inch của Jaecoo J7 mang đến trải nghiệm lái xe đẳng cấp với giao diện lớn và dễ sử dụng.",
    "Hệ thống loa": "Hệ thống âm thanh 8 loa cao cấp từ SONY mang đến trải nghiệm âm thanh tuyệt vời trên Jaecoo J7."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA, ESP, TCS, phanh tay điện tử, giữ tự động"
   }
  }
 },
 "kia/sonet": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.120 x 1.790 x 1.642 mm",
    "Chiều dài cơ sở": "2.500 mm",
    "Khoảng sáng gầm": "205 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "FWD",
    "Hộp số": "CVT",
    "Hệ thống treo (trước / sau)": "McPherson/Thanh xoắn",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {
    "Vô lăng": "Vô lăng D-cut thể thao, bọc da cao cấp tích hợp nhiều phím chức năng.",
    "Màn hình giải trí": "Màn hình giải trí trung tâm AVN 10,25” tích hợp kết nối Apple CarPlay/Android Auto không dây.",
    "Cửa sổ trời": "Cửa sổ trời thiết kế hiện đại, sang trọng."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, ESC, lực phanh khẩn cấp"
   }
  }
 },
 "kia/seltos": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.365 x 1.800 x 1.645 mm",
    "Chiều dài cơ sở": "2.610 mm",
    "Khoảng sáng gầm": "190 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước FWD",
    "Hộp số": "7 DCT",
    "Hệ thống treo (trước / sau)": "MacPherson / Thanh cân bằng",
    "Phanh": "Đĩa / Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, ESC, HAC, phanh đỗ điện tử & Auto hold"
   }
  }
 },
 "kia/carnival": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "5.155 x 2.010 x 1.775 mm",
    "Chiều dài cơ sở": "3.090 mm",
    "Khoảng sáng gầm": "172 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước - FWD",
    "Hộp số": "Tự đông 8 cấp / 8 AT",
    "Hệ thống treo (trước / sau)": "Macpherson / Liên kết đa điểm",
    "Phanh": "Đĩa/Đĩa"
   },
   "interior": {
    "Vô lăng": "Vô lăng bọc da không chỉ tích hợp nhiều phím chức năng mà còn được trang bị tính năng sưởi, mang đến sự thoải mái và tiện nghi tối ưu cho…",
    "Cửa sổ trời": "đôi KIA New Carnival được trang bị hai cửa sổ trước và sau với tính năng đóng/mở độc lập, mang đến không gian sang trọng và sự thuận tiện…"
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, ESC, HAC, Phanh đỗ điện tử + Autohold"
   }
  }
 },
 "kia/sorento": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.810 x 1.900 x 1.700 mm",
    "Chiều dài cơ sở": "2.815 mm",
    "Khoảng sáng gầm": "176 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "AWD",
    "Hộp số": "8-DCT",
    "Hệ thống treo (trước / sau)": "Macpherson / Liên kết đa điểm",
    "Phanh": "Đĩa/Đĩa"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, ESC"
   }
  }
 },
 "lynkco/01": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.549 x 1.860 x 1.689 mm",
    "Chiều dài cơ sở": "2.734 mm",
    "Khoảng sáng gầm": "213 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước (FWD)",
    "Hộp số": "Tự động 8 cấp",
    "Hệ thống treo (trước / sau)": "MacPherson độc lập với thanh ổn định/Độc lập đa điểm với thanh ổn định",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {
    "Vô lăng": "Vô lăng thiết kế thể thao với đáy vát, cho cảm giác cầm chắc tay.",
    "Hệ thống loa": "Phiên bản Hyper được trang bị 8 loa Harman/Kardon Infinity Auto và 10 loa cho phiên bản Hyper Pro mang đến chất lượng âm thanh sông động…"
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, CBC, BA, ESP, Phanh tay điện tử"
   }
  }
 },
 "lynkco/06": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.340 x 1.820 x 1.625 mm",
    "Chiều dài cơ sở": "2.640 mm",
    "Khoảng sáng gầm": "172 mm"
   }
  },
  "fill": {
   "specs": {
    "Động cơ": "1.5 Turbo",
    "Công suất": "174 hp @ 5.500 rpm",
    "Mô-men xoắn": "290 Nm @ 2.000-3.500 rpm",
    "Hộp số": "7 cấp ly hợp kép ướt",
    "Dẫn động": "Cầu trước",
    "Hệ thống treo (trước / sau)": "MacPherson + Thanh cân bằng / Đa điểm + Thanh cân bằng",
    "Phanh": "Đĩa / Đĩa",
    "Số chỗ ngồi": "5",
    "Mâm / lốp": "215/55R18"
   },
   "interior": {
    "Vô lăng": "Vô lăng chỉnh cơ 4 hướng được làm từ vật liệu có tinh thể bạc khử khuẩn."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, TCS, EBD, ESP, phanh tay điện tử, tự động giữ"
   }
  }
 },
 "lynkco/02": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.460 x 1.845 x 1.573 mm",
    "Chiều dài cơ sở": "2.755 mm",
    "Khoảng sáng gầm": "191 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "McPherson / Multi-link",
    "Phanh": "Đĩa tản nhiệt / Đĩa tản nhiệt",
    "Số chỗ ngồi": "5",
    "Động cơ (bản tham chiếu)": "Động cơ điện. Dung lượng pin 66 kWh. Phạm vi chạy điện theo tiêu chuẩn WLTP 435 km",
    "Công suất (bản tham chiếu)": "200 kW / 268 hp",
    "Mô-men xoắn (bản tham chiếu)": "343 Nm",
    "Dẫn động (bản tham chiếu)": "Cầu sau RWD"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "Phanh tay điện tử tích hợp Auto Hold; Hệ thống cân bằng điện tử ESC; Hệ thống chống lật ARP; Phanh khẩn cấp tự động AEB"
   }
  }
 },
 "mazda/mazda3": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.660 x 1.795 x 1.440 mm",
    "Chiều dài cơ sở": "2.725 mm",
    "Khoảng sáng gầm": "145 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước - FWD",
    "Hộp số": "6AT",
    "Hệ thống treo (trước / sau)": "McPherson / Thanh xoắn",
    "Phanh": "Đĩa Thông Gió / Đĩa đặc",
    "Số chỗ ngồi": "5"
   },
   "interior": {
    "Vô lăng": "Vô lăng 3 chấu được thiết kế đẹp mắt và hiện đại, tích hợp các nút điều khiển hệ thống âm thanh và đàm thoại rảnh tay.",
    "Cửa sổ trời": "Mazda 3 được trang bị cửa sổ trời toàn cảnh, giúp không gian cabin trở nên thoáng đãng và sáng sủa hơn."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, EBA, ESS, DSC, kiểm soát lực kéo, phanh tay điện tử & giữ tự động"
   }
  }
 },
 "mazda/cx5": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.550 x 1.840 x 1.680 mm",
    "Chiều dài cơ sở": "2.700 mm",
    "Khoảng sáng gầm": "200 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Hai cầu AWD",
    "Hộp số": "Tự động 6 cấp / 6 AT",
    "Hệ thống treo (trước / sau)": "Macpherson/Liên kết đa điểm",
    "Phanh": "Đĩa Thông Gió / Đĩa đặc",
    "Số chỗ ngồi": "5"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, EBA, ESS, DSC, TCS"
   }
  }
 },
 "mazda/cx30": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.395 x 1.795 x 1.540 mm",
    "Chiều dài cơ sở": "2.655 mm",
    "Khoảng sáng gầm": "175 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước - FWD",
    "Hộp số": "6 AT - Chế độ lái thể thao",
    "Hệ thống treo (trước / sau)": "Độc lập McPherson với thanh cân bằng/ Dầm xoắn",
    "Phanh": "Đĩa tản nhiệt / đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {
    "Vô lăng": "Vô-lăng Mazda CX-30 là loại 3 chấu bọc da kết hợp chi tiết kim loại sang trọng và được trang bị loạt phím bấm chức năng hiện đại.",
    "Màn hình giải trí": "Màn hình giải trí 8.8 inch nổi bật trên bảng tap-lo, cung cấp tầm nhìn rõ ràng và có kết nối như Apple CarPlay và Android Auto."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, EBA, ESS, DSC, TCS, SBS"
   }
  }
 },
 "mazda/cx8": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.900 x 1.840 x 1.730 mm",
    "Chiều dài cơ sở": "2.930 mm",
    "Khoảng sáng gầm": "185 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Hai cầu AWD",
    "Hộp số": "Tự động 6 cấp / 6 AT",
    "Hệ thống treo (trước / sau)": "Độc lập McPherson với thanh cân bằng/ Liên kết đa điểm",
    "Phanh": "Đĩa tản nhiệt/Đĩa",
    "Số chỗ ngồi": "7"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, EBA, ESS, DSC, TCS, SBS"
   }
  }
 },
 "mg/zs": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.323 x 1.809 x 1.653 mm",
    "Chiều dài cơ sở": "2.585 mm",
    "Khoảng sáng gầm": "170 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "Macpherson/Thanh xoắn",
    "Phanh": "Đĩa / Đĩa",
    "Số chỗ ngồi": "5",
    "Động cơ (bản tham chiếu)": "DOHC 4-cylinder, NSE 1.5L",
    "Công suất (bản tham chiếu)": "112 hp @ 6.000 rpm",
    "Mô-men xoắn (bản tham chiếu)": "150 Nm @ 4.500 rpm",
    "Hộp số (bản tham chiếu)": "CVT (giả lập 8 cấp)",
    "Dẫn động (bản tham chiếu)": "Cầu trước FWD"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, EBA, SCS, TCS, phanh tay điện tử và giữ phanh tự động"
   }
  }
 },
 "mg/mg5": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.675 x 1.842 x 1.480 mm",
    "Chiều dài cơ sở": "2.680 mm",
    "Khoảng sáng gầm": "138 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "Macpherson/Thanh xoắn",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "5",
    "Động cơ (bản tham chiếu)": "DOHC 4-cylinder, NSE 1.5L",
    "Công suất (bản tham chiếu)": "112 hp @ 6.000 rpm",
    "Mô-men xoắn (bản tham chiếu)": "150 Nm @ 4.500 rpm",
    "Hộp số (bản tham chiếu)": "CTV có chế độ lái thể thao ( giả lập 8 cấp )",
    "Dẫn động (bản tham chiếu)": "Cầu trước FWD"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, CBC, EBA, ESP, TCS, XDS, CBC, Phanh tay điện tử + Autohold"
   }
  }
 },
 "mg/hs": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.574 x 1.876 x 1.664 mm",
    "Chiều dài cơ sở": "2.720 mm",
    "Khoảng sáng gầm": "145 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "Kiểu MacPherson/Liên kết đa điểm",
    "Phanh": "Đĩa / Đĩa kẹp phanh sơn đỏ",
    "Số chỗ ngồi": "5",
    "Động cơ (bản tham chiếu)": "SGE 1.5T, Turbo Tăng áp",
    "Công suất (bản tham chiếu)": "168 hp",
    "Mô-men xoắn (bản tham chiếu)": "275 Nm",
    "Hộp số (bản tham chiếu)": "Hộp số ly hợp kép thể thao 7 cấp",
    "Dẫn động (bản tham chiếu)": "Cầu trước FWD"
   },
   "interior": {},
   "features": {}
  }
 },
 "mg/rx5": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.574 x 1.876 x 1.690 mm",
    "Chiều dài cơ sở": "2.708 mm",
    "Khoảng sáng gầm": "196 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước",
    "Hộp số": "7 DCT",
    "Hệ thống treo (trước / sau)": "MacPherson/Liên kết đa điểm",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, CBC, BA, ESP"
   }
  }
 },
 "mg/g50": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.825 x 1.825 x 1.778 mm",
    "Chiều dài cơ sở": "2.800 mm",
    "Khoảng sáng gầm": "200 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "Macpherson / Trục xoắn",
    "Phanh": "Đĩa / Đĩa",
    "Động cơ (bản tham chiếu)": "1.5L Turbocharged",
    "Công suất (bản tham chiếu)": "181 hp",
    "Mô-men xoắn (bản tham chiếu)": "285 Nm",
    "Hộp số (bản tham chiếu)": "7 DCT",
    "Dẫn động (bản tham chiếu)": "Cầu trước"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, CBC, BA, ESP, Phanh tay điện tử + Autohold"
   }
  }
 },
 "mg/mg7": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.884 x 1.889 x 1.447 mm",
    "Chiều dài cơ sở": "2.778 mm",
    "Khoảng sáng gầm": "179 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước",
    "Hộp số": "9 AT",
    "Hệ thống treo (trước / sau)": "Độc lập Mc Pherson / Liên kết đa điểm",
    "Phanh": "Đĩa / Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {
    "Vô lăng": "Vô lăng 3 chấu bọc da tích hợp nhiều phím chức năng và lẫy chuyển số ở phía sau.",
    "Cửa sổ trời": "Phiên bản 2.0T Luxury được trang bị cửa sổ trời nhỏ và phiên bản 2.0 Premium được trang bị cửa sổ trời toàn cảnh tạo không gian tự nhiên…",
    "Hệ thống loa": "MG7 phiên bản Premium được trang bị 9 loa Bose mang đến âm thanh cao cấp cho người nghe.",
    "Sạc không dây": "Hai phiên bản cao cấp được trang bị sạc không dây tiện lợi cho điện thoại thông minh."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, CBC, TCS, VDC, phanh tay điện tử, tự động giữ"
   }
  }
 },
 "mg/mg4": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.287 x 1.836 x 1.516 mm",
    "Chiều dài cơ sở": "2.705 mm",
    "Khoảng sáng gầm": "150 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "MacPherson/Độc lập 5 liên kết",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "5",
    "Động cơ (bản tham chiếu)": "Động cơ điện",
    "Công suất (bản tham chiếu)": "201 HP (150KW)",
    "Mô-men xoắn (bản tham chiếu)": "250 N.m",
    "Hộp số (bản tham chiếu)": "1 cấp",
    "Dẫn động (bản tham chiếu)": "Cầu sau"
   },
   "interior": {
    "Vô lăng": "Vô lăng 2 chấu được thiết kế tinh tế, mang lại cảm giác thoải mái và dễ dàng khi điều khiển xe.",
    "Màn hình giải trí": "Màn hình giải trí cảm ứng kích thước 10,25 inch là điểm nhấn trong khoang lái, hỗ trợ Apple CarPlay và Android Auto.",
    "Hệ thống loa": "Hệ thống âm thanh với 6 loa mang đến trải nghiệm nghe nhạc sống động và chất lượng cao."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, EBA, ESP, TCS, phanh tay điện tử, giữ tự động"
   }
  }
 },
 "mitsubishi/xpander": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.595 x 1.750 x 1.750 mm",
    "Chiều dài cơ sở": "2.775 mm",
    "Khoảng sáng gầm": "225 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước FWD",
    "Hộp số": "4 AT",
    "Hệ thống treo (trước / sau)": "MacPherson, lò xo cuộn / Thanh xoắn",
    "Phanh": "Đĩa/Tang trống",
    "Số chỗ ngồi": "7"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA, ASC, kiểm soát lực kéo, phanh tay điện tử & giữ tự động"
   }
  }
 },
 "mitsubishi/xpander-cross": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.595 x 1.790 x 1.750 mm",
    "Chiều dài cơ sở": "2.775 mm",
    "Khoảng sáng gầm": "225 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước FWD",
    "Hộp số": "Tự động 4 cấp 4AT",
    "Hệ thống treo (trước / sau)": "Kiểu MacPherson, Lò xo cuộn/ Thanh xoắn",
    "Phanh": "Đĩa/Tang trống",
    "Số chỗ ngồi": "7",
    "Mâm / lốp": "205/55R17"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA, ASC, ASTC, phanh tay điện tử, giữ phanh tự động"
   }
  }
 },
 "mitsubishi/xforce": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.390 x 1.810 x 1.660 mm",
    "Chiều dài cơ sở": "2.650 mm",
    "Khoảng sáng gầm": "222 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước chủ động",
    "Hộp số": "CVT",
    "Hệ thống treo (trước / sau)": "MacPherson / Thanh xoắn",
    "Phanh": "Đĩa tản nhiệt / Đĩa",
    "Số chỗ ngồi": "5"
   },
   "interior": {
    "Màn hình giải trí": "đa thông tin 12.3 inch…",
    "Hệ thống loa": "Dynamic Sound Yamaha Premium…"
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EDB, ASC, BA, phanh tay điện tử và giữ phanh tự động"
   }
  }
 },
 "mitsubishi/destinator": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.680 x 1.840 x 1.780 mm",
    "Chiều dài cơ sở": "2.815 mm",
    "Khoảng sáng gầm": "214 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước chủ động",
    "Hộp số": "Tự động vô cấp",
    "Hệ thống treo (trước / sau)": "MacPherson/Thanh xoắn",
    "Phanh": "Đĩa tản nhiệt/Đĩa",
    "Số chỗ ngồi": "7"
   },
   "interior": {
    "Vô lăng": "Vô lăng thiết kế thể thao, bọc da êm tay và tích hợp hệ thống nút bấm điều khiển chức năng.",
    "Hệ thống loa": "Bộ âm thanh Dynamic Sound Yamaha Premium gồm 8 loa, được tinh chỉnh theo đặc tính khoang xe của Destinator."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EDB, ASC, BA, phanh tay điện tử và giữ phanh tự động"
   }
  }
 },
 "suzuki/fronx": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "3.995 x 1.765 x 1.550 mm",
    "Chiều dài cơ sở": "2.250 mm",
    "Khoảng sáng gầm": "170 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "FWD",
    "Hộp số": "6AT",
    "Hệ thống treo (trước / sau)": "McPherson / Thanh xoắn",
    "Phanh": "Đĩa / Tang trống",
    "Số chỗ ngồi": "5"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA, ESP, TCS"
   }
  }
 },
 "toyota/raize": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.030 x 1.710 x 1.605 mm",
    "Chiều dài cơ sở": "2.525 mm",
    "Khoảng sáng gầm": "200 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Cầu trước FWD",
    "Hộp số": "CVT",
    "Hệ thống treo (trước / sau)": "Mc Pherson / Phụ thuộc kiểu dầm xoắn",
    "Phanh": "Đĩa / Tang trống",
    "Số chỗ ngồi": "5",
    "Mâm / lốp": "205/60R17"
   },
   "interior": {
    "Vô lăng": "Thiết kế các nút bấm thông minh và lẫy chuyển số sau tay lái giúp vận hành một cách linh hoạt."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, VSC, TRC"
   }
  }
 },
 "toyota/vios": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.425 x 1.730 x 1.475 mm",
    "Chiều dài cơ sở": "2.550 mm",
    "Khoảng sáng gầm": "133 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Dẫn động cầu trước",
    "Hộp số": "Tự động vô cấp",
    "Hệ thống treo (trước / sau)": "Độc lập Macpherson/Dầm xoắn",
    "Phanh": "Đĩa thông gió/Đĩa đặc",
    "Số chỗ ngồi": "5"
   },
   "interior": {
    "Màn hình giải trí": "đa phương tiện Màn hình cảm ứng được thiết kế nổi theo xu hướng hiện đại, kết nối điện thoại thông minh mang lại sự thuận tiện và trải…",
    "Hệ thống loa": "Hệ thống 6 loa trong không gian xe mang đến trải nghiệm âm thanh sống…"
   },
   "features": {
    "Công nghệ phanh / an toàn": "Hệ thống chống bó cứng phanh, Hệ thống hỗ trợ lực phanh khẩn cấp, Hệ thống phân phối lực phanh điện tử, Hệ thống cân bằng điện tử, Hệ thống kiểm soát "
   }
  }
 },
 "toyota/innova-cross": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.755 x 1.850 x 1.790 mm",
    "Chiều dài cơ sở": "2.850 mm",
    "Khoảng sáng gầm": "170 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Dẫn động cầu trước/ FWD",
    "Hộp số": "Số tự động vô cấp/ CVT",
    "Hệ thống treo (trước / sau)": "Mc Pherson/Thanh dầm xoắn",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "8"
   },
   "interior": {
    "Màn hình giải trí": "Màn hình lên đến 10.1 inch với khả năng kết nối điện thoại thông minh không dây mang lại sự tiện nghi hàng đầu."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, BA, EBD, VSC, TRC, EBS, Phanh tay điện tử và giữ phanh tự động"
   }
  }
 },
 "toyota/fortuner": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.795 x 1.855 x 1.835 mm",
    "Chiều dài cơ sở": "2.745 mm",
    "Khoảng sáng gầm": "279 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Dẫn động 2 cầu bán thời gian, gài cầu điện tử",
    "Hộp số": "Số tự động 6 cấp / 6AT",
    "Hệ thống treo (trước / sau)": "Độc lập, tay đòn kép với thanh cân bằng / Phụ thuộc, Liên kết 4 điểm",
    "Phanh": "Đĩa tản nhiệt / Phanh đĩa",
    "Số chỗ ngồi": "7"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, BA, EBD,"
   }
  }
 },
 "vinfast/vf3": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "3.190 x 1.679 x 1.622 mm",
    "Chiều dài cơ sở": "2.075 mm",
    "Khoảng sáng gầm": "191 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "Độc lập, MacPherson / Phụ thuộc, trục cứng với thanh xoắn Panhard",
    "Phanh": "Đĩa / Tang trống",
    "Số chỗ ngồi": "4",
    "Động cơ (bản tham chiếu)": "Động cơ điện",
    "Công suất (bản tham chiếu)": "43 hp",
    "Mô-men xoắn (bản tham chiếu)": "110 Nm",
    "Hộp số (bản tham chiếu)": "1 cấp",
    "Dẫn động (bản tham chiếu)": "RWD/Cầu sau"
   },
   "interior": {
    "Vô lăng": "Vô lăng dạng vát đáy (D-Cut) với thiết kế hai chấu mang đến vẻ cá tính, mà còn mở rộng không gian di chuyển cho đầu gối người lái."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, BA, TCS, HSA"
   }
  }
 },
 "vinfast/vf5": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "3.967 x 1.723 x 1.579 mm",
    "Chiều dài cơ sở": "2.514 mm",
    "Khoảng sáng gầm": "160 mm"
   }
  },
  "fill": {
   "specs": {
    "Động cơ": "1 Motor điện; Pin 37.23 kWh; Quãng đường chạy một lần sạc đầy (NEDC) 326 km",
    "Công suất": "100 hp @ 134 rpm",
    "Mô-men xoắn": "135 Nm",
    "Hộp số": "Tự động 1 cấp",
    "Dẫn động": "FWD/Cầu trước",
    "Hệ thống treo (trước / sau)": "Độc lập, MacPherson / Dầm xoắn",
    "Phanh": "Đĩa thông gió / Đĩa",
    "Số chỗ ngồi": "5",
    "Mâm / lốp": "205/55R17"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA, ESC, TCS"
   }
  }
 },
 "vinfast/vf6": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.241 x 1.834 x 1.580 mm",
    "Chiều dài cơ sở": "2.730 mm",
    "Khoảng sáng gầm": "170 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "MacPherson/Thanh điều hướng đa điểm",
    "Phanh": "Đĩa/Đĩa",
    "Số chỗ ngồi": "5",
    "Động cơ (bản tham chiếu)": "Điện đơn (pin 59,6 kWh)",
    "Công suất (bản tham chiếu)": "174 hp",
    "Mô-men xoắn (bản tham chiếu)": "250 Nm",
    "Hộp số (bản tham chiếu)": "1 cấp",
    "Dẫn động (bản tham chiếu)": "Cầu trước"
   },
   "interior": {
    "Vô lăng": "Vô lăng D-Cut bọc da và tích hợp các phím bấm chức năng.",
    "Màn hình giải trí": "Màn hình giải trí cảm ứng 12,9 inch, tích hợp các tính năng thông minh, đem lại không gian trải nghiệm giải trí trọn vẹn và điều khiển xe…",
    "Cửa sổ trời": "Phiên bản Plus được trang bị cửa sổ trời kéo dài đến hết hàng ghế sau."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, BA, EBD, VSC, ESP, TCS, Phanh tay điện tử, giữ tự động"
   }
  }
 },
 "vinfast/limo-green": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.740 x 1.872 x 1.728 mm",
    "Chiều dài cơ sở": "2.840 mm",
    "Khoảng sáng gầm": "170 mm"
   }
  },
  "fill": {
   "specs": {
    "Động cơ": "Động cơ điện, pin 60,13 kWh, đi 450 km/lần sạc đầy",
    "Công suất": "201 hp",
    "Mô-men xoắn": "280 Nm",
    "Hộp số": "Tự động 1 cấp",
    "Dẫn động": "FWD/ Cầu trước",
    "Hệ thống treo (trước / sau)": "MacPherson/Đa liên kết",
    "Phanh": "Đĩa thông gió/Đĩa",
    "Số chỗ ngồi": "7",
    "Mâm / lốp": "18 inch"
   },
   "interior": {
    "Vô lăng": "Limo Green được trang bị vô lăng 3 chấu kiểu D-cut thể thao, thiết kế vát đáy hiện đại mang đến cảm giác cầm nắm chắc tay và góp phần tăng…",
    "Màn hình giải trí": "Trung tâm bảng điều khiển được trang bị màn hình giải trí kích thước 10,1 inch, thiết kế nổi bật với giao diện trực quan, dễ sử dụng.",
    "Hệ thống loa": "Limo Green được trang bị hệ thống âm thanh 4 loa, mang đến trải nghiệm nghe sống động với âm thanh rõ nét và cân bằng."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA, ESC, TCS, phanh tay điện tử và tự động giữ phanh"
   }
  }
 },
 "vinfast/vf7": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.545 x 1.890 x 1.636 mm",
    "Chiều dài cơ sở": "2.840 mm",
    "Khoảng sáng gầm": "190 mm"
   }
  },
  "fill": {
   "specs": {
    "Hệ thống treo (trước / sau)": "Độc lập, MacPherson / Thanh điều hướng đa điểm",
    "Phanh": "Đĩa / Đĩa",
    "Số chỗ ngồi": "5",
    "Động cơ (bản tham chiếu)": "2 Động cơ điện",
    "Công suất (bản tham chiếu)": "349 PS",
    "Mô-men xoắn (bản tham chiếu)": "500 Nm",
    "Hộp số (bản tham chiếu)": "Hộp số xe điện một cấp",
    "Dẫn động (bản tham chiếu)": "AWD/2 cầu toàn thời gian"
   },
   "interior": {
    "Vô lăng": "VinFast VF7 trang bị vô lăng đa chức năng 3 chấu bọc da, có thiết kế dạng D-Cut tạo cảm giác cầm nắm thể thao.",
    "Màn hình giải trí": "Màn hình cảm ứng trung tâm lớn với kích thước 12,9 inch (đối với bản Base) hoặc 15,6 inch (đối với bản Plus) không chỉ đáp ứng tốt nhu cầu…",
    "Ghế": "Ghế trên xe VF7 được bọc da cao cấp mang lại sự êm ái với phối 2 tông màu thể thao và sang trọng.",
    "Cửa sổ trời": "Xe trang bị cửa sổ trời kích thước lớn, giúp không gian bên trong thêm phần mở rộng và thoáng đãng."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA, phanh tự động, cân bằng điện tử, phanh tay điện tử"
   }
  }
 },
 "vinfast/vf-mpv-7": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.740 x 1.872 x 1.728 mm",
    "Chiều dài cơ sở": "2.840 mm",
    "Khoảng sáng gầm": "185 mm"
   }
  },
  "fill": {
   "specs": {
    "Động cơ": "Động cơ điện, pin 60,13 kWh, đi 450 km/lần sạc đầy",
    "Công suất": "204 hp",
    "Mô-men xoắn": "280 Nm",
    "Hộp số": "Tự động 1 cấp",
    "Dẫn động": "FWD/ Cầu trước",
    "Hệ thống treo (trước / sau)": "MacPherson/Đa liên kết",
    "Phanh": "Đĩa thông gió/Đĩa",
    "Số chỗ ngồi": "7",
    "Mâm / lốp": "19 inch"
   },
   "interior": {
    "Vô lăng": "Vô lăng dạng D-Cut bọc da đa chức năng mang lại cảm giác cầm nắm chắc tay, tích hợp các phím điều khiển giúp người lái thao tác nhanh…",
    "Hệ thống loa": "VF MPV 7 được trang bị 4 loa mang đến trải nghiệm âm thanh sống động cho người dùng khi điều khiển xe cần mở nhạc."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA, ESC, TCS, phanh tay điện tử và tự động giữ phanh"
   }
  }
 },
 "vinfast/vf-wild": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "5.376 x 2.069 x 1.873 mm",
    "Chiều dài cơ sở": "3.258 mm",
    "Khoảng sáng gầm": "222 mm"
   }
  },
  "fill": {
   "specs": {
    "Động cơ": "Động cơ điện pin 46,4 kWh (chạy được hơn 250 km cho một lần sạc) kết hợp hệ thống REEV có thể chạy được quãng đường lên tới 1.000 km cho một lần sạc",
    "Công suất": "160 (kW)",
    "Mô-men xoắn": "280 (Nm)",
    "Hộp số": "Hộp số xe điện một cấp",
    "Dẫn động": "Cầu trước (FWD)",
    "Hệ thống treo (trước / sau)": "Độc lập, tay đòn kép/ Treo đa liên kết",
    "Phanh": "Đĩa/ Đĩa",
    "Số chỗ ngồi": "5",
    "Mâm / lốp": "255/70 R18"
   },
   "interior": {},
   "features": {
    "Công nghệ phanh / an toàn": "Phanh đỗ điện tử tích hợp giữ phanh tự động; Hệ thống chống bó cứng phanh (ABS); Phân phối lực phanh điện tử (EBD); Hỗ trợ phanh khẩn cấp (BA); Hệ thố"
   }
  }
 },
 "volkswagen/virtus": {
  "force": {
   "specs": {
    "Kích thước D x R x C": "4.561 x 1.752 x 1.507 mm",
    "Chiều dài cơ sở": "2.651 mm",
    "Khoảng sáng gầm": "179 mm"
   }
  },
  "fill": {
   "specs": {
    "Dẫn động": "Dẫn động cầu trước",
    "Hộp số": "Số tự động 6 cấp",
    "Số chỗ ngồi": "5"
   },
   "interior": {
    "Vô lăng": "Vô lăng thể thao bọc da, thiết kế D-Cut tích hợp nhiều nút điều khiển và lẫy sang số."
   },
   "features": {
    "Công nghệ phanh / an toàn": "ABS, EBD, BA, cân bằng điện tử"
   }
  }
 }
};
