import React from 'react';
import { Input } from 'antd';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../util';

const { TextArea } = Input;
const FormTextArea = props => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const { name, editable } = formItemProps;

  if (editable === false) {
    return <FormLabel {...formItemProps}>{({ getFieldValue }) => getFieldValue()[name]}</FormLabel>;
  }

  return (
    <FormItem {...formItemProps}>
      <TextArea autoSize={{ minRows: 3 }} {...restProps} />
    </FormItem>
  );
};

export default FormTextArea;
