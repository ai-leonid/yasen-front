import React from 'react';
import { theme } from 'antd';

import './style.less';


export function CountWithDescription({
  count, description, style, className
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const classes = [className, 'count-with-description'];

  return (
    <div
      style={style}
      className={classes.join(' ')}
    >
      <div className="count">
        {count}
      </div>
      <div className="description">
        {description}
      </div>
    </div>
  );
}
