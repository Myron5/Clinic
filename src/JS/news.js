import axios from 'axios';
import $ from 'jquery';
import Notiflix from 'notiflix';
import 'slick-carousel';

// import NewsAPI from 'newsapi';
// const newsapi = new NewsAPI('a6847734e70e46399cfe2c3359d3f59f');

// -------------------------------------------------------- Button Refs --------------------------------------------------------

const buttonRefs = {
  ua: document.querySelector('.nav__btn--ua'),
  ru: document.querySelector('.nav__btn--ru'),
  mob_ua: document.querySelector('.mob-nav__btn--ua'),
  mob_ru: document.querySelector('.mob-nav__btn--ru'),
};

// ------------------------------------------------------ News Api Service ------------------------------------------------------

class NewsApiService {
  static #BASIC_URL = 'https://newsapi.org/v2/everything';
  #params;
  #url;

  constructor() {
    this.countMessage = 0;
    this.#params = new URLSearchParams({
      apiKey: 'a6847734e70e46399cfe2c3359d3f59f',
      language: 'en',
      page: 1,
      pageSize: 3,
      q: 'medicine',
    });

    this.#url = `${NewsApiService.#BASIC_URL}?${this.#params}`;
  }

  get params() {
    return this.#params;
  }

  get url() {
    return this.#url;
  }

  incrementPage() {
    const nextNum = Number(this.#params.get('page')) + 1;
    this.#params.set('page', nextNum);
    this.#url = `${NewsApiService.#BASIC_URL}?${this.#params}`;
  }

  async getQuery() {
    try {
      const data = await this.getCurrency(this.#url);
      if (data.status != 'ok') throw new Error('💔 Something was wrong');

      return data;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      console.log(err.message);
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
        Notiflix.Notify.failure('💔 Sorry we can`t translate the news');
        console.log(err.message);
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
  if (window.screen.width >= 1290) $(selctorStr).slick('slickSetOption', 'slidesToShow', 3);
  else if (window.screen.width >= 720) $(selctorStr).slick('slickSetOption', 'slidesToShow', 2);
  else $(selctorStr).slick('slickSetOption', 'slidesToShow', 1);
}
chechSlidesCount('.news__slider');

window.addEventListener('resize', e => {
  chechSlidesCount('.news__slider');
});

// --------------------------------------------------------- Rendering ---------------------------------------------------------

const news = new NewsApiService();

function getStaticData() {
  return {
    status: 'ok',
    totalResults: 2,
    articles: [
      {
        source: { id: null, name: 'BBC News' },
        author: 'http://www.facebook.com/bbcnews',
        title: 'Смерть 18 дітей в Узбекистані: знову винен індійський сироп від кашлю',
        description:
          'Раніше повідомляли, що в Гамбії та Індонезії померли більш ніж 200 дітей до 5 років після вживання сиропу від кашлю іншого індійського виробника.',
        url: 'https://www.bbc.com/ukrainian/news-64115951',
        urlToImage:
          'https://ichef.bbci.co.uk/news/1024/branded_ukrainian/156CA/production/_128145778_coughsyrup.jpg',
        publishedAt: '2022-12-29T11:31:52Z',
        content:
          ', Getty Images\r\nMarion Biotech 18 . \r\n , "-1 " - .\r\n" , - - 2,5-5 , ", - . \r\n , .\r\n , 200 5 , .\r\n \' , Marion Biotech.\r\n , .\r\n , - Marion Biotech.\r\n" ", - .\r\n Marion Biotech BBC .\r\n ANI, Marion Biotec… [+384 chars]',
      },
      {
        source: { id: null, name: 'Dou.ua' },
        author: 'Vova Kyrychenko',
        title:
          'Big Data, Machine Learning, Data Science Digest: 2022-й в ретроспективі і тренди на 2023 рік',
        description:
          'Привіт, спільното DOU! У цьому році ми з вами ще не бачились, тому вітаю з Новим 2023-м\r\n і бажаю нам усім досягти головної цілі на рік — перемогти мордор :)\n\nСтруктурою та наповненням цей випуск буде відрізнятися від звичного вам формату мого дайджесту, тому…',
        url: 'https://dou.ua/forums/topic/41595/',
        urlToImage: 'https://s.dou.ua/img/announces/icon_2023_AI_bottom.png',
        publishedAt: '2023-01-11T10:00:03Z',
        content:
          'Telegram- «DOU #tech»,   .\r\n, DOU!        ,   2023-\r\n      :)\r\n   ,        . \r\n   ,   3  : \r\n<ol><li> AI/ML  .     Deloitte, McKinsey, The Economist  .</li><li>    2022 ,   AI.      .</li><li>  ,    … [+5993 chars]',
      },
    ],
  };
}

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

async function renderSlides() {
  const lang = checkLang();
  let data;

  try {
    data = await news.getQuery();
  } catch (err) {
    data = getStaticData();
  }

  await Promise.all(
    data.articles.map(async article => {
      const title = article.title;
      const desc = article.description;

      try {
        article.title = await news.translateToLang(lang, title);
        article.description = await news.translateToLang(lang, desc);
        if (!article.title) throw new Error('Something was wrong');
      } catch (err) {
        article.title = title;
        article.description = desc;
      }

      const markup = `
       <li class="news-slider__item">
            <div class="news-slider__card">
                <div class="news-slider__thumb">
                    <img class='news-slider__img' src="${article.urlToImage}" />
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
      return Promise.resolve('success value');
    })
  );
  return Promise.resolve('success value');
}

// -------------------------------------------------- Check if slider is shown -------------------------------------------------

async function checkIfLastShown() {
  const slidesArr = document.querySelectorAll('.news-slider__item.slick-slide');
  const lastSlide = slidesArr[slidesArr.length - 3];
  const lastIsShown = lastSlide.classList.contains('slick-active');
  if (lastIsShown) {
    news.incrementPage();
    await renderSlides();
  }
}

async function start() {
  await renderSlides();
  checkIfLastShown();
  $('.news__slider').on('afterChange', checkIfLastShown);
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

// ----------------------------------------------------------- Test -----------------------------------------------------------
