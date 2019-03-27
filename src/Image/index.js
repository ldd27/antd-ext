import React, { Fragment, useState } from 'react';
import Modal from '../Modal';

export default ({ alt = '', preview, ...restProps }) => {
  const [visible, setVisible] = useState(false);

  const imageProps = {
    alt,
    ...restProps,
  }

  if (!preview) {
    return <img {...imageProps} />;
  }

  const onImageClick = e => {
    e.stopPropagation()
    setVisible(!visible);
  }

  const onCancel = () => {
    setVisible(false);
  }

  const modalProps = {
    visible,
    onCancel: onCancel,
    footer: null,
  }

  return (
    <Fragment>
      <img {...imageProps} onClick={onImageClick} />
      <Modal {...modalProps}>
        <img {...imageProps} onClick={e => e.stopPropagation()} style={{ width: '100%' }} />
      </Modal>
    </Fragment>
  )
}

// class DDImage extends Component {
//   state = {
//     visible: false,
//   }

//   onImageClick = () => {
//     this.setState({ visible: true })
//   }

//   onCancel = () => {
//     this.setState({ visible: false })
//   }

//   render() {
//     const { alt = '', preview, ...restProps } = this.props;
//     const { visible,  } = this.state;

//     const imageProps = {
//       alt,
//       ...restProps,
//     }

//     if (!preview) {
//       return (
//         <Fragment>
//           <img {...imageProps} />
//         </Fragment>
//       )
//     }

//     const modalProps = {
//       visible,
//       title: '图片预览',
//       modalType: 'detail',
//       onCancel: this.onCancel,
//     }

//     return (
//       <Fragment>
//         <img {...imageProps} onClick={this.onImageClick} />
//         <Modal {...modalProps}>
//           <img {...imageProps} style={{ width: '100%' }} />
//         </Modal>
//       </Fragment>
//     );
//   }
// }

// export default DDImage;