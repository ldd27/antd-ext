import React from 'react';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import Input from '../Input';
import { getFormItemProps } from '../utils';

const FormInput = (props) => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const {
    editable,
  } = props;

  if (editable === false) {
    return (
      <FormLabel {...formItemProps} />
    );
  }

  return (
    <FormItem {...formItemProps}>
      <Input {...restProps} />
    </FormItem>
  );
};

export default FormInput;
