import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10px;
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

export const ListOption = styled.div`
  position: absolute;
  top: 40px;
  left: 250px;
  z-index: 10;
`;

export const ListOptionTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;
`;
