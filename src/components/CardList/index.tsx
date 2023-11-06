import { useState, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card as AntdCard, Input } from "antd";
import { useForm } from "react-hook-form";
import {
  AddCardRequest,
  DeleteCardRequest,
  DeleteListRequest,
  EditCardRequest,
  EditListRequest,
} from "@/queries/cards/interface";
import { useAddCardMutation, useDeleteCardMutation, useEditCardMutation } from "@/queries/cards";
import { ICardList } from "@/interfaces/cards";
import Card from "@components/Card";
import CardComposer from "@components/CardComposer";
import ListOptions from "@components/ListOptions";
import * as S from "./style";

const { TextArea } = Input;

export interface Props {
  data: ICardList;
  onEditList: (params: EditListRequest) => void;
  onDeleteList: (params: DeleteListRequest) => void;
}

export type HandleAddCard = ({ description, listId }: AddCardRequest) => void;

const CardList = ({ data, onEditList, onDeleteList }: Props) => {
  const { register, handleSubmit, watch } = useForm();

  const [isCardInputOpened, setIsCardInputOpened] = useState(false);
  const [isTitleInputOpened, setIsTitleInputOpened] = useState(false);
  const [titleInput, setTitleInput] = useState(data.title);

  const { mutate: addCardMutate, isLoading: addCardLoading } = useAddCardMutation();
  const { mutate: editCardMutate } = useEditCardMutation();
  const { mutate: deleteCardMutate } = useDeleteCardMutation();

  const handleCardInputToggle = () => {
    setIsCardInputOpened(!isCardInputOpened);
  };

  const handleTitleInput = () => {
    setIsTitleInputOpened(!isTitleInputOpened);
  };

  const handleTitleChange = (e: any) => {
    setTitleInput(e.target.value);
  };

  const handleTitleUpdate = () => {
    onEditList({ id: data.id, title: titleInput });
    handleTitleInput();
  };

  const handleAddCard = ({ description, listId }: AddCardRequest) => {
    addCardMutate({ description, listId });
  };

  const handleEditCard = ({ id, description }: EditCardRequest) => {
    editCardMutate({ id, description });
  };

  const handleDeleteCard = ({ id }: DeleteCardRequest) => {
    deleteCardMutate({ id });
  };

  return (
    <S.Container>
      <S.Card
        bordered={false}
        style={{ width: 300 }}
        extra={<ListOptions onDeleteList={() => onDeleteList({ id: data.id })} />}
      >
        <S.ListTitle onSubmit={handleSubmit(handleTitleUpdate)}>
          {!isTitleInputOpened ? (
            <S.Title onClick={handleTitleInput}>{data.title}</S.Title>
          ) : (
            <TextArea
              autoSize
              {...register("title")}
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
  );
};

export default CardList;
