import React from 'react';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import Input from '../Input';
import { getFormItemProps } from '../utils';

const FormInput = (props) => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const {
    editable,
    init,
  } = props;

  if (editable === false) {
    return (
      <FormLabel {...formItemProps} />
    );
  }

  let newProps = {
    ...formItemProps,
  }
  if (formItemProps.rules && formItemProps.rules.includes('number')) {
    newProps = {
      ...newProps,
      initialValue: init ? init.toString() : '',
      getValueFromEvent(e) {
        if (!e || !e.target) {
          return e;
        }
        const { target } = e;

        if (target.value === '' || isNaN(target.value)) {
          return target.value;
        }

        return parseInt(target.value, 10);
      }
    }
  }

  return (
    <FormItem {...newProps}>
      <Input {...restProps} />
    </FormItem>
  );
};

export default FormInput;
