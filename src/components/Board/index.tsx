import { useCardsQuery } from "@/queries/cards";
import { useAddListMutation, useDeleteListMutation, useEditListMutation } from "@/queries/cards";
import { AddListRequest, DeleteListRequest, EditListRequest } from "@/queries/cards/interface";
import CardList from "@components/CardList";
import CardListComposer from "@components/CardListComposer";
import * as S from "./style";

const Board = () => {
  const { data: cardLists } = useCardsQuery();
  const { mutate: addListMutate } = useAddListMutation();
  const { mutate: deleteListMutate } = useDeleteListMutation();
  const { mutate: editListMutate } = useEditListMutation();

  const onEditList = (params: EditListRequest) => {
    editListMutate(params);
  };

  const onDeleteList = (params: DeleteListRequest) => {
    deleteListMutate(params);
  };

  const onAddList = (params: AddListRequest) => {
    addListMutate(params);
  };

  return (
    <S.Container>
      {cardLists?.map((cardList) => (
        <CardList key={cardList.id} data={cardList} onEditList={onEditList} onDeleteList={onDeleteList} />
      ))}
      <CardListComposer onAddList={onAddList} />
    </S.Container>
  );
};

export default Board;
