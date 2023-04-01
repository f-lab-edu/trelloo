import React from "react";
import { Card as AntdCard, Input } from "antd";
import Button from "@components/Button";
import { EllipsisOutlined, PlusOutlined, PicLeftOutlined, CloseOutlined } from "@ant-design/icons";
import * as S from "./style";
import { HandleAddCard } from "@components/CardList";

const { TextArea } = Input;

interface Props {
  isWritingCard: boolean;
  toggleCardInput: () => void;
  onClick: HandleAddCard;
}

const CardComposer = ({ isWritingCard, toggleCardInput, onClick }: Props) => {
  return (
    <>
      {isWritingCard ? (
        <S.CardInputContainer>
          <AntdCard bodyStyle={S.CardInput}>
            <TextArea placeholder="Enter a title for this card..." autoSize bordered={false} />
          </AntdCard>
          <S.AddCardButtonContainer>
            <S.AddCardButtonWrapper>
              <Button buttonColor="blue" onClick={() => onClick({ text: "example text", listId: "list1" })}>
                Add card
              </Button>
              <CloseOutlined style={S.CancleAddCardButton} onClick={toggleCardInput} />
            </S.AddCardButtonWrapper>
            <Button icon={<EllipsisOutlined />} />
          </S.AddCardButtonContainer>
        </S.CardInputContainer>
      ) : (
        <S.ButtonWrapper>
          <Button icon={<PlusOutlined />} onClick={toggleCardInput}>
            Add a card
          </Button>
          <Button icon={<PicLeftOutlined />} />
        </S.ButtonWrapper>
      )}
    </>
  );
};

export default CardComposer;
