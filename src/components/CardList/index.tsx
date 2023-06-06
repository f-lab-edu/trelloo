import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Input as AntdInput } from "antd";
import { useController, useForm } from "react-hook-form";
import * as I from "@/queries/cards/interface";
import { useAddCardMutation, useDeleteCardMutation, useEditCardMutation } from "@/queries/cards";
import { ICardList } from "@/interfaces/cards";
import { MutationOptions } from "@/interfaces/httpRequest";
import Card from "@components/Card";
import CardComposer from "@components/CardComposer";
import ListMenu from "@components/menus/ListMenu";
import * as S from "./style";

export interface Props {
  data: ICardList;
  onEditList: (params: I.EditListRequest, options?: MutationOptions) => void;
  onDeleteList: (params: I.DeleteListRequest) => void;
}

export type HandleAddCard = ({ description, listId }: I.AddCardRequest) => void;

const CardList = ({ data, onEditList, onDeleteList }: Props) => {
  const [isCardInputOpened, setIsCardInputOpened] = useState(false);
  const [isTitleInputOpened, setIsTitleInputOpened] = useState(false);

  const addCardMutation = useAddCardMutation();
  const editCardMutation = useEditCardMutation();
  const deleteCardMutation = useDeleteCardMutation();

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
      onEditList(
        { id: data.id, title: value },
        {
          onSuccess: () => {
            toggleTitleInputOpen();
            reset();
          },
        },
      );
    }
  };

  const handleAddCard = ({ description, listId }: I.AddCardRequest, options?: MutationOptions) => {
    addCardMutation.mutate({ description, listId }, { onSuccess: options?.onSuccess });
  };

  const handleEditCard = ({ id, description }: I.EditCardRequest, options?: MutationOptions) => {
    editCardMutation.mutate({ id, description }, { onSuccess: options?.onSuccess });
  };

  const handleDeleteCard = ({ id }: I.DeleteCardRequest) => {
    deleteCardMutation.mutate({ id });
  };

  return (
    <S.Container>
      <S.Card
        bordered={false}
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
            <AntdInput onChange={onChange} value={value} onBlur={handleTitleUpdate} onPressEnter={handleTitleUpdate} />
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
          isLoading={addCardMutation?.isLoading}
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
