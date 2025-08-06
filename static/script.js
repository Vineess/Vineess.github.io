/* ABRE E FECHA MENU LATERAL EM MODO MOBILE */
(() => {
  const menuMobile = document.querySelector('.menu-mobile');
  const body = document.body;
  if (!menuMobile) return;
  menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('bi-list');
    menuMobile.classList.toggle('bi-x');
    body.classList.toggle('menu-nav-active');
  });
})();

/* FECHA O MENU QUANDO CLICAR EM ALGUM ITEM */
(() => {
  const navItems = document.querySelectorAll('.nav-item');
  const body = document.body;
  const menuMobile = document.querySelector('.menu-mobile');
  if (!menuMobile || navItems.length === 0) return;
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (body.classList.contains('menu-nav-active')) {
        body.classList.remove('menu-nav-active');
        menuMobile.classList.replace('bi-x', 'bi-list');
      }
    });
  });
})();

/* ANIMAÇÃO DATA-ANIME */
(() => {
  const els = document.querySelectorAll('[data-anime]');
  if (els.length === 0) return;
  const animeScroll = () => {
    const threshold = window.pageYOffset + window.innerHeight * 0.85;
    els.forEach(el => {
      threshold > el.offsetTop
        ? el.classList.add('animate')
        : el.classList.remove('animate');
    });
  };
  animeScroll();
  window.addEventListener('scroll', animeScroll);
})();

/* LOADER DO FORMULÁRIO */
(() => {
  const btn = document.querySelector('#btn-enviar');
  const loader = document.querySelector('#btn-enviar-loader');
  if (!btn || !loader) return;
  btn.addEventListener('click', () => {
    loader.style.display = 'block';
    btn.style.display = 'none';
  });
})();

/* OCULTAR ALERTA APOS 5s */
(() => {
  const alerta = document.querySelector('#alerta');
  if (!alerta) return;
  setTimeout(() => alerta.style.display = 'none', 5000);
})();

/* DARK MODE TOGGLE */
(() => {
  const toggle = document.getElementById('darkModeToggle');
  const icon   = document.getElementById('darkModeIcon');
  if (!toggle || !icon) {
    console.warn('DarkMode: toggle ou icon não encontrados', toggle, icon);
    return;
  }

  // 1) Carrega tema salvo
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
  }

  // 2) Alterna no clique
  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    if (isDark) {
      icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
      localStorage.setItem('theme', 'dark');
    } else {
      icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
      localStorage.setItem('theme', 'light');
    }
  });
})();
