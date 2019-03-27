import React from 'react';
import { InputNumber } from 'antd';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../utils';

const FormInputNumber = (props) => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const {
    editable,
  } = props;

  if (editable === false) {
    return (
      <FormLabel {...formItemProps} form={undefined} />
    );
  }

  return (
    <FormItem {...formItemProps}>
      <InputNumber {...restProps} />
    </FormItem>
  );
};

export default FormInputNumber;
