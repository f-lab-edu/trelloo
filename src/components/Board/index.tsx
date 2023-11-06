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

  const handleEditList = (params: EditListRequest) => {
    editListMutate(params);
  };

  const handleDeleteList = (params: DeleteListRequest) => {
    deleteListMutate(params);
  };

  const handleAddList = (params: AddListRequest) => {
    addListMutate(params);
  };

  return (
    <S.Container>
      <DragDropContext onDragEnd={() => {}} onDragStart={() => {}} onDragUpdate={() => {}}>
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
