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
    priceSel: []
  };

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
    logo: document.getElementById('logo')
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

  function toColumn(entry, withTitle) {
    return {
      title: withTitle ? entry.brand.name + ' ' + entry.model.name : '',
      color: entry.brand.color,
      name: entry.variant.name,
      price: entry.variant.price,
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
      var card = h('button', {
        'class': 'model-card',
        type: 'button',
        style: '--brand:' + brand.color
      }, [
        h('h3', { text: m.name }),
        h('div', { 'class': 'type', text: m.type }),
        h('div', { 'class': 'price', text: priceText }),
        h('div', { 'class': 'count', text: m.variants.length + ' phiên bản' }),
        h('div', { 'class': 'cta', text: 'So sánh các phiên bản →' })
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

  function renderModelCompare() {
    var brand = getBrand(state.brandId);
    var model = getModel(brand, state.modelId);
    if (!model) return;
    el.cmpBrand.textContent = brand.name;
    el.cmpBrand.style.setProperty('--brand', brand.color);
    el.cmpTitle.textContent = model.name;
    el.cmpMeta.textContent = model.type + ' · ' + model.variants.length + ' phiên bản';
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
        h('span', { 'class': 'pr-price', text: formatPrice(e.variant.price) })
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

  applyHash();
})();
