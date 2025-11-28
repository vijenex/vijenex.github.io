// theme toggle and remember preference
const body = document.body;
const btn = document.getElementById('themeToggle');

function applyTheme(t){
  body.classList.remove('theme-light','theme-dark');
  body.classList.add(t === 'light' ? 'theme-light' : 'theme-dark');
  localStorage.setItem('vj_theme', t);
}
btn?.addEventListener('click', () => {
  const current = body.classList.contains('theme-light') ? 'light' : 'dark';
  applyTheme(current === 'light' ? 'dark' : 'light');
});

// initialize
const saved = localStorage.getItem('vj_theme');
if(saved) applyTheme(saved);
else {
  // prefer dark by default (but follow user's system preference)
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(prefersLight ? 'light' : 'dark');
}
// small script: nothing heavy
document.addEventListener('click', e => {
  // placeholder for future interactions
});
