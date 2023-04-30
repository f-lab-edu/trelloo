import React from 'react'
import { DragDropContext, Droppable, type DropResult } from 'react-beautiful-dnd'
import {
  useCardsQuery,
  useEditCardPositionMutation,
  useAddListMutation,
  useDeleteListMutation,
  useEditListMutation
} from '@/queries/cards'
import { type AddListRequest, type DeleteListRequest, type EditListRequest } from '@/queries/cards/interface'
import CardList from '@components/CardList'
import CardListComposer from '@components/CardListComposer'

import * as S from './style'

interface Props {
  searchKeyword:string;
}

const Board = ({searchKeyword}:Props) => {
  const { data: cardLists } = useCardsQuery({search:searchKeyword})
  const { mutate: addListMutate } = useAddListMutation()
  const { mutate: deleteListMutate } = useDeleteListMutation()
  const { mutate: editListMutate } = useEditListMutation()
  const { mutate: editCardPositionMutate } = useEditCardPositionMutation()

  const handleEditList = ({ id, title }: EditListRequest) => {
    editListMutate({ id, title })
  }

  const handleDeleteList = ({ id }: DeleteListRequest) => {
    deleteListMutate({ id })
  }

  const handleAddList = ({ title }: AddListRequest) => {
    addListMutate({ title })
  }

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result
    if (destination == null) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }
    editCardPositionMutate({
      cardId: draggableId,
      destination: {
        listId: destination.droppableId,
        index: destination.index
      },
      source: {
        listId: source.droppableId,
        index: source.index
      }
    })
  }

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
  )
}

export default Board
