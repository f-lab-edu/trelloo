import React, { useState } from "react";
import { Card as AntdCard } from "antd";
import { EditOutlined } from "@ant-design/icons";
import loadable from "@loadable/component";
import { ICard } from "@/interfaces/cards";
import useModal from "@/hooks/useModal";
import CardEditor from "@components/modals/CardEditor";
const CardDetail = loadable(() => import("@components/modals/CardDetail"));
import * as S from "./style";
import { DeleteCardRequest, EditCardRequest } from "@/queries/cards/interface";

export interface Props {
  data: ICard;
  onEditCard: (params: EditCardRequest) => void;
  onDeleteCard: (params: DeleteCardRequest) => void;
}

const Card = ({ data, onEditCard, onDeleteCard }: Props) => {
  const { openModal } = useModal();
  const [isCardEditorOpened, setIsCardEditorOpened] = useState(false);

  const handleClick = () => {
    openModal({
      component: CardDetail,
      props: { title: data.text },
    });
  };

  const handleOpenCardEditor = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    setIsCardEditorOpened(!isCardEditorOpened);
  };

  return (
    <S.Container>
      <AntdCard style={S.Card} onClick={handleClick} bodyStyle={S.Body}>
        <p>{data.text}</p>
        <EditOutlined className="edit_button" onClick={handleOpenCardEditor} />
      </AntdCard>
      {isCardEditorOpened && (
        <CardEditor
          data={data}
          onCardEditorClose={handleOpenCardEditor}
          setIsCardEditorOpened={setIsCardEditorOpened}
          onEditCard={onEditCard}
          onDeleteCard={onDeleteCard}
        />
      )}
    </S.Container>
  );
};

export default Card;
