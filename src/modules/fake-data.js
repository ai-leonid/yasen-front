/* eslint-disable max-len */
import { faker } from '@faker-js/faker/locale/ru';
import TomskCoat from '../assets/images/tomsk-coat.png';
import KemerovoCoat from '../assets/images/kemerovo-coat.png';
import KrasnoyarskCoat from '../assets/images/krasnoyarsk-coat.png';
import TomskMapForest from '../assets/images/tomsk-map.png';
import KemerovoMapForest from '../assets/images/kemerovo-map.jpg';
import KrasnoyarskMapForest from '../assets/images/krasnoyarsk-map.png';


export const statisticInfoList = [
  {
    info: 'Площадь земель лесного фонда',
    value: '28749,7680 тыс. га',
    meta: '2020',
  },
  {
    info: 'Агротехнический уход за лесными культурами (ежегодный)',
    value: '5 649,94 га',
    meta: '2020',
  },
  {
    info: 'Всего выполнено мероприятий по лесовосстановлению (ежегодный)',
    value: '32 656,54 га',
    meta: '2020',
  },
  {
    info: 'Всего выполнено мероприятий по уходу за лесом (ежегодный)',
    value: '7 339,74 га',
    meta: '2020',
  },
  {
    info: 'Выполнено проходных рубок (ежегодный)',
    value: '953,45 га',
    meta: '2020',
  },
  {
    info: 'Выполнено рубок прореживания (ежегодный)',
    value: '3 192,63 га',
    meta: '2020',
  },
];

export const fireSituationList = [
  {
    info: 'Количество зарегистрированных за прошедшие сутки',
    value: '28749,7680 тыс. га',
    meta: '2020',
  },
  {
    info: 'Ликвидировано пожаров (за прошедшие сутки)',
    value: '5 649,94 га',
    meta: '2020',
  },
  {
    info: 'Количество действующих пожаров',
    value: '32 656,54 га',
    meta: '2020',
  },
  {
    info: 'Площадь действующих пожаров',
    value: '7 339,74 га',
    meta: '2020',
  },
  {
    info: 'Количество ликвидированых пожаров',
    value: '953,45 га',
    meta: '2020',
  },
  {
    info: 'Площадь ликвидированных пожаров',
    value: '3 192,63 га',
    meta: '2020',
  },
];

