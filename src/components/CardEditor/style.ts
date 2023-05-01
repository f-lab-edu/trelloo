import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 4;
`;

export const EditorForm = styled.form`
  width: 280px;
`;

export const SaveButtonWrapper = styled.div`
  margin-top: 15px;
`;

export const MenuButtonsWrapper = styled.div`
  margin-left: 8px;
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 4px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.cardEditorGray};
  z-index: 3;
`;
