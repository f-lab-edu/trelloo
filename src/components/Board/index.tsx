import { useGetCardLists } from "@/queries/cardList";

import CardList from "@components/CardList";
import CardListComposer from "@components/CardListComposer";
import * as S from "./style";
import Provider from "./Provider";

const Board = () => {
  const { data: cardLists } = useGetCardLists();

  return (
    <S.Container>
      <Provider>
        {cardLists?.map((cardList) => (
          <CardList key={cardList.id} data={cardList} />
        ))}
        <CardListComposer />
      </Provider>
    </S.Container>
  );
};

export default Board;
