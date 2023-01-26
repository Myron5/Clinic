// ------------------------------- Languages -------------------------------
const elements = [
  [
    document.querySelector('.adress__license'),
    'Ліцензія № 2588 від 20.12.2019 року',
    'Лицензия № 2588 от 20.12.2019 года',
  ],
  [
    document.querySelector('.mob-adress__license'),
    'Ліцензія № 2588 від 20.12.2019 року',
    'Лицензия № 2588 от 20.12.2019 года',
  ],
  [
    document.querySelector('.adress__street'),
    'м. Полтава, Геннадія Біліченка, 29Б',
    'г. Полтава, Геннадия Беличенко, 29Б',
  ],
  [
    document.querySelector('.mob-adress__street'),
    'м. Полтава, Геннадія Біліченка, 29Б',
    'г. Полтава, Геннадия Беличенко, 29Б',
  ],
  [document.querySelectorAll('.nav__link')[0], 'Послуги', 'Услуги'],
  [document.querySelectorAll('.nav__link')[1], 'Лікарі', 'Врачи'],
  [document.querySelectorAll('.nav__link')[2], 'Ціни', 'Цены'],
  [document.querySelectorAll('.nav__link')[3], 'Акції', 'Акции'],
  [document.querySelectorAll('.nav__link')[4], 'Відгуки', 'Отзывы'],
  [document.querySelectorAll('.nav__link')[5], 'Контакти', 'Контакты'],
  [document.querySelectorAll('.nav-services__link')[0], 'Лікування катаракти', 'Лечение катаракты'],
  [
    document.querySelectorAll('.nav-services__link')[1],
    'Лазерна корекція зору',
    'Лазерная коррекция зрения',
  ],
  [
    document.querySelectorAll('.nav-services__link')[2],
    'Хірургія сітківки та склоподібного тіла',
    'Хирургия сетчатки и стекловидного тела',
  ],
  [
    document.querySelectorAll('.nav-services__link')[3],
    'Дитяча офтальмологія',
    'Детская офтальмология',
  ],
  [
    document.querySelectorAll('.nav-services__link')[4],
    'Лазерні методи лікування',
    'Лазерные методы лечения',
  ],
  [
    document.querySelectorAll('.nav-services__link')[5],
    'Введення препаратів в скловидне тіло',
    'Введение препаратов в стекловидное тело',
  ],
  [document.querySelectorAll('.nav-services__link')[6], 'Лікування глаукоми', 'Лечение глаукомы'],
  [
    document.querySelectorAll('.nav-services__link')[7],
    'Окуляри та контактні лінзи',
    'Очки и контактные линзы',
  ],
  [
    document.querySelectorAll('.nav-doctors__link')[0],
    'Шаткун Андрій Анатолійович',
    'Шаткун Андрей Анатольевич',
  ],
  [
    document.querySelectorAll('.nav-doctors__link')[1],
    'Наконечний Денис Олександрович',
    'Наконечный Денис Александрович',
  ],
  [
    document.querySelectorAll('.nav-doctors__link')[2],
    'Клочко Марина Миколаївна',
    'Клочко Марина Николаевна',
  ],
  [
    document.querySelectorAll('.nav-doctors__link')[3],
    'Симітко Тетяна Сергіївна',
    'Симитко Татьяна Сергеевна',
  ],
  [
    document.querySelectorAll('.nav-doctors__link')[4],
    'Миронова Ірина Сергіївна',
    'Миронова Ирина Сергеевна',
  ],

  [document.querySelectorAll('.mob-nav__link')[0], 'Послуги', 'Услуги'],
  [document.querySelectorAll('.mob-nav__link')[1], 'Лікарі', 'Врачи'],
  [document.querySelectorAll('.mob-nav__link')[2], 'Ціни', 'Цены'],
  [document.querySelectorAll('.mob-nav__link')[3], 'Акції', 'Акции'],
  [document.querySelectorAll('.mob-nav__link')[4], 'Відгуки', 'Отзывы'],
  [document.querySelectorAll('.mob-nav__link')[5], 'Контакти', 'Контакты'],

  [document.querySelectorAll('.mob-services__link')[0], 'Лікування катаракти', 'Лечение катаракты'],
  [
    document.querySelectorAll('.mob-services__link')[1],
    'Лазерна корекція зору',
    'Лазерная коррекция зрения',
  ],
  [
    document.querySelectorAll('.mob-services__link')[2],
    'Хірургія сітківки та склоподібного тіла',
    'Хирургия сетчатки и стекловидного тела',
  ],
  [
    document.querySelectorAll('.mob-services__link')[3],
    'Дитяча офтальмологія',
    'Детская офтальмология',
  ],
  [
    document.querySelectorAll('.mob-services__link')[4],
    'Лазерні методи лікування',
    'Лазерные методы лечения',
  ],
  [
    document.querySelectorAll('.mob-services__link')[5],
    'Введення препаратів в скловидне тіло',
    'Введение препаратов в стекловидное тело',
  ],
  [document.querySelectorAll('.mob-services__link')[6], 'Лікування глаукоми', 'Лечение глаукомы'],
  [
    document.querySelectorAll('.mob-services__link')[7],
    'Окуляри та контактні лінзи',
    'Очки и контактные линзы',
  ],
  [
    document.querySelectorAll('.mob-doctors__link')[0],
    'Шаткун Андрій Анатолійович',
    'Шаткун Андрей Анатольевич',
  ],
  [
    document.querySelectorAll('.mob-doctors__link')[1],
    'Наконечний Денис Олександрович',
    'Наконечный Денис Александрович',
  ],
  [
    document.querySelectorAll('.mob-doctors__link')[2],
    'Клочко Марина Миколаївна',
    'Клочко Марина Николаевна',
  ],
  [
    document.querySelectorAll('.mob-doctors__link')[3],
    'Симітко Тетяна Сергіївна',
    'Симитко Татьяна Сергеевна',
  ],
  [
    document.querySelectorAll('.mob-doctors__link')[4],
    'Миронова Ірина Сергіївна',
    'Миронова Ирина Сергеевна',
  ],
  [document.querySelectorAll('.hero-sec__title span')[0], 'Центр сучасної', 'Центр современной'],
  [document.querySelector('.hero-sec__title--blue'), 'офтальмології', 'офтальмологии'],
  [
    document.querySelector('.hero-sec__txt'),
    'Сучасні методи лікування, які застосовуються в центрі «Світогляд», дозволяють позбутися захворювання швидко і безболісно, та повернути повноцінний зір',
    'Современные методы лечения, применяемые в центре «Мировоззрение», позволяют избавиться от заболевания быстро и безболезненно, и вернуть полноценное зрение',
  ],
  [
    document.querySelectorAll('.hero-sec__link')[0],
    'Онлайн запис на прийом',
    'Онлайн запись на прием',
  ],
  [document.querySelectorAll('.hero-sec__number span')[0], '22 роки', '22 года'],
  [document.querySelectorAll('.hero-sec__num-caption')[0], 'успішної роботи', 'успешной работы'],
  [document.querySelectorAll('.hero-sec__num-caption')[1], 'успішної роботи', 'успешной работы'],
  [document.querySelectorAll('.hero-sec__num-caption')[2], 'операцій на рік', 'операций в год'],
  [
    document.querySelectorAll('.hero-sec__num-caption')[2],
    'здорових поглядів',
    'здоровых взглядов',
  ],
  [document.querySelector('.abbility__title-span'), 'Ми вміємо', 'Мы умеем'],
  [
    document.querySelectorAll('.abbility__name')[0],
    'Проводить лазерную коррекцию зрения',
    'Проводить лазерную коррекцию зрения',
  ],
  [
    document.querySelectorAll('.abbility__name')[1],
    'Проводити лазерну корекцію зору',
    'Проводить лазерную коррекцию зрения',
  ],
  [document.querySelectorAll('.abbility__name')[2], 'Рятувати сітківку', 'Спасать сетчатку'],
  [
    document.querySelectorAll('.abbility__name')[3],
    'Знаходити спільну мову з дітьми',
    'Находить общий язык с детьми',
  ],
  [
    document.querySelectorAll('.abbility__name')[4],
    'Підбирати окуляри та контактні лінзи',
    'Подбирать очки и контактные линзы',
  ],
  [
    document.querySelectorAll('.abbility__name')[5],
    'Вирішити будь-які проблеми з зором',
    'Решить любые проблемы со зрением',
  ],
  [
    document.querySelectorAll('.abbility__text')[0],
    'Катаракта може розвивається з віком, а також від травми ока, попередньої операції на очах, при дегенеративній міопії...',
    'Катаракта может развиваться с возрастом, а также от травмы глаза, предварительной операции на глазах, при дегенеративной миопии.',
  ],
  [
    document.querySelectorAll('.abbility__text')[1],
    'Захворювання сітківки в першу чергу лікується за допомогою термолазера',
    'Заболевание сетчатки в первую очередь лечится с помощью термолазера.',
  ],
  [
    document.querySelectorAll('.abbility__text')[2],
    'Гостра патологія, яка без негайного оперативного лікування може...',
    'Острая патология, которая без немедленного оперативного лечения может...',
  ],
  [
    document.querySelectorAll('.abbility__text')[3],
    'В центрі сучасної офтальмології "Світогляд" проводить консультації...',
    'В центре современной офтальмологии "Мировоззрение" проводит консультации...',
  ],
  [
    document.querySelectorAll('.abbility__text')[3],
    'В нормі заломлююча система ока (рогівка та кришталик) фокусує...',
    'В норме преломляющая система глаза (роговица и хрусталик) фокусирует...',
  ],
  [
    document.querySelectorAll('.abbility__text')[4],
    'Ознайомтесь з іншими послугами, що пропонує клініка',
    'Ознакомьтесь с другими услугами, которые предлагает клиника',
  ],
  [document.querySelectorAll('.abbility__link--text')[0], 'Детальніше', 'Подробнее'],
  [document.querySelectorAll('.abbility__link--text')[1], 'Детальніше', 'Подробнее'],
  [document.querySelectorAll('.abbility__link--text')[2], 'Детальніше', 'Подробнее'],
  [document.querySelectorAll('.abbility__link--text')[3], 'Детальніше', 'Подробнее'],
  [document.querySelectorAll('.abbility__link--text')[4], 'Детальніше', 'Подробнее'],
  [
    document.querySelectorAll('.abbility__link--text')[5],
    'Переглянути всі послуги',
    'Просмотреть все услуги',
  ],
  [document.querySelector('.about__title-span'), 'Про нас', 'О нас'],
  [
    document.querySelector('.about__video-caption'),
    'Це займе лише 36 секунд',
    'Это займет всего 36 секунд',
  ],
  [document.querySelector('.about__link'), 'Переглянути відео', 'Посмотреть видео'],
  [
    document.querySelector('.about__text'),
    "«Світогляд» - це найсучасніший центр офтальмології, який прагне досягти своїх зобов'язань надавати комплексні медичні послуги для своїх клієнтів",
    '«Мировоззрение» – это самый современный центр офтальмологии, стремящийся достичь своих обязательств предоставлять комплексные медицинские услуги для своих клиентов',
  ],

  [document.querySelectorAll('.discount__title')[0], 'Для цивільних', 'Для гражданских'],
  [
    document.querySelectorAll('.discount__title')[1],
    'Для військових службовців',
    'Для военнослужащих',
  ],
  [document.querySelectorAll('.dicount__unit--span')[0], 'Діагностика', 'Диагностика'],
  [document.querySelectorAll('.dicount__unit--span')[1], 'Операція', 'Операция'],
  [
    document.querySelectorAll('.dicount__unit--span')[2],
    'Знижка на всі види операцій',
    'Скидка на все виды операций',
  ],
  [document.querySelectorAll('.dicount__unit--span')[3], 'Діагностика', 'Диагностика'],
  [document.querySelectorAll('.discount__num')[3], 'Безкоштовно', 'Бесплатно'],
  [
    document.querySelector('.discount__capture'),
    'з травмами ока отриманими внаслідок бойових дій',
    'с травмами глаза полученными в результате боевых действий',
  ],
  [
    document.querySelector('.reviews__title'),
    'Відгуки наших пацієнтів після лікування у нас',
    'Обратная связь наших пациентов после лечения в нашем',
  ],
  [
    document.querySelector('.reviews__text'),
    'Ваші здорові очі, сповнені радості — щастя для нас. Ми щиро дбаємо про пацієнтів, тому поєднуємо у своїй роботі сучасні технології та високий рівень обслуговування',
    'Ваши здоровые глаза, полные радости – счастье для нас. Мы искренне заботимся о пациентах, поэтому объединяем в своей работе современные технологии и высокий уровень обслуживания',
  ],
  [document.querySelector('.reviews__string--span'), 'Середня оцінка', 'Средняя оценка'],
  [document.querySelector('.reviews__link'), 'Залишити відгук', 'Оставьте отзыв'],
  [document.querySelector('.faq__title'), 'Найчастіші запитання', 'Часто задаваемые вопросы'],
  [
    document.querySelectorAll('.faq__sub-title')[0],
    'Скільки за часом займає діагностика?',
    'Сколько времени занимает диагностика?',
  ],
  [
    document.querySelectorAll('.faq__sub-title')[1],
    'Чи потрібно оперувати катаракту?',
    'Нужно ли оперировать катаракту?',
  ],
  [
    document.querySelectorAll('.faq__sub-title')[2],
    'Які обмеження при глаукомі?',
    'Какие ограничения при глаукоме?',
  ],
  [
    document.querySelectorAll('.faq__answear')[0],
    'Катаракту не просто нужно, а необходимо оперировать! Ведь катаракта существенно снижает качество жизни. Также, чем больше зрелая ката, тем больше сложностей она вызывает: длительные процедуры и послеоперационный период, больше риск осложнения. Также, существуют варианты развития катаракты, которые ведут к необратимой потере зрения',
    'Катаракту не просто нужно, а необходимо оперировать! Ведь катаракта существенно снижает качество жизни. Также, чем больше зрелая ката, тем больше сложностей она вызывает: длительные процедуры и послеоперационный период, больше риск осложнения. Также, существуют варианты развития катаракты, которые ведут к необратимой потере зрения',
  ],
  [
    document.querySelectorAll('.faq__answear')[1],
    'Катаракту не просто нужно, а необходимо оперировать! Ведь катаракта существенно снижает качество жизни. Также, чем больше зрелая ката, тем больше сложностей она вызывает: длительные процедуры и послеоперационный период, больше риск осложнения. Также, существуют варианты развития катаракты, которые ведут к необратимой потере зрения',
    'Катаракту не просто нужно, а необходимо оперировать! Ведь катаракта существенно снижает качество жизни. Также, чем больше зрелая ката, тем больше сложностей она вызывает: длительные процедуры и послеоперационный период, больше риск осложнения. Также, существуют варианты развития катаракты, которые ведут к необратимой потере зрения',
  ],
  [
    document.querySelectorAll('.faq__answear')[2],
    'Катаракту не просто нужно, а необходимо оперировать! Ведь катаракта существенно снижает качество жизни. Также, чем больше зрелая ката, тем больше сложностей она вызывает: длительные процедуры и послеоперационный период, больше риск осложнения. Также, существуют варианты развития катаракты, которые ведут к необратимой потере зрения',
    'Катаракту не просто нужно, а необходимо оперировать! Ведь катаракта существенно снижает качество жизни. Также, чем больше зрелая ката, тем больше сложностей она вызывает: длительные процедуры и послеоперационный период, больше риск осложнения. Также, существуют варианты развития катаракты, которые ведут к необратимой потере зрения',
  ],
  [document.querySelector('.news__title'), 'Блог / Новини', 'Блог / Новости'],
  [
    document.querySelector('.form__title'),
    'Запишіться на консультацію',
    'Запишитесь на консультацию',
  ],
  [
    document.querySelector('.form__title'),
    'Запишіться на консультацію',
    'Запишитесь на консультацию',
  ],
  [document.querySelector('.form__txt-1-span-1'), 'Та отримайте', 'И получите'],
  [document.querySelector('.form__txt--span'), '10% знижку', '10% скидку'],
  [document.querySelector('.form__txt-1-span-2'), 'при записі онлайн', 'при записи онлайн'],
  [
    document.querySelector('.form__txt-2-span-1'),
    'Або запишіться по телефону',
    'Или запишитесь по телефону',
  ],
  [document.querySelectorAll('.form__input')[0], 'Ваше ім’я', 'Ваше имя'],
  [document.querySelectorAll('.form__input')[1], 'Номер телефона', 'Номер телефона'],
  [document.querySelector('.form__sm-btn-span-2'), 'Додати коментар', 'Добавить комментарий'],
];

