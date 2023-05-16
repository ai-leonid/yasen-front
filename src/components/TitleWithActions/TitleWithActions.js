import React from 'react';

import './style.less';


export function TitleWithActions({
  title, style, className, fontClass = 'font28-36-semi-bold', actions
}) {
  const classes = [className, 'title-with-actions', 'colorPrimaryBlack'];

  return (
    <div style={style} className={classes.join(' ')}>
      <div className={`actions-title colorPrimaryBlack ${fontClass}`}>{title}</div>
      <div className="actions-elements">{actions}</div>
    </div>
  );
}
