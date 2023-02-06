import React from 'react';
import {
  Layout, theme,
} from 'antd';

import { Header } from '../Header';
import { LeftPanel } from '../LeftPanel';


const {
  Content
} = Layout;


export function LayoutMain() {
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
            <p>long content</p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
