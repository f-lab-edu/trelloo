import { useState } from "react";
import { Card as AntdCard, Dropdown, Input } from "antd";
import type { MenuProps } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { AddCardRequest, DeleteListRequest, EditListRequest } from "@/queries/cardList/interface";
import { useAddCardMutation, useDeleteCardMutation, useEditCardMutation } from "@/queries/cardList";
import { CardList } from "@/interfaces/cards";
import Card from "@components/Card";
import CardComposer from "@components/CardComposer";
import * as S from "./style";

const { TextArea } = Input;

export interface Props {
  data: CardList;
  onEditList: (params: EditListRequest) => void;
  onDeleteList: (params: DeleteListRequest) => void;
}

export type HandleAddCard = ({ text, listId }: AddCardRequest) => void;

const CardList = ({ data, onEditList, onDeleteList }: Props) => {
  const [isWritingCard, setIsWritingCard] = useState(false);
  const [isTitleInputOpened, setIsTitleInputOpened] = useState(false);
  const [titleInput, setTitleInput] = useState(data.title);

  const { mutate: addCardMutate } = useAddCardMutation();
  const { mutate: editCardMutate } = useEditCardMutation();
  const { mutate: deleteCardMutate } = useDeleteCardMutation();

  const onCardInputToggle = () => {
    setIsWritingCard(!isWritingCard);
  };

  const handleTitleInput = () => {
    setIsTitleInputOpened(!isTitleInputOpened);
  };

  const handleTitleUpdate = () => {
    onEditList({ id: data.id, title: titleInput });
    handleTitleInput();
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <S.ListOptionTitle>List actions</S.ListOptionTitle>,
    },
    {
      key: "2",
      label: <>Add card...</>,
    },
    {
      key: "3",
      label: <>Copy list...</>,
    },
    {
      key: "4",
      label: <>Move list...</>,
    },
    {
      key: "5",
      label: <>Watch</>,
    },
    {
      key: "6",
      label: <>Sort by...</>,
    },
    {
      key: "7",
      label: <div onClick={() => onDeleteList({ id: data.id })}>Arcive this list...</div>,
    },
  ];

  return (
    <S.Container>
      <AntdCard
        bordered={false}
        style={{ width: 300 }}
        extra={
          <Dropdown menu={{ items }} placement="bottomLeft">
            <EllipsisOutlined />
          </Dropdown>
        }
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
          <Card key={card.id} data={card} onEditCard={editCardMutate} onDeleteCard={deleteCardMutate} />
        ))}
        <CardComposer
          isWritingCard={isWritingCard}
          onCardInputToggle={onCardInputToggle}
          listId={data.id}
          onAddCard={addCardMutate}
        />
      </AntdCard>
    </S.Container>
  );
};

export default CardList;
