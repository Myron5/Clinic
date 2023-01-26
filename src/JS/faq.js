const txtArr = document.querySelectorAll('.faq__answear');
const btnsArr = document.querySelectorAll('.faq__btn');

function toggleDisplay(element, btn) {
  if (element.style.display == 'none') {
    element.style.display = 'block';
  } else element.style.display = 'none';

  const parent = element.parentNode;
  if (parent.style.backgroundColor == 'transparent') parent.style.backgroundColor = '#fff';
  else parent.style.backgroundColor = 'transparent';

  if (btn.style.transform == 'rotate(45deg)') btn.style.transform = 'rotate(0deg)';
  else btn.style.transform = 'rotate(45deg)';
}

btnsArr.forEach((btn, idx) => btn.addEventListener('click', e => toggleDisplay(txtArr[idx], btn)));
