import { Suspense } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
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
import BoardSkeleton from "@components/skeletons/BoardSkeleton";
import EmptyBoard from "@components/EmptyBoard";

import * as S from "./style";

const BoardContent = () => {
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

function Board() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => <EmptyBoard onQueryErrorReset={resetErrorBoundary} />}
        >
          <Suspense fallback={<BoardSkeleton />}>
            <BoardContent />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default Board;
