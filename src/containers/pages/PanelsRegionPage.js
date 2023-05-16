import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';


import { Skeleton } from 'antd';
import { Button } from '../../components/Button';
import { WhiteBox } from '../../components/WhiteBox';
import { TitleWithActions } from '../../components/TitleWithActions';
import { PrintIcon } from '../../components/IconsCollection';

import { panelsRegionData } from '../../modules/fake-data';
import { Select } from '../../components/Select';
import { PanelsCommonInfoTab } from '../../components/PanelsCommonInfoTab';
import { PanelsTestTimerTab } from '../../components/PanelsTestTimerTab';
import { PanelsTestBlockTimerTab } from '../../components/PanelsTestBlockTimerTab';
import { PanelsForestProtectionTab } from '../../components/PanelsForestProtectionTab';
import { PanelsForestRenovationTab } from '../../components/PanelsForestRenovationTab';
import { PanelsRentTableTab } from '../../components/PanelsRentTableTab';
import { PanelsRentGraphTab } from '../../components/PanelsRentGraphTab';


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
        className="mb20"
        actions={(
          <div style={{ display: 'flex' }}>
            <Select
              onChange={handleChange}
              defaultValue={currentTab}
              style={{ minWidth: 287 }}
              options={[
                { value: 'common-info', label: 'Сводная информация по области' },
                { value: 'test-timer', label: 'Тест двух панелей с таймером' },
                { value: 'test-block-timer', label: 'Тест блока-контейнера с таймером' },
                { value: 'forest-protection', label: 'Защита лесов от вредных организмов' },
                {
                  value: 'forest-renovation-quarter',
                  label: 'Выполнение мероприятий по воспроизводству лесов (ежеквартальный)'
                },
                {
                  value: 'forest-renovation-year',
                  label: 'Выполнение мероприятий по воспроизводству лесов (ежегодный)'
                },
                {
                  value: 'rent-table',
                  label: 'Предоставление земель лесного фонда в аренду (таблица)'
                },
                {
                  value: 'rent-graph',
                  label: 'Предоставление земель лесного фонда в аренду (графики)'
                },
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
      {currentTab === 'test-block-timer' && <PanelsTestBlockTimerTab infoData={regionInfo} />}
      {currentTab === 'forest-protection' && <PanelsForestProtectionTab infoData={regionInfo} />}
      {currentTab === 'forest-renovation-quarter' && <PanelsForestRenovationTab infoData={regionInfo} />}
      {currentTab === 'forest-renovation-year' && <PanelsForestRenovationTab infoData={regionInfo} />}
      {currentTab === 'rent-table' && <PanelsRentTableTab infoData={regionInfo} />}
      {currentTab === 'rent-graph' && <PanelsRentGraphTab infoData={regionInfo} />}

    </div>
  );
}
