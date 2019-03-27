import React from 'react';
import { Input } from 'antd';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../utils';

const { TextArea } = Input;
const FormTextArea = (props) => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const {
    editable,
    autosize = true,
  } = props;

  if (editable === false) {
    return (
      <FormLabel {...formItemProps} form={undefined} />
    );
  }

  return (
    <FormItem {...formItemProps}>
      <TextArea autosize={autosize} {...restProps} />
    </FormItem>
  );
};

export default FormTextArea;
