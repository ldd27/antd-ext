import React, { Fragment, useState } from 'react';
import { useAntdTable } from '@umijs/hooks';
import Filter from './filter';
import Table from './table';
import FormModal from './form';

const CRUDPage = React.forwardRef(({ form, table, filter }, ref) => {
  const [formProps, setFormProps] = useState({
    visible: false,
    modalType: '',
    currentItem: null,
  });
  const { visible, modalType, currentItem } = formProps;
  const { tableProps, search } = useAntdTable(table.getTableData, {
    defaultPageSize: 15,
    form: filter.form,
  });

  ref.current = {
    search,
    onAdd() {
      setFormProps({ currentItem: {}, modalType: 'add', visible: true });
    },
    onEdit(row) {
      setFormProps({ currentItem: row, modalType: 'edit', visible: true });
    },
  };

  const cusFilterrops = {
    ...filter,
  };

  const cusTableProps = {
    ...table,
    ...tableProps,
  };

  const cusFormProps = {
    modalType,
    item: currentItem,
    visible,
    ...form,
    onCancel() {
      setFormProps({ ...formProps, visible: false });
    },
    onOk(data) {
      form.onOk({ data, modalType, currentItem }).then(() => {
        setFormProps({ ...formProps, visible: false });
      });
    },
  };

  return (
    <Fragment>
      <Filter {...cusFilterrops} />
      <Table {...cusTableProps} />
      <FormModal {...cusFormProps} />
    </Fragment>
  );
});

export default CRUDPage;
