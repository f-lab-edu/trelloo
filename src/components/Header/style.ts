import { Layout } from "antd";
const { Header: AntdHeader } = Layout;
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Header = styled(AntdHeader).attrs(() => ({
  style: {
    position: "sticky",
    top: 0,
    padding: "6px 4px",
    zIndex: 1,
    width: "100%",
    height: 44,
    backgroundColor: theme.color.headerBackground,
    borderBottom: `1px solid ${theme.color.border}`,
  },
}))``;

export const Container = styled.header`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;
