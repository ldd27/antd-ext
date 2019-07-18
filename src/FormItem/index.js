import React, { Component } from 'react';
import { Form } from 'antd';
import { createRules } from '../utils';

export default class FormItem extends Form.Item {
  componentDidMount() {
    const { form, id, init } = this.props;
    if (!form) return;
    form.setFieldsValue({ [id]: init });
  }

  render() {
    const {
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
      before,
      after,
      ...inputPorps
    } = this.props;

    const layout = {
      labelCol,
      wrapperCol,
    };
    if (!labelCol) delete layout.labelCol;
    if (!wrapperCol) delete layout.wrapperCol;

    if (!form) {
      return (
        <Form.Item label={label} {...layout} help={help} extra={extra}>
          {before}
          {children}
          {after}
        </Form.Item>
      );
    }

    // getFieldDecorator不能装饰纯函数组件
    const { getFieldDecorator } = form;
    return (
      <Form.Item
        label={label}
        {...layout}
        help={help}
        extra={extra}
        required={inputPorps.editable && required && showRequired}
      >
        {before}
        {getFieldDecorator(id, {
          initialValue: init,
          rules: createRules(label, id, rules),
          onChange,
          valuePropName,
          getValueFromEvent,
          validateFirst,
        })(children)}
        {after}
      </Form.Item>
    );
  }
}

// const FormItem = ({
//   id,
//   init,
//   showRequired,
//   rules,
//   labelCol,
//   wrapperCol,
//   label,
//   form,
//   editable,
//   help,
//   extra,
//   children,
//   onChange,
//   getValueFromEvent,
//   valuePropName = "value",
//   validateFirst = true,
//   before,
//   after,
//   ...inputPorps
// }) => {
//   if (!form) {
//     return (
//       <Form.Item label={label} labelCol={labelCol} wrapperCol={wrapperCol}>
//         {children}
//       </Form.Item>
//     );
//   }

//   // getFieldDecorator不能装饰纯函数组件
//   const { getFieldDecorator } = form;

//   return (
//     <Form.Item
//       label={label}
//       labelCol={labelCol}
//       wrapperCol={wrapperCol}
//       help={help}
//       extra={extra}
//       required={inputPorps.editable && required && showRequired}
//     >
//       {before}
//       {getFieldDecorator(id, {
//         initialValue: init,
//         rules: createRules(label, id, rules),
//         onChange,
//         valuePropName,
//         getValueFromEvent,
//         validateFirst
//       })(children)}
//       {after}
//     </Form.Item>
//   );
// };

// export default FormItem;
