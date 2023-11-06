import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 8px;

  .ant-card-body:hover {
    background-color: ${({ theme }) => theme.color.backgroundGray};
    border-radius: 8px;
  }

  .edit_button {
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
  }
`;

export const Card = {
  width: "100%",
  boxShadow: theme.boxShadow.card,
};

export const Body = {
  padding: "6px 8px 6px",
};
