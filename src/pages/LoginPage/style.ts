import { Form as AntdForm } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Form = styled(AntdForm)`
  margin-top: 70px;
  width: 500px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  text-align: center;
`;
