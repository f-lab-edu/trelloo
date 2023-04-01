import { useState } from "react";
import { Card as AntdCard } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { AddCardRequest } from "@/queries/cardList/interface";
import Card from "@components/Card";
import CardComposer from "@components/CardComposer";
import * as S from "./style";

export interface Props {
  data: {
    id: string;
    title: string;
    cards: {
      id: string;
      text: string;
    }[];
  };
  handleAddCard: HandleAddCard;
}

export type HandleAddCard = ({ text, listId }: AddCardRequest) => void;

const CardList = ({ data, handleAddCard }: Props) => {
  const [isWritingCard, setIsWritingCard] = useState(false);

  const toggleCardInput = () => {
    setIsWritingCard(!isWritingCard);
  };

  return (
    <S.Container>
      <AntdCard
        title={data.title}
        bordered={false}
        style={{ width: 300 }}
        extra={<EllipsisOutlined />}
        headStyle={S.Header}
        bodyStyle={S.Body}
      >
        {data.cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
        <CardComposer isWritingCard={isWritingCard} toggleCardInput={toggleCardInput} onClick={handleAddCard} />
      </AntdCard>
    </S.Container>
  );
};

export default CardList;
