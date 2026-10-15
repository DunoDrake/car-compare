/*
 * Cấu hình giá động.
 * priceSheetCsvUrl: link CSV của Google Sheet giá (dạng gviz, Sheet cần chia sẻ "Bất kỳ ai có đường liên kết" ở quyền xem).
 * Cũng dùng được link Xuất bản lên web (định dạng CSV).
 * Để trống thì web dùng giá nhúng sẵn trong data/*.js.
 * Sheet cần có dòng tiêu đề: hãng | mẫu | phiên bản | giá (triệu). Xem data/prices-template.csv.
 */
window.CAR_CONFIG = {
  priceSheetCsvUrl: 'https://docs.google.com/spreadsheets/d/141PTFKjwlZp02gfxrkhYENAMS3wgtUVKfsggLw34U40/gviz/tq?tqx=out:csv&gid=1156432970'
};
