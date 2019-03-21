import React from 'react';
import FormItem from '../FormItem';
import Upload from '../Upload';
import Image from '../Image';
import { getFormItemProps } from '../utils';

const FormUpload = (props) => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const {
    editable,
    init,
    preview,
    imageStyle = {
      width: 128,
      height: 128,
      margin: -1,
    },
  } = props;

  if (editable === false) {
    return (
      <FormItem {...formItemProps}>
        <Image src={init && init.full_url} style={imageStyle} preview={preview} />
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
