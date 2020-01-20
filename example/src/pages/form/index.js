import React, { Fragment, useState } from 'react';
import { Button } from 'antd';
import FormModal from './form';

const Index = () => {
  const [visible, setVisible] = useState(false);
  const [editable, setEditable] = useState(true);
  const [item, setItem] = useState({
    name1: 'xxx',
    name2: '111',
    name4: '34444213',
    name5: '544444',
  });
  const modalProps = {
    visible,
    modalType: 'detail',
    title: 'form',
    editable,
    onCancel() {
      setVisible(false);
    },
    onOk(values) {
      setItem(values);
      setVisible(false);
    },
    item,
  };
  return (
    <Fragment>
      <Button
        onClick={() => {
          setEditable(true);
          setVisible(true);
        }}
      >
        form
      </Button>
      <Button
        onClick={() => {
          setEditable(false);
          setVisible(true);
        }}
      >
        detail
      </Button>
      <FormModal {...modalProps} />
    </Fragment>
  );
};

export default Index;
