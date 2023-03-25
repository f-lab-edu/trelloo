import React, { useState } from "react";
import { Breadcrumb, Layout, theme, Button, Drawer } from "antd";

const { Header, Content, Sider } = Layout;

const BoardPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
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

  const onClickCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%", backgroundColor: "white" }}>
        <div>header</div>
      </Header>
      <Layout className="site-layout">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{ backgroundColor: "white" }}
        >
          <button onClick={onClickCollapse}>collapse</button>
        </Sider>
        <Content style={containerStyle}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <div>menu</div>
            <div style={{ marginTop: 16 }}>
              <Button type="primary" onClick={showDrawer}>
                Open
              </Button>
            </div>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>cards</div>
          <div>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={onClose}
              open={open}
              getContainer={false}
            >
              <p>Some contents...</p>
            </Drawer>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BoardPage;
