import React, { useState, useEffect } from "react";
import { Card as AntdCard, Input } from "antd";
import { useForm } from "react-hook-form";
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
  const { register, handleSubmit, watch } = useForm();
  const [cardInput, setCardInput] = useState("");

  useEffect(() => {
    console.log(watch("description"));
  }, [watch("description")]);

  const handleAddCard = () => {
    console.log(watch("description"));
    // onAddCard({ description: watch("description"), listId });
    // setCardInput("");
  };

  const handleCardChange = () => {
    console.log(watch("description"));
    setCardInput(watch("description"));
  };

  return (
    <>
      {isCardInputOpened ? (
        <S.CardInputContainer>
          <S.Card onSubmit={handleSubmit(handleAddCard)}>
            <form onSubmit={handleSubmit(handleAddCard)}>
              <input {...register("description")} />
              {/* <TextArea
              defaultValue=""
              placeholder="Enter a title for this card..."
              autoSize
              bordered={false}
              {...register("description")}
            /> */}
            </form>
          </S.Card>
          <S.AddCardButtonContainer>
            <S.AddCardButtonWrapper>
              <Button appearance={{ type: "blue" }} onClick={handleAddCard}>
                Add card
              </Button>
              <S.CloseButton onClick={onCardInputToggle} />
            </S.AddCardButtonWrapper>
            <Button appearance={{ type: "transparent" }} Icon={<EllipsisOutlined />} />
          </S.AddCardButtonContainer>
        </S.CardInputContainer>
      ) : (
        <S.ButtonWrapper>
          <Button appearance={{ type: "transparent" }} Icon={<PlusOutlined />} onClick={onCardInputToggle}>
            Add a card
          </Button>
          <Button appearance={{ type: "transparent" }} Icon={<PicLeftOutlined />} />
        </S.ButtonWrapper>
      )}
    </>
  );
};

export default CardComposer;
