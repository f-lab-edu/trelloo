import { useCardsQuery } from "@/queries/cards";
import { useAddListMutation, useDeleteListMutation, useEditListMutation } from "@/queries/cards";
import { AddListRequest, DeleteListRequest, EditListRequest } from "@/queries/cards/interface";
import CardList from "@components/CardList";
import CardListComposer from "@components/CardListComposer";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
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
      <DragDropContext onDragEnd={() => {}} onDragStart={() => {}} onDragUpdate={() => {}}>
        {cardLists?.map((cardList) => (
          <Droppable key={cardList.id} droppableId={cardList.id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardList key={cardList.id} data={cardList} onEditList={onEditList} onDeleteList={onDeleteList} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}

        <CardListComposer onAddList={onAddList} />
      </DragDropContext>
    </S.Container>
  );
};

export default Board;
