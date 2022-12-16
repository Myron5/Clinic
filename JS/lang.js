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
  [document.querySelectorAll('.hero-sec__num-caption')[0], '22 роки', '22 года'],
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
  }

  function toggleLogo() {
    const logo = document.querySelector('.header-logo__icon use');
    if (logo.getAttribute('href') == './images/header/sprite.svg#logo')
      logo.setAttribute('href', './images/header/sprite.svg#logo-ru');
    else logo.setAttribute('href', './images/header/sprite.svg#logo');
  }

  function language(lang) {
    for (const element of elements) {
      const content = element[0];
      content.textContent = element[lang];
    }
  }
})();
