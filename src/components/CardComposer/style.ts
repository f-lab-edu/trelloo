import { Card as AntdCard } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Card = styled(AntdCard).attrs(() => ({
  bodyStyle: {
    padding: 0,
    height: 65,
    boxShadow: theme.boxShadow.card,
  },
}))``;

export const ButtonWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardInputContainer = styled.form`
  margin-top: 10px;
`;

export const AddCardButtonContainer = styled.div`
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
`;

export const AddCardButtonWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const CloseButton = styled(CloseOutlined)<{ theme: typeof theme }>`
  margin-left: 5px;
  padding: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.color.textPointGray};
`;
