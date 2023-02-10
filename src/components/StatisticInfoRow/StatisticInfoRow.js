import React from 'react';
import { theme } from 'antd';

import './style.less';
import { BorderedBlock } from '../BorderedBlock';


export function StatisticInfoRow({
  info, value, meta, type = 'info-value-meta', className, style
}) {
  const classes = [className, 'statistic-info-row'];

  if (type === 'value-info') {
    classes.push(type);

    return (
      <div
        className={classes.join(' ')}
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          ...style
        }}
      >
        <div className="font28-36-semi-bold" style={{ maxWidth: '40%' }}>
          {value}
        </div>
        <div className="font14-20-regular" style={{ maxWidth: '60%' }}>
          {info}
        </div>
      </div>
    );
  }

  return (
    <div
      className={classes.join(' ')}
      style={{
        display: 'flex', width: '100%', justifyContent: 'space-between', ...style
      }}
    >
      <div style={{ maxWidth: '70%' }}>
        {info}
      </div>
      <div style={{ maxWidth: '30%', display: 'flex', alignItems: 'center' }}>
        <div>{value}</div>
        <BorderedBlock size="sm" style={{ marginLeft: 12 }}>
          {meta}
        </BorderedBlock>
      </div>

    </div>
  );
}
