import React from 'react';
import FormItem from '../FormItem';
import Upload from '../Upload';
import { getFormItemProps } from '../utils';
import styles from './index.less'

const FormUpload = (props) => {
  const [formItemProps, restProps] = getFormItemProps(props);
  const {
    editable,
    init,
    style = {
      width: 128,
      height: 128,
      margin: -1,
    },
  } = props;

  if (editable === false) {
    return (
      <FormItem {...formItemProps}>
        <img src={init && init.full_url} alt="" style={style} />
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
