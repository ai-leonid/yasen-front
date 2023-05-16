import React from 'react';
import { DatePicker as DatePickerAntd } from 'antd';


import './style.less';
import { CalendarIcon, TimeIcon } from '../IconsCollection';


export function DatePicker({ showTime = false, ...props }) {
  let IconSuffix = <CalendarIcon style={{ color: 'white' }} />;

  if (showTime) {
    IconSuffix = (
      <>
        <CalendarIcon style={{ color: 'white' }} />
        <TimeIcon style={{ color: 'white' }} />
      </>
    );
  }

  return (
    <DatePickerAntd
      showTime={showTime}
      suffixIcon={IconSuffix}
      {...props}
    />
  );
}
