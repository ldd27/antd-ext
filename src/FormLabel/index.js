import React from 'react';
import FormItem from '../FormItem';
import Label from '../Label';

const FormInput = ({
  init,
  labelCol,
  wrapperCol,
  label,
}) => {
  return (
    <FormItem 
      label={label}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
    >
      <Label>
        {init}
      </Label>
    </FormItem>
  );
};

export default FormInput;
