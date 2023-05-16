import React from 'react';
import { Tabs as TabsAntd, ConfigProvider } from 'antd';

import './style.less';


export function Tabs({ className, color, ...rest }) {
  const classes = [className, 'ysn-tabs'];

  return (
    <TabsAntd
      className={classes.join(' ')}
      type="card"
      {...rest}
    />
  );
}
