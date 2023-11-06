import { useGetCardLists } from "@/queries/cardList";

import CardList from "@components/CardList";
import CardListComposer from "@components/CardListComposer";
import { CardHandlerProvider, CardListHandlerProvider } from "./Provider";
import * as S from "./style";

const Board = () => {
  const { data: cardLists } = useGetCardLists();

  return (
    <S.Container>
      <CardListHandlerProvider>
        {cardLists?.map((cardList) => (
          <CardList key={cardList.id} data={cardList} />
        ))}
        <CardListComposer />
      </CardListHandlerProvider>
    </S.Container>
  );
};

export default Board;
