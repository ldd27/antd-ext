import React from 'react';
import { Switch } from 'antd';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../util';

const FormSwitch = props => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const { name } = formItemProps;
  const { editable, checkedChildren, unCheckedChildren } = props;

  if (editable === false) {
    return (
      <FormLabel {...formItemProps}>
        {({ getFieldValue }) => (getFieldValue()[name] ? checkedChildren : unCheckedChildren)}
      </FormLabel>
    );
  }

  return (
    <FormItem {...formItemProps} valuePropName="checked">
      <Switch {...restProps} />
    </FormItem>
  );
};

export default FormSwitch;
