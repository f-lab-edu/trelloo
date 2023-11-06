import { Layout as AntdLayout } from "antd";
import styled from "styled-components";

interface ContainerProps {
  backgroundImage: string;
  backgroundColor: string;
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: url(${({ backgroundImage }) => backgroundImage});
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
