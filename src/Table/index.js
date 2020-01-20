import React from 'react';
import { Table as ATable } from 'antd';
import dayjs from 'dayjs';
import { warning } from '../util/warning';

const Table = ({ ...restProps }) => {
  const { pagination, showIndex } = restProps;
  const tableProps = {
    pagination: pagination ? { hideOnSinglePage: true, ...pagination } : false,
    bordered: true,
    size: 'small',
    rowKey: 'id',
    ...restProps,
  };

  // warning(!('showIndex' in restProps), `showIndex is remove, please use dataType:'index'`);
  warning('rowKey' in restProps, `rowKey is missing, please set rowKey`);

  if (showIndex) {
    tableProps.columns = [
      {
        title: '序号',
        width: 60,
        dataType: 'index',
      },
      ...tableProps.columns,
    ];
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < tableProps.columns.length; i++) {
    const col = tableProps.columns[i];
    col.key = i;
    if (!col.align) {
      col.align = 'center';
    }

    switch (col.dataType) {
      case 'index':
        tableProps.columns[i].render = (text, row, index) => {
          if (pagination) {
            const { current, pageSize } = pagination;
            return (current - 1) * pageSize + index + 1;
          }
          return index + 1;
        };
        break;
      case 'dateTime':
        tableProps.columns[i].render = text => dayjs.unix(text).format('YYYY-MM-DD HH:mm:ss');
        break;
      case 'date':
        tableProps.columns[i].render = text => dayjs.unix(text).format('YYYY-MM-DD');
        break;
      case 'time':
        tableProps.columns[i].render = text => dayjs.unix(text).format('HH:mm:ss');
        break;
      default:
        break;
    }

    if (col.dataEnum) {
      tableProps.columns[i].render = text => {
        if (text in col.dataEnum) {
          return col.dataEnum[text];
        }
        return text;
      };
    }
  }

  return <ATable {...tableProps} />;
};

export default Table;
