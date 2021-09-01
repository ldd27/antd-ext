import React, { Fragment } from 'react';
import { Form } from 'antd';
import { createRules } from '../util';
import { warning } from '../util/warning';

const checkRequired = (required, rules) => {
  if (required !== undefined) return { required: required };
  if (!rules) return {};
  return rules.includes('required') ? { required: true } : {};
};

const FormItem = props => {
  const {
    id,
    colon,
    dependencies,
    extra,
    getValueFromEvent,
    hasFeedback,
    help,
    htmlFor,
    noStyle,
    label,
    labelAlign,
    labelCol,
    name,
    normalize,
    required,
    rules,
    shouldUpdate,
    trigger,
    validateStatus,
    validateTrigger,
    valuePropName,
    wrapperCol,
    editable = true,
    children,
    before,
    after,
    show,
  } = props;

  warning(!('id' in props) || !props.id, `id[${id}] is remove, please use name`);

  const layout = {
    labelCol,
    wrapperCol,
  };
  if (!labelCol) delete layout.labelCol;
  if (!wrapperCol) delete layout.wrapperCol;

  const newRules = createRules(label, name || id, rules);
  if (!editable) {
    return (
      <Form.Item
        label={label}
        {...layout}
        help={help}
        extra={extra}
        valuePropName={valuePropName}
        getValueFromEvent={getValueFromEvent}
        shouldUpdate
        noStyle={noStyle}
      >
        {({ getFieldValue }) => (
          <Fragment>
            {before}
            {getFieldValue()[name || id]}
            {after}
          </Fragment>
        )}
      </Form.Item>
    );
  }

  if (show) {
    return (
      <FormItem noStyle shouldUpdate>
        {_props => {
          if (!show(_props)) return null;
          return (
            <Form.Item
              name={name || id}
              label={label}
              {...layout}
              help={help}
              extra={extra}
              {...checkRequired(required)}
              rules={newRules}
              valuePropName={valuePropName}
              getValueFromEvent={getValueFromEvent}
              shouldUpdate={shouldUpdate}
              noStyle={noStyle}
            >
              {/* {before} */}
              {children}
              {/* {after} */}
            </Form.Item>
          );
        }}
      </FormItem>
    );
  }

  if (before || after) {
    return (
      <Form.Item
        label={label}
        {...layout}
        help={help}
        extra={extra}
        {...checkRequired(required, rules)}
        rules={newRules}
        noStyle={noStyle}
      >
        {before ? <Form.Item noStyle>{before}</Form.Item> : null}
        <Form.Item
          name={name || id}
          rules={newRules}
          valuePropName={valuePropName}
          getValueFromEvent={getValueFromEvent}
          shouldUpdate={shouldUpdate}
          noStyle
        >
          {children}
        </Form.Item>
        {after ? <Form.Item noStyle>{after}</Form.Item> : null}
      </Form.Item>
    );
  }

  return (
    <Form.Item
      name={name || id}
      label={label}
      {...layout}
      help={help}
      extra={extra}
      {...checkRequired(required)}
      rules={newRules}
      valuePropName={valuePropName}
      getValueFromEvent={getValueFromEvent}
      shouldUpdate={shouldUpdate}
      noStyle={noStyle}
    >
      {children}
    </Form.Item>
  );
};

export default FormItem;
