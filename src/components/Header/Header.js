import React from 'react';
import {
  Link,
  useLocation
} from 'react-router-dom';

import {
  Layout, theme, Menu
} from 'antd';
import {
  BookIcon,
  DatabaseIcon,
  MapIcon,
  WidgetIcon,
  LineChartIcon,
} from '../IconsCollection';


const { Header: HeaderAntd } = Layout;

const items = [
  {
    key: '/panels',
    label: <Link to="panels">Панели</Link>,
    icon: <WidgetIcon />,
  },
  {
    key: '/data',
    label: <Link to="data">Данные</Link>,
    icon: <DatabaseIcon />,
  },
  {
    key: '/maps',
    label: <Link to="map">Карта</Link>,
    icon: <MapIcon />,
  },
  {
    key: '/reports',
    label: <Link to="reports">Отчеты</Link>,
    icon: <LineChartIcon />,
  },
  {
    key: '/catalogs',
    label: <Link to="catalogs">Справочники</Link>,
    icon: <BookIcon />,
  },
];

export function Header() {
  const location = useLocation();

  const defaultSelected = `/${location.pathname.split('/')[1]}`;

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <HeaderAntd
      style={{
        paddingInline: 16,
        paddingTop: 0,
        background: colorBgContainer,
      }}
    >
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={defaultSelected}
        items={items}
      />
    </HeaderAntd>
  );
}
