import React from 'react';
import { DatePicker } from 'antd';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../utils';

const FormDatePicker = (props) => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const {
    editable,
    init,
    format = 'YYYY-MM-DD HH:mm:ss',
  } = props;

  if (editable === false) {
    return (
      <FormLabel {...formItemProps} init={init ? init.format(format) : null} />
    );
  }

  return (
    <FormItem {...formItemProps}>
      <DatePicker {...restProps} format={format} />
    </FormItem>
  );
};

export default FormDatePicker;
