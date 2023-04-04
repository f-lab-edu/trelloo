import React, { useState } from "react";
import { Card as AntdCard } from "antd";
import { EditOutlined } from "@ant-design/icons";
import loadable from "@loadable/component";
import useModal from "@/hooks/useModal";
import CardEditor from "@components/modals/CardEditor";
const CardDetail = loadable(() => import("@components/modals/CardDetail"));
import * as S from "./style";

export interface Props {
  data: {
    id: string;
    text: string;
  };
}

const Card = ({ data }: Props) => {
  const { openModal } = useModal();
  const [isCardEditorOpened, setIsCardEditorOpened] = useState(false);

  const handleClick = () => {
    openModal({
      component: CardDetail,
      props: { title: data.text },
    });
  };

  const handleOpenCardEditor = (e: any) => {
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
        <CardEditor data={data} onClick={handleOpenCardEditor} setIsCardEditorOpened={setIsCardEditorOpened} />
      )}
    </S.Container>
  );
};

export default Card;
