import React from 'react';
import { Switch } from 'antd';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../utils';

const FormSwitch = (props) => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const {
    init,
    editable,
    checkedChildren,
    unCheckedChildren,
  } = props;

  if (editable === false) {
    return (
      <FormLabel {...formItemProps} init={init ? checkedChildren : unCheckedChildren} />
    );
  }

  return (
    <FormItem {...formItemProps} valuePropName="checked">
      <Switch {...restProps} />
    </FormItem>
  );
};

export default FormSwitch;