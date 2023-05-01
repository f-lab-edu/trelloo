import { Card as AntdCard } from "antd";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10px;
`;

export const Card = styled(AntdCard).attrs(() => ({
  headStyle: {
    minHeight: "40px",
    fontSize: "14px",
    backgroundColor: theme.color.cardListGray,
    borderRadius: `${theme.borderRadius.card} ${theme.borderRadius.card} 0 0`,
  },
  bodyStyle: {
    padding: "5px 10px 10px 10px",
    width: "100%",
    borderRadius: `0 0  ${theme.borderRadius.card} ${theme.borderRadius.card}`,
    backgroundColor: theme.color.cardListGray,
  },
}))``;

export const ListTitle = styled.form`
  position: absolute;
  top: 0;
  margin-top: 8px;
`;
export const Title = styled.h2`
  padding: 5px 12px;
`;

export const ListOption = styled.div`
  position: absolute;
  top: 40px;
  left: 250px;
  z-index: 10;
`;
