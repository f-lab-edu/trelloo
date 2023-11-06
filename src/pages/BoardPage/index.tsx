import React, { useState } from "react";
import { Breadcrumb, Layout, theme, Button } from "antd";
import Slider from "@components/Slider";
import Drawer from "@components/Drawer";
import Header from "@components/Header";
import Menu from "@components/Menu";
import Board from "@components/Board";

const { Content } = Layout;

const BoardPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout className="site-layout">
        <Slider />
        <Content style={containerStyle}>
          <Menu showDrawer={showDrawer} />
          <Board boardName={"sdf"} />
          <Drawer open={open} onClose={onClose} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BoardPage;
