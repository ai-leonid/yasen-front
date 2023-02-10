import React from 'react';
import { Button as ButtonAntd, ConfigProvider } from 'antd';

import './style.less';


export function ImageCircle({
  width, height, src, alt, style
}) {
  return (
    <div
      style={{
        maxWidth: width,
        minWidth: width,
        height,
        ...style
      }}
      className="image-circle"
    >
      <img src={src} alt={alt} />
    </div>
  );
}
