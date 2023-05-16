import React, { useState } from "react";
import { ICard } from "@/interfaces/cards";
import useModal from "@/hooks/useModal";
import { DeleteCardRequest, EditCardRequest } from "@/queries/cards/interface";
import CardEditor from "@components/CardEditor";
import { modals } from "@components/modals/components";
import * as S from "./style";

export interface Props {
  data: ICard;
  onEditCard: (params: EditCardRequest) => void;
  onDeleteCard: (params: DeleteCardRequest) => void;
}

const Card = ({ data, onEditCard, onDeleteCard }: Props) => {
  const { openModal } = useModal();
  const [cardEditorOpened, setCardEditorOpened] = useState(false);

  const handleClick = () => {
    openModal({
      component: modals.cardDetailModal,
      props: { title: data.description },
    });
  };

  const handleOpenCardEditor = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    setCardEditorOpened(!cardEditorOpened);
  };

  return (
    <S.Container>
      <S.Card onClick={handleClick}>
        <p>{data.description}</p>
        <S.EditButton onClick={handleOpenCardEditor} />
      </S.Card>
      {cardEditorOpened && (
        <CardEditor
          data={data}
          onCardEditorClose={handleOpenCardEditor}
          setCardEditorOpened={setCardEditorOpened}
          onEditCard={onEditCard}
          onDeleteCard={onDeleteCard}
        />
      )}
    </S.Container>
  );
};

export default Card;
