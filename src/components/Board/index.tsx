import { useAddCardMutation, useGetCardLists } from "@/queries/cardList";
import { AddCardRequest } from "@/queries/cardList/interface";
import CardList from "@components/CardList";
import CardListComposer from "@components/CardListComposer";
import * as S from "./style";

const Board = () => {
  const { data: cardLists } = useGetCardLists();

  const { refetch } = useGetCardLists();
  const { mutate } = useAddCardMutation();

  const handleAddCard = ({ text, listId }: AddCardRequest) => {
    mutate({
      text,
      listId,
    });
    refetch();
  };

  const handleAddList = () => {
    // TODO: add func
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
