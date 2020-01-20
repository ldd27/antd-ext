import React from 'react';
import { Select } from 'antd';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps, getSelectLabel } from '../util';

const FormSelect = props => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const { name, editable } = formItemProps;
  const { options = [], optionLabel, optionValue, ...selectProps } = restProps;
  const { labelInValue } = selectProps;

  if (editable === false) {
    return (
      <FormLabel {...formItemProps}>
        {({ getFieldValue }) => {
          let obj = null;
          if (labelInValue) {
            obj = options.find(f => f[optionValue || 'value'] === getFieldValue()[name].key);
          } else {
            obj = options.find(f => f[optionValue || 'value'] === getFieldValue()[name]);
          }
          return obj ? getSelectLabel(obj, optionLabel) : getFieldValue()[name];
        }}
      </FormLabel>
    );
  }

  return (
    <FormItem {...formItemProps}>
      <Select {...selectProps}>
        {options.map(option => (
          <Select.Option
            key={option[optionValue || 'value']}
            value={option[optionValue || 'value']}
          >
            {getSelectLabel(option, optionLabel)}
          </Select.Option>
        ))}
      </Select>
    </FormItem>
  );
};

export default FormSelect;
