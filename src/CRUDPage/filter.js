import React from 'react';
import { Form } from 'antd';

const Filter = ({ form, onSearch, children, initialValues }) => {
  const formProps = {
    form,
    initialValues,
    layout: 'inline',
    style: { marginBottom: 8 },
    onFinish: onSearch,
  };

  return <Form {...formProps}>{children}</Form>;
};

export default Filter;
