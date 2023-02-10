import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';


import { Skeleton } from 'antd';
import { Button } from '../../components/Button';
import { WhiteBox } from '../../components/WhiteBox';
import { TitleWithActions } from '../../components/TitleWithActions';
import { PrintIcon } from '../../components/IconsCollection';

import { BorderedBlock } from '../../components/BorderedBlock';
import { CountWithDescription } from '../../components/CountWithDescription';
import { StatisticInfoRow } from '../../components/StatisticInfoRow';
import { TitleWithButton } from '../../components/TitleWithButton';
import { fireSituationList, panelsRegionData, statisticInfoList } from '../../modules/fake-data';
import { Select } from '../../components/Select';
import { PanelsCommonInfoTab } from '../../components/PanelsCommonInfoTab';
import { PanelsTestTimerTab } from '../../components/PanelsTestTimerTab';


export function PanelsRegionPage() {
  const [regionInfo, setRegionInfo] = useState(null);
  const [currentTab, setCurrentTab] = useState(null);

  const navigate = useNavigate();
  const { panelsRegion } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!panelsRegion) {
      navigate('/panels/tomskaya');
    }
    setTimeout(() => {
      setRegionInfo(panelsRegionData[panelsRegion] ?? null);
    }, 500);
  }, [navigate, panelsRegion]);

  useEffect(() => {
    setCurrentTab(searchParams.get('tab') || 'common-info');
  }, [searchParams]);

  const handleChange = (value) => {
    if (value === 'common-info') {
      setSearchParams();
    } else {
      setSearchParams({ tab: value });
    }
  };

  if (!regionInfo) {
    return (
      <WhiteBox style={{ height: '100%' }}>
        <Skeleton />
      </WhiteBox>
    );
  }

  return (
    <div className="panels-page">
      <TitleWithActions
        title={regionInfo.title}
        actions={(
          <div style={{ display: 'flex' }}>
            <Select
              onChange={handleChange}
              defaultValue={currentTab}
              style={{ width: 287 }}
              options={[
                { value: 'common-info', label: 'Сводная информация по области' },
                { value: 'test-timer', label: 'Тест двух панелей с таймером' },
                { value: 'test-block-timer', label: 'Тест блока-контейнера с таймером' },
              ]}
            />
            <Button
              style={{ marginLeft: 16 }}
              type="primary"
              color="black"
              icon={<PrintIcon />}
            >
              Печать
            </Button>
          </div>
        )}
      />

      {currentTab === 'common-info' && <PanelsCommonInfoTab infoData={regionInfo} />}
      {currentTab === 'test-timer' && <PanelsTestTimerTab infoData={regionInfo} />}

    </div>
  );
}
