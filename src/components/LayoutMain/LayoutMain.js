import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  Layout, theme,
} from 'antd';

import { Header } from '../Header';
import { LeftPanel } from '../LeftPanel';


const {
  Content
} = Layout;


export function LayoutMain({ children }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Layout hasSider style={{ height: '100%' }}>
      <LeftPanel />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 283,
          height: '100%',
        }}
      >
        <Header />
        <Content
          style={{
            marginTop: 24,
            marginBottom: 24,
            marginLeft: 32,
            marginRight: 24,
            height: '100%',
            overflow: 'initial',
          }}
        >
          {children ?? <Outlet />}
        </Content>
      </Layout>
    </Layout>
  );
}
