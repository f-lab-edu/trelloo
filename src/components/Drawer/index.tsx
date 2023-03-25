import React from "react";
import { Drawer as D } from "antd";

interface Props {
  open: any;
  onClose: any;
}

function Drawer({ open, onClose }: Props) {
  return (
    <D title="Basic Drawer" placement="right" closable={false} onClose={onClose} open={open} getContainer={false}>
      <p>Some contents...</p>
    </D>
  );
}

export default Drawer;
