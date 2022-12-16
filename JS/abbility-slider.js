const el = document.querySelector('.abbility__list');

if (window.screen.width < 1290) {
  el.classList.add('SLIDER');

  if (window.screen.width >= 720) {
    $('.SLIDER').slick({
      arrows: false,
      dots: true,
      infinite: false,
      slidesToShow: 2,
    });
  } else {
    $('.SLIDER').slick({
      arrows: false,
      dots: true,
      infinite: false,
      slidesToShow: 1,
    });
  }
}

window.addEventListener('resize', e => {
  if (window.screen.width >= 1290) el.classList.remove('SLIDER');

  if (window.screen.width < 1290) {
    if (window.screen.width >= 720) {
      $('.SLIDER').slick('slickSetOption', 'slidesToShow', 2);
    } else {
      $('.SLIDER').slick('slickSetOption', 'slidesToShow', 1);
    }
  }
});
