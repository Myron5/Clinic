// ------------------------------- Mobile menu -------------------------------
(() => {
  const mobileMenu = document.querySelector('[data-menu-container]');
  const openMenuBtn = document.querySelector('[data-open-menu]');
  const closeMenuBtn = document.querySelector('[data-close-menu]');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('mob-menu--is-closed');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.addEventListener('resize', e => {
    mobileMenu.classList.add('mob-menu--is-closed');
  });
})();

// ------------------------------- Nav sub-list -------------------------------
let refs = [
  {
    var: '--arr-3-variable',
    link: document.querySelector('.nav-services .nav__link'),
    list: document.querySelector('.nav-services__list'),
  },
  {
    var: '--arr-4-variable',
    link: document.querySelector('.nav-doctors .nav__link'),
    list: document.querySelector('.nav-doctors__list'),
  },
];

const mutex_arr = [];
refs.map(ref => openSubList(ref, refs));

function mutex(refs, link) {
  refs.map(ref => {
    if (ref.link.classList.contains('open') && ref.link != link) {
      ref.list.style.transform = 'translate(0, -150%)';
      const root = document.querySelector(':root');
      root.style.setProperty(ref.var, 'rotate(0deg)');
      ref.link.classList.toggle('open');
    }
  });
}

function openSubList(ref, mutex_refs) {
  const root = document.querySelector(':root');
  ref.link.addEventListener('click', e => {
    e.preventDefault();
    ref.link.classList.toggle('open');
    mutex(mutex_refs, ref.link);
    if (ref.link.classList.contains('open')) {
      ref.list.style.transform = 'translate(0, 0)';
      root.style.setProperty(ref.var, 'rotate(180deg)');
    } else {
      ref.list.style.transform = 'translate(0, -150%)';
      root.style.setProperty(ref.var, 'rotate(0deg)');
    }
  });
}

// ------------------------------- Mobile menu sub-list -------------------------------
refs = [
  {
    var: '--arr-1-variable',
    link: document.querySelector('.mob-services .mob-nav__link'),
    list: document.querySelector('.mob-services__list'),
  },
  {
    var: '--arr-2-variable',
    link: document.querySelector('.mob-doctors .mob-nav__link'),
    list: document.querySelector('.mob-doctors__list'),
  },
];

refs.map(ref => openMobSubList(ref));

function openMobSubList(refs) {
  const root = document.querySelector(':root');
  let closed_click = true;
  refs.link.addEventListener('click', e => {
    if (closed_click) {
      e.preventDefault();
      closed_click = false;
      refs.list.style.marginTop = '0';
      root.style.setProperty(refs.var, 'rotate(180deg)');
    } else {
      e.preventDefault();
      closed_click = true;
      refs.list.style.marginTop = '-150%';
      root.style.setProperty(refs.var, 'rotate(0deg)');
    }
  });
}
