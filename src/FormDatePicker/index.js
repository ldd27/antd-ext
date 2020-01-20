import React from 'react';
import DatePicker from '../DatePicker';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../util';

const FormDatePicker = props => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const { name, editable } = formItemProps;
  const { format = 'YYYY-MM-DD' } = restProps;

  if (editable === false) {
    return (
      <FormLabel {...formItemProps}>
        {({ getFieldValue }) => getFieldValue()[name].format(format)}
      </FormLabel>
    );
  }

  return (
    <FormItem {...formItemProps}>
      <DatePicker style={{ width: '100%' }} {...restProps} format={format} />
    </FormItem>
  );
};

export default FormDatePicker;
