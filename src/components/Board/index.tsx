import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
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

interface Props {
  searchKeyword: string;
}

const Board = ({ searchKeyword }: Props) => {
  const { data: cardLists } = useCardsQuery({ search: searchKeyword });
  const { mutateAsync: addListMutateAsync } = useAddListMutation();
  const { mutate: deleteListMutate } = useDeleteListMutation();
  const { mutateAsync: editListMutateAsync } = useEditListMutation();
  const { mutate: editCardPositionMutate } = useEditCardPositionMutation();

  const handleEditList = async ({ id, title }: EditListRequest) => {
    await editListMutateAsync({ id, title });
  };

  const handleDeleteList = ({ id }: DeleteListRequest) => {
    deleteListMutate({ id });
  };

  const handleAddList = async ({ title }: AddListRequest) => {
    await addListMutateAsync({ title });
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (destination == null) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    editCardPositionMutate({
      cardId: draggableId,
      listId: destination.droppableId,
      index: destination.index,
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
