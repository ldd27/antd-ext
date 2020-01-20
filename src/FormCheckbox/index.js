import React from 'react';
import { Checkbox } from 'antd';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../util';

const CheckboxGroup = Checkbox.Group;
const FormCheckbox = props => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const { name, editable } = formItemProps;
  const { options = [] } = restProps;

  if (editable === false) {
    return (
      <FormLabel {...formItemProps}>
        {({ getFieldValue }) =>
          options
            .filter(f => getFieldValue()[name].includes(f.value))
            .map(m => m.label)
            .join(',')
        }
      </FormLabel>
    );
  }

  return (
    <FormItem {...formItemProps}>
      <CheckboxGroup {...restProps} />
    </FormItem>
  );
};

export default FormCheckbox;
