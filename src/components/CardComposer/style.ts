import { Card as AntdCard } from "antd";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Card = styled(AntdCard).attrs(() => ({
  bodyStyle: {
    padding: "6px 8px 2px",
    height: 65,
    boxShadow: theme.boxShadow.card,
    borderRadius: theme.borderRadius.card,
  },
}))``;
