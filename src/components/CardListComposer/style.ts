import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10px;
  width: 272px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.card};
  background-color: ${({ theme }) => theme.color.hoverPointGray};
`;

export const InputWrapper = styled.div`
  padding: 5px;
  background-color: ${({ theme }) => theme.color.cardListGray};
`;

export const SubmitButtonWrapper = styled.div`
  margin-top: 3px;
  display: flex;
`;

export const CancleAddListButton = {
  marginLeft: 5,
  padding: 0,
  display: "flex",
  alignItems: "center",
  fontSize: 20,
  color: theme.color.textPointGray,
};
