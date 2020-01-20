import React from 'react';
import { Form } from 'antd';
import Modal from '../Modal';

const CusForm = ({ item, visible, onCancel, title, children, labelCol, wrapperCol, onOk }) => {
  if (!visible) return null;
  const [form] = Form.useForm();

  const modalProps = {
    title,
    visible,
    onCancel,
    onOk() {
      form.validateFields().then(data => {
        onOk(data);
      });
    },
    afterClose() {
      form.resetFields();
    },
  };

  const formProps = {
    form,
    labelCol,
    wrapperCol,
    initialValues: item,
  };

  return (
    <Modal {...modalProps}>
      <Form {...formProps}>{children}</Form>
    </Modal>
  );
};

export default CusForm;
