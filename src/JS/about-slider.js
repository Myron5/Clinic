import $ from 'jquery';
import 'slick-carousel';

const slider = $('.SEC-SLIDER').slick({
  arrows: true,
  dots: true,
  infinite: true,
  fade: true,
});

document.querySelectorAll('.SEC-SLIDER .slick-arrow').forEach(el => (el.textContent = ''));

const checkSlideNum = () => {
  const numRef = document.querySelector('.about__number');
  const activeRef = document.querySelector('.SEC-SLIDER .slick-active button');
  const elLength = document.querySelector('.SEC-SLIDER .slick-track').children.length;
  numRef.textContent = `${activeRef.textContent}/${elLength}`;
};
checkSlideNum();
document.querySelectorAll('.SEC-SLIDER .slick-arrow').forEach(el => {
  el.addEventListener('click', checkSlideNum);
});
