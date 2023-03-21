import styled from "styled-components";

export const Container = styled.div`
  margin: 12px 0 0 12px;
  padding: 8px;
  width: 272px;
  background-color: ${({ theme }) => theme.color.pointGray};
  border-radius: 3px;
`;

export const Title = styled.h3`
  padding: 6px 6px 10px;
  font-weight: 600;
`;
