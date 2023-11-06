import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  //
`;

export const Header = {
  minHeight: "40px",
  backgroundColor: theme.color.cardListGray,
  fontSize: "14px",
};

export const Body = {
  padding: "0 10px 5px 10px",
  width: "100%",
  backgroundColor: theme.color.cardListGray,
};

export const ButtonWrapper = styled.div`
  padding: 0 8px;
  display: flex;
  align-items: center;
`;

export const TemplateButton = {
  width: 24,
};
