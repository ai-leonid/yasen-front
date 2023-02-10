import React from 'react';
import { Select as SelectAntd, Space, ConfigProvider } from 'antd';


import './style.less';


export function Select({ color, ...rest }) {
  if (color === 'black') {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#262626',
          },
        }}
      >
        <SelectAntd {...rest} />
      </ConfigProvider>
    );
  }

  return (
    <SelectAntd {...rest} />
  );
}
