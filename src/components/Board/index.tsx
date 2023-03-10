import CardList from "@components/CardList";
import * as S from "./style";

interface Board {
  boardName: string;
}

const Board = ({ boardName }: Board) => {
  return (
    <S.Container>
      Board: {boardName}
      <CardList />
    </S.Container>
  );
};

export default Board;
