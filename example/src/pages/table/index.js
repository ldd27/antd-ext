import React, { Fragment } from 'react';
import dayjs from 'dayjs';
import { Table } from '../../../../dist';

const Index = () => {
  const columns = [
    {
      title: '序号',
      width: 60,
      dataType: 'index',
    },
    {
      title: 'dateTime',
      dataIndex: 'dateTime',
      dataType: 'dateTime',
    },
    {
      title: 'date',
      dataIndex: 'date',
      dataType: 'date',
    },
    {
      title: 'time',
      dataIndex: 'time',
      dataType: 'time',
    },
    {
      title: 'enum',
      dataIndex: 'enum',
      dataEnum: {
        1: 'enum1',
        2: 'enum2',
        3: 'enum3',
      },
    },
  ];
  const tableProps = {
    rowKey: 'id',
    columns,
    dataSource: [
      {
        id: 1,
        dateTime: dayjs().unix(),
        date: dayjs().unix(),
        time: dayjs().unix(),
        enum: 0,
      },
      {
        id: 2,
        dateTime: dayjs().unix(),
        date: dayjs().unix(),
        time: dayjs().unix(),
        enum: 1,
      },
      {
        id: 3,
        dateTime: dayjs().unix(),
        date: dayjs().unix(),
        time: dayjs().unix(),
        enum: 2,
      },
      {
        id: 4,
        dateTime: dayjs().unix(),
        date: dayjs().unix(),
        time: dayjs().unix(),
        enum: 3,
      },
    ],
    // showIndex: true,
  };
  return (
    <Fragment>
      <Table {...tableProps} />
    </Fragment>
  );
};

export default Index;
