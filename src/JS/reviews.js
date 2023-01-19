import axios from 'axios';
import $ from 'jquery';
import 'slick-carousel';

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
// chechSlidesCount('.reviews__slider');

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
  let lang;
  if (button.ua.hasAttribute('disabled') && button.mob_ua.hasAttribute('disabled')) lang = 'uk';
  else lang = 'ru';

  let data = await getCurrency(`./server.php?currency=now&lang=${lang}`);

  data = {
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
          long_name: 'Shevchenkivskyi District',
          short_name: 'Shevchenkivskyi District',
          types: ['sublocality_level_1', 'sublocality', 'political'],
        },
        {
          long_name: 'Shcherbani',
          short_name: 'Shcherbani',
          types: ['locality', 'political'],
        },
        {
          long_name: "Poltavs'ka city council",
          short_name: "Poltavs'ka city council",
          types: ['administrative_area_level_3', 'political'],
        },
        {
          long_name: "Poltavs'ka oblast",
          short_name: "Poltavs'ka oblast",
          types: ['administrative_area_level_1', 'political'],
        },
        {
          long_name: 'Ukraine',
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
        '\u003cspan class="street-address"\u003eвулиця Геннадія Біліченко, 29Б\u003c/span\u003e, \u003cspan class="locality"\u003eShcherbani\u003c/span\u003e, \u003cspan class="region"\u003ePoltavs&#39;ka oblast\u003c/span\u003e, \u003cspan class="country-name"\u003eUkraine\u003c/span\u003e, \u003cspan class="postal-code"\u003e36000\u003c/span\u003e',
      business_status: 'OPERATIONAL',
      current_opening_hours: {
        open_now: false,
        periods: [
          {
            close: {
              date: '2023-01-16',
              day: 1,
              time: '1800',
            },
            open: {
              date: '2023-01-16',
              day: 1,
              time: '0900',
            },
          },
          {
            close: {
              date: '2023-01-17',
              day: 2,
              time: '1800',
            },
            open: {
              date: '2023-01-17',
              day: 2,
              time: '0900',
            },
          },
          {
            close: {
              date: '2023-01-18',
              day: 3,
              time: '1800',
            },
            open: {
              date: '2023-01-18',
              day: 3,
              time: '0900',
            },
          },
          {
            close: {
              date: '2023-01-19',
              day: 4,
              time: '1800',
            },
            open: {
              date: '2023-01-19',
              day: 4,
              time: '0900',
            },
          },
          {
            close: {
              date: '2023-01-20',
              day: 5,
              time: '1800',
            },
            open: {
              date: '2023-01-20',
              day: 5,
              time: '0900',
            },
          },
          {
            close: {
              date: '2023-01-21',
              day: 6,
              time: '1600',
            },
            open: {
              date: '2023-01-21',
              day: 6,
              time: '0900',
            },
          },
        ],
        weekday_text: [
          'Monday: 9:00 AM – 6:00 PM',
          'Tuesday: 9:00 AM – 6:00 PM',
          'Wednesday: 9:00 AM – 6:00 PM',
          'Thursday: 9:00 AM – 6:00 PM',
          'Friday: 9:00 AM – 6:00 PM',
          'Saturday: 9:00 AM – 4:00 PM',
          'Sunday: Closed',
        ],
      },
      formatted_address:
        "вулиця Геннадія Біліченко, 29Б, Shcherbani, Poltavs'ka oblast, Ukraine, 36000",
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
        open_now: false,
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
          'Monday: 9:00 AM – 6:00 PM',
          'Tuesday: 9:00 AM – 6:00 PM',
          'Wednesday: 9:00 AM – 6:00 PM',
          'Thursday: 9:00 AM – 6:00 PM',
          'Friday: 9:00 AM – 6:00 PM',
          'Saturday: 9:00 AM – 4:00 PM',
          'Sunday: Closed',
        ],
      },
      photos: [
        {
          height: 466,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'ARywPALQbShjk-Adh285Z28SzR5b7AXnNBCEp_gnQFIuRlqz2u2jw_hhJL3GrP-9FnKboxJy0F9QCceAnP0tH83bvtrb0Q06Et_rbJ5idenicOeyP_suKpJ6_hj_GjzbvGGgDQz8Q03uSiQkphuEBk5CsKMhhnRXEPdnW0fmHL4MQsJGhFkv',
          width: 828,
        },
        {
          height: 503,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'ARywPAIVGxAZEEoV6p4eWU1hkwDkuUvKpTWmcvE3m0AG9JlIw3kuS8G2gU_pF_LGeqQJlRedVOWGpUYcI-UQQVWksGMamX39ENf8MJamD438zzBYEzp5Q29o4KWE2Fj1kZyQ2we2A3_6iSsASovqCL596nPV-YPYaCw-BYgjRi4wOZq5DmmR',
          width: 600,
        },
        {
          height: 526,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'ARywPAJWAXOa8aPXbxSNQJyE4vH01Efx0lukTQs-1-u7nsaIuG6SglErtyOZ8Tpzyiq5h5aI9BwbrMKVa-QYG1E7i9i8lDCaSSVbrt2BPz1DW2qG_CmWhSpHzsEXXyXWSxaqThWxqB1zWgfQv2rDxiwbJeFm3fvqC2dBHvEmakzNbsq202tp',
          width: 526,
        },
        {
          height: 526,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'ARywPAKY4ePjzZeALepM3_oJysoAEw3QbfewEWwcEgP8haQQbhGwTh_A2-0tp7Ph77y69mr2Qx4laRA5mXcdReewfbkcYLV3o0UYfH2a0aLfPm033Rp_vDrssOWmE5Zd-uOGSIt9U5rFkhV5deXx9rY5l-_lK-QcTnVzVTQJi23hSe3_IshV',
          width: 526,
        },
        {
          height: 526,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'ARywPAK5x3pehf3CiFPXCNyllL45q3WMPe3S2pzm_S8E2IuJPhNaLYC0CXYf3ezaeYEkon4lGGRvrCesAL-Ot190d9BNldNwAjl40PxbYXPeRe-2zhxveynKMPg8dj179oEs5d9cmkEDqzVZtD46EA2J7alAkpEcWvage0MEhGCU-qd-g8jY',
          width: 526,
        },
        {
          height: 533,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'ARywPAI61ZlbVtTZoqOcGcOb0yV6GWXquNQoQUXgfbb5n58hKQwolAZovbmW4vu9HC4dqWBfl-B72tbT-tjt-hS-XZn5rFU-SMI7O-Q7FNVg4nwgIynrsspTm4rfNDjXxueHFTwTFp5l6fe5tYEON35UfQjO8WGOtjOZ-abi9CYqrAKGYDY8',
          width: 526,
        },
        {
          height: 640,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'ARywPAJh-etSOY2rk8qPD8WHCgZC8gyyhM3YOx9brNC6Kf-IQibeV4186q3QnmPz6WqVRT70VUYNDxT3UW7Lb9Ak18MY5L_1SSczTvsx9hiJ3wOkjEbSfRoXMFdaMbLtvaBidP9c-6hw_kWhaNd-p3JvAEyZR8dPGec0t-OtF_nqkkRJuwbb',
          width: 512,
        },
        {
          height: 568,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'ARywPALney1f3MyB7uwX5uN33aN_Ww_AFKNFvXDbhTIKh_BhQQ8TDkOx2thzFK-GA_InfE0eCYSE0UEB6N__bHpBUFMsL_L1ZZ5g4Mv2tWPiFpo_0ftnOBtH4LbwvZsvaEDhgfEawpIkh73y351NR7nrJJSmwIV5VjNxyWag5ZHVGyscQuyq',
          width: 853,
        },
        {
          height: 526,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'ARywPAKYGoDtbwJ8QrwhzbDyQ-sFYNrPg5zUj5g8EftzJveLoO-7Y94n0mTPE-grXeZnjw4NCSmbspA9LpT_S9AODyOUpicT0h_C8DCj9PpugFtSCSXb2xzfJyzvoh1NhDW1Lt87_xiYaYYZkyRYo4P68WbF5l9zT-3xmQ0bnjopogGRe6p8',
          width: 526,
        },
        {
          height: 1440,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/116035174805353857784"\u003e«СВІТОГЛЯД» центр сучасної офтальмології (Офтальмолог Полтава)\u003c/a\u003e',
          ],
          photo_reference:
            'ARywPAJE2teBuGSEVb2ujd-14W_qGQOtnlFa2FH9063i-4d46P702GiD0J7LwaMjBNf_BSIc48H-74FSZqhn-u-xvJ3iSqRO0UHubqZEo3-5AsnpZwmTh3dd4pDb3yr5bMZStr6Wf2Wg3tYOIo5n1HhQgDepRgGgrNOtN_bWWj9NkgzKjnyg',
          width: 1440,
        },
      ],
      place_id: 'ChIJEQNYIIIv2EARV3mQsxSUxJ8',
      plus_code: {
        compound_code: 'HG39+5J Shcherbani, Poltava Oblast, Ukraine',
        global_code: '8GXPHG39+5J',
      },
      rating: 4.7,
      reference: 'ChIJEQNYIIIv2EARV3mQsxSUxJ8',
      reviews: [
        {
          author_name: 'Артем Коломийчук',
          author_url: 'https://www.google.com/maps/contrib/109471132473933140176/reviews',
          language: 'en-US',
          original_language: 'ru',
          profile_photo_url:
            'https://lh3.googleusercontent.com/a-/AD5-WCmN1KHVuz8w_tkNz5hp_b8t6VbkOK7uKoH7wKQyqw=s128-c0x00000000-cc-rp-mo',
          rating: 5,
          relative_time_description: '10 months ago',
          text: 'I did vision correction with Denis Alexandrovich Nakonechny, many thanks to him, a true professional in his field! The result is the most pleasing, I have never seen it so clearly as after the correction) in general, I am completely delighted) They did everything very professionally and clearly! It was very pleasant to be in the clinic, the service is at the highest level! The operation was painless and absolutely not scary. Therefore, if someone cannot decide on a laser correction in any way, then go ahead and do not be afraid of anything!',
          time: 1645283303,
          translated: true,
        },
        {
          author_name: 'HAPPY FAMILY',
          author_url: 'https://www.google.com/maps/contrib/104920483441560724448/reviews',
          language: 'en-US',
          original_language: 'ru',
          profile_photo_url:
            'https://lh3.googleusercontent.com/a-/AD5-WCkYDVAYN_XLseImUP-ixEHeoDP2vi2f1YgUUTE2=s128-c0x00000000-cc-rp-mo',
          rating: 5,
          relative_time_description: 'a year ago',
          text: 'I picked up glasses here for the correction of farsightedness on 12/28/2021. Many thanks to Mironova Irina Sergeevna for her attentiveness and professionalism! The glasses were made within 10 days (as promised), readiness was reported by phone. The center itself is very clean, the administrators are courteous. The only thing was that they gave glasses in a simple bag, which is very inconvenient, because they can be damaged immediately in a pocket or bag, and the weather in the form of a furious snowstorm clearly did not allow them to be "carried" on oneself)) The administrator said that they usually give them without a case, but now it will be fixed. And after 2 minutes they gave me a beautiful case for free)) For this special thanks to the administrator! Recommend!',
          time: 1640769997,
          translated: true,
        },
        {
          author_name: 'Karina Mirzoyan',
          author_url: 'https://www.google.com/maps/contrib/115344960575109179552/reviews',
          language: 'en-US',
          original_language: 'ru',
          profile_photo_url:
            'https://lh3.googleusercontent.com/a-/AD5-WClpURJAyi_pPENAuWY63TSQNFdX50cJ_nrVw-Ah=s128-c0x00000000-cc-rp-mo',
          rating: 2,
          relative_time_description: 'a year ago',
          text: "I don't know how the quality is. Accompanied a friend. But the staff is disgusting. They took me later than scheduled, sat for an hour and a half and no one checked whether the pupils were dilated. While waiting for them, a photographer came to do his job. He was also told to wait an hour! He explained that it was not serious to set up a shoot at 6 and ask him to wait an hour. To which the girl from the reception replied, “let’s not decide this with you, otherwise we can quarrel a lot, sit and wait.” The girls did not wear masks. Very strange, as for not a cheap clinic. Nearby, the woman was also indignant that she was already waiting from 15:30 to 18:00 and no one checked her pupils.",
          time: 1627312441,
          translated: true,
        },
        {
          author_name: 'Inna Tolmachova',
          author_url: 'https://www.google.com/maps/contrib/102577323141859910388/reviews',
          language: 'en-US',
          original_language: 'ru',
          profile_photo_url:
            'https://lh3.googleusercontent.com/a-/AD5-WCkq8AAjpsKOVQY-nXEVa6yTKOX7K08XsMuXxe95=s128-c0x00000000-cc-rp-mo',
          rating: 5,
          relative_time_description: 'a year ago',
          text: 'I express my gratitude to Shatkun Andrey Anatolyevich. He treated the problem with understanding during the initial examination and appointment of the operation. Professionalism in the direct execution of the operation and high quality workmanship. I especially thank you for the attention and quality after the surgical consultations, which influenced the speedy recovery. Thank you very much for your professionalism.',
          time: 1630740123,
          translated: true,
        },
        {
          author_name: 'Наташа Литвин',
          author_url: 'https://www.google.com/maps/contrib/114494428806805612273/reviews',
          language: 'en-US',
          original_language: 'ru',
          profile_photo_url:
            'https://lh3.googleusercontent.com/a/AEdFTp4-46iKTKYkcqsbA7bZ8nI46m-0SoR4nvJfxIZZ=s128-c0x00000000-cc-rp-mo',
          rating: 5,
          relative_time_description: '11 months ago',
          text: 'Service at the highest level, service, staff at height, new equipment, high-quality diagnostics, professionals work in the clinic, if you have vision problems, then only contact here, a high range of services, many thanks to the laser surgeon Nakonechny Denis Alexandrovich, who performs laser surgery corrections!!',
          time: 1644764159,
          translated: true,
        },
      ],
      types: ['doctor', 'health', 'point_of_interest', 'establishment'],
      url: 'https://maps.google.com/?cid=11512489364098677079',
      user_ratings_total: 27,
      utc_offset: 120,
      vicinity: 'вулиця Геннадія Біліченко, 29Б, Shcherbani',
      website: 'https://svitoglyad.com/',
    },
    status: 'OK',
  };

  const {
    result: { rating, reviews },
  } = data;

  function setAverageRating() {
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

  setAverageRating();
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
