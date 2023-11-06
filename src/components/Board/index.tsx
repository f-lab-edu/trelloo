import { useAddCardMutation, useAddListMutation, useEditCardMutation, useGetCardLists } from "@/queries/cardList";
import { AddCardRequest, AddListRequest, EditCardRequest } from "@/queries/cardList/interface";
import CardList from "@components/CardList";
import CardListComposer from "@components/CardListComposer";
import * as S from "./style";

const Board = () => {
  const { data: cardLists } = useGetCardLists();

  const { refetch } = useGetCardLists();
  const { mutate: addCardMutate } = useAddCardMutation();
  const { mutate: addListMutate } = useAddListMutation();
  const { mutate: editCardMutate } = useEditCardMutation();

  const handleAddCard = ({ text, listId }: AddCardRequest) => {
    addCardMutate({
      text,
      listId,
    });
    refetch();
  };

  const handleEditCard = ({ text, id }: EditCardRequest) => {
    editCardMutate({
      text,
      id,
    });
    refetch();
  };

  const handleAddList = ({ title }: AddListRequest) => {
    addListMutate({
      title,
    });
    refetch();
  };

  return (
    <S.Container>
      {cardLists?.map((cardList) => (
        <CardList key={cardList.id} data={cardList} onAddCardClick={handleAddCard} onEditCard={handleEditCard} />
      ))}
      <CardListComposer onClick={handleAddList} />
    </S.Container>
  );
};

export default Board;
