import styled from "styled-components";
import { Input as AntdInput } from "antd";

export const Container = styled.div`
  width: 300px;
`;

export const Title = styled.h3`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Input = styled(AntdInput).attrs(() => ({}))`
  width: 300px;
`;

export const Description = styled.p`
  font-size: 11px;
  line-height: 14px;
  margin-top: 8px;
  margin-bottom: 4px;
`;
