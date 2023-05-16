import React from 'react';
import { Input as InputAntd } from 'antd';

import './style.less';


export function Input(props) {
  return (
    <InputAntd
      {...props}
    />
  );
}
