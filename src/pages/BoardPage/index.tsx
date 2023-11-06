import Header from "@components/Header";
import Board from "@components/Board";
import * as S from "./style";

const BoardPage = () => {
  return (
    <S.Container>
      <Header />
      <Board boardName="test board name" />
    </S.Container>
  );
};

export default BoardPage;
