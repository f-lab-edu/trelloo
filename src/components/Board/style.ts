import styled from "styled-components";

interface ContainerProps {
  background: string;
}

export const Container = styled.div<ContainerProps>`
  padding: 10px 15px;
  display: flex;
  background-image: url(${({ background }) => background});
`;