export const panelsRegionData = {
  tomskaya: {
    title: 'Томская область',
    image: TomskCoat,
    description: 'Томская область образована 13 августа 1944 года. Расположена в юго-восточной части Западной Сибири. Граничит с Тюменской, Новосибирской, Омской, Кемеровской областями, Ханты-Мансийским автономным округом и Красноярским краем. Площадь: 314,4 тыс. кв. километров. Входит в состав Сибирского федерального округа.',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Департамент №${faker.random.numeric(2)} лесного хозяйства Томской области`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.1 }),
        description: 'Всего (тысяч человек)'
      },
      {
        digit: `${faker.datatype.float({ min: 20, max: 90, precision: 0.1 })}%`,
        description: 'Проживает в городах'
      },
      {
        digit: `${faker.datatype.float({ min: 20, max: 50, precision: 0.1 })}%`,
        description: 'Проживает в сельской местности'
      },
      {
        digit: faker.datatype.number({ min: 20, max: 50 }),
        description: 'Средний возраст (лет)'
      },
      {
        digit: faker.datatype.number({ min: 20, max: 50 }),
        description: 'Национальностей и народностей'
      },

    ],
  },
  kemerovskaya: {
    title: 'Кемеровская область',
    image: KemerovoCoat,
    description: 'Кемеровская область расположена на юге Западной Сибири. Граничит с Томской и Новосибирской областями, с Алтайским краем и Республикой Алтай, Красноярским краем и Республикой Хакасия. Административная столица – город Кемерово. В 2019 году за регионом официально закреплено второе название - Кузбасс.',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Департамент №${faker.random.numeric(2)} лесного хозяйства Томской области`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.1 }),
        description: 'Всего (тысяч человек)'
      },
      {
        digit: `${faker.datatype.float({ min: 20, max: 90, precision: 0.1 })}%`,
        description: 'Проживает в городах'
      },
      {
        digit: `${faker.datatype.float({ min: 20, max: 50, precision: 0.1 })}%`,
        description: 'Проживает в сельской местности'
      },
      {
        digit: faker.datatype.number({ min: 20, max: 50 }),
        description: 'Средний возраст (лет)'
      },
      {
        digit: faker.datatype.number({ min: 20, max: 50 }),
        description: 'Национальностей и народностей'
      },

    ],
  },
  krasnoyarskii: {
    title: 'Красноярский край',
    image: KrasnoyarskCoat,
    description: 'Красноярский край — крупнейший регион Центральной Сибири. Хотя его административные границы охватывают огромную территорию от Саян до Северного Ледовитого океана, географически и культурно Красноярский край делится на три примерно равные части. Этот путеводитель посвящён южной, которая простирается до Енисейска и Ангары. Севернее расположена таёжная Эвенкия, а ещё севернее — суровый заполярный Таймыр.',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Департамент №${faker.random.numeric(2)} лесного хозяйства Томской области`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.1 }),
        description: 'Всего (тысяч человек)'
      },
      {
        digit: `${faker.datatype.float({ min: 20, max: 90, precision: 0.1 })}%`,
        description: 'Проживает в городах'
      },
      {
        digit: `${faker.datatype.float({ min: 20, max: 50, precision: 0.1 })}%`,
        description: 'Проживает в сельской местности'
      },
      {
        digit: faker.datatype.number({ min: 20, max: 50 }),
        description: 'Средний возраст (лет)'
      },
      {
        digit: faker.datatype.number({ min: 20, max: 50 }),
        description: 'Национальностей и народностей'
      },

    ],
  },
};

/* bar chart data */
const generateDataSource = () => {
  return {
    labels: ['1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2008', '2010', '2012', '2014', '2015', '2016', '2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'тыс. га',
      data: [
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 }),
        faker.datatype.number({ min: 400, max: 5000 })],
      backgroundColor: '#705AD3'
    }]
  };
};

export const panelsDistrictsTomskData = {
  alexandrovskoe: {
    title: 'Александровское',
    image: TomskMapForest,
    dataSource: generateDataSource(),
    description: 'Алекса́ндровское — село в Томском районе Томской области, Россия. Входит в состав Малиновского сельского поселения В селе Александровское климат холодно-умеренный. В селе выпадает значительное количество осадков в течение года, даже в сухие месяцы. По классификации климатов Кеппена в селе влажный континентальный климат (индекс Dfb). Среднегодовая температура в селе Александровское — 0,2 °C. Среднегодовая норма осадков — 556 мм. ',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  asinovskoe: {
    title: 'Асиновское',
    image: TomskMapForest,
    dataSource: generateDataSource(),
    description: 'Асиновское городско́е поселе́ние — муниципальное образование в Асиновском районе Томской области Российской Федерации. Административный центр — город Асино. Статус и границы городского поселения установлены Законом Томской области от 9 сентября 2004 года № 193-ОЗ «О наделении статусом муниципального района, поселения (городского, сельского) и установлении границ муниципальных образований на территории Асиновского района»[2] ',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  bakcharskoe: {
    title: 'Бакчарское',
    image: TomskMapForest,
    dataSource: generateDataSource(),
    description: 'Бакча́рский район — административно-территориальная единица (район) и муниципальное образование (муниципальный район) на юге Томской области России. Административный центр района — село Бакчар, расположено в 220 км от Томска, на берегу реки Галка (приток реки Бакчар). ',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  vasuganskoe: {
    title: 'Васюганское',
    image: TomskMapForest,
    dataSource: generateDataSource(),
    description: '28 апреля 1959 года Васюганский район был упразднён, а его территория передана в Каргасокский район[1][2]. ',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  verhneketskoe: {
    title: 'Верхнекетское',
    image: TomskMapForest,
    dataSource: generateDataSource(),
    description: 'Верхнекетское - административно-территориальная единица (район) и муниципальное образование (муниципальный район) на северо-востоке Томской области России, граничит с Красноярским краем.Административный центр района — рабочий посёлок Белый Яр.',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  zyranskoe: {
    title: 'Зырянское',
    image: TomskMapForest,
    dataSource: generateDataSource(),
    description: 'Зыря́нский район — административно-территориальная единица (район) и муниципальное образование (муниципальный район) в Томской области России ',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  kargasokskoe: {
    title: 'Каргасокское',
    image: TomskMapForest,
    dataSource: generateDataSource(),
    description: 'Каргасо́кский район — административно-территориальная единица (район) и муниципальное образование (муниципальный район) в Томской области России.',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  kedrovskoe: {
    title: 'Кедровское',
    image: TomskMapForest,
    dataSource: generateDataSource(),
    description: 'Томская область, Кедровый, 1-й микрорайон, 39 Рослесхоз рядом (5)',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  kozhevnikovskoe: {
    title: 'Кожевниковское',
    image: TomskMapForest,
    dataSource: generateDataSource(),
    description: 'Кожевниково — село в Томской области, административный центр Кожевниковского района и Кожевниковского сельского поселения. ',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  kolpashevskoe: {
    title: 'Колпашевское',
    image: TomskMapForest,
    dataSource: generateDataSource(),
    description: 'Колпа́шево — город (с 1938) в России, административный центр Колпашевского района и Колпашевского городского поселения Томской области. Город расположен на правом берегу Оби, в 270 км к северо-западу от Томска.',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
};

export const panelsDistrictsKemerovoData = {
  belovskoe: {
    title: 'Беловское',
    image: KemerovoMapForest,
    dataSource: generateDataSource(),
    description: 'Беловское — село в Томском районе Томской области, Россия. Входит в состав Малиновского сельского поселения В селе Александровское климат холодно-умеренный. В селе выпадает значительное количество осадков в течение года, даже в сухие месяцы. По классификации климатов Кеппена в селе влажный континентальный климат (индекс Dfb). Среднегодовая температура в селе Александровское — 0,2 °C. Среднегодовая норма осадков — 556 мм. ',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  guryevskoe: {
    title: 'Гурьевское',
    image: KemerovoMapForest,
    dataSource: generateDataSource(),
    description: 'Гурьевское городско́е поселе́ние — муниципальное образование в Асиновском районе Томской области Российской Федерации. Административный центр — город Асино. Статус и границы городского поселения установлены Законом Томской области от 9 сентября 2004 года № 193-ОЗ «О наделении статусом муниципального района, поселения (городского, сельского) и установлении границ муниципальных образований на территории Асиновского района»[2] ',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  izhmorskoe: {
    title: 'Ижморское',
    image: KemerovoMapForest,
    dataSource: generateDataSource(),
    description: 'Ижморский район — административно-территориальная единица (район) и'
      + ' муниципальное образование (муниципальный район) на юге Томской области России. Административный центр района — село Бакчар, расположено в 220 км от Томска, на берегу реки Галка (приток реки Бакчар). ',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
};

export const panelsDistrictsKrasnoyarskData = {
  abanskoe: {
    title: 'Абанское',
    image: KrasnoyarskMapForest,
    dataSource: generateDataSource(),
    description: 'Абанское — село в Томском районе Томской области, Россия. Входит в состав Малиновского сельского поселения В селе Александровское климат холодно-умеренный. В селе выпадает значительное количество осадков в течение года, даже в сухие месяцы. По классификации климатов Кеппена в селе влажный континентальный климат (индекс Dfb). Среднегодовая температура в селе Александровское — 0,2 °C. Среднегодовая норма осадков — 556 мм. ',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  achinskoe: {
    title: 'Ачинское',
    image: KrasnoyarskMapForest,
    dataSource: generateDataSource(),
    description: 'Ачинское городско́е поселе́ние — муниципальное образование в Асиновском районе Томской области Российской Федерации. Административный центр — город Асино. Статус и границы городского поселения установлены Законом Томской области от 9 сентября 2004 года № 193-ОЗ «О наделении статусом муниципального района, поселения (городского, сельского) и установлении границ муниципальных образований на территории Асиновского района»[2] ',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
  balahtinskoe: {
    title: 'Балахтинское',
    image: KrasnoyarskMapForest,
    dataSource: generateDataSource(),
    description: 'Балахтинское район — административно-территориальная единица (район) и муниципальное образование (муниципальный район) на юге Томской области России. Административный центр района — село Бакчар, расположено в 220 км от Томска, на берегу реки Галка (приток реки Бакчар). ',
    manager: {
      avatar: faker.image.avatar(),
      fullname: `${faker.name.lastName('male')} ${faker.name.firstName('male')}  ${faker.name.middleName('male')}`,
      job: `Главный лесничий ${faker.random.numeric(6)}`
    },
    data: [
      {
        digit: faker.datatype.float({ min: 1000, max: 10000, precision: 0.0001 }),
        description: 'тыс. га земель лесного фонда'
      },
      {
        digit: faker.datatype.float({ min: 100, max: 1000, precision: 0.0001 }),
        description: 'тыс. га кедровых лесов'
      },
      {
        digit: faker.datatype.float({ min: 2, max: 15, precision: 0.0001 }),
        description: 'тыс. га зеленой зоны'
      },
      {
        digit: faker.datatype.float({ min: 0, max: 3, precision: 0.0001 }),
        description: 'га/чел зеленой зоны на человека'
      },
      {
        digit: 'Нет',
        description: 'Площадь лесопарковой зоны'
      },

    ],
  },
};

