import { Layout as AntdLayout } from "antd";
import styled from "styled-components";

interface ContainerProps {
  background: string;
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const ContentLayout = styled(AntdLayout).attrs(() => ({
  style: {
    backgroundColor: "transparent",
    height: "94.4%",
  },
}))``;

export const Main = styled(AntdLayout.Content).attrs(() => ({
  style: {
    position: "relative",
  },
}))``;
