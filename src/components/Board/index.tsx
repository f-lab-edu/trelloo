import { useAddCardMutation, useAddListMutation, useGetCardLists } from "@/queries/cardList";
import { AddCardRequest, AddListRequest } from "@/queries/cardList/interface";
import CardList from "@components/CardList";
import CardListComposer from "@components/CardListComposer";
import * as S from "./style";

const Board = () => {
  const { data: cardLists } = useGetCardLists();

  const { refetch } = useGetCardLists();
  const { mutate: addCardMutate } = useAddCardMutation();
  const { mutate: addListMutate } = useAddListMutation();

  const handleAddCard = ({ text, listId }: AddCardRequest) => {
    addCardMutate({
      text,
      listId,
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
        <CardList key={cardList.id} data={cardList} onAddCardClick={handleAddCard} />
      ))}
      <CardListComposer onClick={handleAddList} />
    </S.Container>
  );
};

export default Board;
