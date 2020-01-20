import React from 'react';
import TimePicker from '../TimePicker';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../util';

const FormTimePicker = props => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const { name, editable } = formItemProps;
  const { format = 'HH:mm:ss' } = restProps;

  if (editable === false) {
    return (
      <FormLabel {...formItemProps}>
        {({ getFieldValue }) => getFieldValue()[name].format(format)}
      </FormLabel>
    );
  }

  return (
    <FormItem {...formItemProps}>
      <TimePicker style={{ width: '100%' }} {...restProps} format={format} />
    </FormItem>
  );
};

export default FormTimePicker;
