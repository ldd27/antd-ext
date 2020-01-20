import React from 'react';
import Link from 'umi/link';
import { Menu } from 'antd';
import styles from './index.less';

function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', height: '100%' }}
        >
          <div className={styles.title}>Antd Ext Example</div>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/modal">Modal</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/image">Image</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/table">Table</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/form">Form</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/crud">CRUD</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className={styles.right}>{props.children}</div>
    </div>
  );
}

export default BasicLayout;
