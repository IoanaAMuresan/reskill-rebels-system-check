const LETTERS = ['A','B','C','D','E','F','G','H'];
let isDemoRun = false;
let lastProfileName = null;
let lastUpgradePillarName = null;
let lastStrongestPillarName = null;
let answers = {};
let runQueue = [];
let runPillar = null;
let runQs = [];
let runPos = 0;
let radarChart = null;
let advancing = false;
const MEM = {};
const STORE_KEY = 'rebelos_syscheck_state';

/* ---------- storage adapter: artifact storage → localStorage → memory ---------- */
async function storeGet(key){
  if (typeof window !== 'undefined' && window.storage && window.storage.get){
    try { const r = await window.storage.get(key); return r ? r.value : null; } catch(e){ return null; }
  }
  try { return localStorage.getItem(key); } catch(e){ return MEM[key] || null; }
}
async function storeSet(key, val){
  if (typeof window !== 'undefined' && window.storage && window.storage.set){
    try { await window.storage.set(key, val, false); return; } catch(e){}
  }
  try { localStorage.setItem(key, val); } catch(e){ MEM[key] = val; }
}
async function saveState(){
  await storeSet(STORE_KEY, JSON.stringify({ version: CONFIG.version, answers }));
}
async function loadState(){
  const raw = await storeGet(STORE_KEY);
  if (!raw) return;
  try {
    const st = JSON.parse(raw);
    if (st.version === CONFIG.version && st.answers) answers = st.answers;
  } catch(e){}
}

/* ---------- anonymous comparison-data submission (Supabase) ----------
   Writes ONE row per completed System Check: five pillar averages + a
   source tag + the instrument version. Never an email, never anything
   that could identify a person. The browser can insert but cannot read
   (RLS is insert-only), so this pool can never be scraped from the page.
   Fails silently if Supabase is unreachable - the tool keeps working. */
const SUPABASE_URL = 'https://qurhxobzrymvwvpkzoee.supabase.co';
const SUPABASE_KEY = 'sb_publishable_PWYseAgWd8nG7_dxRuF-Aw_aCRKknjf';
const SUBMITTED_KEY = 'rebelos_syscheck_submitted';

/* Read a ?source= or ?utm_source= param so rows can be tagged by entry
   point (homepage / ebook / print-qr / audiobook / newsletter / social).
   Defaults to 'direct' when absent. */
function sourceTag(){
  try {
    const p = new URLSearchParams(window.location.search);
    const s = (p.get('source') || p.get('utm_source') || 'direct').toLowerCase();
    return s.replace(/[^a-z0-9_-]/g, '').slice(0, 40) || 'direct';
  } catch(e){ return 'direct'; }
}

async function submitScores(avgs){
  if (isDemoRun) return; // demo/seeded runs are never real data - never written
  // Guard: one submission per completed run per browser, keyed to version.
  // Refreshing the results page, or returning later, does NOT re-send.
  const already = await storeGet(SUBMITTED_KEY);
  if (already === CONFIG.version) return;
  const round = n => Math.round(n * 100) / 100; // numeric(3,2) in the table
  const row = {
    mindset:         round(avgs.mindset),
    human_edge:      round(avgs.humanEdge),
    value_creation:  round(avgs.valueCreation),
    tech_fluency:    round(avgs.techFluency),
    sustainability:  round(avgs.sustainability),
    source:  sourceTag(),
    version: CONFIG.version
  };
  try {
    const res = await fetch(SUPABASE_URL + '/rest/v1/score_submissions', {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(row)
    });
    if (res.ok) await storeSet(SUBMITTED_KEY, CONFIG.version);
  } catch(e){ /* offline or blocked - silently skip, never breaks the tool */ }
}

/* ---------- helpers ---------- */
function qid(globalIndex){ const q = CONFIG.questions[globalIndex];
  const within = CONFIG.questions.slice(0, globalIndex).filter(x => x.pillar === q.pillar).length;
  return q.pillar + '_' + within; }
const QUAD_PATHS = [
  'M10 10 L10 2.5 A7.5 7.5 0 0 1 17.5 10 Z',
  'M10 10 L17.5 10 A7.5 7.5 0 0 1 10 17.5 Z',
  'M10 10 L10 17.5 A7.5 7.5 0 0 1 2.5 10 Z',
  'M10 10 L2.5 10 A7.5 7.5 0 0 1 10 2.5 Z'
];
function quadrantSVG(tier){
  const segs = QUAD_PATHS.map((d,i) =>
    `<path d="${d}" fill="${i < tier ? '#E8602A' : 'rgba(255,255,255,0.14)'}"/>`).join('');
  return `<svg class="qpict" width="15" height="15" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.2"/>${segs}</svg>`;
}
function tierOf(band){ return CONFIG.bands.indexOf(band) + 1; }
function pillarByKey(k){ return CONFIG.pillars.find(p => p.key === k); }
function questionIdxFor(pillarKey){
  return CONFIG.questions.map((q,i)=>({q,i})).filter(x => x.q.pillar === pillarKey).map(x => x.i); }
function pillarAnswered(pillarKey){
  return questionIdxFor(pillarKey).filter(i => answers[qid(i)] !== undefined).length; }
function pillarComplete(pillarKey){
  const idx = questionIdxFor(pillarKey); return idx.length > 0 && pillarAnswered(pillarKey) === idx.length; }
function allComplete(){ return CONFIG.pillars.every(p => pillarComplete(p.key)); }
function nextRemainingPillar(){
  const p = CONFIG.pillars.find(p => !pillarComplete(p.key)); return p ? p.key : null; }
function pillarAvg(pillarKey){
  const idx = questionIdxFor(pillarKey).filter(i => answers[qid(i)] !== undefined);
  if (!idx.length) return 0;
  return idx.reduce((s,i) => s + (answers[qid(i)] + 1), 0) / idx.length; }
function bandFor(avg){ return CONFIG.bands.find(b => avg <= b.upTo) || CONFIG.bands[CONFIG.bands.length-1]; }
function show(id){ ['intro-screen','quiz-screen','pillar-result-screen','results-screen']
  .forEach(s => { const el = document.getElementById(s); if (el) el.classList.toggle('hidden', s !== id); });
  document.body.classList.toggle('hero-collapsed', id === 'results-screen' || id === 'pillar-result-screen' || id === 'quiz-screen'); }

