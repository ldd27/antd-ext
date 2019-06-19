import React from "react";
import { Tooltip } from "antd";

const Ellipsis = ({ max, title, alwaysShow, placement = "right" }) => {
  if (!title) {
    return null;
  }
  if (alwaysShow || !(max > 0)) {
    return <Tooltip title={title}>{title}</Tooltip>;
  }
  if (title.length <= max) {
    return title;
  }
  return (
    <Tooltip title={title} placement={placement}>
      {`${title.substring(0, max)}...`}
    </Tooltip>
  );
};

export default Ellipsis;
