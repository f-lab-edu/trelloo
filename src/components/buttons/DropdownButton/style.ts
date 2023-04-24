import { Card as AntdCard } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Dropdown = styled(AntdCard)`
  position: absolute;
  margin-top: 10px;
  z-index: 10;
`;
