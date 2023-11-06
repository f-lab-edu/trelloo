import React, { useState } from "react";
import { Input } from "antd";
import { type ICard } from "@/interfaces/cards";
import { type DeleteCardRequest, type EditCardRequest } from "@/queries/cards/interface";
import Button from "@components/Button";
import CardEditorButtons from "@components/CardEditorButtons";
import * as S from "./style";

const { TextArea } = Input;

export interface Props {
  data: ICard;
  onCardEditorClose: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  setCardEditorOpened: (state: boolean) => void;
  onEditCard: (params: EditCardRequest) => void;
  onDeleteCard: (params: DeleteCardRequest) => void;
}

const CardEditor = ({ data, onCardEditorClose, setCardEditorOpened, onEditCard, onDeleteCard }: Props) => {
  const [inputValue, setInputValue] = useState(data.description);

  const handleClickSave = (params: { id: string; description: string }) => {
    setCardEditorOpened(false);
    onEditCard(params);
  };

  return (
    <>
      <S.Overlay onClick={onCardEditorClose} />
      <S.Container>
        <S.InputWrapper>
          <TextArea
            defaultValue={data.description}
            onChange={(e) => { setInputValue(e.target.value); }}
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
          <S.SaveButtonWrapper>
            <Button
              appearance={{ type: "blue" }}
              onClick={() => { handleClickSave({ id: data.id, description: inputValue }); }}
            >
              Save
            </Button>
          </S.SaveButtonWrapper>
        </S.InputWrapper>
        <S.MenuButtonsWrapper>
          <CardEditorButtons onDeleteCard={() => { onDeleteCard({ id: data.id }); }} />
        </S.MenuButtonsWrapper>
      </S.Container>
    </>
  );
};

export default CardEditor;
