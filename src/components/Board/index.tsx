import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  useCardsQuery,
  useEditCardPositionMutation,
  useAddListMutation,
  useDeleteListMutation,
  useEditListMutation,
} from "@/queries/cards";
import { AddListRequest, DeleteListRequest, EditListRequest } from "@/queries/cards/interface";
import CardList from "@components/CardList";
import CardListComposer from "@components/CardListComposer";

import * as S from "./style";

const Board = () => {
  const { data: cardLists } = useCardsQuery();
  const { mutate: addListMutate } = useAddListMutation();
  const { mutate: deleteListMutate } = useDeleteListMutation();
  const { mutate: editListMutate } = useEditListMutation();
  const { mutate: editCardPositionMutate } = useEditCardPositionMutation();

  const handleEditList = ({ id, title }: EditListRequest) => {
    editListMutate({ id, title });
  };

  const handleDeleteList = ({ id }: DeleteListRequest) => {
    deleteListMutate({ id });
  };

  const handleAddList = ({ title }: AddListRequest) => {
    addListMutate({ title });
  };

  const handleDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    editCardPositionMutate({
      cardId: draggableId,
      destination: {
        listId: destination.droppableId,
        index: destination.index,
      },
      source: {
        listId: source.droppableId,
        index: source.index,
      },
    });
  };

  return (
    <S.Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        {cardLists?.map((cardList) => (
          <Droppable key={cardList.id} droppableId={cardList.id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardList
                  key={cardList.id}
                  data={cardList}
                  onEditList={handleEditList}
                  onDeleteList={handleDeleteList}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}

        <CardListComposer onAddList={handleAddList} />
      </DragDropContext>
    </S.Container>
  );
};

export default Board;
