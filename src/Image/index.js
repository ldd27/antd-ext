import React, { Component, Fragment } from 'react';
import Modal from '../Modal';

class DDImage extends Component {
  state = {
    visible: false,
  }

  onImageClick = () => {
    this.setState({ visible: true })
  }

  onCancel = () => {
    this.setState({ visible: false })
  }

  render() {
    const { alt = '', preview, ...restProps } = this.props;
    const { visible,  } = this.state;

    const imageProps = {
      alt,
      ...restProps,
    }

    if (!preview) {
      return (
        <Fragment>
          <img {...imageProps} />
        </Fragment>
      )
    }

    const modalProps = {
      visible,
      title: '图片预览',
      modalType: 'detail',
      onCancel: this.onCancel,
    }

    return (
      <Fragment>
        <img {...imageProps} onClick={this.onImageClick} />
        <Modal {...modalProps}>
          <img {...imageProps} style={{ width: '100%' }} />
        </Modal>
      </Fragment>
    );
  }
}

export default DDImage;