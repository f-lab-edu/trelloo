import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10px;
  padding: 8px;
  min-width: 272px;
  background-color: ${({ theme }) => theme.color.cardListGray};
  border-radius: ${({ theme }) => theme.borderRadius.card};
  height: 90px;
`;
