import { useState } from "react";
import { Input, Spin } from "antd";
import { AddCardRequest } from "@/queries/cards/interface";
import Button from "@components/Button";
import { EllipsisOutlined, PlusOutlined, PicLeftOutlined } from "@ant-design/icons";
import * as S from "./style";

const { TextArea } = Input;

interface Props {
  isLoading: boolean;
  isCardInputOpened: boolean;
  onCardInputToggle: () => void;
  listId: string;
  onAddCard: (params: AddCardRequest) => void;
}

const CardComposer = ({ isCardInputOpened, onCardInputToggle, listId, onAddCard, isLoading }: Props) => {
  const [cardInputValue, setCardInputValue] = useState("");

  const handleAddCard = ({ description, listId }: AddCardRequest) => {
    onAddCard({ description, listId });
    setCardInputValue("");
  };

  return (
    <>
      {isCardInputOpened ? (
        <S.CardInputContainer>
          <Spin spinning={isLoading}>
            <S.Card>
              <TextArea
                value={cardInputValue}
                onChange={(e) => setCardInputValue(e.target.value)}
                placeholder="Enter a title for this card..."
                autoSize
                bordered={false}
              />
            </S.Card>
          </Spin>

          <S.AddCardButtonContainer>
            <S.AddCardButtonWrapper>
              <Button
                appearance={{ type: "blue" }}
                onClick={() => handleAddCard({ description: cardInputValue, listId })}
                isLoading={isLoading}
              >
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
