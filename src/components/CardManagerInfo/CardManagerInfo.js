import React from 'react';

import './style.less';
import { BorderedBlock } from '../BorderedBlock';


export function CardManagerInfo({
  cardInfo, style, className
}) {
  const classes = [className, 'card-manager-info'];

  return (
    <div
      style={style}
      className={classes.join(' ')}
    >
      <div style={{ display: 'flex' }}>
        <div className="round-avatar">
          <img src={cardInfo.manager.avatar} alt="Фото" />
        </div>
        <div>
          <div
            style={{ marginBottom: 8, marginLeft: 16 }}
            className="font12-16-regular"
          >
            Руководитель
          </div>
          <div
            style={{ marginLeft: 16 }}
            className="font16-24-semi-bold"
          >
            {cardInfo.manager.fullname}
          </div>
        </div>
      </div>
      <BorderedBlock size="md" className="panels-job-place">
        {cardInfo.manager.job}
      </BorderedBlock>
    </div>
  );
}
