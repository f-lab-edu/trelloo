import { useGetCardLists } from "@/queries/cardList";
import CardList from "@components/CardList";
import * as S from "./style";

interface Props {
  boardName: string;
}

const Board = ({ boardName }: Props) => {
  const { data: cardLists } = useGetCardLists();
  // TODO: render card lists
  return (
    <S.Container>
      {cardLists?.map((cardList) => (
        <CardList cardList={cardList} />
      ))}
    </S.Container>
  );
};

export default Board;
