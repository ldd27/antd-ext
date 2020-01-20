import React, { Fragment, useState } from 'react';
import { Button } from 'antd';
import { Modal } from '../../../../dist';

const Index = () => {
  const [visible, setVisible] = useState(false);
  const modalProps = {
    visible,
    modalType: 'detail',
    title: 'modal',
    onCancel() {
      setVisible(false);
    },
  };
  return (
    <Fragment>
      <Button onClick={() => setVisible(true)}>modal</Button>
      <Modal {...modalProps}>this is modal</Modal>
    </Fragment>
  );
};

export default Index;
