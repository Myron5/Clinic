import axios from 'axios';
import $ from 'jquery';
import Notiflix from 'notiflix';
import 'slick-carousel';

// -------------------------------------------------------- Button Refs --------------------------------------------------------

const buttonRefs = {
  ua: document.querySelector('.nav__btn--ua'),
  ru: document.querySelector('.nav__btn--ru'),
  mob_ua: document.querySelector('.mob-nav__btn--ua'),
  mob_ru: document.querySelector('.mob-nav__btn--ru'),
};

// ------------------------------------------------------ News Api Service ------------------------------------------------------

class NewsApiService {
  static #BASIC_URL = 'https://gnews.io/api/v4/search';
  #params;
  #url;
  translate;
  max;
  countMessage;

  constructor() {
    this.#params = new URLSearchParams({
      token: 'a6e76d47d28f8302c81ea3db16728233',
      lang: 'en',
      page: 1,
      max: 3,
      q: 'medicine',
    });

    this.#url = `${NewsApiService.#BASIC_URL}?${this.#params}`;
    this.translate = false;
    this.max = 0;
    this.countMessage = 0;
  }

  get params() {
    return this.#params;
  }

  get url() {
    return this.#url;
  }

  get page() {
    return Number(this.#params.get('page'));
  }

  incrementPage() {
    const nextNum = Number(this.#params.get('page')) + 1;
    this.#params.set('page', nextNum);
    this.#url = `${NewsApiService.#BASIC_URL}?${this.#params}`;
  }

  async getQuery() {
    try {
      const data = await this.getCurrency(this.#url);
      if (!data.articles) throw new Error();
      return data;
    } catch (err) {
      Notiflix.Notify.failure('😭😔 We so sorry, but something go wrong, and we can`t load news');
      console.log(err.message);
      document.querySelector('.news').style.display = 'none';
    }
  }

  async translateToLang(lang, txt) {
    const translateUrl = 'https://api.mymemory.translated.net/get';
    const url = `${translateUrl}?q=${txt}&langpair=en|${lang}`;

    try {
      const data = await this.getCurrency(url);
      if (data.responseStatus != 200) throw new Error('Something was wrong');
      return data.responseData.translatedText;
    } catch (err) {
      if (this.countMessage < 1) {
        Notiflix.Notify.failure('💔 Sorry, but now we can`t translate the news');
        console.log(err.message);
        this.translate = false;
      }
      this.countMessage++;
    }
  }

  async getCurrency(url) {
    const promise = await axios.get(url);
    const { data } = promise;
    return data;
  }
}

// ---------------------------------------------------------- Slider ----------------------------------------------------------

$('.news__slider').slick({
  arrows: true,
  dots: false,
  infinite: false,
  slidesToScroll: 1,
});

function chechSlidesCount(selctorStr) {
  if (window.screen.width >= 1350) $(selctorStr).slick('slickSetOption', 'slidesToShow', 3);
  else if (window.screen.width >= 720) $(selctorStr).slick('slickSetOption', 'slidesToShow', 2);
  else $(selctorStr).slick('slickSetOption', 'slidesToShow', 1);
}
chechSlidesCount('.news__slider');

window.addEventListener('resize', e => {
  chechSlidesCount('.news__slider');
});

// --------------------------------------------------------- Rendering ---------------------------------------------------------

const news = new NewsApiService();

function setNoramlDate(date, lang) {
  let [day, hours] = date.split('T');
  hours = hours.slice(0, 5);
  const result = {
    tag: day + ' ' + hours,
  };

  day = day.split('-');

  if (lang == 'uk') result.content = 'Від ' + myUaMonth(Number(day[1]) - 1) + ' ' + day[0];
  else result.content = 'От ' + myRuMonth(Number(day[1]) - 1) + ' ' + day[0];

  return result;
}

function checkLang() {
  if (buttonRefs.ua.hasAttribute('disabled') && buttonRefs.mob_ua.hasAttribute('disabled'))
    return 'uk';
  else return 'ru';
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

async function renderSlides(translate) {
  const lang = checkLang();
  let data;

  try {
    data = await news.getQuery();
    if (!data) throw new Error('no news');
    news.max = Math.ceil(data.totalArticles / 3);
    await Promise.all(
      data.articles.map(async article => {
        if (translate) {
          const title_ = await news.translateToLang(lang, article.title);
          const description_ = await news.translateToLang(lang, article.description);

          if (title_ && description_) {
            article.title = title_;
            article.description = description_;
          }
        }
        const markup = `
       <li class="news-slider__item">
            <div class="news-slider__card">
                <div class="news-slider__thumb">
                    <img class='news-slider__img' src="${article.image}" />
                </div>
                <div class="news-slider__box">
                    <h3 class="news-slider__title">${article.title}</h3>
                    <p class="news-slider__txt">${article.description}</p>
                    <div class="news-slider__bottom-box">
                        <time class="news-slider__date" datetime="${
                          setNoramlDate(article.publishedAt, lang).tag
                        }">${setNoramlDate(article.publishedAt, lang).content}</time>
                        <a
                        class="news-slider__link"
                        href="${article.url}"
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                        >Читати далі</a>
                    </div>
                </div>
            </div>
        </li>
    `;
        $('.news__slider').slick('slickAdd', markup);
        return true;
      })
    );
    return true;
  } catch (err) {
    document.querySelector('.news').style.display = 'none';
    return false;
  }
}

// -------------------------------------------------- Check if slider is shown -------------------------------------------------

async function checkIfLastShown() {
  const slidesArr = document.querySelectorAll('.news-slider__item.slick-slide');
  const lastSlide = slidesArr[slidesArr.length - 1];
  const lastIsShown = lastSlide.classList.contains('slick-active');
  if (lastIsShown) {
    if (news.page <= news.max) {
      news.incrementPage();
      console.log(news.page, news.max);
      await renderSlides(news.translate);
    } else {
      Notiflix.Notify.warning('🔚 You have reached the end of news');
    }
  }
}

async function start() {
  const resp = await renderSlides(news.translate);
  if (resp) {
    checkIfLastShown();
    $('.news__slider').on('afterChange', checkIfLastShown);
  }
}
start();

// ---------------------------------------------------- Attribute Observer ----------------------------------------------------

const mutationCallback = mutationsList => {
  for (const mutation of mutationsList) {
    if (mutation.type !== 'attributes' || mutation.attributeName !== 'disabled') {
      return;
    }
    // sliderRef.innerHTML = '';
    $('.news__slider').slick('slickRemove', null, null, true);
    start();
  }
};

const observer = new MutationObserver(mutationCallback);
for (const key in buttonRefs) {
  observer.observe(buttonRefs[key], { attributes: true });
}
