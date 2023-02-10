import React from 'react';
import { Button } from 'antd';

import './style.less';


export function TitleWithActions({ title, actions }) {
  return (
    <div className="title-with-actions">
      <div className="actions-title">{title}</div>
      <div className="actions-elements">{actions}</div>
    </div>
  );
}
