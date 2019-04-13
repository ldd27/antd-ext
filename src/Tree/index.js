import React from 'react';
import { Tree, Spin } from 'antd';

const { TreeNode } = Tree;
const DDTree = ({
  selectTree,
  dataSource,
  title,
  onSelect,
  directoryTree,
  loading,
  empty,
  ...treeProps
}) => {
  selectTree = selectTree || {};
  dataSource = dataSource || [];
  // // 产生keys
  // const genKeys = (prefix, nodes) => {
  //   for (let i = 0; i < nodes.length; i++) {
  //     nodes[i].key = `${prefix}-${i}`
  //     genKeys(nodes[i].key, nodes[i].children)
  //   }
  // }
  // genKeys(dataSource)
  const getTitle = (item) => {
    if (typeof title === 'function') {
      return title(item);
    }
    return item[title || 'title'];
  };
  const genTreeNodes = (data, selectedKeys) => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={getTitle(item, selectedKeys)} disabled={item.disabled} key={`${item.key}`} dataRef={item}>
          {genTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return (<TreeNode title={getTitle(item, selectedKeys)} disabled={item.disabled} isLeaf={item.isLeaf} key={`${item.key}`} dataRef={item} />);
  });
  const getTreeKeys = (nodes) => {
    if (!nodes || nodes.length === 0) {
      return [];
    }
    const keys = [];
    nodes.forEach((node) => {
      keys.push(node.key);
      const childKeys = getTreeKeys(node.children);
      if (childKeys && childKeys.length > 0) {
        childKeys.forEach(child => keys.push(child));
      }
    });
    return keys;
  };

  const getTreeData = (key, nodes, equalObj) => {
    if (!nodes || nodes.length === 0) {
      return null;
    }
    let obj = null;
    nodes.every((node) => {
      if ((equalObj && node.data === key) || (!equalObj && node.key === key)) {
        obj = node;
        return false;
      }
      obj = getTreeData(key, node.children, equalObj);
      if (obj) {
        return false;
      }
      return true;
    });
    return obj;
  };

  const selectedKeys = getTreeData(selectTree, dataSource, true);

  treeProps = {
    showLine: true,
    defaultExpandAll: true,
    blockNode: true,
    defaultExpandedKeys: getTreeKeys(dataSource),
    selectedKeys: [(selectedKeys || {}).key],
    onSelect(keys) {
      if (!keys || keys.length === 0) {
        const obj = selectedKeys;
        onSelect(obj.data, obj);
      } else {
        const obj = getTreeData(keys[0], dataSource);
        onSelect(obj.data, obj);
      }
    },
    ...treeProps,
  };

  if (treeProps.defaultExpandAll) {
    delete treeProps.defaultExpandedKeys;
  }

  const treeStyle = {
    height: '100%',
    overflowY: 'auto',
  };

  if (loading) {
    return <Spin spinning />;
  }

  if (dataSource.length === 0) {
    if (empty) return empty;
    return <span>暂无数据</span>;
  }

  if (directoryTree) {
    return (
      <Tree.DirectoryTree
        {...treeProps}
        style={treeStyle}
      >
        {genTreeNodes(dataSource, selectedKeys)}
      </Tree.DirectoryTree>
    )
  }

  return (
    <Tree
      {...treeProps}
      style={treeStyle}
    >
      {genTreeNodes(dataSource, selectedKeys)}
    </Tree>
  );
};

export default DDTree;