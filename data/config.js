/*
 * Cấu hình giá động.
 * Dán link CSV của Google Sheet (File > Chia sẻ > Xuất bản lên web > CSV) vào priceSheetCsvUrl.
 * Để trống thì web dùng giá nhúng sẵn trong data/*.js.
 * Sheet cần có dòng tiêu đề: hãng | mẫu | phiên bản | giá (triệu). Xem data/prices-template.csv.
 */
window.CAR_CONFIG = {
  priceSheetCsvUrl: ''
};
