const navButtons = document.querySelectorAll('[data-view]');
const views = document.querySelectorAll('.view');
const crumb = document.getElementById('crumb');

function showView(name) {
  views.forEach(view => view.classList.toggle('active', view.id === `${name}-view`));
  document.querySelectorAll('.nav-item').forEach(button => button.classList.toggle('active', button.dataset.view === name));
  const active = document.querySelector(`.nav-item[data-view="${name}"]`);
  crumb.textContent = active ? active.textContent.trim() : ({overview:'Overview', schemes:'Find schemes', checklist:'My checklist', documents:'Application prep'}[name] || 'Overview');
  window.scrollTo({top:0, behavior:'smooth'});
}
navButtons.forEach(button => button.addEventListener('click', () => showView(button.dataset.view)));
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showView(button.dataset.go)));

const taskBoxes = [...document.querySelectorAll('[data-task]')];
const docBoxes = [...document.querySelectorAll('[data-doc]')];
function loadChecks(boxes, key) {
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem(key) || '[]'); } catch (_) {}
  boxes.forEach(box => { box.checked = saved.includes(Number(box.dataset.task ?? box.dataset.doc)); });
}
function saveChecks(boxes, key) {
  const checked = boxes.filter(box => box.checked).map(box => Number(box.dataset.task ?? box.dataset.doc));
  try { localStorage.setItem(key, JSON.stringify(checked)); } catch (_) {}
}
function updateProgress() {
  const taskDone = taskBoxes.filter(box => box.checked).length;
  const taskTotal = taskBoxes.length;
  const percent = Math.round(taskDone / taskTotal * 100);
  document.getElementById('checklist-count').textContent = `${taskDone} of ${taskTotal} completed`;
  document.getElementById('progress-percent').textContent = `${percent}%`;
  document.getElementById('progress-ring').style.strokeDashoffset = 264 - (264 * percent / 100);
  document.getElementById('overview-progress').textContent = `${taskDone}/${taskTotal}`;
  document.getElementById('overview-bar').style.width = `${percent}%`;
  document.getElementById('overview-docs').textContent = `${docBoxes.filter(box => box.checked).length}/${docBoxes.length}`;
  document.getElementById('doc-progress').textContent = `${docBoxes.filter(box => box.checked).length}/${docBoxes.length} READY`;
}
loadChecks(taskBoxes, 'civicflow-tasks');
loadChecks(docBoxes, 'civicflow-docs');
updateProgress();
taskBoxes.forEach(box => box.addEventListener('change', () => { saveChecks(taskBoxes, 'civicflow-tasks'); updateProgress(); }));
docBoxes.forEach(box => box.addEventListener('change', () => { saveChecks(docBoxes, 'civicflow-docs'); updateProgress(); }));
document.getElementById('reset-checklist').addEventListener('click', () => {
  if (!confirm('Reset all checklist items?')) return;
  taskBoxes.forEach(box => box.checked = false);
  saveChecks(taskBoxes, 'civicflow-tasks');
  updateProgress();
  document.getElementById('save-note').textContent = '✓ Checklist reset';
});

const search = document.getElementById('scheme-search');
const typeSelect = document.getElementById('business-type');
const schemeCards = [...document.querySelectorAll('.scheme-card')];
function filterSchemes() {
  const query = search.value.toLowerCase().trim();
  const type = typeSelect.value;
  let visible = 0;
  schemeCards.forEach(card => {
    const matchesText = card.dataset.search.includes(query) || card.textContent.toLowerCase().includes(query);
    const matchesType = type === 'all' || card.dataset.category.split(' ').includes(type) || card.dataset.category.includes('all');
    const show = matchesText && matchesType;
    card.classList.toggle('hidden', !show);
    if (show) visible++;
  });
  document.getElementById('scheme-count').textContent = `${visible} ${visible === 1 ? 'pathway' : 'pathways'}`;
  document.getElementById('empty-state').classList.toggle('hidden', visible > 0);
}
search.addEventListener('input', filterSchemes);
typeSelect.addEventListener('change', filterSchemes);
