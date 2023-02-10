import React from 'react';

import './style.less';


export function BorderedBlock({
  children, style, className, size = 'sm'
}) {
  const classes = [className, 'bordered-block', `bordered-block-${size}`];

  return (
    <div
      style={style}
      className={classes.join(' ')}
    >
      {children}
    </div>
  );
}
