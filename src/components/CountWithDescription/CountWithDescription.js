import React from 'react';

import './style.less';


export function CountWithDescription({
  count, description, style, className
}) {
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
