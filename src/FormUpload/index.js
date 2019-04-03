import React from 'react';
import FormItem from '../FormItem';
import Upload from '../Upload';
import { getFormItemProps } from '../utils';

const FormUpload = (props) => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const {
    editable,
    children,
    init,
  } = props;

  if (editable === false) {
    return (
      <FormItem {...formItemProps} form={undefined}>
        {/* <Image src={init && init.full_url} style={imageStyle} preview={preview} /> */}
        {children(init)}
      </FormItem>
    );
  }

  return (
    <FormItem {...formItemProps}>
      <Upload {...restProps} />
    </FormItem>
  );
};

export default FormUpload;
