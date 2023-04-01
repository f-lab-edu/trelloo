import React, { useState } from "react";
import { Card as AntdCard, Input } from "antd";
import { useAddCardMutation, useGetCardLists } from "@/queries/cardList";
import Button from "@components/Buttons/Button";
import { EllipsisOutlined, PlusOutlined, PicLeftOutlined, CloseOutlined } from "@ant-design/icons";
import * as S from "./style";

const { TextArea } = Input;

interface Props {
  isWritingCard: boolean;
  handleClickAddCard: () => void;
}

const AddCard = ({ isWritingCard, handleClickAddCard }: Props) => {
  const { refetch } = useGetCardLists();
  const { mutateAsync } = useAddCardMutation();

  const handleAddCard = async () => {
    await mutateAsync({
      text: "dsf",
      listTitle: "list1",
    });
  };

  refetch();

  return (
    <>
      {isWritingCard ? (
        <S.CardInputContainer>
          <AntdCard bodyStyle={S.CardInput}>
            <TextArea placeholder="Enter a title for this card..." autoSize bordered={false} />
          </AntdCard>
          <S.AddCardButtonContainer>
            <S.AddCardButtonWrapper>
              <Button buttonColor="blue" onClick={handleAddCard}>
                Add card
              </Button>
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
