import { useEffect } from "react";
import { handleUseMutation, handleUseQuery } from "@/queries";
import Board from "@components/Board";
import * as S from "./style";

const BoardPage = () => {
  const { data } = handleUseQuery({ key: "cardList", url: "/card/list" });
  const mutation = handleUseMutation({ url: "/card/list" });
  const param = {
    test: "test",
  };

  useEffect(() => {
    console.log(data);
    mutation.mutate(param);
  }, []);

  return (
    <S.Container>
      <Board boardName="test board name" />
    </S.Container>
  );
};

export default BoardPage;
