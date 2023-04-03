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
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TemplateButton = {
  width: 24,
};

export const CardInputContainer = styled.div`
  margin-top: 10px;
`;

export const CardInput = {
  padding: 0,
  height: 65,
  boxShadow: theme.boxShadow.card,
};

export const AddCardButtonContainer = styled.div`
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
`;

export const AddCardButtonWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const CancelAddCardButton = {
  marginLeft: 5,
  padding: 0,
  fontSize: 20,
  color: theme.color.textPointGray,
};
