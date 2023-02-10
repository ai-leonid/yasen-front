import React from 'react';
import { Outlet } from 'react-router-dom';
import { theme } from 'antd';

import './style.less';


export function WhiteBox({
  children, style, className, size = 'auto'
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const classes = [className, 'white-box', `white-box-${size}`];

  return (
    <div
      style={{
        padding: 20,
        background: colorBgContainer,
        borderRadius: 14,
        overflow: 'auto',
        ...style
      }}
      className={classes.join(' ')}
    >
      {children ?? <Outlet />}
    </div>
  );
}
