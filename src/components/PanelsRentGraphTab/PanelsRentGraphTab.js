import React, { useState } from 'react';
import dayjs from 'dayjs';

import { DatePicker } from '../DatePicker';
import { WhiteBox } from '../WhiteBox';
import {
  panelsGraphRentYears,
  generateGraphRentData,
} from '../../modules/fake-data';
import { TitleWithButton } from '../TitleWithButton';
import { ChartBar } from '../ChartBar';


export function PanelsRentGraphTab({ className }) {
  const [startYear, setStartYear] = useState(panelsGraphRentYears[0]);
  const [endYear, setEndYear] = useState(panelsGraphRentYears.slice(-1)[0]);


  const handleChangeStartDate = (date) => {
    setStartYear(date.year());
  };

  const handleChangeEndDate = (date) => {
    setEndYear(date.year());
  };

  const disabledDate = (current) => current
    && (current.year() > panelsGraphRentYears.slice(-1)[0]
      || current.year() < panelsGraphRentYears[0]);

  const classes = [className, 'panels-rent-graph-tab'];

  return (
    <div className={classes.join(' ')}>

      <div style={{ marginBottom: 20 }}>
        <DatePicker
          defaultValue={dayjs(`${startYear}-01-01`)}
          style={{ marginRight: 12, maxWidth: 122 }}
          onChange={handleChangeStartDate}
          disabledDate={disabledDate}
          picker="year"
          placeholder="год от"
        />
        <DatePicker
          defaultValue={dayjs(`${endYear}-01-01`)}
          style={{ maxWidth: 122 }}
          disabledDate={disabledDate}
          onChange={handleChangeEndDate}
          picker="year"
          placeholder="год до"
        />
      </div>

      <WhiteBox style={{ marginBottom: 20 }}>
        <TitleWithButton
          fontClass="font14-20-semi-bold"
          title="ПРЕДОСТАВЛЕНИЕ ЗЕМЕЛЬ ЛЕСНОГО ФОНДА В АРЕНДУ"
        />
        <ChartBar
          options={{
            plugins: {
              title: {
                display: false
              },
            },
          }}
          data={generateGraphRentData(startYear, endYear, '#705AD3')}
        />
      </WhiteBox>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <WhiteBox size="1-2">
          <TitleWithButton
            fontClass="font14-20-semi-bold"
            title="ЗАГОТОВКА ДРЕВЕСИНЫ"
          />
          <ChartBar
            options={{
              plugins: {
                title: {
                  display: false
                },
              },
            }}
            data={generateGraphRentData(startYear, endYear, '#3AB963')}
          />
        </WhiteBox>

        <WhiteBox style={{ display: 'flex', flexDirection: 'column', marginLeft: 24 }} size="1-2">
          <TitleWithButton
            fontClass="font14-20-semi-bold"
            title="ЗАГОТОВКА ПИЩЕВЫХ ЛЕСНЫХ РЕСУРСОВ И СБОР ЛЕКАРСТВЕННЫХ РАСТЕНИЙ"
          />
          <ChartBar
            options={{
              plugins: {
                title: {
                  display: false
                },
              },
            }}
            data={generateGraphRentData(startYear, endYear, '#ECB343')}
          />
        </WhiteBox>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <WhiteBox size="1-2">
          <TitleWithButton
            fontClass="font14-20-semi-bold"
            title="ОСУЩЕСТВЛЕНИЕ ДЕЯТЕЛЬНОСТИ В СФЕРЕ ОХОТНИЧЬЕГО ХОЗЯЙСТВА"
          />
          <ChartBar
            options={{
              plugins: {
                title: {
                  display: false
                },
              },
            }}
            data={generateGraphRentData(startYear, endYear, '#E5366A')}
          />
        </WhiteBox>

        <WhiteBox style={{ display: 'flex', flexDirection: 'column', marginLeft: 24 }} size="1-2">
          <TitleWithButton
            fontClass="font14-20-semi-bold"
            title="ВЕДЕНИЕ СЕЛЬСКОГО ХОЗЯЙСТВА"
          />
          <ChartBar
            options={{
              plugins: {
                title: {
                  display: false
                },
              },
            }}
            data={generateGraphRentData(startYear, endYear, '#705AD3')}
          />
        </WhiteBox>
      </div>
    </div>
  );
}
