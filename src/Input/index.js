import React from 'react';
import { Input } from 'antd';
import Label from '../Label';

class DDInput extends Input {
  render() {
    const { editable = true, ...inputPorps } = this.props;
    if (!editable) {
      return (
        <Label>
          {inputPorps.value}
        </Label>
      );
    }
    return (
      <Input autoComplete="off" {...inputPorps} />
    );
  }
}

export default DDInput;