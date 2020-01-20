import React from 'react';
import { Radio } from 'antd';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../util';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const FormRadio = props => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const { name, editable } = formItemProps;
  const { options = [], ...radioProps } = restProps;

  if (editable === false) {
    return (
      <FormLabel {...formItemProps}>
        {({ getFieldValue }) => options.find(f => getFieldValue()[name] === f.value)?.label}
      </FormLabel>
    );
  }

  return (
    <FormItem {...formItemProps}>
      <RadioGroup buttonStyle="solid" {...radioProps}>
        {options.map(option => (
          <RadioButton key={option.value} value={option.value}>
            {option.label}
          </RadioButton>
        ))}
      </RadioGroup>
    </FormItem>
  );
};

export default FormRadio;
