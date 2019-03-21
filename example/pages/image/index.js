import React, { Component } from 'react';
import { Image } from '../../../dist';

class ExampleImage extends Component {
  render() {
    return (
      <div style={{ marginLeft: 300 }}>
        <Image src="https://chain-static.codoon.com/upload/2019-03-21/a276000e-621a-4d28-9a24-3d28361e66a3.png!large" />
      </div>
    );
  }
}

export default ExampleImage;