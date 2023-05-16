import React from 'react';

import './style.less';


export function BorderedBlock({
  children, style, className, size = 'sm', contentWidth = false
}) {
  const classes = [className, 'bordered-block', `bordered-block-${size}`];

  if (contentWidth) {
    classes.push('bordered-block-content-width');
  }

  return (
    <div
      style={style}
      className={classes.join(' ')}
    >
      {children}
    </div>
  );
}
