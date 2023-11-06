import React from "react";
import * as S from "./style";
import { Input } from "antd";
import Button from "@components/Button";

const { TextArea } = Input;

export interface Props {
  text: string;
  onClick: (e: any) => void;
}

const CardEditor = ({ text, onClick }: Props) => {
  return (
    <>
      <S.Overlay onClick={onClick} />
      <S.Container>
        <S.InputWrapper>
          <TextArea defaultValue={text} placeholder="Controlled autosize" autoSize={{ minRows: 3, maxRows: 5 }} />
          <S.SaveButtonWrapper>
            <Button options={{ buttonColor: "#0369A7", textColor: "white", width: "80px" }}>Save</Button>
          </S.SaveButtonWrapper>
        </S.InputWrapper>
        <S.MenuButtonsWrapper>
          {buttonList.map((button) => (
            <S.ButtonWrapper>
              <Button options={{ buttonColor: "#0009", textColor: "#c7d1db" }}>{button}</Button>
            </S.ButtonWrapper>
          ))}
        </S.MenuButtonsWrapper>
      </S.Container>
    </>
  );
};

const buttonList = [
  "Open card",
  "Edit labels",
  "Change members",
  "Change cover",
  "Move",
  "Copy",
  "Edit dates",
  "Archive",
];

export default CardEditor;
