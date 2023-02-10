import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
  Link, matchPath, useLocation, useNavigate,
} from 'react-router-dom';

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import {
  BarChartIcon,
  CloseCircleIcon,
  CompassIcon,
  DeskIcon,
  FireIcon,
  InfoCircleIcon,
  ListIcon,
  LocationIcon,
  Map2Icon,
  PhoneIcon,
  PieChartIcon,
  PlaneIcon,
  ShieldIcon,
  WeatherIcon,
} from '../IconsCollection';


const {
  Sider
} = Layout;

function getItemWithLink(label, key, icon, children, type) {
  const labelLink = (
    <Link
      style={{
        color: 'inherit',
      }}
      to={key}
    >
      {label}
    </Link>
  );
  return {
    key,
    icon,
    children,
    label: labelLink,
    type,
  };
}

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const itemsPanelsPage = [
  getItemWithLink('Томская область', '/panels/tomskaya', null, [
    getItem('Александровское', '/panels/tomskaya/alexandrovskoe'),
    getItem('Асиновское', '/panels/tomskaya/asinovskoe'),
    getItem('Бакчарское', '/panels/tomskaya/bakcharskoe'),
    getItem('Васюганское', '/panels/tomskaya/vasuganskoe'),
    getItem('Верхнекетское', '/panels/tomskaya/verhneketskoe'),
    getItem('Зырянское', '/panels/tomskaya/zyranskoe'),
    getItem('Каргасокское', '/panels/tomskaya/kargasokskoe'),
    getItem('Кедровское', '/panels/tomskaya/kedrovskoe'),
    getItem('Кожевниковское', '/panels/tomskaya/kozhevnikovskoe'),
    getItem('Колпашевское', '/panels/tomskaya/kolpashevskoe'),
  ]),
  getItemWithLink('Кемеровская область', '/panels/kemerovskaya', null, [
    getItem('Беловское', '/panels/kemerovskaya/belovskoe'),
    getItem('Гурьевское ', '/panels/kemerovskaya/guryevskoe'),
    getItem('Ижморское ', '/panels/kemerovskaya/izhmorskoe'),
  ]),
  getItemWithLink('Красноярский край', '/panels/krasnoyarskii', null, [
    getItem('Абанское', '/panels/krasnoyarskii/abanskoe'),
    getItem('Ачинское', '/panels/krasnoyarskii/achinskoe'),
    getItem('Балахтинское', '/panels/krasnoyarskii/balahtinskoe'),
  ]),
];

const itemsDataPage = [
  {
    key: '/data/fires',
    label: 'Пожары',
    icon: <FireIcon />,
  },
  {
    key: '/data/landscape-fires',
    label: 'Ландшафтные пожары',
    icon: <CompassIcon />,
  },
  {
    key: '/data/fires-rosleskhoz',
    label: 'Пожары ИСДМ-Рослесхоз',
    icon: <InfoCircleIcon />,
  },
  {
    key: '/data/plan',
    label: 'План налетов',
    icon: <BarChartIcon />,
  },
  {
    key: '/data/raids',
    label: 'Налеты',
    icon: <PlaneIcon />,
  },
  {
    key: '/data/weather',
    label: 'Метео',
    icon: <WeatherIcon />,
  },
  {
    key: '/data/tracks',
    label: 'Треки',
    icon: <LocationIcon />,
  },
  {
    key: '/data/contours',
    label: 'Контуры',
    icon: <Map2Icon />,
  },
  {
    key: '/data/indicators-of-the-work',
    label: 'Показатели работы ВС',
    icon: <PieChartIcon />,
  },
  {
    key: '/data/availability-of-forces',
    label: 'Наличие сил и средств',
    icon: <ShieldIcon />,
  },
  {
    key: '/data/form-2',
    label: 'Форма2-ЛО',
    icon: <DeskIcon />,
  },
  {
    key: '/data/emergency-acts',
    label: 'ЧС. Акты',
    icon: <ListIcon />,
  },
  {
    key: '/data/emergency-loss',
    label: 'ЧС. Потери',
    icon: <CloseCircleIcon />,
  },
  {
    key: '/data/journal',
    label: 'Журнал обращения граждан',
    icon: <PhoneIcon />,
  },
];

export function LeftPanel() {
  const location = useLocation();
  const [panelItems, setPanelItems] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (matchPath({ path: '/panels/*' }, location.pathname)) {
      setPanelItems(itemsPanelsPage);
    }

    if (matchPath({ path: '/data/*' }, location.pathname)) {
      setPanelItems(itemsDataPage);
    }
  }, [location.pathname]);

  return (
    <Sider
      width={283}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          paddingTop: 16,
          paddingBottom: 32,
          paddingLeft: 16,
          paddingRight: 24,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div><LogoIcon /></div>
        <div style={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          marginLeft: 12,
          fontSize: 20,
          color: '#FFFFFF',
          lineHeight: '28px',
        }}
        >
          Ясень
        </div>
      </div>
      <Menu
        onClick={({ key }) => { navigate(key); }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={location.pathname}
        items={panelItems}
      />
    </Sider>
  );
}
