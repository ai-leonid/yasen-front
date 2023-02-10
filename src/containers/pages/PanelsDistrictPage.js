import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Skeleton } from 'antd';
import { Button } from '../../components/Button';
import { WhiteBox } from '../../components/WhiteBox';
import { TitleWithActions } from '../../components/TitleWithActions';
import { PrintIcon, QuestionIcon } from '../../components/IconsCollection';

import { BorderedBlock } from '../../components/BorderedBlock';
import { StatisticInfoRow } from '../../components/StatisticInfoRow';
import { TitleWithButton } from '../../components/TitleWithButton';
import {
  fireSituationList, panelsDistrictsKemerovoData,
  panelsDistrictsKrasnoyarskData, panelsDistrictsTomskData, statisticInfoList,
} from '../../modules/fake-data';
import { ImageCircle } from '../../components/ImageCircle';
import { CardManagerInfo } from '../../components/CardManagerInfo';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const optionsChart = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Лесовосстановление',
    },
  },
  aspectRatio: 2.8,
};

export function PanelsDistrictPage() {
  const { panelsDistrict, panelsRegion } = useParams();
  const [districtInfo, setDistrictInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!panelsDistrict) {
      navigate('/panels/tomskaya/alexandrovskoe');
    }

    let currentRegion = panelsDistrictsTomskData;

    if (panelsRegion === 'kemerovskaya') {
      currentRegion = panelsDistrictsKemerovoData;
    }

    if (panelsRegion === 'krasnoyarskii') {
      currentRegion = panelsDistrictsKrasnoyarskData;
    }

    setTimeout(() => {
      setDistrictInfo(currentRegion[panelsDistrict] ?? null);
    }, 500);
  }, [navigate, panelsRegion, panelsDistrict]);

  if (!districtInfo) {
    return (
      <WhiteBox style={{ height: '100%' }}>
        <Skeleton />
      </WhiteBox>
    );
  }

  return (
    <div className="panels-page">
      <TitleWithActions
        title={districtInfo.title}
        actions={(
          <Button
            type="primary"
            color="black"
            icon={<PrintIcon />}
          >
            Печать
          </Button>
        )}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <WhiteBox style={{ display: 'flex', marginRight: 24 }} size="2-4">
          <ImageCircle
            src={districtInfo.image}
            style={{
              width: '30%',
            }}
            width={152}
            height={152}
            alt="Карта"
          />
          <div style={{ marginLeft: 28 }}>
            <p className="font12-16-regular">Описание</p>
            <p className="font14-20-regular">{districtInfo.description}</p>
          </div>
        </WhiteBox>
        <WhiteBox size="1-4">
          <CardManagerInfo cardInfo={districtInfo} />
        </WhiteBox>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <WhiteBox size="1-2">
          <Bar options={optionsChart} data={districtInfo.dataSource} />
        </WhiteBox>

        <WhiteBox style={{ display: 'flex', flexDirection: 'column', marginLeft: 24 }} size="1-2">

          {districtInfo.data.map((item, index) => (
            <StatisticInfoRow
              key={index}
              type="value-info"
              style={{
                marginBottom: districtInfo.data.length !== index + 1 ? 22 : 0
              }}
              value={item.digit}
              info={item.description}
            />
          ))}
        </WhiteBox>
      </div>

      <WhiteBox>
        <TitleWithButton title="Пожарная обстановка" />

        {fireSituationList.map((item, index) => (
          <StatisticInfoRow
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