/* ---------- injected styles, pillar-result screen, footer ---------- */
(function inject(){
  const sec = document.createElement('div');
  sec.id = 'pillar-result-screen';
  sec.className = 'hidden';
  sec.innerHTML = `
    <h2 id="pr-title"></h2>
    <p class="results-subtitle" id="pr-sub"></p>
    <div class="pillar-results" id="pr-rows"></div>
    <div class="result-actions" id="pr-actions"></div>`;
  const results = document.getElementById('results-screen');
  results.parentNode.insertBefore(sec, results);

  const foot = document.createElement('div');
  foot.className = 'site-footer';
  foot.innerHTML = `<a href="https://reskillrebels.com" target="_blank" rel="noopener">${CONFIG.copy.siteLink}</a>`;
  document.querySelector('.container').appendChild(foot);

  const nb = document.getElementById('next-btn');
  if (nb) nb.style.display = 'none';

  const modal = document.createElement('div');
  modal.id = 'aspiration-modal';
  modal.className = 'aspiration-modal hidden';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'aspiration-modal-title');
  modal.innerHTML = `
    <div class="aspiration-modal-backdrop" onclick="closeAspirationModal()"></div>
    <div class="aspiration-modal-panel">
      <h3 id="aspiration-modal-title">Sketch an upgrade</h3>
      <p id="aspiration-modal-copy" class="aspiration-modal-copy"></p>
      <div id="aspiration-band-choices" class="aspiration-band-choices"></div>
      <button class="btn btn-ghost aspiration-modal-close" onclick="closeAspirationModal()">Cancel</button>
    </div>`;
  document.body.appendChild(modal);
})();

/* ---------- HUB ---------- */
function renderHub(){
  const host = document.getElementById('intro-pillars');
  const started = Object.keys(answers).length > 0;

  let primary;
  if (allComplete()) primary = `<button class="btn btn-primary" onclick="showResults()">${CONFIG.copy.seeResults}</button>`;
  else if (started)  primary = `<button class="btn btn-primary" onclick="startFullRun()">${CONFIG.copy.resumeFull}</button>`;
  else               primary = `<button class="btn btn-primary" onclick="startFullRun()">${CONFIG.copy.fullRun}</button>`;
  const fresh = started
    ? `<button class="link-quiet" id="fresh-btn" onclick="startOverTap(this)">${CONFIG.copy.startOver}</button>` : '';

  const cards = CONFIG.pillars.map(p => {
    const idx = questionIdxFor(p.key);
    const a = pillarAnswered(p.key);
    let status, cls = '';
    if (pillarComplete(p.key)){ const hb = bandFor(pillarAvg(p.key)); status = quadrantSVG(tierOf(hb)) + hb.label; cls = 'done'; }
    else if (a > 0){ status = a + '/' + idx.length + ' - continue'; }
    else { status = idx.length + ' questions'; }
    return `<button class="hub-card" onclick="startPillar('${p.key}')">
      <span class="hub-name">${p.name}</span>
      <span class="hub-status ${cls}">${status}</span>
    </button>`;
  }).join('');

  host.innerHTML = `
    <p class="hub-hint">${CONFIG.copy.hubHint}</p>
    <p class="hub-hint" style="opacity:0.9;font-style:italic;">${CONFIG.copy.answerFrame}</p>
    <p class="hub-hint" style="opacity:0.6;font-size:0.78rem;">${CONFIG.copy.priming}</p>
    <div class="hub-cta-row">${primary}${fresh}</div>
    <div class="hub-grid">${cards}</div>`;

  const tn = document.getElementById('time-note');
  const total = CONFIG.questions.length;
  const mins = Math.max(1, Math.round(total * 25 / 60));
  tn.textContent = `${total} questions across ${CONFIG.pillars.length} pillars · ~${mins} min in one sitting · pillar by pillar works too`;

  // retire the original bottom button (CTA now lives above the grid)
  const oldBtn = document.querySelector('#intro-screen > .btn-primary');
  if (oldBtn) oldBtn.style.display = 'none';
}

let freshArmed = false;
function startOverTap(btn){
  if (!freshArmed){
    freshArmed = true;
    btn.textContent = CONFIG.copy.startOverConfirm;
    setTimeout(() => { freshArmed = false; if (btn.isConnected) btn.textContent = CONFIG.copy.startOver; }, 3000);
    return;
  }
  freshArmed = false;
  startFresh();
}
async function startFresh(){
  answers = {}; await saveState();
  renderHub(); show('intro-screen');
}

/* ---------- RUNS ---------- */
function startPillar(key){ runQueue = []; runPillar = key; beginPillar(key); }
function startFullRun(){
  runQueue = CONFIG.pillars.filter(p => !pillarComplete(p.key)).map(p => p.key);
  if (!runQueue.length){ showResults(); return; }
  beginPillar(runQueue.shift());
}
function beginPillar(key){
  runPillar = key;
  runQs = questionIdxFor(key);
  runPos = runQs.findIndex(i => answers[qid(i)] === undefined);
  if (runPos === -1) runPos = 0;
  show('quiz-screen'); renderQ();
}
function renderQ(){
  const gi = runQs[runPos];
  const q = CONFIG.questions[gi];
  const p = pillarByKey(runPillar);
  const answeredCount = Object.keys(answers).length;
  document.getElementById('progress-bar').style.width = Math.max(2, (answeredCount / CONFIG.questions.length) * 100) + '%';
  document.getElementById('step-label').textContent =
    `${p.name} · question ${runPos+1} of ${runQs.length}`;
  const chosen = answers[qid(gi)];
  document.getElementById('question-container').innerHTML = `
    <div class="question-card entering">
      <span class="pillar-tag">${p.name}</span>
      <div class="question-text" id="q-text-${gi}" tabindex="-1">${q.text}</div>
      <div class="options" role="radiogroup" aria-labelledby="q-text-${gi}">
        ${q.options.map((o,i) => `
          <button type="button" class="option-btn ${chosen===i?'selected':''}" role="radio" aria-checked="${chosen===i}" onclick="selectOpt(${i})">
            <span class="option-letter">${LETTERS[i]}</span><span>${o}</span>
          </button>`).join('')}
      </div>
    </div>`;
  const pb = document.getElementById('prev-btn');
  pb.style.visibility = 'visible';
  pb.textContent = runPos===0 ? '← Overview' : '← Back';
  // move focus to the new question so keyboard and screen-reader users follow the auto-advance
  const qt = document.getElementById(`q-text-${gi}`);
  if (qt) qt.focus({ preventScroll: true });
}
function selectOpt(i){
  if (advancing) return;
  advancing = true;
  answers[qid(runQs[runPos])] = i;
  saveState();
  // mark the choice in place (no re-render, no replayed animation), then advance once
  document.querySelectorAll('#question-container .option-btn').forEach((b, idx) => {
    b.classList.toggle('selected', idx === i);
    b.setAttribute('aria-checked', idx === i);
  });
  setTimeout(() => {
    advancing = false;
    if (runPos < runQs.length-1){ runPos++; renderQ(); }
    else showPillarResult();
  }, 240);
}
function prevQuestion(){ if (runPos > 0){ runPos--; renderQ(); } else { goHub(); } }
function nextQuestion(){ /* retired: selection auto-advances */ }

