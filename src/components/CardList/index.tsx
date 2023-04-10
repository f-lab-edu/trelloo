import { useState } from "react";
import { Card as AntdCard, Input } from "antd";
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

export type HandleAddCard = ({ text, listId }: AddCardRequest) => void;

const CardList = ({ data, onEditList, onDeleteList }: Props) => {
  const [isCardInputOpened, setIsCardInputOpened] = useState(false);
  const [isTitleInputOpened, setIsTitleInputOpened] = useState(false);
  const [titleInput, setTitleInput] = useState(data.title);

  const { mutate: addCardMutate } = useAddCardMutation();
  const { mutate: editCardMutate } = useEditCardMutation();
  const { mutate: deleteCardMutate } = useDeleteCardMutation();

  const handleCardInputToggle = () => {
    setIsCardInputOpened(!isCardInputOpened);
  };

  const handleTitleInput = () => {
    setIsTitleInputOpened(!isTitleInputOpened);
  };

  const handleTitleUpdate = () => {
    onEditList({ id: data.id, title: titleInput });
    handleTitleInput();
  };

  const handleAddCard = (params: AddCardRequest) => {
    addCardMutate(params);
  };

  const handleEditCard = (params: EditCardRequest) => {
    editCardMutate(params);
  };

  const handleDeleteCard = (params: DeleteCardRequest) => {
    deleteCardMutate(params);
  };

  const handleDeleteListById = () => {
    onDeleteList({ id: data.id });
  };

  return (
    <S.Container>
      <AntdCard
        bordered={false}
        style={{ width: 300 }}
        extra={<ListOptions onDeleteListById={handleDeleteListById} />}
        headStyle={S.Header}
        bodyStyle={S.Body}
      >
        <S.ListTitle>
          {!isTitleInputOpened ? (
            <S.Title onClick={handleTitleInput}>{titleInput}</S.Title>
          ) : (
            <TextArea
              value={titleInput}
              autoSize
              onChange={(e) => setTitleInput(e.target.value)}
              onBlur={handleTitleUpdate}
            />
          )}
        </S.ListTitle>
        {data.cards.map((card) => (
          <Card key={card.id} data={card} onEditCard={handleEditCard} onDeleteCard={handleDeleteCard} />
        ))}
        <CardComposer
          isCardInputOpened={isCardInputOpened}
          onCardInputToggle={handleCardInputToggle}
          listId={data.id}
          onAddCard={handleAddCard}
        />
      </AntdCard>
    </S.Container>
  );
};

export default CardList;
