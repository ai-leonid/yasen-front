import React from 'react';

import { Table } from 'antd';


const columns = [
  {
    title: 'Состояние',
    dataIndex: 'status',
    key: 'status',
    render: (text) => <span style={{ color: text === 'Горит' ? '#D43145' : 'inherit' }}>{text}</span>,
  },
  {
    title: 'Лесничество',
    dataIndex: 'forestry',
    key: 'forestry',
  },
  {
    title: 'Участковое лесничество',
    dataIndex: 'districtForestry',
    key: 'districtForestry',
  },
  {
    title: 'Район применения',
    key: 'applyDistrict',
    dataIndex: 'applyDistrict',
  },
  {
    title: '№ суб.',
    key: 'nSub',
    dataIndex: 'nSub',
  },
  {
    title: '№ лес.',
    key: 'nLes',
    dataIndex: 'nLes',
  },
  {
    title: '№ круп.',
    key: 'nKrup',
    dataIndex: 'nKrup',
  },
  {
    title: 'Принадлежность',
    key: 'belonging',
    dataIndex: 'belonging',
  },
  {
    title: 'Принадлежность 2',
    key: 'belonging',
    dataIndex: 'belonging',
  },
  {
    title: 'Принадлежность 3',
    key: 'belonging',
    dataIndex: 'belonging',
  },
];
const data = [
  {
    key: '55',
    status: 'Потушен',
    forestry: 'Самое большое',
    districtForestry: 'Лесное',
    applyDistrict: 'Лес',
    nSub: '123',
    nLes: '234',
    nKrup: '345',
    belonging: 'Район',
  },
  {
    key: '44',
    status: 'Горит',
    forestry: 'Самое большое',
    districtForestry: 'Лесное',
    applyDistrict: 'Лес',
    nSub: '123',
    nLes: '234',
    nKrup: '345',
    belonging: 'Район',
  },
];

export function DataPage() {
  return (
    <div className="">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
