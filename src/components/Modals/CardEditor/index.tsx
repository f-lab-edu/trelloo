import React, { useState } from "react";
import { Input } from "antd";
import { ICard } from "@/interfaces/cards";
import { DeleteCardRequest, EditCardRequest } from "@/queries/cards/interface";
import Button from "@components/Button";
import CardEditorButtons from "@components/CardEditorButtons";
import * as S from "./style";

const { TextArea } = Input;

export interface Props {
  data: ICard;
  onCardEditorClose: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  setIsCardEditorOpened: (state: boolean) => void;
  onEditCard: (params: EditCardRequest) => void;
  onDeleteCard: (params: DeleteCardRequest) => void;
}

const CardEditor = ({ data, onCardEditorClose, setIsCardEditorOpened, onEditCard, onDeleteCard }: Props) => {
  const [inputValue, setInputValue] = useState(data.text);

  const handleClickSave = (params: { id: string; text: string }) => {
    setIsCardEditorOpened(false);
    onEditCard(params);
  };

  return (
    <>
      <S.Overlay onClick={onCardEditorClose} />
      <S.Container>
        <S.InputWrapper>
          <TextArea
            defaultValue={data.text}
            onChange={(e) => setInputValue(e.target.value)}
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
          <S.SaveButtonWrapper>
            <Button type="blue" onClick={() => handleClickSave({ id: data.id, text: inputValue })}>
              Save
            </Button>
          </S.SaveButtonWrapper>
        </S.InputWrapper>
        <S.MenuButtonsWrapper>
          <CardEditorButtons onDeleteCard={() => onDeleteCard({ id: data.id })} />
        </S.MenuButtonsWrapper>
      </S.Container>
    </>
  );
};

export default CardEditor;
