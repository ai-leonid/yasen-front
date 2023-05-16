import React from 'react';
import { InputNumber as InputNumberAntd } from 'antd';

import './style.less';


export function InputNumber(props) {
  return (
    <InputNumberAntd
      {...props}
    />
  );
}
