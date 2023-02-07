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
    <Layout hasSider>
      <LeftPanel />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 283,
        }}
      >
        <Header />
        <Content
          style={{
            marginTop: 24,
            marginBottom: 24,
            marginLeft: 32,
            marginRight: 24,
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 20,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: 14,
            }}
          >
            {children ?? <Outlet />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
