import React from 'react';
import { Button as ButtonAntd, ConfigProvider } from 'antd';

import './style.less';


export function Button({ color, ...rest }) {
  if (color === 'black') {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#262626',
          },
        }}
      >
        <ButtonAntd {...rest} />
      </ConfigProvider>
    );
  }

  return (
    <ButtonAntd {...rest} />
  );
}
