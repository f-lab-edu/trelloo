import { Layout as AntdLayout } from "antd";
import styled from "styled-components";

export const Container = styled(AntdLayout).attrs(() => ({
  style: {
    minHeight: "100vh",
    backgroundColor: "transparent",
  },
}))``;

export const ContentLayout = styled(AntdLayout).attrs(() => ({
  style: {
    backgroundColor: "transparent",
  },
}))``;

export const Main = styled(AntdLayout.Content).attrs(() => ({
  style: {
    position: "relative",
  },
}))``;
