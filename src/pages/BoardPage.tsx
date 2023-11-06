import Board from "../components/Board";
import * as S from "./style";

const BoardPage = (): JSX.Element => {
  return (
    <S.Container>
      <Board boardName="test board name" />
    </S.Container>
  );
};

export default BoardPage;
