(() => {
  const key = 'lifeassist-site-appearance';
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  let choice = 'system';
  try { const saved = localStorage.getItem(key); if (['system', 'light', 'dark'].includes(saved)) choice = saved; } catch (_) {}
  function apply() { document.documentElement.dataset.appearance = choice === 'system' ? (media.matches ? 'dark' : 'light') : choice; }
  apply();
  media.addEventListener('change', apply);
  document.addEventListener('DOMContentLoaded', () => {
    const control = document.getElementById('site-appearance');
    if (!control) return;
    control.value = choice;
    control.addEventListener('change', () => {
      choice = control.value;
      try { localStorage.setItem(key, choice); } catch (_) {}
      apply();
    });
  });
})();
