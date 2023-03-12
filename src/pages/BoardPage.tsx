import { useEffect } from "react";
import {
  handleUseMutation,
  HandleUseMutationRes,
  handleUseQuery,
} from "@/queries";
import Board from "@components/Board";
import * as S from "./style";

interface GetCardListRes {
  id: number;
  title: string;
}

interface CreateCardParams {
  offset: number;
  limit: number;
}

interface CreateCardData {
  type: string;
}

const BoardPage = () => {
  const { data } = handleUseQuery<null, GetCardListRes>({
    key: "cardList",
    url: "/card/list",
  });
  const mutation = handleUseMutation<
    CreateCardParams,
    CreateCardData,
    HandleUseMutationRes
  >({
    url: "/card/list",
    method: "post",
    params: { offset: 10, limit: 0 },
  });
  const param = {
    type: "public",
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
