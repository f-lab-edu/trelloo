import Card from "@components/Card";
import * as S from "./style";

interface Props {
  cardList: {
    title: string;
    cards: { text: string }[];
  };
}

const CardList = ({ cardList }: Props) => {
  return (
    <S.Container>
      <S.Title>{cardList.title}</S.Title>
      {cardList.cards.map((card: any) => (
        <Card text={card.text} />
      ))}
    </S.Container>
  );
};

export default CardList;
