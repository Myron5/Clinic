// ------------------------------------------------------ Buttons Actions ------------------------------------------------------

const serviceBtnRef = document.querySelector('.js-service-btn');
const proBrnRef = document.querySelector('.js-pro-btn');

const listServiceRef = document.querySelector('.footer__service-list');
const listProRef = document.querySelector('.footer__pro-list');

function toggleDisplay(element, btn) {
  if (element.style.display == 'none') {
    element.style.display = 'block';
  } else element.style.display = 'none';

  if (btn.style.transform == 'rotate(45deg)') btn.style.transform = 'rotate(0deg)';
  else btn.style.transform = 'rotate(45deg)';
}

(() => {
  if (window.screen.width < 1290) {
    listServiceRef.style.display = 'none';
    listProRef.style.display = 'none';
  } else {
    listServiceRef.style.display = 'block';
    listProRef.style.display = 'block';
  }
})();

serviceBtnRef.addEventListener('click', e => {
  toggleDisplay(listServiceRef, serviceBtnRef);
});

proBrnRef.addEventListener('click', e => {
  toggleDisplay(listProRef, proBrnRef);
});
