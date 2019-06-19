import React from "react";
import { Table } from "antd";
import Ellipsis from "../Ellipsis";

const DDTable = ({ page, showScroll, showIndex, ...tableProps }) => {
  const current = tableProps.pagination && (tableProps.pagination.current || 1);
  const pageSize =
    tableProps.pagination && (tableProps.pagination.pageSize || 10);
  const total = tableProps.pagination && (tableProps.pagination.total || 0);

  if (showIndex) {
    tableProps.columns = [
      {
        title: "序号",
        dataIndex: "columnIndex",
        width: 60,
        align: "center",
        render: (text, row, index) => {
          if (tableProps.pagination) {
            return (current - 1) * pageSize + index + 1;
          }
          return index + 1;
        }
      },
      ...tableProps.columns
    ];
  }

  // 生成key，aligin属性
  for (let i = 0; i < tableProps.columns.length; i++) {
    const col = tableProps.columns[i];
    col.key = i;
    if (!col.align) {
      col.align = "center";
    }
    if (col.max) {
      if (tableProps.columns[i].render) {
        tableProps.columns[i].render = (text, row, index) => {
          const rs = tableProps.columns[i].render(text, row, index);
          return <Ellipsis title={rs} max={col.max} />;
        };
      } else {
        tableProps.columns[i].render = (text, row, index) => {
          return <Ellipsis title={text} max={col.max} />;
        };
      }
    }
  }

  const newTableProps = {
    ...tableProps,
    pagination:
      tableProps.pagination && total > pageSize ? tableProps.pagination : false,
    size: tableProps.size ? tableProps.size : "small",
    bordered: tableProps.bordered !== undefined ? tableProps.bordered : true
    // scroll: showScroll ? { x: 1024 } : {},
  };
  return <Table {...newTableProps} />;
};

export default DDTable;
