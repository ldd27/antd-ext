import React from "react";
import { Checkbox } from "antd";
import find from "lodash/find";
import FormItem from "../FormItem";
import FormLabel from "../FormLabel";
import { getFormItemProps } from "../utils";

const CheckboxGroup = Checkbox.Group;
const FormCheckbox = props => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const { init, editable } = props;

  const { options, ...checkboxProps } = restProps;

  if (editable === false) {
    const obj = find(options, o => o.value === init);

    return <FormLabel {...formItemProps} init={obj && obj.label} />;
  }

  return (
    <FormItem {...formItemProps}>
      <CheckboxGroup {...checkboxProps}>
        {options.map((option, index) => (
          <Checkbox key={index} value={option.value}>
            {option.label}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </FormItem>
  );
};

export default FormCheckbox;