/* ---------- shared: component rows + synthesis ---------- */
function componentRowsHTML(pillarKey){
  const comps = CONFIG.components[pillarKey] || {};
  const subbed = questionIdxFor(pillarKey).filter(i => CONFIG.questions[i].component && comps[CONFIG.questions[i].component]);
  if (!subbed.length) return '';
  return subbed.map(i => {
    const q = CONFIG.questions[i];
    const comp = comps[q.component];
    const sc = answers[qid(i)] + 1;
    const b = bandFor(sc);
    const detail = comp.bands[b.id] || '';
    return `
    <div class="pillar-result-row comp-row" onclick="toggleComp(this);event.stopPropagation();">
      <div class="pillar-result-header">
        <span class="pillar-result-name"><span class="comp-chev">▸</span>${comp.name}<span class="comp-hint">tap to read</span></span>
        <span class="pillar-result-version" onclick="toggleBandTip(this);event.stopPropagation();">${quadrantSVG(tierOf(b))}${b.label}</span>
      </div>
      <div class="pillar-bar-track"><div class="pillar-bar-fill" style="width:${b.pct}%"></div></div>
      <div class="comp-detail">${detail}</div>
    </div>`;
  }).join('');
}
function synthesisHTML(pillarKey, compact){
  const comps = CONFIG.components[pillarKey] || {};
  const subbed = questionIdxFor(pillarKey).filter(i => CONFIG.questions[i].component && comps[CONFIG.questions[i].component]);
  if (subbed.length < 2) return '';
  let hi = subbed[0], lo = subbed[0];
  subbed.forEach(i => {
    if (answers[qid(i)] > answers[qid(hi)]) hi = i;
    if (answers[qid(i)] < answers[qid(lo)]) lo = i;
  });
  const gap = answers[qid(hi)] - answers[qid(lo)];
  const stripNum = s => s.replace(/^[0-9.]+ */, '');
  const hn = stripNum(comps[CONFIG.questions[hi].component].name);
  const ln = stripNum(comps[CONFIG.questions[lo].component].name);
  if (compact){
    if (gap === 0) return `<div class="synth-line compact">Remarkably even - no single component is lagging.</div>`;
    return `<div class="synth-line compact">Running strong: <strong>${hn}</strong> · First upgrade: <strong>${ln}</strong></div>`;
  }
  if (gap === 0) return `<div class="synth-line">Remarkably even across the board - no single component is lagging. Steady, balanced upgrading is the move.</div>`;
  const spread = gap >= 2
    ? 'An uneven mix - which is normal, and useful: it tells you exactly where to start.'
    : 'A fairly even mix, with a clear place to start.';
  return `<div class="synth-line">Running strong: <strong>${hn}</strong> · First upgrade: <strong>${ln}</strong>. ${spread}</div>`;
}

/* ---------- PILLAR READOUT ---------- */
function toggleComp(el){
  if (!el.classList.contains('open')){
    el.parentElement.querySelectorAll(':scope > .comp-row.open')
      .forEach(r => { if (r !== el) r.classList.remove('open'); });
  }
  el.classList.toggle('open');
}
/* ---------- aspiration drag: pull a node outward to sketch a target shape ---------- */
let lastAvgs = null;
let dragIdx = -1;
let dragHappened = false;

let dragStart = null;
let dragMoved = false;
let aspTargets = {};

function bindRadarDrag(chart){
  if (!hoverCapable) return; // touch version is a later enhancement
  const cv = chart.canvas;
  if (cv.dataset.dragBound) return;
  cv.dataset.dragBound = '1';
  // handlers reference radarChart (the live instance), never a stale closure

  cv.addEventListener('pointerdown', (e) => {
    if (!radarChart) return;
    const els = radarChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
    if (!els.length) return;
    dragIdx = els[0].index;
    dragStart = { x: e.clientX, y: e.clientY };
    dragMoved = false;
    cv.setPointerCapture(e.pointerId);
  });

  cv.addEventListener('pointermove', (e) => {
    if (dragIdx < 0 || !radarChart) return;
    if (!dragMoved){
      const moved = Math.abs(e.clientX - dragStart.x) + Math.abs(e.clientY - dragStart.y);
      if (moved < 5) return;            // a click, not a drag - leave everything alone
      dragMoved = true;
      dragHappened = true;              // suppress the post-release navigation click
    }
    const scale = radarChart.scales.r;
    const rect = cv.getBoundingClientRect();
    const dx = (e.clientX - rect.left) - scale.xCenter;
    const dy = (e.clientY - rect.top) - scale.yCenter;
    const dist = Math.sqrt(dx*dx + dy*dy);
    let v = scale.getValueForDistanceFromCenter(dist);
    const cur = lastAvgs[dragIdx];
    v = Math.max(cur, Math.min(CONFIG.scale.max, v));
    const ds = radarChart.data.datasets[1];
    ds.hidden = false;
    ds.data[dragIdx] = v;
    radarChart.update('none');
  });

  cv.addEventListener('pointerup', (e) => {
    if (dragIdx < 0) return;
    const idx = dragIdx; dragIdx = -1;
    if (!dragMoved || !radarChart) return; // plain click: navigation handles it, sketch untouched
    dragMoved = false;
    const chartDs = radarChart.data.datasets[1];
    const cur = lastAvgs[idx];
    const curTier = CONFIG.bands.indexOf(bandFor(cur)) + 1;
    let tier = Math.round(chartDs.data[idx]);
    if (tier <= curTier){
      chartDs.data[idx] = cur;
      delete aspTargets[idx];
      if (chartDs.data.every((v,i) => v === lastAvgs[i])) chartDs.hidden = true;
      radarChart.update();
      renderAspirationPanels();
      return;
    }
    tier = Math.min(tier, CONFIG.bands.length);
    chartDs.data[idx] = tier;
    aspTargets[idx] = tier;
    radarChart.update();
    renderAspirationPanels();
  });
}

