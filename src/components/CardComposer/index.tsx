import React, { useState } from "react";
import { Card as AntdCard, Input } from "antd";
import { AddCardRequest } from "@/queries/cards/interface";
import Button from "@components/Button";
import { EllipsisOutlined, PlusOutlined, PicLeftOutlined, CloseOutlined } from "@ant-design/icons";
import * as S from "./style";

const { TextArea } = Input;

interface Props {
  isCardInputOpened: boolean;
  onCardInputToggle: () => void;
  listId: string;
  onAddCard: (params: AddCardRequest) => void;
}

const CardComposer = ({ isCardInputOpened, onCardInputToggle, listId, onAddCard }: Props) => {
  const [cardInputValue, setCardInputValue] = useState("");

  const handleAddCard = ({ description, listId }: AddCardRequest) => {
    onAddCard({ description, listId });
    setCardInputValue("");
  };

  return (
    <>
      {isCardInputOpened ? (
        <S.CardInputContainer>
          <S.Card>
            <TextArea
              value={cardInputValue}
              onChange={(e) => setCardInputValue(e.target.value)}
              placeholder="Enter a title for this card..."
              autoSize
              bordered={false}
            />
          </S.Card>
          <S.AddCardButtonContainer>
            <S.AddCardButtonWrapper>
              <Button type="blue" onClick={() => handleAddCard({ description: cardInputValue, listId })}>
                Add card
              </Button>
              <S.CloseButton onClick={onCardInputToggle} />
            </S.AddCardButtonWrapper>
            <Button type="transparent" icon={<EllipsisOutlined />} />
          </S.AddCardButtonContainer>
        </S.CardInputContainer>
      ) : (
        <S.ButtonWrapper>
          <Button type="transparent" icon={<PlusOutlined />} onClick={onCardInputToggle}>
            Add a card
          </Button>
          <Button type="transparent" icon={<PicLeftOutlined />} />
        </S.ButtonWrapper>
      )}
    </>
  );
};

export default CardComposer;
