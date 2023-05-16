import React from 'react';
import { Table } from 'antd';

import './style.less';
import { WhiteBox } from '../WhiteBox';
import {
  panelsTableRent,
} from '../../modules/fake-data';
import { TitleWithButton } from '../TitleWithButton';


const columnsRent = [
  {
    title: '',
    dataIndex: 'title',
    key: 'title',
    width: 180
  },
  {
    title: 'Предоставление земель лесного фонда в аренду, тыс. га',
    dataIndex: 'rent',
    key: 'rent',
  },
  {
    title: 'Заготовка древесины, тыс. га',
    dataIndex: 'make_forest',
    key: 'make_forest',
  },
  {
    title: 'Заготовка пищевых лесных ресурсов и сбор лекарственных растений, тыс. га',
    dataIndex: 'make_food',
    key: 'make_food',
  },
  {
    title: 'Осуществление деятельности в сфере охотничьего хозяйства, тыс. га',
    dataIndex: 'hunt',
    key: 'hunt',
  },
  {
    title: 'Ведение сельского хозяйства, тыс. га',
    dataIndex: 'village',
    key: 'village',
  },
  {
    title: 'Осуществление рекреационной деятельности, тыс. га',
    dataIndex: 'recreation',
    key: 'recreation',
  },
];


const showTotal = (total) => (
  <div>
    Всего записей:
    {' '}
    {total}
  </div>
);

export function PanelsRentTableTab({ className }) {
  const classes = [className, 'panels-rent-tab'];
  return (
    <div className={classes.join(' ')}>
      <WhiteBox style={{ minHeight: '82vh' }}>
        <TitleWithButton
          fontClass="font14-20-semi-bold"
          title="ПРЕДОСТАВЛЕНИЕ ЗЕМЕЛЬ ЛЕСНОГО ФОНДА В АРЕНДУ (ЕЖЕКВАРТАЛЬНЫЕ ПОКАЗАТЕЛИ)"
        />
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
          columns={columnsRent}
          dataSource={panelsTableRent}
        />
      </WhiteBox>
    </div>
  );
}
