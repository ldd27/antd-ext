import React, { Fragment, useState } from 'react';
import Modal from '../Modal';

const Image = ({ alt = '', preview, modalWidth, ...restProps }) => {
  const [visible, setVisible] = useState(false);

  const imageProps = {
    ...restProps,
  };

  if (!preview) {
    return <img alt={alt} {...imageProps} />;
  }

  const onImageClick = e => {
    e.stopPropagation();
    setVisible(!visible);
  };

  const onCancel = () => {
    setVisible(false);
  };

  const modalProps = {
    visible,
    onCancel,
    footer: null,
    width: modalWidth,
    closable: false,
    bodyStyle: { padding: 0 },
  };

  return (
    <Fragment>
      <img alt={alt} {...imageProps} onClick={onImageClick} />
      <Modal {...modalProps}>
        <img
          alt={alt}
          {...imageProps}
          onClick={e => e.stopPropagation()}
          style={{ width: '100%' }}
        />
      </Modal>
    </Fragment>
  );
};

export default Image;
