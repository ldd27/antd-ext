import React from 'react';
import { Radio } from 'antd';
import find from 'lodash/find';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import { getFormItemProps } from '../utils';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const FormRadio = (props) => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const {
    init,
    editable,
  } = props;

  const { options, ...radioProps } = restProps;

  if (editable === false) {
    const obj = find(options, o => o.value === init);

    return (
      <FormLabel {...formItemProps} init={obj && obj.label} />
    );
  }

  return (
    <FormItem {...formItemProps}>
      <RadioGroup {...radioProps}>
        {
          options.map((option, index) =>
            (
              <RadioButton
                key={index}
                value={option.value}
              >
                {option.label}
              </RadioButton>
            ))
        }
      </RadioGroup>
    </FormItem>
  );
};

export default FormRadio;