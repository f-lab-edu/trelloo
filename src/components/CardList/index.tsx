import WideButton from "@components/Buttons/WideButton";
import Card from "@components/Card";
import { AiOutlinePlus } from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
import { BiBookContent } from "react-icons/bi";
import * as S from "./style";

export interface Props {
  cardList: {
    title: string;
    cards: { text: string }[];
  };
}

const CardList = ({ cardList }: Props) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{cardList.title}</S.Title>
        <BiDotsHorizontal />
      </S.Header>
      {cardList.cards.map((card: any) => (
        <Card text={card.text} />
      ))}
      <S.ButtonWrapper>
        <WideButton text="Add a card" icon={<AiOutlinePlus />} />
        <BiBookContent />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default CardList;
