import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Input } from 'antd'
import { useForm } from 'react-hook-form'
import type * as I from '@/queries/cards/interface'
import { useAddCardMutation, useDeleteCardMutation, useEditCardMutation } from '@/queries/cards'
import { type ICardList } from '@/interfaces/cards'
import Card from '@components/Card'
import CardComposer from '@components/CardComposer'
import ListMenu from '@components/menus/ListMenu'
import * as S from './style'

const { TextArea } = Input

export interface Props {
  data: ICardList
  onEditList: (params: I.EditListRequest) => void
  onDeleteList: (params: I.DeleteListRequest) => void
}

export type HandleAddCard = ({ description, listId }: I.AddCardRequest) => void

const CardList = ({ data, onEditList, onDeleteList }: Props) => {
  const { register, handleSubmit } = useForm()

  const [isCardInputOpened, setIsCardInputOpened] = useState(false)
  const [isTitleInputOpened, setIsTitleInputOpened] = useState(false)
  const [titleInput, setTitleInput] = useState(data.title)

  const { mutateAsync: addCardMutateAsync, isLoading: addCardLoading } = useAddCardMutation()
  const { mutateAsync: editCardMutateAsync } = useEditCardMutation()
  const { mutate: deleteCardMutate } = useDeleteCardMutation()

  const handleCardInputToggle = () => {
    setIsCardInputOpened(!isCardInputOpened)
  }

  const handleTitleInput = () => {
    setIsTitleInputOpened(!isTitleInputOpened)
  }

  const handleTitleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleInput(e.target.value)
  }

  const handleTitleUpdate = () => {
    onEditList({ id: data.id, title: titleInput })
    handleTitleInput()
  }

  const handleAddCard = async({ description, listId }: I.AddCardRequest) => {
    await addCardMutateAsync({ description, listId })
  }

  const handleEditCard = async({ id, description }: I.EditCardRequest) => {
    await editCardMutateAsync({ id, description })
  }

  const handleDeleteCard = ({ id }: I.DeleteCardRequest) => {
    deleteCardMutate({ id })
  }

  return (
    <S.Container>
      <S.Card
        bordered={false}
        style={{ width: 300 }}
        extra={<ListMenu onDeleteList={() => { onDeleteList({ id: data.id }) }} />}
      >
        <S.ListTitle onSubmit={() => handleSubmit(handleTitleUpdate)}>
          {!isTitleInputOpened
            ? (
            <S.Title onClick={handleTitleInput}>{data.title}</S.Title>
              )
            : (
            <TextArea
              autoSize
              {...register('title')}
              defaultValue={titleInput}
              onChange={handleTitleChange}
              onBlur={handleTitleUpdate}
            />
              )}
        </S.ListTitle>

        {data.cards.map((card, index) => (
          <Draggable key={card.id} draggableId={card.id} index={index}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Card key={card.id} data={card} onEditCard={handleEditCard} onDeleteCard={handleDeleteCard} />
              </div>
            )}
          </Draggable>
        ))}

        <CardComposer
          isLoading={addCardLoading}
          isCardInputOpened={isCardInputOpened}
          onCardInputToggle={handleCardInputToggle}
          listId={data.id}
          onAddCard={handleAddCard}
        />
      </S.Card>
    </S.Container>
  )
}

export default CardList
