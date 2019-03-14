import React from 'react';
import { Modal, Button } from 'antd';

const DDModal = ({ children, modalType, centered = true, ...modalProps }) => {
  const footer = [];
  if (modalType === 'detail') {
    footer.push(<Button key="back" type="ghost" onClick={modalProps.onCancel}>关闭</Button>);
    modalProps = {
      ...modalProps,
      footer,
    };
  } else {
    modalProps = {
      ...modalProps,
    };
  }

  modalProps = {
    ...modalProps,
    centered,
  }

  return (
    <Modal {...modalProps}>
      {children}
    </Modal>
  );
};

export default DDModal;