import React, { Children } from 'react';
import { Form } from 'antd';
import { getFormItemProps } from '../utils';

class DDForm extends Form {

  renderChildren(children, form) {
    return Children.map(children, child => {
      const { id, ...childProps } = child.props;
      if (id === undefined) {
        const newChildren = this.renderChildren(child.props.children, form)
        return { ...child, props: { ...childProps, children: newChildren } }
      }
      
      return React.cloneElement(child, {
        form,
      })
    })
  }

  render() {
    const { children, api, ...formPorps } = this.props;
    return (
      <Form {...formPorps}>
        {this.renderChildren(children, api)}        
      </Form>
    );
  }
}

export default DDForm;