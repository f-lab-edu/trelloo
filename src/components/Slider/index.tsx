import React, { useState } from "react";
import { Breadcrumb, Layout, theme, Button, Drawer } from "antd";

const { Header, Content, Sider } = Layout;

function Slider() {
  const [collapsed, setCollapsed] = useState(false);

  const onClickCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{ backgroundColor: "white" }}
    >
      <button onClick={onClickCollapse}>collapse</button>
    </Sider>
  );
}

export default Slider;
