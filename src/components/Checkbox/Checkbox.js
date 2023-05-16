import React from 'react';
import { Checkbox as CheckboxAntd } from 'antd';

import './style.less';


export function Checkbox({ ...rest }) {


  return (
    <CheckboxAntd {...rest} />
  );
}
