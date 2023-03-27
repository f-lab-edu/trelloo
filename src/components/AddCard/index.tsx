import React, { useState } from "react";
import { Card as C, Input } from "antd";
import Card from "@components/Card";
import Button from "@components/Buttons/Button";
import { EllipsisOutlined, PlusOutlined, PicLeftOutlined, CloseOutlined } from "@ant-design/icons";
import * as S from "./style";

const { TextArea } = Input;

interface Props {
  isWritingCard: boolean;
  handleClickAddCard: () => void;
}

const AddCard = ({ isWritingCard, handleClickAddCard }: Props) => {
  return (
    <>
      {isWritingCard ? (
        <S.CardInputContainer>
          <C bodyStyle={S.CardInput}>
            <TextArea placeholder="Enter a title for this card..." autoSize bordered={false} />
          </C>
          <S.AddCardButtonContainer>
            <S.AddCardButtonWrapper>
              <Button buttonColor="blue">Add card</Button>
              <CloseOutlined style={S.CancleAddCardButton} onClick={handleClickAddCard} />
            </S.AddCardButtonWrapper>
            <Button icon={<EllipsisOutlined />} />
          </S.AddCardButtonContainer>
        </S.CardInputContainer>
      ) : (
        <S.ButtonWrapper>
          <Button icon={<PlusOutlined />} onClick={handleClickAddCard}>
            Add a card
          </Button>
          <Button icon={<PicLeftOutlined />} />
        </S.ButtonWrapper>
      )}
    </>
  );
};

export default AddCard;
