import React from 'react';
import { Form } from 'antd';
import { createRules } from '../utils';

const FormItem = ({
  id,
  init,
  required,
  showRequired,
  rules,
  url,
  idCard,
  max,
  phone,
  telephone,
  numberAndLetter,
  email,
  specialChar,
  ip,
  labelCol,
  wrapperCol,
  label,
  form,
  editable,
  help,
  children,
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
      required={inputPorps.editable && required && showRequired}
    >
      {
        getFieldDecorator(id, {
          initialValue: init,
          rules: createRules(label, id, rules),
        })(children)
      }
    </Form.Item>
  );
};

export default FormItem;
