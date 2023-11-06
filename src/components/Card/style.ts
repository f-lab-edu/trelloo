import { theme } from "@/styles/theme";
import { Card as AntdCard } from "antd";
import { EditOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 8px;
`;

export const Card = styled(AntdCard).attrs(() => ({
  bodyStyle: {
    padding: 0,
  },
}))`
  padding: 6px 8px 6px;
  width: "100%";
  border-radius: ${({ theme }) => theme.borderRadius.card};
  box-shadow: ${({ theme }) => theme.boxShadow.card};

  &:hover {
    background-color: ${({ theme }) => theme.color.backgroundGray};
    border-radius: 8px;
  }
`;

export const EditButton = styled(EditOutlined)<{ theme: typeof theme }>`
  visibility: hidden;
  position: absolute;
  top: 3px;
  right: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.hoverPointGray};
    border-radius: 3px;
  }

  ${Card}:hover & {
    visibility: visible;
  }
`;
