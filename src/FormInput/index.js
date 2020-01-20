import React from 'react';
import { Input } from 'antd';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../util';

const FormInput = props => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const { name } = formItemProps;
  const { editable } = props;

  if (editable === false) {
    return <FormLabel {...formItemProps}>{({ getFieldValue }) => getFieldValue()[name]}</FormLabel>;
  }

  return (
    <FormItem {...formItemProps}>
      <Input {...restProps} />
    </FormItem>
  );
};

export default FormInput;