function renderAspirationPanels(){
  let panel = document.getElementById('asp-panel');
  const idxs = CONFIG.pillars.map((p,i) => i).filter(i => aspTargets[i]);
  if (!idxs.length){ if (panel) panel.remove(); return; }
  if (!panel){
    panel = document.createElement('div');
    panel.id = 'asp-panel';
    panel.className = 'asp-panel';
    const wrap = document.querySelector('#results-screen .radar-wrap');
    wrap.insertAdjacentElement('afterend', panel);
  }
  const short = label => label.split(' - ')[0];
  let inner = '';
  idxs.forEach((pillarIdx, n) => {
    const p = CONFIG.pillars[pillarIdx];
    const tier = aspTargets[pillarIdx];
    const targetBand = CONFIG.bands[tier - 1];
    const rep = (CONFIG.reports[p.key] && CONFIG.reports[p.key][targetBand.id]) || { read: '' };
    const comps = CONFIG.components[p.key] || {};
    const levers = questionIdxFor(p.key)
      .filter(i => CONFIG.questions[i].component && comps[CONFIG.questions[i].component])
      .filter(i => (answers[qid(i)] + 1) < tier)
      .map(i => {
        const comp = comps[CONFIG.questions[i].component];
        const curIdx = answers[qid(i)];
        const curB = CONFIG.bands[curIdx];
        const nextB = CONFIG.bands[Math.min(curIdx + 1, CONFIG.bands.length - 1)];
        let detail = '';
        if (comp.action) detail += `<div><span style="color:#E8602A;font-weight:700;">Do:</span> ${comp.action}</div>`;
        detail += `<div${comp.action ? ' style="margin-top:0.4rem;"' : ''}><span style="color:#E8602A;font-weight:700;">Next move (${short(nextB.label)}):</span> ${comp.bands[nextB.id]}</div>`;
        if (targetBand.id !== nextB.id) detail += `<div style="margin-top:0.4rem;"><span style="color:#E8602A;font-weight:700;">Destination (${short(targetBand.label)}):</span> ${comp.bands[targetBand.id]}</div>`;
        return `
        <div class="pillar-result-row comp-row" onclick="toggleComp(this);event.stopPropagation();">
          <div class="pillar-result-header">
            <span class="pillar-result-name"><span class="comp-chev">▸</span>${comp.name}<span class="comp-hint">tap for the path</span></span>
            <span class="pillar-result-version">${quadrantSVG(answers[qid(i)] + 1)}${short(curB.label)} → ${quadrantSVG(tier)}${short(targetBand.label)}</span>
          </div>
          <div class="comp-detail">${detail}</div>
        </div>`;
      }).join('');
    inner += `
      ${n > 0 ? '<div style="border-top:1px dashed rgba(255,255,255,0.18);margin:1rem 0;"></div>' : ''}
      <div class="asp-title">Your sketched upgrade: ${p.name} → ${targetBand.label}</div>
      <div class="asp-dest">${rep.read}</div>
      ${levers ? `<div class="asp-lever-head">The levers - components currently below that level</div>${levers}` : `<div class="asp-dest">Every component is already at or above that level. This one's closer than it looks.</div>`}`;
  });
  inner += `
    <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-top:0.9rem;">
      <a href="https://reskillrebels.com/start-here" class="btn btn-primary" style="font-size:0.85rem;">Want help getting there? →</a>
      <button class="btn btn-ghost asp-clear" style="margin-top:0;" onclick="clearAspiration()">Clear sketch</button>
    </div>`;
  panel.innerHTML = inner;
}

function clearAspiration(){
  aspTargets = {};
  if (radarChart && lastAvgs){
    const ds = radarChart.data.datasets[1];
    ds.data = lastAvgs.slice();
    ds.hidden = true;
    radarChart.update();
  }
  const p = document.getElementById('asp-panel'); if (p) p.remove();
}

/* ---------- expand hint: cursor-follow on desktop, static note on touch; retires after 3 uses ---------- */
const hoverCapable = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
function cursorHintEl(){
  let f = document.getElementById('cursor-hint');
  if (!f){
    f = document.createElement('div');
    f.id = 'cursor-hint';
    f.innerHTML = '<svg width="22" height="26" viewBox="0 0 24 26" fill="none" aria-hidden="true">'
      + '<path d="M21 2 C13 4, 7 10, 6 21" stroke="#E8602A" stroke-width="2.2" stroke-linecap="round" fill="none"/>'
      + '<path d="M6 21 L3.5 14.5" stroke="#E8602A" stroke-width="2.2" stroke-linecap="round"/>'
      + '<path d="M6 21 L12 17.5" stroke="#E8602A" stroke-width="2.2" stroke-linecap="round"/>'
      + '</svg><span>Click here to expand</span>';
    document.body.appendChild(f);
  }
  return f;
}
if (hoverCapable){
  document.addEventListener('mousemove', (e) => {
    const f = cursorHintEl();
    const row = e.target.closest ? e.target.closest('#pillar-results .pillar-result-row') : null;
    let show = false;
    if (row && !row.classList.contains('comp-row')){
      const header = row.querySelector(':scope > .pillar-result-header.pillar-toggle');
      if (header && !header.classList.contains('open')){
        const bar = row.querySelector(':scope > .pillar-bar-track');
        const zoneTop = row.getBoundingClientRect().top;
        const zoneBottom = (bar || header).getBoundingClientRect().bottom;
        show = e.clientY >= zoneTop && e.clientY <= zoneBottom;
      }
    }
    if (show){
      f.style.display = 'flex';
      f.style.left = (e.clientX - 14) + 'px';
      f.style.top = (e.clientY - 12) + 'px';
      f.style.transform = 'translateY(-100%) rotate(-2deg)';
    } else {
      f.style.display = 'none';
    }
  });
  document.addEventListener('scroll', () => {
    const f = document.getElementById('cursor-hint');
    if (f) f.style.display = 'none';
  }, true);
}

