import React from "react";
import { useController, useForm } from "react-hook-form";
import { Input } from "antd";
import { ICard } from "@/interfaces/cards";
import { DeleteCardRequest, EditCardRequest } from "@/queries/cards/interface";
import Button from "@components/buttons/Button";
import CardEditorButtons from "@components/CardEditorButtons";
import * as S from "./style";
import { MutationOptions } from "@/interfaces/httpRequest";

const { TextArea } = Input;

export interface Props {
  data: ICard;
  onCardEditorClose: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  setCardEditorOpened: (state: boolean) => void;
  onEditCard: (params: EditCardRequest, options?: MutationOptions) => void;
  onDeleteCard: (params: DeleteCardRequest, options?: MutationOptions) => void;
}

const CardEditor = ({ data, onCardEditorClose, setCardEditorOpened, onEditCard, onDeleteCard }: Props) => {
  const { handleSubmit, control } = useForm({
    defaultValues: { description: data.description },
    mode: "onSubmit",
  });

  const { field: cardEditorField } = useController({
    control,
    name: "description",
  });

  const handleClickSave = () => {
    onEditCard(
      {
        id: data.id,
        description: cardEditorField.value,
      },
      {
        onSuccess: () => {
          setCardEditorOpened(false);
        },
      },
    );
  };

  return (
    <>
      <S.Overlay onClick={onCardEditorClose} />
      <S.Container>
        <S.EditorForm onSubmit={handleSubmit(handleClickSave)}>
          <TextArea {...cardEditorField} autoSize={{ minRows: 3, maxRows: 5 }} onPressEnter={handleClickSave} />
          <S.SaveButtonWrapper>
            <Button type="submit" appearance={{ type: "blue" }}>
              Save
            </Button>
          </S.SaveButtonWrapper>
        </S.EditorForm>
        <S.MenuButtonsWrapper>
          <CardEditorButtons
            onDeleteCard={() => {
              onDeleteCard({ id: data.id });
            }}
          />
        </S.MenuButtonsWrapper>
      </S.Container>
    </>
  );
};

export default CardEditor;
