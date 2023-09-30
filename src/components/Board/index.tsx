import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import {
  useCardsQuery,
  useEditCardPositionMutation,
  useAddListMutation,
  useDeleteListMutation,
  useEditListMutation,
} from "@/queries/cards";
import { MutationOptions } from "@/interfaces/httpRequest";
import { AddListRequest, DeleteListRequest, EditListRequest } from "@/queries/cards/interface";
import CardList from "@components/CardList";
import CardListComposer from "@components/CardListComposer";
import * as S from "./style";

interface Props {
  searchKeyword: string;
}

const Board = ({ searchKeyword }: Props) => {
  const background = useSelector((state: any) => state.background);
  const { data: cardLists } = useCardsQuery({ search: searchKeyword });
  const addListMutation = useAddListMutation();
  const deleteListMutation = useDeleteListMutation();
  const editListMutation = useEditListMutation();
  const editCardPositionMutation = useEditCardPositionMutation();

  const [isListInputOpen, setIsListInputOpen] = useState(false);

  const toggleListInputOpen = () => {
    setIsListInputOpen(!isListInputOpen);
  };

  const handleEditList = ({ id, title }: EditListRequest, options?: MutationOptions) => {
    editListMutation.mutate({ id, title }, { onSuccess: options?.onSuccess });
  };

  const handleDeleteList = ({ id }: DeleteListRequest) => {
    deleteListMutation.mutate({ id });
  };

  const handleAddList = ({ title }: AddListRequest, options?: MutationOptions) => {
    addListMutation.mutate({ title }, { onSuccess: options?.onSuccess });
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (destination == null) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    editCardPositionMutation.mutate({
      cardId: draggableId,
      listId: destination.droppableId,
      index: destination.index,
    });
  };

  return (
    <S.Container background={background}>
      <DragDropContext onDragEnd={handleDragEnd}>
        {cardLists?.data?.map((cardList) => (
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

        <CardListComposer
          isInputOpen={isListInputOpen}
          toggleInputOpen={toggleListInputOpen}
          onAddList={handleAddList}
        />
      </DragDropContext>
    </S.Container>
  );
};

export default Board;
