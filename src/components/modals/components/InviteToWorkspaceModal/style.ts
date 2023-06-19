import styled from "styled-components";
import { Input as AntdInput } from "antd";
import { LinkOutlined, CloseOutlined } from "@ant-design/icons";

export const Container = styled.div`
  position: relative;
  padding: 20px 20px 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 184px;
  background-color: ${({ theme }) => theme.color.backgroundGray};
  border-radius: ${({ theme }) => theme.borderRadius.card};
`;

export const CloseButton = styled(CloseOutlined)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 16px;
`;

export const Input = styled(AntdInput).attrs(() => ({
  styles: {
    height: 40,
  },
}))`
  border: 2px solid ${({ theme }) => theme.color.buttonBlue};
  border-radius: ${({ theme }) => theme.borderRadius.card};
`;

export const LinkWrapper = styled.div`
  display: flex;
`;

export const LinkIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.color.hoverPointGray};
`;

export const LinkIcon = styled(LinkOutlined)`
  font-size: 16px;
`;

export const LinkTextWrapper = styled.div`
  margin-left: 12px;
  line-height: 20px;
`;

export const LinkText = styled.p``;

export const LinkButton = styled.button`
  padding: 0;
  background-color: transparent;
  font-size: 12px;
  color: ${({ theme }) => theme.color.textPointGray};
  text-decoration: underline;
`;
