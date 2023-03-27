import { useState } from "react";
import { Card as C } from "antd";
import Card from "@components/Card";
import { EllipsisOutlined } from "@ant-design/icons";
import * as S from "./style";
import AddCard from "@components/AddCard";

interface Props {
  data: {
    title: string;
    cards: { text: string }[];
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
          <Card data={card} />
        ))}
        <AddCard isWritingCard={isWritingCard} handleClickAddCard={handleClickAddCard} />
      </C>
    </S.Container>
  );
};

export default CardList;
