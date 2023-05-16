/* eslint-disable max-len */
import { faker } from '@faker-js/faker/locale/ru';
import TomskCoat from '../assets/images/tomsk-coat.png';
import KemerovoCoat from '../assets/images/kemerovo-coat.png';
import KrasnoyarskCoat from '../assets/images/krasnoyarsk-coat.png';
import TomskMapForest from '../assets/images/tomsk-map.png';
import KemerovoMapForest from '../assets/images/kemerovo-map.jpg';
import KrasnoyarskMapForest from '../assets/images/krasnoyarsk-map.png';


const generateFireSituations = () => ([
  {
    info: 'Количество зарегистрированных за прошедшие сутки',
    value: `${faker.datatype.number({ min: 10, max: 30 })} ед.`,
    meta: '2020',
  },
  {
    info: 'Ликвидировано пожаров (за прошедшие сутки)',
    value: `${faker.datatype.number({ min: 10, max: 30 })} ед.`,
    meta: '2020',
  },
  {
    info: 'Количество действующих пожаров',
    value: `${faker.datatype.number({ min: 10, max: 30 })} ед.`,
    meta: '2020',
  },
  {
    info: 'Площадь действующих пожаров',
    value: `${faker.datatype.float({ min: 500, max: 2000, precision: 0.01 })} га`,
    meta: '2020',
  },
  {
    info: 'Количество ликвидированных пожаров',
    value: `${faker.datatype.number({ min: 10, max: 30 })} ед.`,
    meta: '2020',
  },
  {
    info: 'Площадь ликвидированных пожаров',
    value: `${faker.datatype.float({ min: 500, max: 2000, precision: 0.01 })} га`,
    meta: '2020',
  },
]);

const generateStatisticInfo = () => (
  [
    {
      info: 'Площадь земель лесного фонда',
      value: `${faker.datatype.float({ min: 10000, max: 30000, precision: 0.001 })} тыс га`,
      meta: '2020',
    },
    {
      info: 'Агротехнический уход за лесными культурами (ежегодный)',
      value: `${faker.datatype.float({ min: 1000, max: 5000, precision: 0.01 })} га`,
      meta: '2020',
    },
    {
      info: 'Всего выполнено мероприятий по лесовосстановлению (ежегодный)',
      value: `${faker.datatype.float({ min: 10000, max: 30000, precision: 0.01 })} га`,
      meta: '2020',
    },
    {
      info: 'Всего выполнено мероприятий по уходу за лесом (ежегодный)',
      value: `${faker.datatype.float({ min: 1000, max: 10000, precision: 0.01 })} га`,
      meta: '2020',
    },
    {
      info: 'Выполнено проходных рубок (ежегодный)',
      value: `${faker.datatype.float({ min: 300, max: 2000, precision: 0.01 })} га`,
      meta: '2020',
    },
    {
      info: 'Выполнено рубок прореживания (ежегодный)',
      value: `${faker.datatype.float({ min: 1000, max: 5000, precision: 0.01 })} га`,
      meta: '2020',
    },
  ]
);

const generateSettlers = () => (
  [
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

  ]
);

const generateForestry = () => (
  [
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

  ]
);

/* bar chart source */
const generateDataSource = () => ({
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
});


/* exported data */
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateSettlers(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateSettlers(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateSettlers(),
  },
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
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
    statisticInfo: generateStatisticInfo(),
    fireSituations: generateFireSituations(),
    data: generateForestry(),
  },
};


const tableRenovationTitleNames = [
  'Всего выполнено мероприятий по лесовосстановлению',
  'Мероприятия по искусственному лесовосстановлению',
  'Мероприятия по комбинированному лесовосстановлению',
  'Мероприятия по естественному лесовосстановлению',
  'Агротехнический уход за лесными культурами',
  'Уход за объектами лесного семеноводства',
];

const dataRenovationQ = [];
const dataRenovationY = [];
for (let i = 0; i < 6; i++) {
  dataRenovationY.push({
    key: i,
    title: tableRenovationTitleNames[i],
    point: 'га',
    y2018: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2019: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2020: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2021: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2022: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
  });

  dataRenovationQ.push({
    key: i,
    title: tableRenovationTitleNames[i],
    point: 'га',
    y2018_q1_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2018_q2_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2018_q3_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2018_q4_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),

    y2019_q1_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2019_q2_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2019_q3_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2019_q4_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),

    y2020_q1_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2020_q2_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2020_q3_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2020_q4_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),

    y2021_q1_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2021_q2_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2021_q3_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2021_q4_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),

    y2022_q1_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2022_q2_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2022_q3_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
    y2022_q4_fact: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
  });
}

export const panelsTableRenovationQ = dataRenovationQ;

export const panelsTableRenovationY = dataRenovationY;


const dataRentTitles = [
  '1 кв. 2017', '2 кв. 2017', '3 кв. 2017', '4 кв. 2017',
  '1 кв. 2018', '2 кв. 2018', '3 кв. 2018', '4 кв. 2018',
  '1 кв. 2019', '2 кв. 2019', '3 кв. 2019', '4 кв. 2019',
  '1 кв. 2020', '2 кв. 2020', '3 кв. 2020', '4 кв. 2020',
  '1 кв. 2021', '2 кв. 2021', '3 кв. 2021', '4 кв. 2021',
  '1 кв. 2022', '2 кв. 2022', '3 кв. 2022', '4 кв. 2022',
];

const dataRent = dataRentTitles.map((item, index) => ({
  key: index,
  title: item,
  rent: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
  make_forest: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
  make_food: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
  hunt: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
  village: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
  recreation: faker.datatype.float({ min: 1000, max: 8000, precision: 0.1 }),
}));


export const panelsTableRent = dataRent;


/* --- Panels graph rent ---*/
export const panelsGraphRentYears = [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];


export const generateGraphRentData = (startYear, endYear, color = '#705AD3') => {
  const startIndex = panelsGraphRentYears.indexOf(startYear);
  const endIndex = panelsGraphRentYears.indexOf(endYear);
  const cutYears = panelsGraphRentYears.slice(startIndex, endIndex + 1);

  return {
    labels: cutYears,
    datasets: [{
      label: 'тыс. га',
      data: cutYears.map(() => faker.datatype.number({ min: 400, max: 5000 })),
      backgroundColor: color
    }]
  };
};


const dataTablesFiresPrep = [];
for (let i = 0; i < 100; i += 1) {
  dataTablesFiresPrep.push(
    {
      key: i,
      status: faker.helpers.arrayElement(['Потушен', 'Горит']),
      forestry: 'Самое большое',
      districtForestry: 'Лесное',
      applyDistrict: 'Лес',
      nSub: faker.datatype.number({ min: 0, max: 100 }),
      nLes: faker.datatype.number({ min: 0, max: 200 }),
      nKrup: faker.datatype.number({ min: 0, max: 300 }),
      belonging: 'Район',
    },
  );
}

export const dataTableFires = dataTablesFiresPrep;
