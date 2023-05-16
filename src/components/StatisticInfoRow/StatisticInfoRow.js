import React from 'react';
import { theme } from 'antd';

import './style.less';
import { BorderedBlock } from '../BorderedBlock';


export function StatisticInfoRow({
  info, value, meta, type = 'info-value', className, style
}) {
  const classes = [className, 'statistic-info-row'];

  if (type === 'big-value-info') {
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
        <div className="font28-36-semi-bold colorPrimaryDarkGray" style={{ maxWidth: '40%' }}>
          {value}
        </div>
        <div className="font14-20-regular colorPrimaryGray" style={{ maxWidth: '60%' }}>
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
      <div className="colorPrimaryGray" style={{ maxWidth: '70%' }}>
        {info}
      </div>
      <div style={{ maxWidth: '30%', display: 'flex', alignItems: 'center' }}>
        <div className="font14-20-semi-bold colorPrimaryBlack">{value}</div>
        {meta && (
          <BorderedBlock className="colorPrimaryGray" size="sm" style={{ marginLeft: 12 }}>
            {meta}
          </BorderedBlock>
        )}
      </div>

    </div>
  );
}
