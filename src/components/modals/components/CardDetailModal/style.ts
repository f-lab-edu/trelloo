import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

export const Container = styled.div`
  position: relative;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 600px;
  background-color: ${({ theme }) => theme.color.backgroundGray};
  border-radius: ${({ theme }) => theme.borderRadius.card};
`;

export const CloseButton = styled(CloseOutlined)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin: 0 0 15px;
  padding: 8px 0;
  height: 32px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`;

export const MainWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const Main = styled.main`
  flex: 2.5;
  padding: 4px;
`;

export const Header = styled.header`
  height: 92px;
`;

export const Section = styled.section`
  padding-left: 40px;
`;

export const DescriptionInput = styled.div`
  width: 512px;
  height: 56px;
  background-color: ${({ theme }) => theme.color.hoverPointGray};
`;

export const Sider = styled.aside`
  flex: 1;
`;
