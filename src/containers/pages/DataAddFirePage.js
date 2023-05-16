import React, { useState } from 'react';
import { Form, Modal, Table } from 'antd';
import dayjs from 'dayjs';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as BigInfoIcon } from '../../assets/icons/big-info.svg';
import { DatePicker } from '../../components/DatePicker';
import { WhiteBox } from '../../components/WhiteBox';
import { Select } from '../../components/Select';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';
import { Dropdown } from '../../components/Dropdown';
import { Tabs } from '../../components/Tabs';
import { CompassIcon, PrintIcon } from '../../components/IconsCollection';
import { Input } from '../../components/Input';
import { InputNumber } from '../../components/InputNumber';
import { BorderedBlock } from '../../components/BorderedBlock';
import { TitleWithActions } from '../../components/TitleWithActions';
import { TextArea } from '../../components/TextArea';
import { StatisticInfoRow } from '../../components/StatisticInfoRow';


const columnsDistanceVillage = [
  {
    title: 'Объект',
    dataIndex: 'title',
    key: 'title',
    width: '60%',
  },
  {
    title: 'Расстояние, км',
    dataIndex: 'distance',
    key: 'distance',
    width: '20%',
  },
  {
    title: 'Азимут',
    dataIndex: 'azimuth',
    key: 'azimuth',
    width: '20%',
  },
];

const columnsExtinguishingWork = [
  {
    title: 'Дата налёта',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Бортовой номер',
    dataIndex: 'boardNumber',
    key: 'boardNumber',
  },
  {
    title: 'Воздушное судно',
    dataIndex: 'aircraft',
    key: 'aircraft',
  },
  {
    title: 'Затраченное время',
    dataIndex: 'timeSpent',
    key: 'timeSpent',
  },
  {
    title: 'Кол-во сливов',
    dataIndex: 'countWater',
    key: 'countWater',
  },
  {
    title: 'Объем',
    dataIndex: 'vol',
    key: 'vol',
  },
  {
    title: 'Воздействия',
    dataIndex: 'impact',
    key: 'impact',
  },
  {
    title: 'Прыжки',
    dataIndex: 'jumps',
    key: 'jumps',
  },
  {
    title: 'Спуски',
    dataIndex: 'descents',
    key: 'descents',
  },
];

function BottomFormActions() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
    navigate('/data/fires');
  };

  const handleCancel = () => {
    setOpen(false);
    navigate('/data/fires');
  };

  const handleClickCancel = (form) => {
    showModal();
  };

  const handleClickOk = (form) => {
    navigate('/data/fires');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      right: 0,
      width: '100%',
      paddingTop: 24,
      paddingBottom: 24,
      paddingRight: 24,
      paddingLeft: 307,
      background: 'rgba(255, 255, 255, 0.8)',
      borderTop: '1px solid #EBEBEB',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(6px)'
    }}
    >
      <Modal
        open={open}
        title="Вы уверены, что хотите выйти без сохранения?"
        onOk={handleOk}
        onCancel={handleCancel}
        width={380}
        footer={(
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column'
          }}
          >
            <Button
              style={{
                width: '100%',
                marginBottom: 14
              }}
              key="submit"
              type="primary"
              onClick={handleOk}
            >
              Сохранить изменения
            </Button>
            <Button
              style={{
                width: '100%'
              }}
              key="back"
              type="text"
              onClick={handleCancel}
            >
              Выйти без сохранения
            </Button>
          </div>
        )}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <BigInfoIcon />
        </div>
      </Modal>

      <Form.Item noStyle>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
        >
          <div>
            <Button onClick={handleClickCancel} ghost color="black" type="primary">Отмена</Button>
          </div>
          <div>
            <Button ghost type="primary">Добавить динамику</Button>
            <Button
              onClick={handleClickOk}
              type="primary"
              style={{
                marginLeft: 16,
              }}
            >
              Сохранить пожар
            </Button>
          </div>
        </div>
      </Form.Item>
    </div>
  );
}

