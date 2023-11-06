import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Input } from "antd";
import { useController, useForm } from "react-hook-form";
import * as I from "@/queries/cards/interface";
import { useAddCardMutation, useDeleteCardMutation, useEditCardMutation } from "@/queries/cards";
import { ICardList } from "@/interfaces/cards";
import Card from "@components/Card";
import CardComposer from "@components/CardComposer";
import ListMenu from "@components/menus/ListMenu";
import * as S from "./style";

export interface Props {
  data: ICardList;
  onEditList: (params: I.EditListRequest) => void;
  onDeleteList: (params: I.DeleteListRequest) => void;
}

export type HandleAddCard = ({ description, listId }: I.AddCardRequest) => void;

const CardList = ({ data, onEditList, onDeleteList }: Props) => {
  const [isCardInputOpened, setIsCardInputOpened] = useState(false);
  const [isTitleInputOpened, setIsTitleInputOpened] = useState(false);

  const { mutate: addCardMutate, isLoading: addCardLoading } = useAddCardMutation();
  const { mutate: editCardMutate } = useEditCardMutation();
  const { mutate: deleteCardMutate } = useDeleteCardMutation();

  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      title: data.title,
    },
    mode: "all",
  });

  const {
    field: { onChange, value },
    fieldState: { invalid },
  } = useController({ name: "title", control, rules: { required: true } });

  const handleCardInputToggle = () => {
    setIsCardInputOpened(!isCardInputOpened);
  };

  const toggleTitleInputOpen = () => {
    setIsTitleInputOpened(!isTitleInputOpened);
  };

  const handleTitleUpdate = () => {
    if (!invalid) {
      onEditList({ id: data.id, title: value });
    }
    toggleTitleInputOpen();
    reset();
  };

  const handleAddCard = ({ description, listId }: I.AddCardRequest) => {
    addCardMutate({ description, listId });
  };

  const handleEditCard = ({ id, description }: I.EditCardRequest) => {
    editCardMutate({ id, description });
  };

  const handleDeleteCard = ({ id }: I.DeleteCardRequest) => {
    deleteCardMutate({ id });
  };

  return (
    <S.Container>
      <S.Card
        bordered={false}
        style={{ width: 300 }}
        extra={
          <ListMenu
            onDeleteList={() => {
              onDeleteList({ id: data.id });
            }}
          />
        }
      >
        <S.ListTitle onSubmit={handleSubmit(handleTitleUpdate)}>
          {!isTitleInputOpened ? (
            <S.Title onClick={toggleTitleInputOpen}>{data.title}</S.Title>
          ) : (
            <Input onChange={onChange} value={value} onBlur={handleTitleUpdate} onPressEnter={handleTitleUpdate} />
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
  );
};

export default CardList;
