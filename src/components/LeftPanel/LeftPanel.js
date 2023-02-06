import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/reset.css';

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

import {
  BarChartIcon,
  BookIcon,
  CloseCircleIcon,
  CompassIcon,
  DeskIcon,
  FireIcon,
  InfoIcon,
  ListIcon,
  LocationIcon,
  Map2Icon,
  PhoneIcon,
  PieChartIcon,
  ShieldIcon,
  SunIcon,
} from '../IconsCollection';


const {
  Sider
} = Layout;


const items = [
  {
    key: 'fires',
    label: 'Пожары',
    icon: <FireIcon />,
  },
  {
    key: 'landscape-fires',
    label: 'Ландшафтные пожары',
    icon: <CompassIcon />,
  },
  {
    key: 'fires-rosleskhoz',
    label: 'Пожары ИСДМ-Рослесхоз',
    icon: <InfoIcon />,
  },
  {
    key: 'plan',
    label: 'План налетов',
    icon: <BarChartIcon />,
  },
  {
    key: 'raids',
    label: 'Налеты',
    icon: <BookIcon />,
  },
  {
    key: 'weather',
    label: 'Метео',
    icon: <SunIcon />,
  },
  {
    key: 'tracks',
    label: 'Треки',
    icon: <LocationIcon />,
  },
  {
    key: 'contours',
    label: 'Контуры',
    icon: <Map2Icon />,
  },
  {
    key: 'indicators-of-the-work',
    label: 'Показатели работы ВС',
    icon: <PieChartIcon />,
  },
  {
    key: 'availability-of-forces',
    label: 'Наличие сил и средств',
    icon: <ShieldIcon />,
  },
  {
    key: 'form-2',
    label: 'Форма2-ЛО',
    icon: <DeskIcon />,
  },
  {
    key: 'emergency-acts',
    label: 'ЧС. Акты',
    icon: <ListIcon />,
  },
  {
    key: 'emergency-loss',
    label: 'ЧС. Потери',
    icon: <CloseCircleIcon />,
  },
  {
    key: 'journal',
    label: 'Журнал обращения граждан',
    icon: <PhoneIcon />,
  },
];


export function LeftPanel() {
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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['fires']} items={items} />
    </Sider>
  );
}
