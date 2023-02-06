import React from 'react';
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
    key: 'panels',
    label: 'Панели',
    icon: <WidgetIcon />,
  },
  {
    key: 'data',
    label: 'Данные',
    icon: <DatabaseIcon />,
  },
  {
    key: 'maps',
    label: 'Карта',
    icon: <MapIcon />,
  },
  {
    key: 'reports',
    label: 'Отчеты',
    icon: <LineChartIcon />,
  },
  {
    key: 'catalogs',
    label: 'Справочники',
    icon: <BookIcon />,
  },
];

export function Header() {
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
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['panels']} items={items} />
    </HeaderAntd>
  );
}
