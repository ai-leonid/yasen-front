import React from 'react';
import { Table } from 'antd';

import dayjs from 'dayjs';
import { dataTableFires } from '../../modules/fake-data';
import { DatePicker } from '../../components/DatePicker';
import { WhiteBox } from '../../components/WhiteBox';
import { Select } from '../../components/Select';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';
import { AddCircleIcon, VerticalDotsIcon } from '../../components/IconsCollection';
import { Dropdown } from '../../components/Dropdown';
import { useNavigate } from 'react-router-dom';


const items = [
  {
    key: '1',
    label: 'Редактировать карточку пожара',
  },
  {
    key: '2',
    label: 'Показать на карте',
  },
  {
    key: '3',
    label: 'Отчеты',
    children: [
      {
        key: '3-1',
        label: 'Карточка лесного пожара',
      },
      {
        key: '3-2',
        label: 'Расширенная карточка лесного пожара',
      },
      {
        key: '3-3',
        label: 'Сведения о ликвидации лесного пожара',
      },
    ],
  },
  {
    key: '4',
    danger: true,
    label: 'Удалить пожар'
  },
];

const columns = [
  {
    title: '',
    key: 'action',
    width: 40,
    render: (_, record) => (
      <Dropdown
        trigger="click"
        color="black"
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button ghost size="small" icon={<VerticalDotsIcon />} />
      </Dropdown>
    ),
  },
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


export function DataPage() {
  const navigate = useNavigate();

  const handleChangeStartDate = (date) => {};

  const handleChangeEndDate = (date) => {};

  const handleChangeSelectDates = (value) => {};

  const handleChangeOnlyBig = (value) => {};

  const handleChangeCategory = (value) => {};

  const handleClickAddFire = (value) => {
    navigate('/data/fires/add');
  };

  const showTotal = (total) => (
    <div>
      Всего записей:
      {' '}
      {total}
    </div>
  );

  return (
    <div className="data-page">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <DatePicker
            defaultValue={dayjs('2022-01-01')}
            style={{ marginRight: 12, marginBottom: 20, maxWidth: 122 }}
            onChange={handleChangeStartDate}
            picker="year"
            placeholder="год от"
          />
          <DatePicker
            defaultValue={dayjs('2023-01-01')}
            style={{ marginRight: 12, marginBottom: 20, maxWidth: 122 }}
            onChange={handleChangeEndDate}
            picker="year"
            placeholder="год до"
          />

          <Select
            onChange={handleChangeSelectDates}
            defaultValue="dates-interval"
            style={{ marginRight: 12, marginBottom: 20, minWidth: 180 }}
            options={[
              { value: 'dates-interval', label: 'Интервал дат' },
            ]}
          />
          <Select
            onChange={handleChangeSelectDates}
            defaultValue="all"
            style={{ marginRight: 12, marginBottom: 20, minWidth: 220 }}
            options={[
              { value: 'all', label: 'Все состояния пожара' },
              { value: 'in-fire', label: 'Горит' },
              { value: 'extinguished', label: 'Потушен' },
            ]}
          />

          <Checkbox
            style={{ marginRight: 12, marginBottom: 20 }}
            onChange={handleChangeOnlyBig}
          >
            Только крупные
          </Checkbox>
          <Checkbox onChange={handleChangeCategory}>КЧС</Checkbox>
        </div>
        <div>
          <Button type="primary" onClick={handleClickAddFire} color="black" icon={<AddCircleIcon />} />
        </div>
      </div>


      <WhiteBox style={{ marginBottom: 20 }}>
        <Table
          scroll={{
            x: 'calc(1200px + 50%)',
          }}
          size="small"
          bordered
          pagination={{
            showSizeChanger: true,
            showTotal
          }}
          columns={columns}
          dataSource={dataTableFires}
        />
      </WhiteBox>
    </div>
  );
}
