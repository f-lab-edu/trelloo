import React, { useState } from "react";
import { Card as AntdCard } from "antd";
import { EditOutlined } from "@ant-design/icons";
import loadable from "@loadable/component";
import { ICard } from "@/interfaces/cards";
import useModal from "@/hooks/useModal";
import CardEditor from "@components/modals/CardEditor";
const CardDetail = loadable(() => import("@components/modals/CardDetailModal"));
import * as S from "./style";
import { DeleteCardRequest, EditCardRequest } from "@/queries/cards/interface";

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
      component: CardDetail,
      props: { title: data.text },
    });
  };

  const handleOpenCardEditor = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    setCardEditorOpened(!cardEditorOpened);
  };

  return (
    <S.Container>
      <AntdCard style={S.Card} onClick={handleClick} bodyStyle={S.Body}>
        <p>{data.text}</p>
        <EditOutlined className="edit_button" onClick={handleOpenCardEditor} />
      </AntdCard>
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
