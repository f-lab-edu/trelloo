import { useState } from "react";
import { Card as C } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import Card from "@components/Card";
import AddCard from "@components/AddCard";
import * as S from "./style";

interface Props {
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
      <C
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
        <AddCard isWritingCard={isWritingCard} handleClickAddCard={handleClickAddCard} listId={data.id} />
      </C>
    </S.Container>
  );
};

export default CardList;
