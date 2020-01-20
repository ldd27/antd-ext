import React from 'react';
import Table from '../Table';

const CusTable = ({ actions, onEdit, onDel, ...restProps }) => {
  const tableProps = {
    ...restProps,
  };

  return <Table {...tableProps} />;
};

export default CusTable;
