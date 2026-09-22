function applyTheme() {
  try {
    const saved = localStorage.getItem('nc-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefersDark);

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const toggles = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');
    toggles.forEach((btn) => {
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    });

    const hour = new Date().getHours();
    const isNight = hour >= 20 || hour < 6;
    if (isNight) {
      document.documentElement.classList.add('circadian-warm');
    } else {
      document.documentElement.classList.remove('circadian-warm');
    }
  } catch {
    // Gracefully handle disabled storage
  }
}

function initTheme() {
  applyTheme();

  document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement)?.closest('[data-theme-toggle]');
    if (!target) return;

    const currentlyDark = document.documentElement.classList.contains('dark');
    const newTheme = currentlyDark ? 'light' : 'dark';

    try {
      localStorage.setItem('nc-theme', newTheme);
    } catch {}

    applyTheme();
  });

  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('nc-theme')) {
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    });
  } catch {}
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
}
