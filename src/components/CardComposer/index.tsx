import React, { Spin } from "antd";
import { useController, useForm } from "react-hook-form";
import Button from "@components/Button";
import { EllipsisOutlined, PlusOutlined, PicLeftOutlined } from "@ant-design/icons";
import * as S from "./style";

interface Props {
  isLoading: boolean;
  isCardInputOpened: boolean;
  onCardInputToggle: () => void;
  listId: string;
  onAddCard: (params: any) => void;
}

const CardComposer = ({ isCardInputOpened, onCardInputToggle, listId, onAddCard, isLoading }: Props) => {
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      description: "",
    },
  });

  const {
    field: { onChange, value },
  } = useController({ name: "description", control });

  const handleAddCard = () => {
    onAddCard({
      description: value,
      listId,
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <>
      {isCardInputOpened ? (
        <S.CardInputContainer onSubmit={() => handleSubmit(handleAddCard)}>
          <Spin spinning={isLoading}>
            <S.Card>
              <input onChange={onChange} value={value} placeholder="Enter a title for this card..." />
            </S.Card>
          </Spin>

          <S.AddCardButtonContainer>
            <S.AddCardButtonWrapper>
              <Button type="submit" appearance={{ type: "blue" }} isLoading={isLoading}>
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
