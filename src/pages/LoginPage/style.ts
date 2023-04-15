import styled from "styled-components";

export const Container = styled.div`
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
`;

export const Input = styled.input`
  padding: 5px;
  width: 200px;
  border: 1px solid ${({ theme }) => theme.color.buttonBackground};
  border-radius: 5px;
`;

export const InputPassword = styled.input.attrs({
  type: "password",
})`
  padding: 5px;
  width: 200px;
  border: 1px solid ${({ theme }) => theme.color.buttonBackground};
  border-radius: 5px;
`;
