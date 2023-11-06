import React from "react";
import * as S from "./style";
import { Input, theme } from "antd";
import Button from "@components/Button";

const { TextArea } = Input;

export interface Props {
  text: string;
}

const CardEditor = ({ text }: Props) => {
  return (
    <S.Container>
      <S.InputWrapper>
        <TextArea defaultValue={text} placeholder="Controlled autosize" autoSize={{ minRows: 3, maxRows: 5 }} />
        <Button buttonColor={"blue"}>Save</Button>
      </S.InputWrapper>
      <S.MenuButtonsWrapper>
        <Button buttonColor={"gray"}>Open card</Button>
        <Button buttonColor={"gray"}>Edit labels</Button>
        <Button buttonColor={"gray"}>Change members</Button>
        <Button buttonColor={"gray"}>Change cover</Button>
        <Button buttonColor={"gray"}>Move</Button>
        <Button buttonColor={"gray"}>Copy</Button>
        <Button buttonColor={"gray"}>Edit dates</Button>
        <Button buttonColor={"gray"}>Archive</Button>
      </S.MenuButtonsWrapper>
    </S.Container>
  );
};

export default CardEditor;
