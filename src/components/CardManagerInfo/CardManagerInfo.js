import React from 'react';

import './style.less';
import { BorderedBlock } from '../BorderedBlock';


function Avatar({ src }) {
  return (
    <div className="round-avatar">
      <img src={src} alt="Фото" />
    </div>
  );
}

function JobTitle({ title }) {
  return (
    <div
      style={{ marginBottom: 8, marginLeft: 16 }}
      className="font12-16-regular colorPrimaryGray"
    >
      {title}
    </div>
  );
}
function Name({ fullname }) {
  return (
    <div
      style={{ marginLeft: 16 }}
      className="font16-24-semi-bold colorPrimaryBlack"
    >
      {fullname}
    </div>
  );
}

export function CardManagerInfo({
  cardInfo, type = 'row-2', style, className
}) {
  const classes = [className, 'card-manager-info'];


  if (type === 'column-2') {
    return (
      <div
        style={style}
        className={classes.join(' ')}
      >
        <div style={{ display: 'flex' }}>
          <Avatar src={cardInfo.manager.avatar} />
          <div style={{ width: '100%' }}>
            <JobTitle title="Руководитель" />
            <Name fullname={cardInfo.manager.fullname} />
            <BorderedBlock style={{ marginTop: 8, marginLeft: 16 }} size="md" className="font12-16-regular colorPrimaryGray">
              {cardInfo.manager.job}
            </BorderedBlock>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={style}
      className={classes.join(' ')}
    >
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <Avatar src={cardInfo.manager.avatar} />
        <div>
          <JobTitle title="Руководитель" />
          <Name fullname={cardInfo.manager.fullname} />
        </div>
      </div>
      <BorderedBlock size="md" className="font12-16-regular">
        {cardInfo.manager.job}
      </BorderedBlock>
    </div>
  );
}
