import React from 'react';
import { Layout } from 'antd';


const {
  Footer: FooterAntd
} = Layout;

export function Footer() {
  return (
    <FooterAntd
      style={{
        textAlign: 'center',
      }}
    >
      Ясень ©2023
    </FooterAntd>
  );
}
