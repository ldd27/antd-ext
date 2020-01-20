import React from 'react';
import { InputNumber } from 'antd';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../util';

const FormInputNumber = props => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const { name } = formItemProps;
  const { editable } = props;

  if (editable === false) {
    return <FormLabel {...formItemProps}>{({ getFieldValue }) => getFieldValue()[name]}</FormLabel>;
  }

  return (
    <FormItem {...formItemProps}>
      <InputNumber style={{ width: '100%' }} {...restProps} />
    </FormItem>
  );
};

export default FormInputNumber;
