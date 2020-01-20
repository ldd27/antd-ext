import React, { Fragment } from 'react';
import FormItem from '../FormItem';

const FormLabel = ({ name, labelCol, wrapperCol, label, style, before, after, children }) => {
  const readonly = {
    // border: 'none',
    // borderBottom: '1px solid #d9d9d9',
    // backgroundColor: '#fff',
    // color: 'rgba(0, 0, 0, 0.65)',
    // borderRadius: 0,
    // minHeight: 32,
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
  };
  return (
    <FormItem label={label} labelCol={labelCol} wrapperCol={wrapperCol} shouldUpdate>
      {_props => (
        <Fragment>
          <div style={{ ...readonly, ...style }}>
            {before}
            {children(_props)}
            {after}
          </div>
        </Fragment>
      )}
    </FormItem>
  );
};

export default FormLabel;
