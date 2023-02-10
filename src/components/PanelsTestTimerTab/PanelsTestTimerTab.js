import React from 'react';

import './style.less';
import { WhiteBox } from '../WhiteBox';
import { BorderedBlock } from '../BorderedBlock';
import { CountWithDescription } from '../CountWithDescription';
import { TitleWithButton } from '../TitleWithButton';
import { fireSituationList, statisticInfoList } from '../../modules/fake-data';
import { StatisticInfoRow } from '../StatisticInfoRow';
import { CardManagerInfo } from '../CardManagerInfo';
import { ImageCircle } from '../ImageCircle';


export function PanelsTestTimerTab({ infoData, className }) {
  const classes = [className, 'panels-test-timer-tab'];

  return (
    <div className={classes.join(' ')}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <WhiteBox style={{ display: 'flex', marginRight: 24 }} size="2-4">
          <ImageCircle
            src={infoData.image}
            style={{
              width: '30%',
              padding: 28,
            }}
            width={152}
            height={152}
            alt="Герб"
          />
          <div style={{ marginLeft: 28 }}>
            <p className="font12-16-regular">Описание</p>
            <p className="font14-20-regular">{infoData.description}</p>
          </div>
        </WhiteBox>
        <WhiteBox size="1-4">
          <CardManagerInfo cardInfo={infoData} />
        </WhiteBox>
      </div>
      <WhiteBox style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
          <div className="font16-24-semi-bold">
            Население
          </div>
          <BorderedBlock size="sm">
            по данным переписи 2018 года
          </BorderedBlock>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {infoData.data.map((item, index) => (
            <CountWithDescription
              key={index}
              count={item.digit}
              description={item.description}
            />
          ))}
        </div>
      </WhiteBox>

      <WhiteBox style={{ marginBottom: 20 }}>
        <TitleWithButton title="Статистическая информация" />

        {statisticInfoList.map((item, index) => (
          <StatisticInfoRow
            key={index}
            style={{
              marginBottom: statisticInfoList.length !== index + 1 ? 16 : 0
            }}
            info={item.info}
            value={item.value}
            meta={item.meta}
          />
        ))}
      </WhiteBox>

      <WhiteBox>
        <TitleWithButton title="Пожарная обстановка" />

        {fireSituationList.map((item, index) => (
          <StatisticInfoRow
            key={index}
            style={{
              marginBottom: statisticInfoList.length !== index + 1 ? 16 : 0
            }}
            info={item.info}
            value={item.value}
            meta={item.meta}
          />
        ))}
      </WhiteBox>
    </div>
  );
}
