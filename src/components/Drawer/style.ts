import { Drawer as AntdDrawer, Menu as AntdMenu } from "antd";
import styled from "styled-components";

export const Drawer = styled(AntdDrawer).attrs(() => ({
  bodyStyle: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    padding: "12px 6px 8px 12px",
  },
}))``;

export const Menu = styled(AntdMenu).attrs(() => ({
  style: {
    margin: 0,
    padding: 0,
  },
}))``;
