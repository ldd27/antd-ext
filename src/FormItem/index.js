import React from 'react';
import { Form } from 'antd';
import { createRules } from '../utils';

const FormItem = ({
  id,
  init,
  showRequired,
  rules,
  labelCol,
  wrapperCol,
  label,
  form,
  editable,
  help,
  extra,
  children,
  onChange,
  getValueFromEvent,
  valuePropName = 'value',
  validateFirst = true,
  ...inputPorps
}) => {
  if (!form) {
    return (
      <Form.Item label={label} labelCol={labelCol} wrapperCol={wrapperCol}>
        {children}
      </Form.Item>
    );
  }

  // getFieldDecorator不能装饰纯函数组件
  const { getFieldDecorator } = form;

  return (
    <Form.Item
      label={label}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      help={help}
      extra={extra}
      required={inputPorps.editable && required && showRequired}
    >
      {
        getFieldDecorator(id, {
          initialValue: init,
          rules: createRules(label, id, rules),
          onChange,
          valuePropName,
          getValueFromEvent,
          validateFirst,
        })(children)
      }
    </Form.Item>
  );
};

export default FormItem;
