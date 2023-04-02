import { Card as AntdCard } from "antd";
import { EditOutlined } from "@ant-design/icons";
import loadable from "@loadable/component";
import React, { useState } from "react";
import useModal from "@/hooks/useModal";
const CardDetail = loadable(() => import("@components/modals/CardDetail"));
const CardEditor = loadable(() => import("@components/modals/CardEditor"));
import * as S from "./style";

interface Props {
  data: {
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
      {isCardEditorOpened && <CardEditor text={data.text} onClick={handleOpenCardEditor} />}
    </S.Container>
  );
};

export default Card;
