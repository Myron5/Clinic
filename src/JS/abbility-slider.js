import $ from 'jquery';
import 'slick-carousel';

const el = document.querySelector('.abbility__list');

if (window.screen.width < 1290) {
  el.classList.add('SLIDER');

  $('.SLIDER').slick({
    arrows: false,
    dots: true,
    infinite: false,
  });

  if (window.screen.width >= 720) $('.SLIDER').slick('slickSetOption', 'slidesToShow', 2);
  else $('.SLIDER').slick('slickSetOption', 'slidesToShow', 1);
}

window.addEventListener('resize', e => {
  if (window.screen.width >= 1290) {
    if (el.classList.contains('slick-initialized')) {
      el.classList.remove('SLIDER');
      el.slick.unslick();
    }
  } else {
    if (!el.classList.contains('slick-initialized')) {
      el.classList.add('SLIDER');
      $('.SLIDER').slick({
        arrows: false,
        dots: true,
        infinite: false,
      });
    }
    if (window.screen.width >= 720) $('.SLIDER').slick('slickSetOption', 'slidesToShow', 2);
    else $('.SLIDER').slick('slickSetOption', 'slidesToShow', 1);
  }
});
