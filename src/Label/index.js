import React, { Component } from 'react';

class DDLabel extends Component {
  render() {
    const readonly = {
      border: 'none',
      borderBottom: '1px solid #d9d9d9',
      backgroundColor: '#fff',
      color: 'rgba(0, 0, 0, 0.65)',
      borderRadius: 0,
      minHeight: 32,
      wordWrap: 'break-word',
      whiteSpace: 'pre-wrap',
    };
    return (
      <div style={readonly}>
        {this.props.children}
      </div>
    );
  }
}

export default DDLabel;