(() => {
  const button = {
    ua: document.querySelector('.nav__btn--ua'),
    ru: document.querySelector('.nav__btn--ru'),
    mob_ua: document.querySelector('.mob-nav__btn--ua'),
    mob_ru: document.querySelector('.mob-nav__btn--ru'),
  };

  button.ua.addEventListener('click', () =>
    toggleLanguage('nav__btn--active', 1, button.ua, button.ru)
  );
  button.ru.addEventListener('click', () =>
    toggleLanguage('nav__btn--active', 2, button.ua, button.ru)
  );
  button.mob_ua.addEventListener('click', () =>
    toggleLanguage('mob-menu__lang-btn--active', 1, button.mob_ua, button.mob_ru)
  );
  button.mob_ru.addEventListener('click', () =>
    toggleLanguage('mob-menu__lang-btn--active', 2, button.mob_ua, button.mob_ru)
  );

  function toggleLanguage(class_name, lang, ...btns) {
    language(lang);
    btns.forEach(btn => {
      btn.toggleAttribute('disabled');
      btn.classList.toggle(class_name);
    });
    toggleLogo();
    toggleDiscountSvg();
  }

  function toggleLogo() {
    const logo = document.querySelector('.header-logo__icon use');
    if (logo.getAttribute('href') == './assets/sprite-hed.svg#logo')
      logo.setAttribute('href', './assets/sprite-hed.svg#logo-ru');
    else logo.setAttribute('href', './assets/sprite-hed.svg#logo');
  }

  function toggleDiscountSvg() {
    const svg = document.querySelector('.discount');
    svg.classList.toggle('discount-ru');
  }

  function language(lang) {
    for (const element of elements) {
      const content = element[0];
      content.textContent = element[lang];
    }
  }
})();
