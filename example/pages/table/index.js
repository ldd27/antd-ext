import React, { Component } from 'react';
import { Table } from '../../../dist';

class ExampleTable extends Component {
  render() {
    const tableProps = {
      dataSource: [
        {
          xx: '123123123123123123123123',
        },
      ],
      columns: [
        {
          title: 'xx',
          dataIndex: 'xx',
          // width: 40,
          ellipsis: true,
          render(value) {
            // return <div>{value}</div>;
            return value;
          },
        },
        {
          title: 'xx',
          dataIndex: 'xx',
          ellipsis: true,
          render(value) {
            return <div>{value}</div>;
          },
        },
        {
          title: 'xx',
          dataIndex: 'xx',
          ellipsis: true,
          render(value) {
            return <div>{value}</div>;
          },
        },
        {
          title: 'xx',
          dataIndex: 'xx',
          ellipsis: true,
          render(value) {
            return <div>{value}</div>;
          },
        },
        {
          title: 'xx',
          dataIndex: 'xx',
          ellipsis: true,
          render(value) {
            return <div>{value}</div>;
          },
        },
      ],
    };

    return (
      <div style={{ width: 300, margin: '0 auto' }}>
        <Table {...tableProps} />
      </div>
    );
  }
}

export default ExampleTable;
