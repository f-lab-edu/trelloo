import { useState } from "react";
import { Card as AntdCard } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
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
}

const CardList = ({ data }: Props) => {
  const [isWritingCard, setIsWritingCard] = useState(false);

  const handleClickAddCard = () => {
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
        <CardComposer isWritingCard={isWritingCard} handleClickAddCard={handleClickAddCard} />
      </AntdCard>
    </S.Container>
  );
};

export default CardList;
