import React from 'react';

import './style.less';
import { WhiteBox } from '../WhiteBox';
import { BorderedBlock } from '../BorderedBlock';
import { TitleWithButton } from '../TitleWithButton';
import { CardManagerInfo } from '../CardManagerInfo';
import { ImageCircle } from '../ImageCircle';
import { StatisticInfoRow } from '../StatisticInfoRow';


export function PanelsTestTimerTab({ infoData, className }) {
  const classes = [className, 'panels-test-timer-tab'];

  return (
    <div className={classes.join(' ')}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <WhiteBox style={{ marginRight: 24 }} size="1-2">
          <TitleWithButton fontClass="font14-20-semi-bold" title="БЛОК-КОНТЕЙНЕР" />
          <BorderedBlock
            style={{ display: 'flex', marginBottom: 12 }}
            contentWidth
            size="lg"
            className="font12-16-regular"
          >
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
              <BorderedBlock style={{ marginBottom: 12 }} contentWidth size="md" className="font12-16-regular">
                Сводная информация по области
              </BorderedBlock>
              <p className="mb0 font14-20-regular">{infoData.description}</p>
            </div>
          </BorderedBlock>

          <BorderedBlock
            style={{ marginBottom: 12 }}
            size="lg"
            className="font12-16-regular"
          >
            <CardManagerInfo type="column-2" cardInfo={infoData} />
          </BorderedBlock>

          <BorderedBlock
            style={{ marginBottom: 12 }}
            size="lg"
            className="font12-16-regular"
          >
            <TitleWithButton title="Статистическая информация" />

            {infoData.statisticInfo.map((item, index) => (
              <StatisticInfoRow
                key={index}
                style={{
                  marginBottom: infoData.statisticInfo.length !== index + 1 ? 16 : 0
                }}
                info={item.info}
                value={item.value}
                meta={item.meta}
              />
            ))}
          </BorderedBlock>


          <BorderedBlock
            style={{ marginBottom: 12 }}
            size="lg"
            className="font12-16-regular"
          >
            <TitleWithButton title="Пожарная обстановка" />

            {infoData.fireSituations.map((item, index) => (
              <StatisticInfoRow
                key={index}
                style={{
                  marginBottom: infoData.fireSituations.length !== index + 1 ? 16 : 0
                }}
                info={item.info}
                value={item.value}
                meta={item.meta}
              />
            ))}
          </BorderedBlock>
        </WhiteBox>

        <WhiteBox size="1-2">
          <TitleWithButton fontClass="font14-20-semi-bold" title="БЛОК-КОНТЕЙНЕР" />
          <BorderedBlock
            style={{ display: 'flex', marginBottom: 12 }}
            contentWidth
            size="lg"
            className="font12-16-regular"
          >
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
              <BorderedBlock style={{ marginBottom: 12 }} contentWidth size="md" className="font12-16-regular">
                Сводная информация по области
              </BorderedBlock>
              <p className="mb0 font14-20-regular">{infoData.description}</p>
            </div>
          </BorderedBlock>

          <BorderedBlock
            style={{ marginBottom: 12 }}
            size="lg"
            className="font12-16-regular"
          >
            <CardManagerInfo type="column-2" cardInfo={infoData} />
          </BorderedBlock>

          <BorderedBlock
            style={{ marginBottom: 12 }}
            size="lg"
            className="font12-16-regular"
          >
            <TitleWithButton title="Статистическая информация" />

            {infoData.statisticInfo.map((item, index) => (
              <StatisticInfoRow
                key={index}
                style={{
                  marginBottom: infoData.statisticInfo.length !== index + 1 ? 16 : 0
                }}
                info={item.info}
                value={item.value}
                meta={item.meta}
              />
            ))}
          </BorderedBlock>


          <BorderedBlock
            style={{ marginBottom: 12 }}
            size="lg"
            className="font12-16-regular"
          >
            <TitleWithButton title="Пожарная обстановка" />

            {infoData.fireSituations.map((item, index) => (
              <StatisticInfoRow
                key={index}
                style={{
                  marginBottom: infoData.fireSituations.length !== index + 1 ? 16 : 0
                }}
                info={item.info}
                value={item.value}
                meta={item.meta}
              />
            ))}
          </BorderedBlock>
        </WhiteBox>
      </div>
    </div>
  );
}
