import { Drawer as AntdDrawer } from "antd";
import { Menu as AntdMenu } from "antd";
import styled from "styled-components";

export const Drawer = styled(AntdDrawer).attrs(() => ({
  bodyStyle: {
    padding: "12px 6px 8px 12px",
  },
}))``;

export const Menu = styled(AntdMenu).attrs(() => ({
  style: {
    margin: 0,
    padding: 0,
  },
}))``;