function focusPillarCard(key){
  const card = document.getElementById('pillar-card-' + key);
  if (!card){
    // rung 1 owns this pillar, so it has no card in the demoted list - send them there instead
    const start = document.getElementById('start-here-container');
    if (start) start.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  const header = card.querySelector('.pillar-toggle');
  if (header && !header.classList.contains('open')) togglePillarDetail(header);
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function expandFirstCard(){
  const header = document.querySelector('#pillar-results .pillar-toggle');
  if (header && !header.classList.contains('open')) togglePillarDetail(header);
}
function toggleBandTip(el){
  const host = el.closest('.pillar-result-row');
  if (!host) return;
  const existing = host.querySelector('.band-tip');
  if (existing){ existing.remove(); return; }
  document.querySelectorAll('.band-tip').forEach(t => t.remove());
  const tip = document.createElement('div');
  tip.className = 'band-tip';
  tip.textContent = CONFIG.copy.bandExplainer;
  const header = el.closest('.pillar-result-header');
  header.insertAdjacentElement('afterend', tip);
}
function retireNote(){
  const n = document.getElementById('expand-note');
  if (n) n.classList.add('gone');
}
function togglePillarDetail(header){
  if (!header.classList.contains('open')){
    document.querySelectorAll('.pillar-result-header.pillar-toggle.open').forEach(h => {
      if (h !== header){
        h.classList.remove('open');
        const d = h.parentNode.querySelector('.pillar-comp-detail');
        if (d) d.classList.remove('open');
      }
    });
  }
  header.classList.toggle('open');
  const detail = header.parentNode.querySelector('.pillar-comp-detail');
  if (detail) detail.classList.toggle('open');
}
function showPillarResult(){
  const p = pillarByKey(runPillar);
  const avg = pillarAvg(runPillar);
  const band = bandFor(avg);
  const rep = (CONFIG.reports[runPillar] && CONFIG.reports[runPillar][band.id]) || { read:'', nextStep:'' };
  document.getElementById('pr-title').innerHTML = `${p.name} <span>${band.label}</span>`;
  document.getElementById('pr-sub').textContent = 'One of the five pillars of your professional OS. Here\'s how it\'s running.';

  let rows = `
    <div class="pillar-result-row">
      <div class="pillar-result-header">
        <span class="pillar-result-name">${p.icon ? p.icon+' ' : ''}${p.name}</span>
        <span class="pillar-result-version" onclick="toggleBandTip(this);event.stopPropagation();">${quadrantSVG(tierOf(band))}${band.label}</span>
      </div>
      <div class="pillar-bar-track"><div class="pillar-bar-fill" style="width:${band.pct}%"></div></div>
      <div class="pillar-insight">${rep.read}</div>
      ${rep.nextStep ? `<div class="pillar-insight" style="font-style:normal;margin-top:0.3rem;"><span style="color:var(--orange, #E8602A);font-weight:700;">Try this:</span> ${rep.nextStep}</div>` : ''}
    </div>`;

  rows += synthesisHTML(runPillar) + componentRowsHTML(runPillar);
  document.getElementById('pr-rows').innerHTML = rows;
  const nxt = runQueue.length ? runQueue.shift() : nextRemainingPillar();

  let actions = '';
  if (!allComplete() && nxt) actions += `<div style="flex-basis:100%;font-size:0.85rem;opacity:0.75;margin-bottom:0.4rem;">${CONFIG.copy.betweenChapters}</div>`;
  actions += `<button class="btn btn-ghost" onclick="goHub()">← All pillars</button>`;
  if (allComplete()){
    actions += `<button class="btn btn-primary" onclick="showResults()">${CONFIG.copy.seeResults}</button>`;
  } else if (nxt){
    if (nxt) actions += `<button class="btn btn-primary" onclick="beginPillar('${nxt}')">Next: ${pillarByKey(nxt).name} →</button>`;
  }
  document.getElementById('pr-actions').innerHTML = actions;
  show('pillar-result-screen');
}

function goHub(){ renderHub(); show('intro-screen'); }


function upgradeSnapshot(avgs){
  const vals = CONFIG.pillars.map(p => ({ p, v: avgs[p.key], band: bandFor(avgs[p.key]) }));
  const sorted = vals.slice().sort((a,b) => a.v - b.v);
  const upgrade = sorted[0];
  const strongest = sorted[sorted.length - 1];
  const rep = (CONFIG.reports[upgrade.p.key] && CONFIG.reports[upgrade.p.key][upgrade.band.id]) || { nextStep: '' };
  const action = rep.nextStep || `Pick one small behaviour in ${upgrade.p.name} and practise it once this week.`;
  const spread = strongest.v - upgrade.v;
  const headline = spread >= CONFIG.spread.gapThreshold
    ? `${upgrade.p.name} is your first upgrade lever.`
    : `Your system is balanced. Choose one deliberate upgrade.`;
  const reason = spread >= CONFIG.spread.gapThreshold
    ? `Your strongest pillar is ${strongest.p.name}, but ${upgrade.p.name} is where a small lift is most likely to change the whole picture.`
    : `No single pillar is dragging the system down. The opportunity is not rescue work. It is consistency.`;
  return { strongest, upgrade, action, headline, reason };
}

/* Single source of truth for "no pillar is clearly trailing", used by rung 1
   (copy swap) and rung 2 (whether a pillar was pulled out for rung 1). */
function isBalanced(snap){ return (snap.strongest.v - snap.upgrade.v) < CONFIG.spread.gapThreshold; }

/* Sentence-case a component label without breaking acronyms ("AI Literacy" ->
   "AI literacy", "Trust-Building & Presence" -> "Trust-building & presence"). */
function sentenceCaseLabel(s){
  return s.split(/(\s+)/).map((tok, i) => {
    if (/^\s+$/.test(tok)) return tok;
    if (/^[A-Z]{2,}$/.test(tok)) return tok;       // acronym, leave alone
    const lower = tok.toLowerCase();
    return i === 0 ? lower.charAt(0).toUpperCase() + lower.slice(1) : lower;
  }).join('');
}

/* Lowest-scoring component within a pillar. Ties resolve to the first in config
   order (strict <), so a shared result is always reproducible. */
function lowestComponentIn(pillarKey){
  const comps = CONFIG.components[pillarKey] || {};
  const subbed = questionIdxFor(pillarKey)
    .filter(i => CONFIG.questions[i].component && comps[CONFIG.questions[i].component] && answers[qid(i)] !== undefined);
  if (!subbed.length) return null;
  let lo = subbed[0];
  subbed.forEach(i => { if (answers[qid(i)] < answers[qid(lo)]) lo = i; });
  const comp = comps[CONFIG.questions[lo].component];
  const band = bandFor(answers[qid(lo)] + 1);
  return {
    name: sentenceCaseLabel(comp.name.replace(/^[0-9.]+ */, '')),
    text: comp.bands[band.id] || '',
    // Fix 1 slot: per-component actions do not exist in CONFIG yet, so this is
    // empty and rung 1 falls back to the pillar's step. Wire here when written.
    action: comp.actions ? (comp.actions[band.id] || '') : ''
  };
}

/* RUNG 1 - one step, chosen for them. Absorbs the old decision snapshot. */
function renderStartHere(avgs){
  const host = document.getElementById('start-here-container');
  if (!host) return;
  const snap = upgradeSnapshot(avgs);

  if (isBalanced(snap)){
    host.innerHTML = `
      <section class="decision-snapshot start-here" aria-label="Where to start">
        <div class="decision-kicker">Start here</div>
        <div class="decision-title">Your system's pretty even - no single weak spot.</div>
        <div class="decision-copy">Pick the one that pulls you.</div>
      </section>`;
    return;
  }

  const pillar = snap.upgrade.p;
  const low = lowestComponentIn(pillar.key);
  const rep = (CONFIG.reports[pillar.key] && CONFIG.reports[pillar.key][snap.upgrade.band.id]) || { nextStep: '' };
  const action = (low && low.action) || rep.nextStep || '';
  host.innerHTML = `
    <section class="decision-snapshot start-here" aria-label="Where to start">
      <div class="decision-kicker">Start here</div>
      <div class="decision-title">${pillar.name}${low ? `<span class="start-component"> - specifically, ${low.name}</span>` : ''}.</div>
      ${low && low.text ? `<div class="decision-copy">${low.text}</div>` : ''}
      ${action ? `<div class="start-action"><span class="start-action-label">Try this:</span> ${action}</div>` : ''}
      <div class="start-reassure">Just this one. The rest can wait.</div>
    </section>`;
}

/* RUNG 3 - company, not a gate. Destination is the general site for now. */
function renderCommunity(){
  const host = document.getElementById('community-container');
  if (!host) return;
  host.innerHTML = `
    <p class="community-line">Doing this alone is hard. If you'd rather have company, there's a community of people working on the same things - <a class="community-link" href="https://reskillrebels.com" target="_blank" rel="noopener">come find your way through it with others</a>.</p>`;
}

function renderResultsToolbar(){
  const host = document.getElementById('results-toolbar');
  if (!host) return;
  // the sketch interaction is only wired on hover-capable (pointer) devices, so only hint at it there
  const sketchHint = hoverCapable ? '<span class="toolbar-hint">Drag nodes to sketch</span>' : '';
  host.innerHTML = `
    <div class="results-toolbar" role="toolbar" aria-label="Results actions">
      <button type="button" class="btn btn-ghost toolbar-btn" onclick="copyResultsSummary()">Copy summary</button>
      <button type="button" class="btn btn-ghost toolbar-btn" onclick="window.print()">Print / save PDF</button>
      ${sketchHint}
    </div>`;
}

function buildResultsSummary(avgs){
  const overall = CONFIG.pillars.reduce((s,p) => s + avgs[p.key], 0) / CONFIG.pillars.length;
  const profile = CONFIG.profiles.find(p => overall <= p.upTo) || CONFIG.profiles[CONFIG.profiles.length-1];
  const snap = upgradeSnapshot(avgs);
  const lines = [
    'Rebel OS System Check - Results',
    `Profile: ${profile.name}`,
    '',
    snap.headline,
    snap.reason,
    '',
    `Strongest: ${snap.strongest.p.name} (${snap.strongest.v.toFixed(1)})`,
    `First upgrade: ${snap.upgrade.p.name} (${snap.upgrade.v.toFixed(1)})`,
    `This week: ${snap.action}`,
    '',
    'Pillar scores:'
  ];
  CONFIG.pillars.forEach(p => {
    const band = bandFor(avgs[p.key]);
    lines.push(`- ${p.name}: ${avgs[p.key].toFixed(1)} (${band.label})`);
  });
  lines.push('', 'reskillrebels.com');
  return lines.join('\n');
}

async function copyResultsSummary(){
  const avgs = {};
  CONFIG.pillars.forEach(p => { avgs[p.key] = pillarAvg(p.key); });
  const text = buildResultsSummary(avgs);
  try {
    await navigator.clipboard.writeText(text);
    const btn = document.querySelector('.toolbar-btn');
    if (btn){ const prev = btn.textContent; btn.textContent = 'Copied ✓'; setTimeout(() => btn.textContent = prev, 1600); }
  } catch(e){ window.prompt('Copy your summary:', text); }
}

/* ---------- share: growth loop - one of three copy variants (picked at random so a feed doesn't
   fill up with identical posts) + link, tagged so shared traffic is measurable ---------- */
async function shareProfile(){
  if (!lastProfileName) return;
  const statusEl = document.getElementById('share-status');
  const setStatus = (msg) => {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.classList.remove('hidden');
    clearTimeout(statusEl._hideTimer);
    statusEl._hideTimer = setTimeout(() => statusEl.classList.add('hidden'), 4000);
  };
  const url = 'https://systemcheck.reskillrebels.com/?source=share';
  const variants = [
    `Which part of your professional OS wants an upgrade?\n\nMine's ${lastUpgradePillarName}. Not entirely a surprise, if I'm honest.\n\nThe Rebel OS System Check. 20 minutes, no fluff.`,
    `My Rebel OS profile: ${lastProfileName}.\n\nStrongest pillar: ${lastStrongestPillarName}. Next upgrade: ${lastUpgradePillarName}.\n\nMildly called out. Usefully so.\n\nThe Rebel OS System Check. 20 minutes, no corporate wallpaper.`,
    `Apparently my professional OS is ready for a ${lastUpgradePillarName} upgrade.\n\nFair.\n\nThe Rebel OS System Check called it in 20 minutes, then gave me somewhere useful to start.`
  ];
  const text = variants[Math.floor(Math.random() * variants.length)];

  // hoverCapable (mouse + fine pointer) means a real desktop - even though desktop Safari
  // exposes navigator.share too, the OS share sheet it opens there is the wrong affordance.
  if (!hoverCapable && navigator.share){
    try {
      await navigator.share({ text, url });
      setStatus('Shared ✓');
    } catch(e){
      setStatus(e && e.name === 'AbortError' ? 'Share cancelled.' : "Couldn't share - try again?");
    }
    return;
  }
  try {
    await navigator.clipboard.writeText(`${text}\n\n${url}`);
    setStatus('Copied to clipboard ✓');
  } catch(e){
    setStatus("Couldn't copy - try selecting and copying manually.");
  }
}

let aspirationModalIdx = -1;
function openAspirationModal(pillarIdx){
  if (!radarChart || !lastAvgs) return;
  aspirationModalIdx = pillarIdx;
  const p = CONFIG.pillars[pillarIdx];
  const cur = lastAvgs[pillarIdx];
  const curTier = CONFIG.bands.indexOf(bandFor(cur)) + 1;
  const modal = document.getElementById('aspiration-modal');
  const copy = document.getElementById('aspiration-modal-copy');
  const choices = document.getElementById('aspiration-band-choices');
  document.getElementById('aspiration-modal-title').textContent = `Sketch upgrade: ${p.name}`;
  copy.textContent = `Currently ${bandFor(cur).label}. Pick a target level to see the levers.`;
  choices.innerHTML = CONFIG.bands.map((b, i) => {
    const tier = i + 1;
    const disabled = tier <= curTier;
    return `<button type="button" class="aspiration-band-btn${disabled ? ' disabled' : ''}" ${disabled ? 'disabled' : ''} onclick="applyAspirationTarget(${pillarIdx}, ${tier})">${b.label}</button>`;
  }).join('');
  modal.classList.remove('hidden');
}
function closeAspirationModal(){
  const modal = document.getElementById('aspiration-modal');
  if (modal) modal.classList.add('hidden');
  aspirationModalIdx = -1;
}
function applyAspirationTarget(pillarIdx, tier){
  if (!radarChart || !lastAvgs) return;
  const ds = radarChart.data.datasets[1];
  ds.hidden = false;
  ds.data[pillarIdx] = tier;
  aspTargets[pillarIdx] = tier;
  radarChart.update();
  renderAspirationPanels();
  closeAspirationModal();
}

function seedDemoAnswers(){
  CONFIG.questions.forEach((q, gi) => {
    const within = CONFIG.questions.slice(0, gi).filter(x => x.pillar === q.pillar).length;
    answers[q.pillar + '_' + within] = (gi + within) % 4;
  });
}

/* ---------- FINAL RESULTS ---------- */
function shapeNote(avgs){
  const vals = CONFIG.pillars.map(p => ({ p, v: avgs[p.key] }));
  let lo = vals[0], hi = vals[0];
  vals.forEach(x => { if (x.v < lo.v) lo = x; if (x.v > hi.v) hi = x; });
  if (hi.v - lo.v >= CONFIG.spread.gapThreshold)
    return `Your shape leans uneven - <strong>${lo.p.name}</strong> is the standout upgrade right now, and lifting it pulls the whole system up.`;
  return `Your shape is fairly even across the board - no single pillar is dragging; steady, balanced upgrading is the move.`;
}

function showResults(){
  const avgs = {};
  CONFIG.pillars.forEach(p => { avgs[p.key] = pillarAvg(p.key); });
  const overall = CONFIG.pillars.reduce((s,p) => s+avgs[p.key], 0) / CONFIG.pillars.length;
  const profile = CONFIG.profiles.find(p => overall <= p.upTo) || CONFIG.profiles[CONFIG.profiles.length-1];

  const snap = upgradeSnapshot(avgs);
  lastProfileName = profile.name;
  lastUpgradePillarName = snap.upgrade.p.name;
  lastStrongestPillarName = snap.strongest.p.name;
  resetEmailCaptureForm();

  submitScores(avgs); // fire-and-forget anonymous row; guarded against repeats

  show('results-screen');

  // text alternative so screen readers get the chart's meaning, not just an empty canvas
  const radarCanvas = document.getElementById('radarChart');
  radarCanvas.setAttribute('role', 'img');
  radarCanvas.setAttribute('aria-label',
    'Radar chart of your five pillar scores out of ' + CONFIG.scale.max + ': ' +
    CONFIG.pillars.map(p => p.name + ' ' + avgs[p.key].toFixed(1)).join(', ') + '.');

  renderStartHere(avgs);   // rung 1
  renderCommunity();       // rung 3
  renderResultsToolbar();

  const ctx = document.getElementById('radarChart').getContext('2d');
  if (radarChart) radarChart.destroy();
  radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: CONFIG.pillars.map(p => p.name),
      datasets: [{
        data: CONFIG.pillars.map(p => avgs[p.key]),
        backgroundColor: 'rgba(232,96,42,0.18)',
        borderColor: '#E8602A', borderWidth: 2.5,
        pointBackgroundColor: '#E8602A', pointBorderColor: '#E8602A',
        pointRadius: 5, pointHoverRadius: 8, pointHitRadius: 18, fill: true
      },{
        data: CONFIG.pillars.map(p => avgs[p.key]),
        borderColor: 'rgba(255,176,136,0.9)', borderWidth: 2,
        borderDash: [6,6], fill: false,
        pointBackgroundColor: 'rgba(255,176,136,0.9)', pointBorderColor: 'rgba(255,176,136,0.9)',
        pointRadius: 3, pointHitRadius: 18, hidden: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: 4 },
      onHover: (evt, els) => { evt.native.target.style.cursor = els.length ? 'pointer' : 'default'; },
      onClick: (evt, els) => {
        if (dragHappened) { dragHappened = false; return; }
        if (!els.length) return;
        const idx = els[0].index;
        if (!hoverCapable) { openAspirationModal(idx); return; }
        focusPillarCard(CONFIG.pillars[idx].key);
      },
      scales: { r: {
        min: 0, max: CONFIG.scale.max,
        ticks: { stepSize: 1, display: false },
        grid: { color: 'rgba(255,255,255,0.1)' },
        angleLines: { color: 'rgba(255,255,255,0.15)' },
        pointLabels: { padding: 8, color: 'rgba(255,255,255,0.8)', font: { family: 'Barlow Condensed', size: 14, weight: '700' } }
      } },
      plugins: { legend: { display: false } },
      animation: { duration: 900, easing: 'easeOutQuart' }
    }
  });
  lastAvgs = CONFIG.pillars.map(p => avgs[p.key]);
  bindRadarDrag(radarChart);
  aspTargets = {};
  const oldPanel = document.getElementById('asp-panel'); if (oldPanel) oldPanel.remove();

  document.getElementById('profile-badge-container').innerHTML = `
    <div class="profile-badge">
      <div class="profile-label">Your Rebel OS Profile</div>
      <div class="profile-title">${profile.name}</div>
      <div class="profile-desc">${profile.desc}</div>
      <button type="button" class="btn btn-primary profile-share-btn" onclick="shareProfile()">Share your profile →</button>
      <div class="share-status hidden" id="share-status" role="status" aria-live="polite"></div>
    </div>`;
  document.getElementById('overall-shape-note').innerHTML =
    `<div class="profile-desc" style="text-align:center;margin:-0.4rem 0 0.45rem;">${shapeNote(avgs)}</div>` +
    `<div class="strongest-line">Your strongest right now: ${snap.strongest.p.name}.</div>`;

  // rung 2: the rest, demoted. The pillar rung 1 picked is left out, so the
  // reader is not handed the same choice twice. Balanced results keep all five.
  const featuredKey = isBalanced(snap) ? null : snap.upgrade.p.key;
  let html = '';
  CONFIG.pillars.filter(p => p.key !== featuredKey).forEach(p => {
    const band = bandFor(avgs[p.key]);
    const rep = (CONFIG.reports[p.key] && CONFIG.reports[p.key][band.id]) || { read:'', nextStep:'' };
    const compHTML = componentRowsHTML(p.key);
    const expandable = compHTML !== '';
    html += `
      <div class="pillar-result-row" id="pillar-card-${p.key}">
        <div class="pillar-result-header ${expandable ? 'pillar-toggle' : ''}" ${expandable ? 'onclick="togglePillarDetail(this)"' : ''}>
          <span class="pillar-result-name">${expandable ? '<span class="comp-chev">▸</span>' : ''}${p.name}</span>
          <span class="pillar-result-version" onclick="toggleBandTip(this);event.stopPropagation();">${quadrantSVG(tierOf(band))}${band.label}</span>
        </div>
        <div class="pillar-bar-track"><div class="pillar-bar-fill" style="width:${band.pct}%"></div></div>
        <div class="pillar-insight">${rep.read}</div>
        ${rep.nextStep ? `<div class="pillar-insight" style="font-style:normal;margin-top:0.3rem;"><span style="color:var(--orange, #E8602A);font-weight:700;">Try this:</span> ${rep.nextStep}</div>` : ''}
        ${expandable ? `<div class="pillar-comp-detail">${synthesisHTML(p.key, true)}${compHTML}</div>` : ''}
      </div>`;
  });
  const note = hoverCapable ? '' : `
    <div class="expand-note" id="expand-note" onclick="expandFirstCard()">
      <svg width="24" height="26" viewBox="0 0 24 26" fill="none" aria-hidden="true">
        <path d="M21 4 C13 5, 7 11, 6 21" stroke="#E8602A" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <path d="M6 21 L3.5 14.5" stroke="#E8602A" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M6 21 L12 17.5" stroke="#E8602A" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
      <span>Click here to expand</span>
    </div>`;
  const rung2Header = `
    <div class="rung2-header">
      <div class="rung2-kicker">When you're ready</div>
      <div class="rung2-title">Explore another pillar.</div>
    </div>`;
  document.getElementById('pillar-results').innerHTML = rung2Header + note + html;

  const dc = document.getElementById('disclaimer');
  if (dc) dc.textContent = CONFIG.disclaimer;
}

