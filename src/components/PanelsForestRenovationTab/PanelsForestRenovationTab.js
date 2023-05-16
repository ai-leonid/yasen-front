import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

import './style.less';
import { useSearchParams } from 'react-router-dom';
import { WhiteBox } from '../WhiteBox';
import { panelsTableRenovationQ, panelsTableRenovationY } from '../../modules/fake-data';
import { Button } from '../Button';


const columnsRenovationQ = [
  {
    title: 'Индикатор',
    dataIndex: 'title',
    key: 'title',
    width: 180
  },
  {
    title: 'Ед. изм.',
    dataIndex: 'point',
    key: 'point',
  },
  {
    title: '2018',
    children: [
      {
        title: '1 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2018_q1_fact',
            key: 'y2018_q1_fact',
          },
        ]
      },
      {
        title: '2 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2018_q2_fact',
            key: 'y2018_q2_fact',
          },
        ]
      },
      {
        title: '3 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2018_q3_fact',
            key: 'y2018_q3_fact',
          },
        ]
      },
      {
        title: '4 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2018_q4_fact',
            key: 'y2018_q4_fact',
          },
        ]
      },
    ]
  },
  {
    title: '2019',
    children: [
      {
        title: '1 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2019_q1_fact',
            key: 'y2019_q1_fact',
          },
        ]
      },
      {
        title: '2 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2019_q2_fact',
            key: 'y2019_q2_fact',
          },
        ]
      },
      {
        title: '3 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2019_q3_fact',
            key: 'y2019_q3_fact',
          },
        ]
      },
      {
        title: '4 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2019_q4_fact',
            key: 'y2019_q4_fact',
          },
        ]
      },
    ]
  },
  {
    title: '2020',
    children: [
      {
        title: '1 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2020_q1_fact',
            key: 'y2020_q1_fact',
          },
        ]
      },
      {
        title: '2 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2020_q2_fact',
            key: 'y2020_q2_fact',
          },
        ]
      },
      {
        title: '3 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2020_q3_fact',
            key: 'y2020_q3_fact',
          },
        ]
      },
      {
        title: '4 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2020_q4_fact',
            key: 'y2020_q4_fact',
          },
        ]
      },
    ]
  },
  {
    title: '2021',
    children: [
      {
        title: '1 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2021_q1_fact',
            key: 'y2021_q1_fact',
          },
        ]
      },
      {
        title: '2 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2021_q2_fact',
            key: 'y2021_q2_fact',
          },
        ]
      },
      {
        title: '3 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2021_q3_fact',
            key: 'y2021_q3_fact',
          },
        ]
      },
      {
        title: '4 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2021_q4_fact',
            key: 'y2021_q4_fact',
          },
        ]
      },
    ]
  },
  {
    title: '2022',
    children: [
      {
        title: '1 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2022_q1_fact',
            key: 'y2022_q1_fact',
          },
        ]
      },
      {
        title: '2 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2022_q2_fact',
            key: 'y2022_q2_fact',
          },
        ]
      },
      {
        title: '3 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2022_q3_fact',
            key: 'y2022_q3_fact',
          },
        ]
      },
      {
        title: '4 кв.',
        children: [
          {
            title: 'Факт',
            dataIndex: 'y2022_q4_fact',
            key: 'y2022_q4_fact',
          },
        ]
      },
    ]
  },
];

const columnsRenovationY = [
  {
    title: 'Индикатор',
    dataIndex: 'title',
    key: 'title',
    width: 180
  },
  {
    title: 'Ед. изм.',
    dataIndex: 'point',
    key: 'point',
  },
  {
    title: '2018',
    children: [
      {
        title: 'Факт',
        dataIndex: 'y2018',
        key: 'y2018',
      },
    ]
  },
  {
    title: '2019',
    children: [
      {
        title: 'Факт',
        dataIndex: 'y2019',
        key: 'y2019',
      },
    ]
  },
  {
    title: '2020',
    children: [
      {
        title: 'Факт',
        dataIndex: 'y2020',
        key: 'y2020',
      },
    ]
  },
  {
    title: '2021',
    children: [
      {
        title: 'Факт',
        dataIndex: 'y2021',
        key: 'y2021',
      },
    ]
  },
  {
    title: '2022',
    children: [
      {
        title: 'Факт',
        dataIndex: 'y2022',
        key: 'y2022',
      },
    ]
  },
];


export function PanelsForestRenovationTab({ className }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentTab, setCurrentTab] = useState(null);
  const [tableColumn, setTableColumn] = useState(null);
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    if (searchParams.get('tab') === 'forest-renovation-quarter') {
      setTableColumn(columnsRenovationQ);
      setTableData(panelsTableRenovationQ);
    }
    if (searchParams.get('tab') === 'forest-renovation-year') {
      setTableColumn(columnsRenovationY);
      setTableData(panelsTableRenovationY);
    }
  }, [searchParams]);

  const classes = [className, 'panels-forest-renovation-tab'];
  return (
    <div className={classes.join(' ')}>
      <WhiteBox style={{ minHeight: '82vh' }}>
        <Table
          scroll={{
            x: 'calc(1200px + 50%)',
          }}
          size="small"
          bordered
          pagination={{
            position: ['none']
          }}
          columns={tableColumn}
          dataSource={tableData}
        />

        <Button style={{ marginTop: 24 }} type="primary">Сохранить изменения</Button>
      </WhiteBox>
    </div>
  );
}
