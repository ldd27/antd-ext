import React from 'react';
import { Select } from 'antd';
import find from 'lodash/find';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps, getSelectLabel } from '../utils';

const FormSelect = (props) => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const {
    options,
    optionLabel,
    optionValue,
    editable,
    labelInValue,
    init,
  } = props;

  const newOptions = options || [];
  
  if (editable === false) {
    let obj = null;
    if (labelInValue) {
      obj = find(newOptions, o => o[optionValue || 'value'] === init.key);
    } else {
      obj = find(newOptions, o => o[optionValue || 'value'] === init);
    }
    return (
      <FormLabel
        {...formItemProps}
        init={obj ? getSelectLabel(obj, optionLabel) : init}
      />
    );
  }

  return (
    <FormItem {...formItemProps}>
      <Select {...restProps}>
        {newOptions.map(option => (<Select.Option key={option[optionValue || 'value']} value={option[optionValue || 'value']}>{getSelectLabel(option, optionLabel)}</Select.Option>))}
      </Select>
    </FormItem>
  );
};

export default FormSelect;