const KIT_FORM_ENDPOINT = 'https://app.kit.com/forms/9691240/subscriptions';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setEmailFormError(msg){
  const errorEl = document.getElementById('email-form-error');
  if (!msg){ errorEl.textContent = ''; errorEl.classList.add('hidden'); return; }
  errorEl.textContent = msg;
  errorEl.classList.remove('hidden');
}

function resetEmailCaptureForm(){
  const emailInput = document.getElementById('email-input');
  const consentInput = document.getElementById('email-consent');
  const successEl = document.getElementById('email-success');
  const btn = document.getElementById('email-submit-btn');
  if (!emailInput) return;
  emailInput.value = '';
  emailInput.disabled = false;
  emailInput.removeAttribute('aria-invalid');
  consentInput.checked = false;
  consentInput.disabled = false;
  successEl.classList.add('hidden');
  btn.classList.remove('hidden');
  btn.disabled = false;
  btn.textContent = 'Send It →';
  setEmailFormError('');
}

async function submitEmail(evt){
  if (evt) evt.preventDefault();
  const emailInput = document.getElementById('email-input');
  const consentInput = document.getElementById('email-consent');
  const successEl = document.getElementById('email-success');
  const btn = document.getElementById('email-submit-btn');
  const email = emailInput.value.trim();

  setEmailFormError('');
  emailInput.setAttribute('aria-invalid', 'false');

  if (!EMAIL_RE.test(email) || !emailInput.checkValidity()){
    emailInput.setAttribute('aria-invalid', 'true');
    setEmailFormError('Enter a valid email address.');
    emailInput.focus();
    return;
  }
  if (!consentInput.checked){
    setEmailFormError("Please tick the box so I know it's okay to send your brief.");
    consentInput.focus();
    return;
  }

  const prevLabel = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Sending…';

  try {
    const res = await fetch(KIT_FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        email_address: email,
        fields: {
          profile_name: lastProfileName || '',
          first_upgrade_pillar: lastUpgradePillarName || '',
          source: sourceTag()
        }
      })
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data || data.status !== 'success'){
      throw new Error((data && data.errors && data.errors.messages && data.errors.messages[0]) || 'Request failed');
    }
    successEl.classList.remove('hidden');
    emailInput.disabled = true;
    consentInput.disabled = true;
    btn.classList.add('hidden');
  } catch(e){
    setEmailFormError("That didn't go through - please try again in a moment.");
    btn.disabled = false;
    btn.textContent = prevLabel;
  }
}

