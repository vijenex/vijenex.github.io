// Theme toggle (simple, remembers choice)
const btn = document.getElementById('themeToggle');
const root = document.documentElement;
function setTheme(t){
  if(t === 'light'){ document.body.classList.remove('theme-dark'); document.body.classList.add('theme-light'); localStorage.setItem('vj_theme','light'); }
  else { document.body.classList.remove('theme-light'); document.body.classList.add('theme-dark'); localStorage.setItem('vj_theme','dark'); }
}
btn?.addEventListener('click', () => {
  const current = localStorage.getItem('vj_theme') === 'light' ? 'light' : 'dark';
  setTheme(current === 'light' ? 'dark' : 'light');
});
const saved = localStorage.getItem('vj_theme');
if(saved) setTheme(saved);
else {
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  setTheme(prefersLight ? 'light' : 'dark');
}
