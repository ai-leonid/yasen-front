import React from 'react';
import { Table } from 'antd';

import './style.less';
import { WhiteBox } from '../WhiteBox';


const columns = [
  {
    title: '',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '1 кв. 2020',
    dataIndex: 'q1_2020',
    key: 'q1_2020',
  },
  {
    title: '2 кв. 2020',
    dataIndex: 'q2_2020',
    key: 'q2_2020',
  },
  {
    title: '3 кв. 2020',
    dataIndex: 'q3_2020',
    key: 'q3_2020',
  },
  {
    title: '4 кв. 2020',
    dataIndex: 'q4_2020',
    key: 'q4_2020',
  },
  {
    title: '1 кв. 2021',
    dataIndex: 'q1_2021',
    key: 'q1_2021',
  },
  {
    title: '2 кв. 2021',
    dataIndex: 'q2_2021',
    key: 'q2_2021',
  },
  {
    title: '3 кв. 2021',
    dataIndex: 'q3_2021',
    key: 'q3_2021',
  },
  {
    title: '4 кв. 2021',
    dataIndex: 'q4_2021',
    key: 'q4_2021',
  },
];

const data = [
  {
    key: '1',
    title: 'Выборочные санитарные рубки, га',
    q1_2020: '-',
    q2_2020: '-',
    q3_2020: '-',
    q4_2020: '-',
    q1_2021: '-',
    q2_2021: '-',
    q3_2021: '-',
    q4_2021: '-',
  }, {
    key: '2',
    title: 'Сплошные санитарные рубки, га',
    q1_2020: '-',
    q2_2020: '-',
    q3_2020: '-',
    q4_2020: '-',
    q1_2021: '-',
    q2_2021: '-',
    q3_2021: '-',
    q4_2021: '-',
  }, {
    key: '3',
    title: 'Уборка захламленности, га',
    q1_2020: '-',
    q2_2020: '-',
    q3_2020: '-',
    q4_2020: '-',
    q1_2021: '-',
    q2_2021: '-',
    q3_2021: '-',
    q4_2021: '-',
  }, {
    key: '4',
    title: 'Выборка свежезаселенных деревьев, га',
    q1_2020: '-',
    q2_2020: '-',
    q3_2020: '-',
    q4_2020: '-',
    q1_2021: '-',
    q2_2021: '-',
    q3_2021: '-',
    q4_2021: '-',
  },
];

export function PanelsForestProtectionTab({ className }) {
  const classes = [className, 'panels-forest-protection-tab'];

  return (
    <div className={classes.join(' ')}>
      <WhiteBox>
        <Table bordered columns={columns} dataSource={data} />
      </WhiteBox>
    </div>
  );
}
