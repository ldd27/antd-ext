import React, { Fragment, Component } from "react";
import { Upload, message } from "antd";

class DDUpload extends Component {
  state = {
    loading: false
  };

  beforeUpload = async file => {
    const { ext = "image", maxSize, minSize, dim } = this.props;
    console.log(file.type);
    // return new Promise((resolve, reject) => {
    if (typeof ext === "string") {
      if (ext === "image") {
        const isImage =
          file.type === "image/jpeg" ||
          file.type === "image/png" ||
          file.type === "image/jpg" ||
          file.type === "image/gif";
        if (!isImage) {
          message.error("只支持png、jpeg、gif格式图片");
          throw new Error("只支持png、jpeg、gif格式图片");
        }
      }
    } else if (typeof ext === "object") {
      const match = ext.includes(file.type);
      if (!match) {
        message.error("文件格式错误");
        throw new Error("文件格式错误");
      }
    }

    if (maxSize) {
      const isGT = file.size / 1024 > maxSize;
      if (isGT) {
        message.error(`请上传${maxSize}KB以下文件`);
        throw new Error("请上传${maxSize}KB以下文件");
      }
    }

    if (minSize) {
      const isLT = file.size / 1024 > minSize;
      if (isLT) {
        message.error(`请上传${minSize}KB以上文件`);
        throw new Error("请上传${minSize}KB以上文件");
      }
    }

    if (dim) {
      const { width, height } = await this.getImageSize(file);
      if (width !== dim.width || height !== dim.height) {
        message.error(`图片尺寸为${dim.width}*${dim.height}，请重新上传`);
        throw new Error("图片尺寸为${dim.width}*${dim.height}，请重新上传");
      }
    }

    return true;
  };

  getImageSize = img => {
    return new Promise((resolve, reject) => {
      // 读取图片数据
      const reader = new FileReader();
      reader.onload = e => {
        const data = e.target.result;
        // 加载图片获取图片真实宽度和高度
        const image = new Image();
        image.onload = () => {
          const { width, height } = image;
          resolve({ width, height });
        };
        image.onerror = err => {
          reject(err);
        };
        image.src = data;
      };
      reader.onerror = err => {
        reject(err);
      };
      reader.readAsDataURL(img);
    });
  };

  handleChange = info => {
    const { onProgress } = this.props;
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      onProgress && onProgress("uploading", {});
      return;
    }

    const { formatApi } = this.props;

    if (info.file.status === "done") {
      this.setState({ loading: false });
      onProgress && onProgress("done", info.file.response);
      const result = formatApi(info.file.response);
      if (result) {
        this.props.onChange(result);
      }
    } else if (info.file.status === "error") {
      this.setState({ loading: false });
      onProgress && onProgress("error", info.file.response);
      formatApi(info.file.response);
    }
  };

  render() {
    const {
      value,
      children,
      listType = "picture-card",
      ...restProps
    } = this.props;
    const { loading } = this.state;

    const uploadProps = {
      name: "file",
      listType,
      beforeUpload: this.beforeUpload,
      showUploadList: false,
      ...restProps
    };

    return (
      <Fragment>
        <Upload {...uploadProps} onChange={this.handleChange}>
          {children(value, loading)}
        </Upload>
      </Fragment>
    );
  }
}

export default DDUpload;
