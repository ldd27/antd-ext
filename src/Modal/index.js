import React from 'react';
import { Modal as AModal, Button } from 'antd';

const Modal = ({ visible, children, modalType, ...restProps }) => {
  let modalProps = {};

  if (modalType === 'detail') {
    modalProps = {
      ...modalProps,
      footer: [
        <Button key="back" type="ghost" onClick={restProps.onCancel}>
          关闭
        </Button>,
      ],
    };
  }

  modalProps = {
    ...modalProps,
    centered: true,
    destroyOnClose: true,
    ...restProps,
    visible,
  };

  return <AModal {...modalProps}>{children}</AModal>;
};

export default Modal;
