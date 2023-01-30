import axios from 'axios';
import $ from 'jquery';
import 'slick-carousel';
import Notiflix from 'notiflix';

const button = {
  ua: document.querySelector('.nav__btn--ua'),
  ru: document.querySelector('.nav__btn--ru'),
  mob_ua: document.querySelector('.mob-nav__btn--ua'),
  mob_ru: document.querySelector('.mob-nav__btn--ru'),
};

// ------------------------------------------------------------ Slider ------------------------------------------------------------

$('.reviews__slider').slick({
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
});

function chechSlidesCount(selctorStr) {
  if (window.screen.width >= 1290) $(selctorStr).slick('slickSetOption', 'slidesToShow', 2);
  else $(selctorStr).slick('slickSetOption', 'slidesToShow', 1);
}
chechSlidesCount('.reviews__slider');

window.addEventListener('resize', e => {
  chechSlidesCount('.reviews__slider');
});

// ----------------------------------------------------------- Request -----------------------------------------------------------

async function getCurrency(url) {
  const promise = await axios.get(url);
  const { data } = promise;
  return data;
}

// ----------------------------------------------------------- Render -----------------------------------------------------------

async function renderReviews() {
  let resp;
  const lang = checkLang();

  try {
    // resp = await getCurrency(`./server.php?currency=now&lang=${lang}`);
    resp = await getCurrency(
      'https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDUEvyG1oTLG9wJiVtBOZHjQ17zQWK46hw&place_id=ChIJEQNYIIIv2EARV3mQsxSUxJ8&language=uk&reviews_sort=newest'
    );

    if (!resp.result.rating)
      throw new Error('😭😔 We so sorry, but something go wrong, and we can`t load reviews');

    const rating = resp.result.rating;
    const reviews = resp.result.reviews;

    setAverageRating(rating);

    reviews.forEach(review => {
      const date = new Date(review.time * 1000);
      const dateStr = `${date.getDate()} ${getLangMonth(
        lang,
        date.getMonth()
      )} ${date.getFullYear()}`;
      const markup = `
        <li>
        <div class="reviews__slider-card rev-card">
          <img src="${review.profile_photo_url}" alt="" class="rev-card__img" />
          <h3 class="rev-card__name">${review.author_name}</h3>
          <div class="rev-card__mark"><div class="rev-card__mark--reverse" style='width: ${
            132 - 26 * review.rating
          }px !important;'></div></div>
          <p class="rev-card__date">${dateStr}</p>
          <p class="rev-card__text">
            ${review.text.substring(0, 250)}…
            <a href="${review.author_url}" class="rev-card__more-link">Далі</a>
          </p>
        </div>
        </li>
      `;
      $('.reviews__slider').slick('slickAdd', markup);
    });
  } catch (err) {
    Notiflix.Notify.failure(err.message);
    console.log(err.message);
    document.querySelector('.reviews').style.display = 'none';
  }
}
renderReviews();

function checkLang() {
  if (button.ua.hasAttribute('disabled') && button.mob_ua.hasAttribute('disabled')) return 'uk';
  else return 'ru';
}

function setAverageRating(rating) {
  const avNumElRef = document.querySelector('.reviews__num');
  const avStarsRef = document.querySelector('.reviews__stars--reverse');

  avNumElRef.textContent = rating;
  avStarsRef.style.width = `${Math.floor((1 - rating / 5) * 130 + 5)}px`;
}

function myUaMonth(num) {
  let month;
  switch (num) {
    case 0:
      month = 'Січня';
      break;
    case 1:
      month = 'Лютого';
      break;
    case 2:
      month = 'Березня';
      break;
    case 3:
      month = 'Квітня';
      break;
    case 4:
      month = 'Травня';
      break;
    case 5:
      month = 'Червня';
      break;
    case 6:
      month = 'Липня';
      break;
    case 7:
      month = 'Серпня';
      break;
    case 8:
      month = 'Вересня';
      break;
    case 9:
      month = 'Жовтня';
      break;
    case 10:
      month = 'Листопада';
      break;
    case 11:
      month = 'Грудня';
      break;
    default:
      month = 'Invalid month';
  }
  return month;
}

function myRuMonth(num) {
  let month;
  switch (num) {
    case 0:
      month = 'Января';
      break;
    case 1:
      month = 'Февраля';
      break;
    case 2:
      month = 'Марта';
      break;
    case 3:
      month = 'Апреля';
      break;
    case 4:
      month = 'Мая';
      break;
    case 5:
      month = 'Июля';
      break;
    case 6:
      month = 'Июня';
      break;
    case 7:
      month = 'Августа';
      break;
    case 8:
      month = 'Сентября';
      break;
    case 9:
      month = 'Октября';
      break;
    case 10:
      month = 'Ноября';
      break;
    case 11:
      month = 'Декабря';
      break;
    default:
      month = 'Invalid month';
  }
  return month;
}

function getLangMonth(lang, num) {
  if (lang == 'uk') return myUaMonth(num);
  else return myRuMonth(num);
}

// ---------------------------------------------------- Attribute Observer ----------------------------------------------------

const mutationCallback = mutationsList => {
  for (const mutation of mutationsList) {
    if (mutation.type !== 'attributes' || mutation.attributeName !== 'disabled') {
      return;
    }
    // sliderRef.innerHTML = '';
    $('.reviews__slider').slick('slickRemove', null, null, true);
    renderReviews();
  }
};

const observer = new MutationObserver(mutationCallback);
for (const key in button) {
  observer.observe(button[key], { attributes: true });
}
