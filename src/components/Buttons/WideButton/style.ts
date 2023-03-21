import styled from "styled-components";

export const Container = styled.div`
  padding: 6px 8px;
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.color.textPointGray};

  &:hover {
    background-color: ${({ theme }) => theme.color.hoverPointGray};
    color: ${({ theme }) => theme.color.textDefaultGray};
  }
`;

export const Text = styled.p`
  margin-left: 2px;
  padding-top: 2px;
`;
