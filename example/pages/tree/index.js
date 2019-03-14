import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Tree } from '../../../dist';

class ExampleTree extends Component {
  state = {
    dataSource: [
      {
        key: '1',
        title: '11',
        data: {
          a: 1
        },
        children: [
          {
            key: '2',
            title: '22',
            data: {
              a: 2
            }
          }
        ]
      }
    ],
    selectTree: null,
  }

  render() {
    const { dataSource, selectTree } = this.state;
    const that = this;
    const treeProps = {
      dataSource,
      selectTree,
      defaultExpandAll: false,
      defaultExpandedKeys: [dataSource.map(m => m.key)],
      onSelect(data) {
        console.log(data)
        that.setState({
          selectTree: data
        })
      }
    }
    return (
      <div style={{ marginLeft: 300 }}>
        <Tree {...treeProps} />
      </div>
    );
  }
}

export default ExampleTree;