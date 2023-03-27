import { useGetCardLists } from "@/queries/cardList";
import CardList from "@components/CardList";
import * as S from "./style";

interface Props {
  boardName: string;
}

const Board = ({ boardName }: Props) => {
  const { data: cardLists } = useGetCardLists();

  return (
    <S.Container>
      {cardLists?.map((cardList) => (
        <CardList key={cardList.id} data={cardList} />
      ))}
    </S.Container>
  );
};

export default Board;
