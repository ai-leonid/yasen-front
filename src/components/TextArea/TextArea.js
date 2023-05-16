import React from 'react';
import { Input as InputAntd } from 'antd';

import './style.less';


const { TextArea: TextAreaAntd } = InputAntd;


export function TextArea(props) {
  return (
    <TextAreaAntd
      {...props}
    />
  );
}
