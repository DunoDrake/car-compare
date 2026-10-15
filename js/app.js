(function () {
  var BRANDS = window.CAR_BRANDS || [];
  var GROUPS = [
    { key: 'specs', title: 'Thông số kỹ thuật' },
    { key: 'interior', title: 'Nội thất' },
    { key: 'features', title: 'Trang bị & an toàn' }
  ];
  var RANGES = [
    { id: 'under600', label: 'Dưới 600 triệu', test: function (p) { return p < 600; } },
    { id: '600-900', label: '600 – 900 triệu', test: function (p) { return p >= 600 && p <= 900; } },
    { id: 'over900', label: 'Trên 900 triệu', test: function (p) { return p > 900; } }
  ];
  var MODES = [
    { id: 'brand', label: 'Theo mẫu xe', hash: '' },
    { id: 'cross', label: 'So sánh giữa các hãng', hash: '#compare' },
    { id: 'price', label: 'Theo tầm giá', hash: '#price/under600' }
  ];
  var MAX_COMPARE = 4;
  var PRICE_QUICK_SPECS = ['Nhiên liệu', 'Hộp số', 'Số chỗ ngồi', 'Dẫn động'];

  var state = {
    mode: 'brand',
    brandId: null,
    modelId: null,
    selected: {},
    diffOnly: false,
    slots: [],
    rangeId: RANGES[0].id,
    priceBrand: '',
    priceSel: [],
    region: 'TP HCM',
    promo: 0
  };
  var ONROAD = window.CAR_ONROAD || null;

  var el = {
    modeTabs: document.getElementById('modeTabs'),
    brandTabs: document.getElementById('brandTabs'),
    modelView: document.getElementById('modelView'),
    modelViewTitle: document.getElementById('modelViewTitle'),
    modelGrid: document.getElementById('modelGrid'),
    compareView: document.getElementById('compareView'),
    backBtn: document.getElementById('backBtn'),
    cmpBrand: document.getElementById('cmpBrand'),
    cmpTitle: document.getElementById('cmpTitle'),
    cmpMeta: document.getElementById('cmpMeta'),
    cmpHero: document.getElementById('cmpHero'),
    variantPicker: document.getElementById('variantPicker'),
    compareTables: document.getElementById('compareTables'),
    crossView: document.getElementById('crossView'),
    slots: document.getElementById('slots'),
    crossTables: document.getElementById('crossTables'),
    priceView: document.getElementById('priceView'),
    rangeTabs: document.getElementById('rangeTabs'),
    priceBrand: document.getElementById('priceBrand'),
    priceHint: document.getElementById('priceHint'),
    priceTables: document.getElementById('priceTables'),
    priceList: document.getElementById('priceList'),
    logo: document.getElementById('logo'),
    onroadBar: document.getElementById('onroadBar')
  };

  /* ---------- helpers ---------- */

  function h(tag, attrs, children) {
    var node = document.createElement(tag);
    var k;
    if (attrs) {
      for (k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
        if (k === 'text') node.textContent = attrs[k];
        else if (k === 'class') node.className = attrs[k];
        else node.setAttribute(k, attrs[k]);
      }
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function formatPrice(million) {
    if (million >= 1000) {
      var s = (million / 1000).toFixed(3).replace(/0+$/, '').replace(/\.$/, '');
      return s.replace('.', ',') + ' tỷ';
    }
    return million.toLocaleString('vi-VN') + ' triệu';
  }

  function getBrand(id) {
    return BRANDS.filter(function (b) { return b.id === id; })[0];
  }

  function getModel(brand, id) {
    return brand ? brand.models.filter(function (m) { return m.id === id; })[0] : undefined;
  }

  function mergedGroup(model, variant, key) {
    var out = {};
    var base = (model.common && model.common[key]) || {};
    var over = variant[key] || {};
    Object.keys(base).forEach(function (k) { out[k] = base[k]; });
    Object.keys(over).forEach(function (k) { out[k] = over[k]; });
    return out;
  }

  function unionLabels(list) {
    var seen = {};
    var order = [];
    list.forEach(function (obj) {
      Object.keys(obj).forEach(function (k) {
        if (!seen[k]) { seen[k] = true; order.push(k); }
      });
    });
    return order;
  }

  function valueKey(v) {
    return v === undefined ? '__missing__' : String(v);
  }

  function renderValueCell(v) {
    var td = h('td');
    if (v === true) { td.className = 'yes'; td.textContent = '✓ Có'; }
    else if (v === false) { td.className = 'no'; td.textContent = '✗ Không'; }
    else if (v === undefined || v === null || v === '') { td.className = 'na'; td.textContent = '—'; }
    else td.textContent = String(v);
    return td;
  }

  function entryKey(brandId, modelId, idx) {
    return brandId + '.' + modelId + '.' + idx;
  }

  function resolveKey(key) {
    var p = String(key).split('.');
    var brand = getBrand(p[0]);
    var model = getModel(brand, p[1]);
    var idx = parseInt(p[2], 10);
    var variant = model && model.variants[idx];
    if (!variant) return null;
    return { key: key, brand: brand, model: model, variant: variant, idx: idx };
  }

  function allEntries() {
    var out = [];
    BRANDS.forEach(function (b) {
      b.models.forEach(function (m) {
        m.variants.forEach(function (v, i) {
          out.push({ key: entryKey(b.id, m.id, i), brand: b, model: m, variant: v, idx: i });
        });
      });
    });
    return out;
  }

  /* ---------- giá lăn bánh ---------- */

  function loadPrefs() {
    try {
      var r = localStorage.getItem('cc.region');
      var p = localStorage.getItem('cc.promo');
      if (r) state.region = r;
      if (p) state.promo = parseInt(p, 10) || 0;
    } catch (e) { /* localStorage có thể bị chặn */ }
  }

  function savePrefs() {
    try {
      localStorage.setItem('cc.region', state.region);
      localStorage.setItem('cc.promo', String(state.promo));
    } catch (e) { /* bỏ qua */ }
  }

  function regionInfo() {
    if (!ONROAD) return null;
    var list = ONROAD.regions;
    var hit = list.filter(function (r) { return r[0] === state.region; })[0] || list[0];
    return { name: hit[0], rate: hit[1], plateBig: !!hit[2] };
  }

  function formatVnd(n) {
    return Math.round(n).toLocaleString('vi-VN') + ' đ';
  }

  function seatsOf(specs) {
    var m = String((specs && specs['Số chỗ ngồi']) || '').match(/\d+/);
    return m ? parseInt(m[0], 10) : 5;
  }

  // Công thức: xem data/onroad.js. entry = { brand, model, variant }.
  function calcOnRoad(entry) {
    var reg = regionInfo();
    if (!ONROAD || !reg) return null;
    var fees = ONROAD.fees;
    var specs = mergedGroup(entry.model, entry.variant, 'specs');
    var over = entry.variant.onroad || {};
    var pickup = /bán tải/i.test(entry.model.type || '');
    var ev = /^điện/i.test(String(specs['Nhiên liệu'] || ''));
    var seats = seatsOf(specs);
    var price = entry.variant.price * 1000000;
    var rate = ev ? 0 : reg.rate;
    var tax = price * rate / 100;
    var plate = reg.plateBig ? fees.plateBigCity : fees.plateOther;
    var inspection = fees.inspection;
    var road = over.roadMaintenance || (pickup ? fees.roadMaintenancePickup : fees.roadMaintenance);
    var insurance = over.insurance || (pickup ? fees.insurance.pickup : (seats > 5 ? fees.insurance.seats7 : fees.insurance.seats5));
    var support = tax * (state.promo / 100);
    var total = price + tax + plate + inspection + road + insurance - support;
    return {
      price: price, rate: rate, ev: ev, tax: tax, plate: plate, inspection: inspection,
      road: road, insurance: insurance, support: support, total: total, region: reg.name
    };
  }

  function formatMillion(vnd) {
    var m = vnd / 1000000;
    return m >= 1000
      ? (m / 1000).toFixed(3).replace(/0+$/, '').replace(/\.$/, '').replace('.', ',') + ' tỷ'
      : Math.round(m).toLocaleString('vi-VN') + ' triệu';
  }

  function refreshView() {
    if (state.mode === 'cross') updateCross();
    else if (state.mode === 'price') renderPrice();
    else if (state.modelId) renderModelCompare();
    else renderModelGrid();
  }

  function renderOnroadBar() {
    if (!ONROAD) { el.onroadBar.hidden = true; return; }
    el.onroadBar.textContent = '';
    var regionSel = h('select', { 'aria-label': 'Nơi đăng ký biển số' });
    ONROAD.regions.forEach(function (r) {
      var o = h('option', { value: r[0], text: r[0] + ' (trước bạ ' + r[1] + '%)' });
      if (r[0] === state.region) o.selected = true;
      regionSel.appendChild(o);
    });
    regionSel.addEventListener('change', function () {
      state.region = regionSel.value; savePrefs(); refreshView();
    });
    var promoSel = h('select', { 'aria-label': 'Hỗ trợ trước bạ' });
    [[0, 'Không'], [50, 'Hỗ trợ 50%'], [100, 'Hỗ trợ 100%']].forEach(function (p) {
      var o = h('option', { value: String(p[0]), text: p[1] });
      if (p[0] === state.promo) o.selected = true;
      promoSel.appendChild(o);
    });
    promoSel.addEventListener('change', function () {
      state.promo = parseInt(promoSel.value, 10) || 0; savePrefs(); refreshView();
    });
    var f = ONROAD.fees;
    var formula = h('details', { 'class': 'formula' }, [
      h('summary', { text: 'Công thức tính giá lăn bánh' }),
      h('div', { 'class': 'formula-body' }, [
        h('p', { text: 'Giá lăn bánh = giá niêm yết + thuế trước bạ + lệ phí biển số + phí kiểm định + phí bảo trì đường bộ (1 năm) + bảo hiểm TNDS bắt buộc (1 năm) - hỗ trợ trước bạ (nếu có).' }),
        h('ul', null, [
          h('li', { text: 'Thuế trước bạ = giá niêm yết × tỷ lệ theo nơi đăng ký (Hà Nội, Hải Phòng, Quảng Ninh, Cao Bằng, Lạng Sơn, Lào Cai, Sơn La: 12%; Hà Tĩnh: 11%; còn lại: 10%). Xe điện: 0%.' }),
          h('li', { text: 'Lệ phí biển số: ' + formatVnd(f.plateBigCity) + ' (Hà Nội, TP.HCM), ' + formatVnd(f.plateOther) + ' (nơi khác).' }),
          h('li', { text: 'Phí kiểm định: ' + formatVnd(f.inspection) + '. Bảo trì đường bộ: ' + formatVnd(f.roadMaintenance) + '/năm (bán tải: ' + formatVnd(f.roadMaintenancePickup) + ').' }),
          h('li', { text: 'TNDS bắt buộc: ' + formatVnd(f.insurance.seats5) + ' (đến 5 chỗ), ' + formatVnd(f.insurance.seats7) + ' (6 chỗ trở lên), ' + formatVnd(f.insurance.pickup) + ' (bán tải).' })
        ]),
        h('p', { 'class': 'muted', text: 'Ước tính theo bảng tính của ' + ONROAD.source + ' (' + ONROAD.updated + '). Chưa gồm bảo hiểm vật chất, phụ kiện, phí dịch vụ đại lý hay khuyến mãi tiền mặt.' })
      ])
    ]);
    el.onroadBar.appendChild(h('div', { 'class': 'onroad-fields' }, [
      h('label', { 'class': 'field' }, [h('span', { text: 'Đăng ký biển số tại' }), regionSel]),
      h('label', { 'class': 'field' }, [h('span', { text: 'Hỗ trợ trước bạ' }), promoSel])
    ]));
    el.onroadBar.appendChild(formula);
  }

  function imageFor(brandId, modelId) {
    var all = window.CAR_IMAGES || {};
    return all[brandId + '/' + modelId] || null;
  }

  function creditText(img) {
    if (img.official) return 'Ảnh: ' + img.author;
    return 'Ảnh: ' + img.author + ', ' + img.license + ' (Wikimedia Commons)';
  }

  // Ảnh xe hoặc khung placeholder theo màu hãng khi chưa có ảnh.
  function thumbEl(brand, model, size) {
    var img = imageFor(brand.id, model.id);
    var box = h('div', { 'class': 'thumb thumb-' + size + (img && img.kind === 'render' ? ' thumb-render' : '') });
    if (img) {
      box.appendChild(h('img', {
        src: img.src, alt: brand.name + ' ' + model.name, loading: 'lazy', decoding: 'async'
      }));
    } else {
      box.className += ' thumb-empty';
      box.style.setProperty('--brand', brand.color);
      box.appendChild(h('span', { text: brand.name + ' ' + model.name }));
    }
    return box;
  }

  function reviewFor(entry) {
    var all = window.CAR_REVIEWS || {};
    return all[entry.brand.id + '|' + entry.model.id + '|' + entry.variant.name] || null;
  }

  function toColumn(entry, withTitle) {
    return {
      title: withTitle ? entry.brand.name + ' ' + entry.model.name : '',
      color: entry.brand.color,
      name: entry.variant.name,
      price: entry.variant.price,
      image: imageFor(entry.brand.id, entry.model.id),
      onroad: calcOnRoad(entry),
      review: reviewFor(entry),
      data: {
        specs: mergedGroup(entry.model, entry.variant, 'specs'),
        interior: mergedGroup(entry.model, entry.variant, 'interior'),
        features: mergedGroup(entry.model, entry.variant, 'features')
      }
    };
  }

  function setHashQuiet(hash) {
    try {
      history.replaceState(null, '', hash || location.pathname + location.search);
    } catch (e) {
      /* file:// or sandboxed contexts may refuse replaceState; the view is already rendered */
    }
  }

  /* ---------- giá động từ Google Sheet (CSV) ---------- */

  function normName(str) {
    return String(str || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/gi, 'd')
      .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }

  function parseCsv(text) {
    var rows = [];
    var row = [];
    var cell = '';
    var inQuotes = false;
    var i;
    for (i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      if (inQuotes) {
        if (ch === '"') {
          if (text.charAt(i + 1) === '"') { cell += '"'; i += 1; }
          else inQuotes = false;
        } else cell += ch;
      } else if (ch === '"') inQuotes = true;
      else if (ch === ',') { row.push(cell); cell = ''; }
      else if (ch === '\n' || ch === '\r') {
        if (ch === '\r' && text.charAt(i + 1) === '\n') i += 1;
        row.push(cell); cell = '';
        rows.push(row); row = [];
      } else cell += ch;
    }
    if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
    return rows;
  }

  // Chấp nhận "839", "839 triệu", "1.099" (tỷ ghi theo nghìn) hoặc 1.099.000.000 (đồng).
  function parsePriceMillion(raw) {
    var digits = String(raw || '').replace(/[^\d]/g, '');
    if (!digits) return null;
    var n = parseInt(digits, 10);
    if (digits.length >= 7) n = Math.round(n / 1000000);
    return n > 0 ? n : null;
  }

  function applyLivePrices(csvText) {
    var rows = parseCsv(csvText).filter(function (r) { return r.some(function (c) { return c.trim() !== ''; }); });
    if (rows.length < 2) return 0;
    var head = rows[0].map(normName);
    function col(test, fallback) {
      var idx = -1;
      head.forEach(function (name, i) { if (idx === -1 && test(name)) idx = i; });
      return idx === -1 ? fallback : idx;
    }
    var cBrand = col(function (n) { return n.indexOf('hang') === 0 || n === 'brand'; }, 0);
    var cModel = col(function (n) { return n.indexOf('mau') === 0 || n === 'model'; }, 1);
    var cVariant = col(function (n) { return n.indexOf('phien ban') === 0 || n === 'variant'; }, 2);
    var cPrice = col(function (n) { return n.indexOf('gia') === 0 || n === 'price'; }, 3);

    var byKey = {};
    allEntries().forEach(function (e) {
      byKey[normName(e.brand.name) + '|' + normName(e.model.name) + '|' + normName(e.variant.name)] = e;
    });

    var applied = 0;
    rows.slice(1).forEach(function (r) {
      var key = normName(r[cBrand]) + '|' + normName(r[cModel]) + '|' + normName(r[cVariant]);
      var price = parsePriceMillion(r[cPrice]);
      if (byKey[key] && price) {
        byKey[key].variant.price = price;
        applied += 1;
      }
    });
    return applied;
  }

  function loadLivePrices() {
    var url = (window.CAR_CONFIG && window.CAR_CONFIG.priceSheetCsvUrl) || '';
    var badge = document.getElementById('priceSource');
    if (!url || !window.fetch) return;
    fetch(url, { cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(function (text) {
        var applied = applyLivePrices(text);
        if (badge) {
          badge.hidden = false;
          badge.textContent = applied
            ? 'Giá đang lấy từ Google Sheet (' + applied + ' phiên bản đã cập nhật).'
            : 'Không khớp được dòng nào trong Google Sheet; đang dùng giá có sẵn.';
        }
        if (applied) applyHash();
      })
      .catch(function () {
        if (badge) {
          badge.hidden = false;
          badge.textContent = 'Không tải được Google Sheet; đang dùng giá có sẵn.';
        }
      });
  }

  /* ---------- shared comparison table ---------- */

  function renderComparison(container, columns) {
    container.textContent = '';
    if (!columns.length) return;

    var toolbar = h('div', { 'class': 'table-toolbar' });
    var check = h('input', { type: 'checkbox' });
    check.checked = state.diffOnly;
    check.addEventListener('change', function () {
      state.diffOnly = check.checked;
      renderComparison(container, columns);
    });
    toolbar.appendChild(h('label', { 'class': 'switch' }, [check, h('span', { text: 'Chỉ hiện điểm khác biệt' })]));
    container.appendChild(toolbar);

    var makeHead = function () {
      var tr = h('tr', null, [h('th', { text: 'Hạng mục' })]);
      columns.forEach(function (c) {
        var th = h('th');
        if (c.title && c.image) {
          th.appendChild(h('img', { 'class': 'th-thumb', src: c.image.src, alt: c.title, loading: 'lazy', decoding: 'async' }));
        }
        if (c.title) {
          th.appendChild(h('span', { 'class': 'dot', style: 'background:' + c.color }));
          th.appendChild(h('span', { 'class': 'col-title', text: c.title }));
          th.appendChild(document.createElement('br'));
        }
        th.appendChild(h('span', { text: c.name }));
        tr.appendChild(th);
      });
      return h('thead', null, [tr]);
    };

    var priceRow = h('tr', { 'class': 'price-row' }, [h('th', { text: 'Giá niêm yết (tham khảo)' })]);
    columns.forEach(function (c) { priceRow.appendChild(h('td', { text: formatPrice(c.price) })); });
    container.appendChild(h('div', { 'class': 'group' }, [
      h('h3', { text: 'Giá' }),
      h('div', { 'class': 'table-scroll' }, [h('table', null, [makeHead(), h('tbody', null, [priceRow])])])
    ]));

    if (columns.every(function (c) { return c.onroad; })) {
      var reg = columns[0].onroad.region;
      var rows = [
        ['Giá niêm yết', function (o) { return formatVnd(o.price); }],
        ['Thuế trước bạ', function (o) { return formatVnd(o.tax) + ' (' + o.rate + '%' + (o.ev ? ', xe điện' : '') + ')'; }],
        ['Lệ phí biển số', function (o) { return formatVnd(o.plate); }],
        ['Phí kiểm định', function (o) { return formatVnd(o.inspection); }],
        ['Phí bảo trì đường bộ (1 năm)', function (o) { return formatVnd(o.road); }],
        ['Bảo hiểm TNDS bắt buộc (1 năm)', function (o) { return formatVnd(o.insurance); }]
      ];
      if (state.promo > 0) {
        rows.push(['Hỗ trợ trước bạ ' + state.promo + '%', function (o) { return '- ' + formatVnd(o.support); }]);
      }
      var body = h('tbody');
      rows.forEach(function (r) {
        var tr = h('tr', null, [h('th', { text: r[0] })]);
        columns.forEach(function (c) { tr.appendChild(h('td', { text: r[1](c.onroad) })); });
        body.appendChild(tr);
      });
      var totalRow = h('tr', { 'class': 'price-row total-row' }, [h('th', { text: 'Giá lăn bánh (ước tính)' })]);
      columns.forEach(function (c) {
        totalRow.appendChild(h('td', null, [
          h('div', { text: formatVnd(c.onroad.total) }),
          h('small', { 'class': 'muted', text: '≈ ' + formatMillion(c.onroad.total) })
        ]));
      });
      body.appendChild(totalRow);
      container.appendChild(h('div', { 'class': 'group onroad-group' }, [
        h('h3', { text: 'Giá lăn bánh tại ' + reg }),
        h('div', { 'class': 'table-scroll' }, [h('table', null, [makeHead(), body])])
      ]));
    }

    GROUPS.forEach(function (g) {
      var datasets = columns.map(function (c) { return c.data[g.key]; });
      var labels = unionLabels(datasets);
      var tbody = h('tbody');
      var rows = 0;
      labels.forEach(function (label) {
        var keys = datasets.map(function (d) { return valueKey(d[label]); });
        var isDiff = columns.length > 1 && keys.some(function (k) { return k !== keys[0]; });
        if (state.diffOnly && !isDiff) return;
        var tr = h('tr', { 'class': isDiff ? 'diff' : '' }, [h('th', { text: label })]);
        datasets.forEach(function (d) { tr.appendChild(renderValueCell(d[label])); });
        tbody.appendChild(tr);
        rows += 1;
      });
      var body = rows === 0
        ? h('div', { 'class': 'empty', text: 'Không có điểm khác biệt giữa các xe đã chọn.' })
        : h('div', { 'class': 'table-scroll' }, [h('table', null, [makeHead(), tbody])]);
      container.appendChild(h('div', { 'class': 'group' }, [h('h3', { text: g.title }), body]));
    });

    renderReviews(container, columns, makeHead);
  }

  function listCell(items, cls) {
    var td = h('td', { 'class': 'opinion ' + cls });
    if (!items || !items.length) {
      td.className += ' na';
      td.textContent = '—';
      return td;
    }
    var ul = h('ul');
    items.forEach(function (t) { ul.appendChild(h('li', { text: t })); });
    td.appendChild(ul);
    return td;
  }

  function reviewRow(label, columns, pick, cls) {
    var tr = h('tr', null, [h('th', { text: label })]);
    columns.forEach(function (c) { tr.appendChild(listCell(c.review ? pick(c.review) : null, cls)); });
    return tr;
  }

  function renderReviews(container, columns, makeHead) {
    if (!columns.some(function (c) { return c.review; })) return;

    var sourcesRow = h('tr', null, [h('th', { text: 'Nguồn tham khảo' })]);
    var noteRow = h('tr', null, [h('th', { text: 'Lưu ý' })]);
    var hasNote = false;
    columns.forEach(function (c) {
      var r = c.review && c.review.research;
      var td = h('td', { 'class': 'opinion sources' });
      if (r && r.sources && r.sources.length) {
        var ul = h('ul');
        r.sources.forEach(function (src) {
          ul.appendChild(h('li', null, [h('a', { href: src.url, target: '_blank', rel: 'noopener noreferrer', text: src.name })]));
        });
        td.appendChild(ul);
      } else {
        td.className += ' na';
        td.textContent = '—';
      }
      sourcesRow.appendChild(td);

      var noteTd = h('td', { 'class': 'opinion note' });
      if (r && r.note) { noteTd.textContent = r.note; hasNote = true; }
      else { noteTd.className += ' na'; noteTd.textContent = '—'; }
      noteRow.appendChild(noteTd);
    });

    var ownerBody = h('tbody', null, [
      reviewRow('Ưu điểm', columns, function (r) { return r.owner && r.owner.pros; }, 'pro'),
      reviewRow('Nhược điểm', columns, function (r) { return r.owner && r.owner.cons; }, 'con')
    ]);
    var researchRows = [
      reviewRow('Ưu điểm', columns, function (r) { return r.research && r.research.pros; }, 'pro'),
      reviewRow('Nhược điểm', columns, function (r) { return r.research && r.research.cons; }, 'con'),
      sourcesRow
    ];
    if (hasNote) researchRows.push(noteRow);
    var researchBody = h('tbody', null, researchRows);

    container.appendChild(h('div', { 'class': 'group opinions' }, [
      h('h3', { text: 'Ý kiến của bạn (từ file đánh giá cá nhân)' }),
      h('div', { 'class': 'table-scroll' }, [h('table', null, [makeHead(), ownerBody])])
    ]));
    container.appendChild(h('div', { 'class': 'group opinions' }, [
      h('h3', { text: 'Tổng hợp từ review và ý kiến chủ xe' }),
      h('div', { 'class': 'table-scroll' }, [h('table', null, [makeHead(), researchBody])])
    ]));
  }

  /* ---------- mode: theo mẫu xe ---------- */

  function renderBrandTabs() {
    el.brandTabs.textContent = '';
    BRANDS.forEach(function (b) {
      var btn = h('button', {
        'class': 'brand-tab',
        type: 'button',
        role: 'tab',
        'aria-selected': String(b.id === state.brandId),
        style: '--brand:' + b.color
      }, [
        h('span', { 'class': 'dot' }),
        h('span', { text: b.name })
      ]);
      btn.addEventListener('click', function () { go('#' + b.id); });
      el.brandTabs.appendChild(btn);
    });
  }

  function renderModelGrid() {
    var brand = getBrand(state.brandId);
    el.modelGrid.textContent = '';
    if (!brand) {
      el.modelViewTitle.textContent = 'Chọn một hãng xe để bắt đầu';
      return;
    }
    el.modelViewTitle.textContent = brand.name + ' · ' + brand.country + ' · ' + brand.models.length + ' mẫu xe';
    brand.models.forEach(function (m) {
      var prices = m.variants.map(function (v) { return v.price; });
      var lo = Math.min.apply(null, prices);
      var hi = Math.max.apply(null, prices);
      var priceText = lo === hi ? formatPrice(lo) : formatPrice(lo) + ' – ' + formatPrice(hi);
      var roadTotals = m.variants.map(function (v) {
        var o = calcOnRoad({ brand: brand, model: m, variant: v });
        return o ? o.total : null;
      }).filter(function (x) { return x !== null; });
      var roadText = roadTotals.length ? 'Lăn bánh từ ' + formatMillion(Math.min.apply(null, roadTotals)) : '';
      var img = imageFor(brand.id, m.id);
      var card = h('button', {
        'class': 'model-card',
        type: 'button',
        style: '--brand:' + brand.color
      }, [
        thumbEl(brand, m, 'card'),
        h('h3', { text: m.name }),
        h('div', { 'class': 'type', text: m.type }),
        h('div', { 'class': 'price', text: priceText }),
        roadText ? h('div', { 'class': 'road', text: roadText }) : null,
        h('div', { 'class': 'count', text: m.variants.length + ' phiên bản' }),
        h('div', { 'class': 'cta', text: 'So sánh các phiên bản →' }),
        img ? h('div', { 'class': 'credit', text: creditText(img) }) : null
      ]);
      card.addEventListener('click', function () { go('#' + brand.id + '/' + m.id); });
      el.modelGrid.appendChild(card);
    });
  }

  function renderVariantPicker(model) {
    el.variantPicker.textContent = '';
    model.variants.forEach(function (v, i) {
      var chip = h('button', {
        'class': 'variant-chip',
        type: 'button',
        'aria-pressed': String(!!state.selected[i])
      }, [
        h('span', { text: v.name }),
        h('small', { text: formatPrice(v.price) })
      ]);
      chip.addEventListener('click', function () {
        var count = Object.keys(state.selected).filter(function (k) { return state.selected[k]; }).length;
        if (state.selected[i] && count <= 1) return;
        state.selected[i] = !state.selected[i];
        renderModelCompare();
      });
      el.variantPicker.appendChild(chip);
    });
  }

  function renderHero(brand, model) {
    el.cmpHero.textContent = '';
    el.cmpHero.appendChild(thumbEl(brand, model, 'hero'));
    var img = imageFor(brand.id, model.id);
    if (img) {
      var label = img.official
        ? 'Ảnh: ' + img.author + ' · '
        : 'Ảnh minh họa: ' + img.author + ', ' + img.license + ' · ';
      el.cmpHero.appendChild(h('div', { 'class': 'credit' }, [
        h('span', { text: label }),
        h('a', { href: img.page, target: '_blank', rel: 'noopener noreferrer', text: img.official ? 'Nguồn' : 'Wikimedia Commons' })
      ]));
    }
  }

  function renderModelCompare() {
    var brand = getBrand(state.brandId);
    var model = getModel(brand, state.modelId);
    if (!model) return;
    el.cmpBrand.textContent = brand.name;
    el.cmpBrand.style.setProperty('--brand', brand.color);
    el.cmpTitle.textContent = model.name;
    el.cmpMeta.textContent = model.type + ' · ' + model.variants.length + ' phiên bản';
    renderHero(brand, model);
    renderVariantPicker(model);
    var columns = [];
    model.variants.forEach(function (v, i) {
      if (!state.selected[i]) return;
      columns.push(toColumn({ brand: brand, model: model, variant: v }, false));
    });
    renderComparison(el.compareTables, columns);
  }

  /* ---------- mode: so sánh giữa các hãng ---------- */

  function newSlot() { return { brand: '', model: '', variant: '' }; }

  function slotKey(s) {
    return s.brand && s.model && s.variant !== '' ? entryKey(s.brand, s.model, s.variant) : null;
  }

  function option(value, label, selected) {
    var o = h('option', { value: value, text: label });
    if (selected) o.selected = true;
    return o;
  }

  function renderSlots() {
    el.slots.textContent = '';
    state.slots.forEach(function (slot, i) {
      var brand = getBrand(slot.brand);
      var model = getModel(brand, slot.model);

      var brandSel = h('select', { 'aria-label': 'Hãng xe ' + (i + 1) });
      brandSel.appendChild(option('', '— Chọn hãng —', slot.brand === ''));
      BRANDS.forEach(function (b) { brandSel.appendChild(option(b.id, b.name, b.id === slot.brand)); });
      brandSel.addEventListener('change', function () {
        slot.brand = brandSel.value; slot.model = ''; slot.variant = '';
        updateCross();
      });

      var modelSel = h('select', { 'aria-label': 'Mẫu xe ' + (i + 1) });
      modelSel.appendChild(option('', '— Chọn mẫu —', slot.model === ''));
      if (brand) brand.models.forEach(function (m) { modelSel.appendChild(option(m.id, m.name, m.id === slot.model)); });
      modelSel.disabled = !brand;
      modelSel.addEventListener('change', function () {
        slot.model = modelSel.value; slot.variant = '';
        updateCross();
      });

      var variantSel = h('select', { 'aria-label': 'Phiên bản ' + (i + 1) });
      variantSel.appendChild(option('', '— Chọn phiên bản —', slot.variant === ''));
      if (model) {
        model.variants.forEach(function (v, vi) {
          variantSel.appendChild(option(String(vi), v.name + ' · ' + formatPrice(v.price), String(vi) === String(slot.variant)));
        });
      }
      variantSel.disabled = !model;
      variantSel.addEventListener('change', function () {
        slot.variant = variantSel.value;
        updateCross();
      });

      var head = h('div', { 'class': 'slot-head' }, [h('strong', { text: 'Xe ' + (i + 1) })]);
      if (state.slots.length > 2) {
        var rm = h('button', { 'class': 'link-btn', type: 'button', text: 'Bỏ xe này' });
        rm.addEventListener('click', function () {
          state.slots.splice(i, 1);
          updateCross();
        });
        head.appendChild(rm);
      }

      el.slots.appendChild(h('div', { 'class': 'slot' }, [
        head,
        h('label', { 'class': 'field' }, [h('span', { text: 'Hãng' }), brandSel]),
        h('label', { 'class': 'field' }, [h('span', { text: 'Mẫu xe' }), modelSel]),
        h('label', { 'class': 'field' }, [h('span', { text: 'Phiên bản' }), variantSel])
      ]));
    });

    if (state.slots.length < MAX_COMPARE) {
      var add = h('button', { 'class': 'add-slot', type: 'button', text: '+ Thêm xe để so sánh' });
      add.addEventListener('click', function () {
        state.slots.push(newSlot());
        updateCross();
      });
      el.slots.appendChild(add);
    }
  }

  function updateCross() {
    renderSlots();
    var keys = state.slots.map(slotKey).filter(Boolean);
    var columns = keys.map(resolveKey).filter(Boolean).map(function (e) { return toColumn(e, true); });
    if (columns.length < 2) {
      el.crossTables.textContent = '';
      el.crossTables.appendChild(h('div', { 'class': 'empty', text: 'Chọn ít nhất 2 xe (hãng, mẫu, phiên bản) để xem bảng so sánh.' }));
    } else {
      renderComparison(el.crossTables, columns);
    }
    setHashQuiet(keys.length ? '#compare/' + keys.join(',') : '#compare');
  }

  /* ---------- mode: theo tầm giá ---------- */

  function currentRange() {
    return RANGES.filter(function (r) { return r.id === state.rangeId; })[0] || RANGES[0];
  }

  function renderRangeTabs() {
    el.rangeTabs.textContent = '';
    var entries = allEntries();
    RANGES.forEach(function (r) {
      var count = entries.filter(function (e) { return r.test(e.variant.price); }).length;
      var btn = h('button', {
        'class': 'range-tab',
        type: 'button',
        'aria-pressed': String(r.id === state.rangeId)
      }, [h('span', { text: r.label }), h('small', { text: count + ' phiên bản' })]);
      btn.addEventListener('click', function () {
        state.rangeId = r.id;
        state.priceSel = [];
        renderPrice();
      });
      el.rangeTabs.appendChild(btn);
    });
  }

  function renderPriceBrandFilter() {
    el.priceBrand.textContent = '';
    el.priceBrand.appendChild(option('', 'Tất cả hãng', state.priceBrand === ''));
    BRANDS.forEach(function (b) { el.priceBrand.appendChild(option(b.id, b.name, b.id === state.priceBrand)); });
  }

  function renderPrice() {
    var range = currentRange();
    renderRangeTabs();
    renderPriceBrandFilter();

    var list = allEntries()
      .filter(function (e) { return range.test(e.variant.price); })
      .filter(function (e) { return !state.priceBrand || e.brand.id === state.priceBrand; })
      .sort(function (a, b) { return a.variant.price - b.variant.price; });

    // drop selections that fell out of the current list
    var visible = {};
    list.forEach(function (e) { visible[e.key] = true; });
    state.priceSel = state.priceSel.filter(function (k) { return visible[k]; });

    el.priceHint.textContent = list.length + ' phiên bản trong tầm giá ' + range.label.toLowerCase() +
      '. Tích chọn tối đa ' + MAX_COMPARE + ' xe để so sánh.';

    el.priceList.textContent = '';
    list.forEach(function (e) {
      var checked = state.priceSel.indexOf(e.key) !== -1;
      var full = state.priceSel.length >= MAX_COMPARE;
      var box = h('input', { type: 'checkbox', 'aria-label': 'Chọn ' + e.brand.name + ' ' + e.model.name + ' ' + e.variant.name });
      box.checked = checked;
      box.disabled = !checked && full;
      box.addEventListener('change', function () {
        if (box.checked) state.priceSel.push(e.key);
        else state.priceSel = state.priceSel.filter(function (k) { return k !== e.key; });
        renderPrice();
      });

      var data = mergedGroup(e.model, e.variant, 'specs');
      var chips = h('div', { 'class': 'chips' });
      PRICE_QUICK_SPECS.forEach(function (label) {
        if (data[label] !== undefined) chips.appendChild(h('span', { 'class': 'chip', text: String(data[label]) }));
      });

      var row = h('label', { 'class': 'price-row-item' + (checked ? ' is-selected' : '') }, [
        box,
        h('span', { 'class': 'dot', style: 'background:' + e.brand.color }),
        h('span', { 'class': 'pr-main' }, [
          h('strong', { text: e.brand.name + ' ' + e.model.name + ' ' + e.variant.name }),
          chips
        ]),
        h('span', { 'class': 'pr-price' }, [
          h('span', { text: formatPrice(e.variant.price) }),
          (function () {
            var o = calcOnRoad(e);
            return o ? h('small', { 'class': 'pr-road', text: 'Lăn bánh ~' + formatMillion(o.total) }) : null;
          })()
        ])
      ]);
      el.priceList.appendChild(row);
    });
    if (!list.length) {
      el.priceList.appendChild(h('div', { 'class': 'empty', text: 'Không có xe nào trong tầm giá này với bộ lọc hiện tại.' }));
    }

    el.priceTables.textContent = '';
    if (state.priceSel.length >= 2) {
      var columns = state.priceSel.map(resolveKey).filter(Boolean).map(function (e) { return toColumn(e, true); });
      var clear = h('button', { 'class': 'link-btn', type: 'button', text: 'Xóa lựa chọn' });
      clear.addEventListener('click', function () { state.priceSel = []; renderPrice(); });
      el.priceTables.appendChild(h('div', { 'class': 'compare-bar' }, [
        h('strong', { text: 'So sánh ' + columns.length + ' xe đã chọn' }),
        clear
      ]));
      var holder = h('div');
      el.priceTables.appendChild(holder);
      renderComparison(holder, columns);
    } else if (state.priceSel.length === 1) {
      el.priceTables.appendChild(h('div', { 'class': 'empty', text: 'Đã chọn 1 xe. Chọn thêm ít nhất 1 xe nữa để xem bảng so sánh.' }));
    }

    setHashQuiet('#price/' + state.rangeId + (state.priceSel.length ? '/' + state.priceSel.join(',') : ''));
  }

  el.priceBrand.addEventListener('change', function () {
    state.priceBrand = el.priceBrand.value;
    renderPrice();
  });

  /* ---------- mode tabs & routing ---------- */

  function renderModeTabs() {
    el.modeTabs.textContent = '';
    MODES.forEach(function (m) {
      var btn = h('button', {
        'class': 'mode-tab',
        type: 'button',
        role: 'tab',
        'aria-selected': String(m.id === state.mode),
        text: m.label
      });
      btn.addEventListener('click', function () { go(m.hash); });
      el.modeTabs.appendChild(btn);
    });
  }

  function showOnly(mode, modelOpen) {
    el.brandTabs.hidden = mode !== 'brand';
    el.modelView.hidden = !(mode === 'brand' && !modelOpen);
    el.compareView.hidden = !(mode === 'brand' && modelOpen);
    el.crossView.hidden = mode !== 'cross';
    el.priceView.hidden = mode !== 'price';
  }

  function go(hash) {
    var target = hash || '#';
    if (location.hash === target || (!location.hash && target === '#')) applyHash();
    else location.hash = target;
  }

  function applyHash() {
    var raw = location.hash.replace(/^#/, '');
    var parts = raw.split('/');

    if (parts[0] === 'compare') {
      state.mode = 'cross';
      var keys = (parts[1] || '').split(',').filter(Boolean);
      var slots = [];
      keys.slice(0, MAX_COMPARE).forEach(function (k) {
        var e = resolveKey(k);
        if (e) slots.push({ brand: e.brand.id, model: e.model.id, variant: String(e.idx) });
      });
      while (slots.length < 2) slots.push(newSlot());
      state.slots = slots;
      renderModeTabs();
      showOnly('cross', false);
      updateCross();
      return;
    }

    if (parts[0] === 'price') {
      state.mode = 'price';
      var range = RANGES.filter(function (r) { return r.id === parts[1]; })[0] || RANGES[0];
      state.rangeId = range.id;
      var sel = (parts[2] || '').split(',').filter(Boolean).filter(function (k) {
        var e = resolveKey(k);
        return e && range.test(e.variant.price);
      });
      state.priceSel = sel.slice(0, MAX_COMPARE);
      renderModeTabs();
      showOnly('price', false);
      renderPrice();
      return;
    }

    state.mode = 'brand';
    var brand = getBrand(parts[0]) || null;
    var model = brand && parts[1] ? getModel(brand, parts[1]) : null;
    state.brandId = brand ? brand.id : (BRANDS[0] && BRANDS[0].id);
    var newModelId = model ? model.id : null;
    if (newModelId !== state.modelId) state.selected = {};
    state.modelId = newModelId;
    if (model) {
      model.variants.forEach(function (v, i) { if (state.selected[i] === undefined) state.selected[i] = true; });
    }
    renderModeTabs();
    showOnly('brand', !!model);
    renderBrandTabs();
    if (model) renderModelCompare(); else renderModelGrid();
    window.scrollTo(0, 0);
  }

  el.backBtn.addEventListener('click', function () { go('#' + state.brandId); });
  el.logo.addEventListener('click', function (e) { e.preventDefault(); go('#'); });
  window.addEventListener('hashchange', applyHash);

  loadPrefs();
  renderOnroadBar();
  applyHash();
  loadLivePrices();
})();
