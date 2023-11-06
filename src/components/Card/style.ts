import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  //
`;

export const Card = {
  width: "100%",
  boxShadow: `0 1px 0  ${theme.color.cardBoxShadow}`,
};

export const Body = {
  padding: "6px 8px 6px",
};

export const ButtonWrapper = styled.div`
  padding: 0 8px;
  display: flex;
  align-items: center;
`;

export const AddCardButton = {
  //
};

export const TemplateButton = {
  width: 24,
};
