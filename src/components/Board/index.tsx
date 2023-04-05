import { useCardsQuery } from "@/queries/cardList";
import { useAddListMutation, useDeleteListMutation, useEditListMutation } from "@/queries/cardList";
import CardList from "@components/CardList";
import CardListComposer from "@components/CardListComposer";
import * as S from "./style";

const Board = () => {
  const { data: cardLists } = useCardsQuery();
  const { mutate: addListMutate } = useAddListMutation();
  const { mutate: deleteListMutate } = useDeleteListMutation();
  const { mutate: editListMutate } = useEditListMutation();

  return (
    <S.Container>
      {cardLists?.map((cardList) => (
        <CardList key={cardList.id} data={cardList} onEditList={editListMutate} onDeleteList={deleteListMutate} />
      ))}
      <CardListComposer onAddList={addListMutate} />
    </S.Container>
  );
};

export default Board;
