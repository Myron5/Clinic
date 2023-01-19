import $ from 'jquery';
import 'slick-carousel';

$('.discount-slider').slick({
  infinite: false,
  dots: true,
  arrows: true,
  slidesToScroll: 1,
  slidesToShow: 1,
});

document.querySelectorAll('.discount-slider .slick-arrow').forEach(el => (el.textContent = ''));
document.querySelectorAll('.discount__card').forEach(el => el.setAttribute('style', ''));

function slickDefine() {
  if (window.screen.width >= 1400) $('.discount-slider').slick('slickSetOption', 'slidesToShow', 2);
  else $('.discount-slider').slick('slickSetOption', 'slidesToShow', 1);
}

slickDefine();
window.addEventListener('resize', slickDefine);
