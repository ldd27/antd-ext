import React, { Component } from "react";
import FormItem from "../FormItem";
import { getFormItemProps } from "../utils";

class DDLabel extends Component {
  render() {
    const [formItemProps] = getFormItemProps(this.props);
    const { init } = this.props;

    const readonly = {
      // border: 'none',
      // borderBottom: '1px solid #d9d9d9',
      // backgroundColor: '#fff',
      // color: 'rgba(0, 0, 0, 0.65)',
      // borderRadius: 0,
      minHeight: 32,
      wordWrap: "break-word",
      whiteSpace: "pre-wrap"
    };
    return (
      <FormItem {...formItemProps}>
        <div style={readonly}>{this.props.children}</div>
      </FormItem>
    );
  }
}

export default DDLabel;