function restartQuiz(){ startFresh(); }
function startQuiz(){ startFullRun(); }

/* ---------- keyboard shortcuts: 1-4 or A-D to answer while in the quiz ---------- */
document.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const quiz = document.getElementById('quiz-screen');
  if (!quiz || quiz.classList.contains('hidden')) return;
  const btns = document.querySelectorAll('#question-container .option-btn');
  if (!btns.length) return;
  let idx = -1;
  if (e.key >= '1' && e.key <= '9') idx = parseInt(e.key, 10) - 1;
  else if (/^[a-zA-Z]$/.test(e.key)) idx = e.key.toLowerCase().charCodeAt(0) - 97;
  if (idx >= 0 && idx < btns.length) { e.preventDefault(); selectOpt(idx); }
});

/* ---------- print: canvas-drawn radar labels ignore CSS, so swap colors directly for the print window ---------- */
function setRadarPrintColors(active){
  if (!radarChart) return;
  const r = radarChart.options.scales.r;
  r.grid.color = active ? 'rgba(15,31,56,0.25)' : 'rgba(255,255,255,0.1)';
  r.angleLines.color = active ? 'rgba(15,31,56,0.35)' : 'rgba(255,255,255,0.15)';
  r.pointLabels.color = active ? '#14213d' : 'rgba(255,255,255,0.8)';
  radarChart.update('none');
}
window.addEventListener('beforeprint', () => setRadarPrintColors(true));
window.addEventListener('afterprint', () => setRadarPrintColors(false));

/* ---------- init ---------- */
(async function init(){
  const params = new URLSearchParams(window.location.search);
  const isLiveDomain = window.location.hostname === 'systemcheck.reskillrebels.com';
  if (params.get('demo') === 'results' && !isLiveDomain) {
    isDemoRun = true;
    seedDemoAnswers();
    showResults();
    return;
  }
  await loadState();
  if (allComplete()) showResults(); else renderHub();
})();