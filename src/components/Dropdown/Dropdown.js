import React from 'react';
import { Button as ButtonAntd, ConfigProvider, Dropdown as DropdownAntd } from 'antd';

import './style.less';


export function Dropdown({ children, color, ...rest }) {

  if (color === 'black') {
    return (
      <ConfigProvider
        theme={{
          token: {
            // colorTextBase: '#ffffff',
            // colorBgBase: '#262626',
          },
        }}
      >
        <DropdownAntd
          {...rest}
        >
          {children}
        </DropdownAntd>
      </ConfigProvider>
    );
  }

  return (
    <DropdownAntd
      {...rest}
    >
      {children}
    </DropdownAntd>
  );
}
