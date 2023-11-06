import React, { useState, useContext } from "react";
import { Card as AntdCard, Input } from "antd";
import Button from "@components/Button";
import { EllipsisOutlined, PlusOutlined, PicLeftOutlined, CloseOutlined } from "@ant-design/icons";
import * as S from "./style";
import { CardContext } from "@components/Board/Provider";

const { TextArea } = Input;

interface Props {
  isWritingCard: boolean;
  onCardInputToggle: () => void;
  listId: string;
}

const CardComposer = ({ isWritingCard, onCardInputToggle, listId }: Props) => {
  const [cardInputValue, setCardInputValue] = useState("");
  const { onAddCard } = useContext(CardContext);

  return (
    <>
      {isWritingCard ? (
        <S.CardInputContainer>
          <AntdCard bodyStyle={S.CardInput}>
            <TextArea
              onChange={(e) => setCardInputValue(e.target.value)}
              placeholder="Enter a title for this card..."
              autoSize
              bordered={false}
            />
          </AntdCard>
          <S.AddCardButtonContainer>
            <S.AddCardButtonWrapper>
              <Button type="blue" onClick={() => onAddCard({ text: cardInputValue, listId })}>
                Add card
              </Button>
              <CloseOutlined style={S.CancelAddCardButton} onClick={onCardInputToggle} />
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
