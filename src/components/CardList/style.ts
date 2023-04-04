import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10px;
`;

export const Header = {
  minHeight: "40px",
  backgroundColor: theme.color.cardListGray,
  borderRadius: theme.borderRadius.card,
  fontSize: "14px",
};

export const Body = {
  padding: "5px 10px 5px 10px",
  width: "100%",
  borderRadius: theme.borderRadius.card,
  backgroundColor: theme.color.cardListGray,
};

export const ListTitle = styled.div`
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

export const ListOptionTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;
`;
