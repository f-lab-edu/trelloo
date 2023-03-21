import styled from "styled-components";

export const Container = styled.div`
  margin: 12px 0 0 12px;
  padding: 8px;
  width: 272px;
  background-color: ${({ theme }) => theme.color.pointGray};

  border-radius: 3px;
`;

export const Header = styled.div`
  padding: 6px 6px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.textPointGray};
`;
