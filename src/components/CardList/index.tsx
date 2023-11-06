import { useState } from "react";
import { Card as AntdCard, Dropdown } from "antd";
import type { MenuProps } from "antd";
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
  onAddCardClick: HandleAddCard;
}

export type HandleAddCard = ({ text, listId }: AddCardRequest) => void;

const CardList = ({ data, onAddCardClick }: Props) => {
  const [isWritingCard, setIsWritingCard] = useState(false);

  const onCardInputToggle = () => {
    setIsWritingCard(!isWritingCard);
  };

  return (
    <S.Container>
      <AntdCard
        title={data.title}
        bordered={false}
        style={{ width: 300 }}
        extra={
          <Dropdown menu={{ items }} placement="bottomLeft">
            <EllipsisOutlined />
          </Dropdown>
        }
        headStyle={S.Header}
        bodyStyle={S.Body}
      >
        {data.cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
        <S.ListOption></S.ListOption>
        <CardComposer isWritingCard={isWritingCard} onCardInputToggle={onCardInputToggle} onClick={onAddCardClick} />
      </AntdCard>
    </S.Container>
  );
};

export default CardList;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <S.ListOptionTitle>List actions</S.ListOptionTitle>,
  },
  {
    key: "2",
    label: <>Add card...</>,
  },
  {
    key: "3",
    label: <>Copy list...</>,
  },
  {
    key: "4",
    label: <>Move list...</>,
  },
  {
    key: "5",
    label: <>Watch</>,
  },
  {
    key: "6",
    label: <>Sort by...</>,
  },
  {
    key: "7",
    label: <>Arcive this list...</>,
  },
];
