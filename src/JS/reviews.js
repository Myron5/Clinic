import axios from 'axios';
import $ from 'jquery';
import 'slick-carousel';

const BASIC_URL = 'https://maps.googleapis.com/maps/api/place/details/json';

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
  let data;
  const lang = checkLang();

  const params = new URLSearchParams({
    key: 'AIzaSyDUEvyG1oTLG9wJiVtBOZHjQ17zQWK46hw',
    place_id: 'ChIJEQNYIIIv2EARV3mQsxSUxJ8',
    language: lang,
  });

  // data = await getCurrency(`./server.php?currency=now&lang=${lang}`);

  try {
    data = await getCurrency(`${BASIC_URL}?${params}`);
  } catch (err) {
    data = getStaticData();
  }

  const {
    result: { rating, reviews },
  } = data;

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
      130 - 26 * review.rating
    }px !important;'></div></div>
    <p class="rev-card__date">${dateStr}</p>
    <p class="rev-card__text">
      ${review.text.substring(0, 250)}…
      <a href="${review.author_url}" class="rev-card__more-link">Далі</a>
    </p>
  </div>
  </li>
  `;
    // sliderRef.insertAdjacentHTML('beforeend', markup);
    $('.reviews__slider').slick('slickAdd', markup);
  });
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

function getStaticData() {
  return {
    html_attributions: [],
    result: {
      address_components: [
        {
          long_name: '29Б',
          short_name: '29Б',
          types: ['street_number'],
        },
        {
          long_name: 'вулиця Геннадія Біліченко',
          short_name: 'вулиця Геннадія Біліченко',
          types: ['route'],
        },
        {
          long_name: 'Шевченківський район',
          short_name: 'Шевченківський район',
          types: ['sublocality_level_1', 'sublocality', 'political'],
        },
        {
          long_name: 'Щербані',
          short_name: 'Щербані',
          types: ['locality', 'political'],
        },
        {
          long_name: 'Полтавська міськрада',
          short_name: 'Полтавська міськрада',
          types: ['administrative_area_level_3', 'political'],
        },
        {
          long_name: 'Полтавська область',
          short_name: 'Полтавська область',
          types: ['administrative_area_level_1', 'political'],
        },
        {
          long_name: 'Україна',
          short_name: 'UA',
          types: ['country', 'political'],
        },
        {
          long_name: '36000',
          short_name: '36000',
          types: ['postal_code'],
        },
      ],
      adr_address:
        '\u003cspan class="street-address"\u003eвулиця Геннадія Біліченко, 29Б\u003c/span\u003e, \u003cspan class="locality"\u003eЩербані\u003c/span\u003e, \u003cspan class="region"\u003eПолтавська область\u003c/span\u003e, \u003cspan class="country-name"\u003eУкраїна\u003c/span\u003e, \u003cspan class="postal-code"\u003e36000\u003c/span\u003e',
      business_status: 'OPERATIONAL',
      current_opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              date: '2023-01-23',
              day: 1,
              time: '1800',
            },
            open: {
              date: '2023-01-23',
              day: 1,
              time: '0900',
            },
          },
          {
            close: {
              date: '2023-01-24',
              day: 2,
              time: '1800',
            },
            open: {
              date: '2023-01-24',
              day: 2,
              time: '0900',
            },
          },
          {
            close: {
              date: '2023-01-25',
              day: 3,
              time: '1800',
            },
            open: {
              date: '2023-01-25',
              day: 3,
              time: '0900',
            },
          },
          {
            close: {
              date: '2023-01-26',
              day: 4,
              time: '1800',
            },
            open: {
              date: '2023-01-26',
              day: 4,
              time: '0900',
            },
          },
          {
            close: {
              date: '2023-01-27',
              day: 5,
              time: '1800',
            },
            open: {
              date: '2023-01-27',
              day: 5,
              time: '0900',
            },
          },
          {
            close: {
              date: '2023-01-28',
              day: 6,
              time: '1600',
            },
            open: {
              date: '2023-01-28',
              day: 6,
              time: '0900',
            },
          },
        ],
        weekday_text: [
          'понеділок: 09:00–18:00',
          'вівторок: 09:00–18:00',
          'середа: 09:00–18:00',
          'четвер: 09:00–18:00',
          'пʼятниця: 09:00–18:00',
          'субота: 09:00–16:00',
          'неділя: Зачинено',
        ],
      },
      formatted_address:
        'вулиця Геннадія Біліченко, 29Б, Щербані, Полтавська область, Україна, 36000',
      formatted_phone_number: '050 405 2000',
      geometry: {
        location: {
          lat: 49.5529489,
          lng: 34.51902200000001,
        },
        viewport: {
          northeast: {
            lat: 49.55432353029151,
            lng: 34.52039723029149,
          },
          southwest: {
            lat: 49.55162556970851,
            lng: 34.51769926970849,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
      icon_background_color: '#7B9EB0',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
      international_phone_number: '+380 50 405 2000',
      name: 'Центр сучасної офтальмології «СВІТОГЛЯД»',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 1,
              time: '1800',
            },
            open: {
              day: 1,
              time: '0900',
            },
          },
          {
            close: {
              day: 2,
              time: '1800',
            },
            open: {
              day: 2,
              time: '0900',
            },
          },
          {
            close: {
              day: 3,
              time: '1800',
            },
            open: {
              day: 3,
              time: '0900',
            },
          },
          {
            close: {
              day: 4,
              time: '1800',
            },
            open: {
              day: 4,
              time: '0900',
            },
          },
          {
            close: {
              day: 5,
              time: '1800',
            },
            open: {
              day: 5,
              time: '0900',
            },
          },
          {
            close: {
              day: 6,
              time: '1600',
            },
            open: {
              day: 6,
              time: '0900',
            },
          },
        ],
        weekday_text: [
          'понеділок: 09:00–18:00',
          'вівторок: 09:00–18:00',
          'середа: 09:00–18:00',
          'четвер: 09:00–18:00',
          'пʼятниця: 09:00–18:00',
          'субота: 09:00–16:00',
          'неділя: Зачинено',
        ],
      },
      photos: [
        {
          height: 3456,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'AfLeUgNlIo6WpTOfDzX_fxL57exiIaJFSXxwJaKC3heGl9IDFEH9saD-Y0hs6cOurr_0yqlKsAwkfFMq5b30F_XwgSHxyOT68s0SQNPLfL0hS5H6W-hjbEOv04H4MiISV5t3n2mdOT7LanXSmPHUSDjS6Xfs0PHERwFn8KFwOjqL8izubZBJ',
          width: 5184,
        },
        {
          height: 503,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'AfLeUgNbqaBCOyTPu_wHySTZHZUB3gE5hurAn7tMa-z3kDvPdf_N_jk_51xdqXE8e7PF6z4cGs645M9EYFguMmEQVAddzexE3PYCU9ovHNDezYWggBM9FKOrgSZGVDN6jxW6bJeBE2N8y9qM06c5Q3GQB8GzttxZnoBCaIbZUoojro2l7CMe',
          width: 600,
        },
        {
          height: 526,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'AfLeUgOW_L6iID6mUZ46Vc_Cn-AX5z9sdqKlTRplh-4zjo6f3Ajh5TekxPq8Ax9EV9UX_zXffVIVmq-CnW6DlL0I6kvExhnL_WaNSmEiCN6MhSTiX9MDDUKVIpYvs08lrYj5oirRAIYnjZRZ_XfT2vUUX14Wej7V61-GROHeuOXDrO28P_mK',
          width: 526,
        },
        {
          height: 526,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'AfLeUgN5BIn1-BPNWVB_cEGOHUIFaxw-vjTdltiKWVQ0l0_dtDMsgpbMVajIqzXczDTPywl4_QxgrAGJ8a9VOazv5uiIG2uzI04JmPjVDONLcp-14EU4akFtOINMInScW71n7bMJCVlRnEPIDYnwTRPUhxaWBIwMl1k21XODye2bhQGtBhvw',
          width: 526,
        },
        {
          height: 533,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'AfLeUgOTtz6Co8Ev9LTzrqu-ubxdwqkGrjYmfY1bd5p5QofVCkVkQDq4u5nE049qCKydwmbSciHXTRj8uH4s1hBJVXhoD-YYP9KNGkziyRZd4dPKbNO91HOd0tWQN7JkMCY5KVCiM0KtyPriSBwEQ8GcAIXzA2OeTsjktlbh48Kv12Uyx9fa',
          width: 526,
        },
        {
          height: 526,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'AfLeUgNjLaxtkcyudxd9zY6HXBs_KVqXj5BOlMKOOwAbUQVZXOj84opAx7VdJmPXNvZ3kAg0tOhWY-72syCkrpNQaPID_Nt2yQ1CT66WKXStRbkOiGWgawYO98rXsWiItY1GmICIhaS0IYwNx1J5YWzh4wnFSGnhQ6oqC2i30N9rexwNDODf',
          width: 526,
        },
        {
          height: 640,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'AfLeUgMWPiHxzd5rsQ3JG1lmVi60x1J9qJFo-F6d6IwCNqn0AX-Plbihx3iNntWVM3RdX82um4yDtAjI8QpT42lgkXJclEbkO7yPVLVEM0ZqPTkkBMiyBfiuGsx1y1vMX4Q6a1iGpvtp4-gTvLbPAumbfIP-mv2KebzujezwiYsBgNUK8D6L',
          width: 512,
        },
        {
          height: 466,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'AfLeUgPdDySo6yQb9coK8vmfVoLCAuPwRinN7BC7IcYEwsCg_CSodRLd-l3py4rLeBgguhOEIAroIOzD-M6c9Xjz99ewK7P-TiOhQq4KuYN3Bgc3NdNQOTYbWlt7ORsIj3K1hacR4_NMfAj5XTkCjB1-bbOrKKmDf9-wVRjRuxmF1M4Ts5Ib',
          width: 828,
        },
        {
          height: 568,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'AfLeUgOLl8TYvr6VR4jQkA3YHaJhG1a0czFAL0j3qjLNn3djNH4gBKdwpqbQbZ82A8uDe-agSs5vsO6Dp4rxujBIR30E-7pf9uA5M0zKwq8n5bxJCiDyKLTlV7t40_kKJ9PQahtqwjt73sQMMcp5pSKj0CXgaV_oVEOxLaIOxHbfVtsst9nI',
          width: 853,
        },
        {
          height: 1440,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'AfLeUgNdO-wKByzelVDiiaX332pa0OJh8r3w7VJHVfug5DJC8rO_8DpR_8oC4Ib86tLL5Csisow-uDjjQu7KVvlqeVur92AyE0al0c-ZPpGZfFRzi06dF-IJqH8qfOCqraPbnIZ4QPYAQvGZ7Qf-bXn2MvI7-K2jVyeFh8xtppYQ7Pt6TN3m',
          width: 1440,
        },
      ],
      place_id: 'ChIJEQNYIIIv2EARV3mQsxSUxJ8',
      plus_code: {
        compound_code: 'HG39+5J Щербані, Полтавська область, Україна',
        global_code: '8GXPHG39+5J',
      },
      rating: 4.7,
      reference: 'ChIJEQNYIIIv2EARV3mQsxSUxJ8',
      reviews: [
        {
          author_name: 'Инна Луценко',
          author_url: 'https://www.google.com/maps/contrib/105405492997226718456/reviews',
          language: 'uk',
          original_language: 'uk',
          profile_photo_url:
            'https://lh3.googleusercontent.com/a-/AD5-WCmqZwEpjXoECXS4G-AM5Sr9N9_TywwXz6WjQm11nA=s128-c0x00000000-cc-rp-mo',
          rating: 5,
          relative_time_description: 'рік тому',
          text: 'Задоволена візитом. Гарна клініка, чудовий персонал. Робили ін‘єкцію в халязіон, лікар дуже бережно все зробив та безболісно. Рекомендую!',
          time: 1638630208,
          translated: false,
        },
        {
          author_name: 'Рено Кенго',
          author_url: 'https://www.google.com/maps/contrib/105269272968951937924/reviews',
          language: 'uk',
          original_language: 'uk',
          profile_photo_url:
            'https://lh3.googleusercontent.com/a/AEdFTp5-75jL0vxSJyYS-4MjTdv2mvslk8UGvHzokQH1=s128-c0x00000000-cc-rp-mo',
          rating: 5,
          relative_time_description: 'рік тому',
          text: 'Однозначно рекомендую!!!\n17.05.2021 звернувся з гострим болем. Вільних місць не було, проте персонал із розумінням поставився до ситуації. Швидка реєстрація, експресс-діагностика та 5 хв. роботи лікаря Наталенко Наталії Олексіївни - і я щасливий володар 2х металічних осколків, дістаних із лівого ока. Безмежно вдячний всім за те, що не лишились осторонь! Побільше хороших людей на Вашому професійному та життєвому шляху!!!\nP. S. Мужики, бережіть очі, одягайте захисні окуляри під час роботи з "болгарками" чи іншим обертальним інструментом. Бо всі герої, поки щось не станеться..',
          time: 1621343010,
          translated: false,
        },
        {
          author_name: 'Людмила Кужель',
          author_url: 'https://www.google.com/maps/contrib/103900017231598997392/reviews',
          language: 'uk',
          original_language: 'uk',
          profile_photo_url:
            'https://lh3.googleusercontent.com/a/AEdFTp6SrSGnetCbBv0O68hOYu1QBHM1VzJ-RkcX-nV8=s128-c0x00000000-cc-rp-mo',
          rating: 5,
          relative_time_description: 'рік тому',
          text: 'Дякуємо за кваліфіковану допомогу, гарне доброзичливе відношення до пацієнтів. Працівники дуже привітні, уважні до всіх, не залежно від віку і статусу.',
          time: 1629466408,
          translated: false,
        },
        {
          author_name: 'Юлія Передерій',
          author_url: 'https://www.google.com/maps/contrib/114558767775642667027/reviews',
          language: 'uk',
          original_language: 'uk',
          profile_photo_url:
            'https://lh3.googleusercontent.com/a/AEdFTp43pENTx9JBJjOMCWiwk-6lxcwycQZYraCG1oVF=s128-c0x00000000-cc-rp-mo',
          rating: 5,
          relative_time_description: 'рік тому',
          text: 'Щиро дякую персоналу клініки за ввічливість, а головному лікарю Шаткуну Андрію за фахову діагностику та консультування. Однозначно рекомендую клініку "Світогляд".',
          time: 1634303893,
          translated: false,
        },
        {
          author_name: 'Сергей Ялынник',
          author_url: 'https://www.google.com/maps/contrib/107471211856744794515/reviews',
          language: 'uk',
          original_language: 'uk',
          profile_photo_url:
            'https://lh3.googleusercontent.com/a/AEdFTp4eVIC3UxwkFXHByrjNdqi8jon3RBBDS6QoyCx_=s128-c0x00000000-cc-rp-mo',
          rating: 5,
          relative_time_description: 'рік тому',
          text: 'Заміна кришталиків на обох очах з проміжком часу 7 днів. Результат 100% зору.\nСвітогляд:\n1. Професіоналізм персоналу, насамперед хірурга Шаткун А.А.. лікаря-офтальмолога Наталенко Н.О. і всього без винятку персоналу клініки.\n2. Командна, колективна робота. Всі працюють по їм тільки відомому алгоритму, все відлагоджено. Особливо це помітно у вівторок в операціний день.\n3. Відношення і турбота про пацієнтів.\n4. Хоча детально в цьому не розуміюсь, але впевнено можу відмітити про наявність в клініці сучасного, новітнього обладнання.\nВраховуючи, що це відгук, а не реклама. звісно кожен вирішує для себе.  В інших клініках не був, не можу порівнювати, але як для мене вдячний Світогляду,  ні разу не пожалкував що звернувся в дану клініку.\nДякую, бажаю тримати рівень який відповідає "Центру сучасної офтальмології". З повагою, Сергій Ялинник.',
          time: 1613978491,
          translated: false,
        },
      ],
      types: ['doctor', 'health', 'point_of_interest', 'establishment'],
      url: 'https://maps.google.com/?cid=11512489364098677079',
      user_ratings_total: 27,
      utc_offset: 120,
      vicinity: 'вулиця Геннадія Біліченко, 29Б, Щербані',
      website: 'https://svitoglyad.com/',
    },
    status: 'OK',
  };
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