function FlightsFormActions() {
  return (
    <>
      <WhiteBox style={{ marginBottom: 12 }}>
        <div
          className="font16-24-semi-bold colorPrimaryBlack"
          style={{ marginBottom: 16 }}
        >
          Работы по тушению
        </div>

        <Table
          size="small"
          pagination={false}
          columns={columnsExtinguishingWork}
          dataSource={[
            {
              key: '1',
              date: '12.10.2022',
              boardNumber: '43422',
              aircraft: 'Самолет',
              timeSpent: '4 часа',
              countWater: '6',
              vol: '6',
              impact: 'Тушение',
              jumps: '2',
              descents: '1',
            },
            {
              key: '2',
              date: '13.10.2022',
              boardNumber: '43422',
              aircraft: 'Самолет',
              timeSpent: '3 часа',
              countWater: '5',
              vol: '7',
              impact: 'Тушение',
              jumps: '3',
              descents: '2',
            }
          ]}
        />
      </WhiteBox>
      <BottomFormActions />
    </>
  );
}


function NewFireForm() {
  const [form] = Form.useForm();

  const handleFormChange = (form) => {
    console.log(form);
  };


  return (
    <Form
      labelAlign="left"
      colon
      layout="vertical"
      form={form}
      onValuesChange={handleFormChange}
    >
      <WhiteBox style={{ marginBottom: 12 }}>
        <div
          className="font16-24-semi-bold colorPrimaryBlack"
          style={{ marginBottom: 16 }}
        >
          Основные данные
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ width: '30%' }}>
            <Form.Item label="Авиаотделение" name="aviationDepartment">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
            <Form.Item label="Принадлежность" name="belonging">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="Лесничество" name="forestry">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
            <Form.Item label="Зона" name="area">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="Уч. лесничество" name="nForestry">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
            <Form.Item label="Район применения" name="applyDistrict">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
          </div>
        </div>
      </WhiteBox>

      <WhiteBox style={{ marginBottom: 12 }}>
        <div
          className="font16-24-semi-bold colorPrimaryBlack"
          style={{ marginBottom: 16 }}
        >
          Нумерация
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ width: '30%' }}>
            <Form.Item label="Номер пожара по субъекту" name="numberFireSubject">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
              <div style={{ position: 'absolute', right: 0, bottom: -30 }}>
                <Button className="font14-20-semi-bold p0" type="link">Получить номер</Button>
              </div>
            </Form.Item>
            <Form.Item label="Номер крупного пожара" name="numberFireBig">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
              <div style={{ position: 'absolute', right: 0, bottom: -30 }}>
                <Button className="font14-20-semi-bold p0" type="link">Получить номер</Button>
              </div>
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="Номер пожара по авиаотделению" name="numberFireAvia">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
              <div style={{ position: 'absolute', right: 0, bottom: -30 }}>
                <Button className="font14-20-semi-bold p0" type="link">Получить номер</Button>
              </div>
            </Form.Item>
            <Form.Item label="Номер ИСДМ" name="numberIdsm">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="Номер пожара по лесничеству" name="numberFireForestry">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
              <div style={{ position: 'absolute', right: 0, bottom: -30 }}>
                <Button className="font14-20-semi-bold p0" type="link">Получить номер</Button>
              </div>
            </Form.Item>
          </div>
        </div>
      </WhiteBox>

      <WhiteBox style={{ marginBottom: 12 }}>
        <div
          className="font16-24-semi-bold colorPrimaryBlack"
          style={{ marginBottom: 16 }}
        >
          Время
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ width: '30%' }}>
            <Form.Item label="Обнаружение пожара" name="fireDetection">
              <DatePicker
                showTime
                style={{ marginRight: 12, marginBottom: 20, width: '100%' }}
                placeholder="Выберите данные"
              />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="Первое сообщение о пожаре" name="firstMessage">
              <DatePicker
                showTime
                style={{ marginRight: 12, marginBottom: 20, width: '100%' }}
                placeholder="Выберите данные"
              />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="Начало тушения пожара" name="startExtinguishing">
              <DatePicker
                showTime
                style={{ marginRight: 12, marginBottom: 20, width: '100%' }}
                placeholder="Выберите данные"
              />
            </Form.Item>
          </div>
        </div>
      </WhiteBox>

      <WhiteBox style={{ marginBottom: 12 }}>
        <div
          className="font16-24-semi-bold colorPrimaryBlack"
          style={{ marginBottom: 16 }}
        >
          Координаты и расстояния
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ width: '30%' }}>
            <Form.Item label="Широта" name="latitude">
              <Input suffix={
                <CompassIcon style={{ color: 'rgba(0,0,0,.45)' }} />
              }
              />
            </Form.Item>
            <Form.Item label="Ближайший населенный пункт" name="nearVillage">
              <Input suffix={
                <CompassIcon style={{ color: 'rgba(0,0,0,.45)' }} />
              }
              />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="Долгота" name="longitude">
              <Input suffix={
                <CompassIcon style={{ color: 'rgba(0,0,0,.45)' }} />
              }
              />
            </Form.Item>
            <Form.Item label="Азимут от/до населенного пункта" name="azimuthVillage">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="Административный район" name="adminDistrict">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
            <Form.Item label="Азимут от/до населенного пункта" name="rangeVillage">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </div>
        </div>

        <BorderedBlock size="lg">
          <TitleWithActions
            title="Расстояния до ближайших объектов"
            className="mb20"
            fontClass="font16-24-semi-bold"
            actions={(
              <>
                <Button type="primary" ghost style={{ marginRight: 16 }} color="black">
                  Карта
                </Button>
                <Button type="primary" color="black">
                  Рассчитать
                </Button>
              </>
            )}
          />

          <Table
            size="small"
            pagination={false}
            columns={columnsDistanceVillage}
            dataSource={[
              {
                key: '1',
                title: 'Село Росинка',
                distance: 32,
                azimuth: 1233
              }
            ]}
          />

        </BorderedBlock>
      </WhiteBox>

      <WhiteBox style={{ marginBottom: 12 }}>
        <div
          className="font16-24-semi-bold colorPrimaryBlack"
          style={{ marginBottom: 16 }}
        >
          Характеристики местности и пожара
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ width: '30%' }}>
            <Form.Item label="Порода" name="reason">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
            <Form.Item label="Категория лесных и нелесных земель" name="categoryLands">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
            <Form.Item label="Арендатор" name="renter">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="Покров" name="cover">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
            <Form.Item label="Причина пожара" name="fireReason">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="Целевое назначение лесов" name="purposeForest">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
            <Form.Item label="Способ обнаружения" name="detectionMethod">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
          </div>
        </div>
      </WhiteBox>

      <WhiteBox style={{ marginBottom: 12 }}>
        <div
          className="font16-24-semi-bold colorPrimaryBlack"
          style={{ marginBottom: 16 }}
        >
          Метеоинформация
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ width: '20%' }}>
            <Form.Item label="КПО в день обнаружения" name="kpoStartDay">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
          </div>
          <div style={{ width: '20%' }}>
            <Form.Item label="КПО в день ликвидации" name="kpoEndDay">
              <Select
                defaultValue="first"
                style={{ width: '100%' }}
                options={[
                  { value: 'first', label: 'Первое' },
                  { value: 'second', label: 'Второе' },
                  { value: 'third', label: 'Третье' },
                ]}
              />
            </Form.Item>
          </div>
          <div style={{ width: '20%' }}>
            <Form.Item label="Ветер, м/с" name="windSpeed">
              <InputNumber
                style={{ marginRight: 12, width: '100%' }}
                placeholder="Выберите данные"
              />
            </Form.Item>
          </div>
          <div style={{ width: '20%' }}>
            <Form.Item
              label="Дата фронтальных осадков"
              name="dateRainfall"
            >
              <DatePicker
                style={{ marginRight: 12, width: '100%' }}
                placeholder="Выберите данные"
              />
            </Form.Item>
          </div>
        </div>
      </WhiteBox>

      <WhiteBox style={{ marginBottom: 12 }}>
        <div
          className="font16-24-semi-bold colorPrimaryBlack"
          style={{ marginBottom: 16 }}
        >
          Затраты, руб.
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ width: '30%' }}>
            <Form.Item label="Прямые затраты субъекта РФ на тушение" name="directCost">
              <InputNumber
                style={{ marginRight: 12, width: '100%' }}
                placeholder="Выберите данные"
              />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="В т.ч. стоимость услуг по найму ВС" name="costHiring">
              <InputNumber
                style={{ marginRight: 12, width: '100%' }}
                placeholder="Выберите данные"
              />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="Общий ущерб" name="generalDamage">
              <InputNumber
                style={{ marginRight: 12, width: '100%' }}
                placeholder="Выберите данные"
              />
            </Form.Item>
          </div>
        </div>
      </WhiteBox>

      <WhiteBox style={{ marginBottom: 12 }}>
        <div
          className="font16-24-semi-bold colorPrimaryBlack"
          style={{ marginBottom: 16 }}
        >
          Акт о лесном пожаре
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ width: '30%' }}>
            <Form.Item label="Дата акта (протокола)" name="dateProtocol">
              <DatePicker
                showTime={false}
                style={{ marginRight: 12, width: '100%' }}
                placeholder="Выберите данные"
              />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }}>
            <Form.Item label="Номер акта (протокола)" name="numberProtocol">
              <Input placeholder="Введите данные" />
            </Form.Item>
          </div>
          <div style={{ width: '30%' }} />
        </div>
      </WhiteBox>

      <WhiteBox style={{ marginBottom: 12 }}>
        <div
          className="font16-24-semi-bold colorPrimaryBlack"
          style={{ marginBottom: 16 }}
        >
          Примечание
        </div>
        <Form.Item label="Особые отметки" name="specialMarks">
          <TextArea
            autoSize={{ minRows: 3, maxRows: 5 }}
            style={{ width: '100%' }}
            placeholder="Введите данные"
          />
        </Form.Item>
      </WhiteBox>

      <WhiteBox style={{ marginBottom: 64 }}>
        <div
          className="font16-24-semi-bold colorPrimaryBlack"
          style={{ marginBottom: 16 }}
        >
          Информация по последней динамике
        </div>

        <StatisticInfoRow
          type="info-value-meta"
          style={{
            marginBottom: 12
          }}
          value="01.03.2022 07:00"
          info="Время"
        />
        <StatisticInfoRow
          type="info-value-meta"
          style={{
            marginBottom: 12
          }}
          value="-"
          info="Состояние"
        />
        <StatisticInfoRow
          type="info-value-meta"
          style={{
            marginBottom: 12
          }}
          value="Покрытая: 0 Непокрытая: 0 Нелесная: 0"
          info="Площадь пожара"
        />
        <StatisticInfoRow
          type="info-value-meta"
          style={{
            marginBottom: 12
          }}
          value="0"
          info="Силы"
        />
        <StatisticInfoRow
          type="info-value-meta"
          style={{
            marginBottom: 12
          }}
          value="0"
          info="Средства"
        />
        <StatisticInfoRow
          type="info-value-meta"
          style={{
            marginBottom: 12
          }}
          value="Отсутствует метеоинформация в карточке пожара"
          info="Нормативная численность людей"
        />
        <StatisticInfoRow
          type="info-value-meta"
          style={{
            marginBottom: 12
          }}
          value="Отсутствует метеоинформация в карточке пожара"
          info="Нормативная численность техники"
        />

      </WhiteBox>

      <BottomFormActions />
    </Form>
  );
}

export function DataAddFirePage() {
  const navigate = useNavigate();


  const handleChangeStartDate = (date) => {};

  const handleChangeTab = (key) => {
    console.log(key);
  };


  return (
    <div className="data-page">
      <Tabs
        style={{ marginBottom: 20 }}
        onChange={handleChangeTab}
        type="card"
        items={[{
          key: 'new-fire',
          label: 'Новый пожар',
          children: <NewFireForm />,
        },
        {
          key: 'fly',
          label: 'Налеты ВС',
          children: <FlightsFormActions />,
        },
        ]}
      />

    </div>
  );
}
