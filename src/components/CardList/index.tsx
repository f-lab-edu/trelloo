import { useState } from "react";
import { Card as C, Input } from "antd";
import Card from "@components/Card";
import Button from "@components/Buttons/Button";
import { EllipsisOutlined, PlusOutlined, PicLeftOutlined, CloseOutlined } from "@ant-design/icons";
import * as S from "./style";

const { TextArea } = Input;
const CardList = () => {
  const [isWritingNewCard, setIsWritingNewCard] = useState(false);

  const handleClickAddACard = () => {
    setIsWritingNewCard(!isWritingNewCard);
  };

  return (
    <S.Container>
      <C
        title="Card list"
        bordered={false}
        style={{ width: 300 }}
        extra={<EllipsisOutlined />}
        headStyle={S.Header}
        bodyStyle={S.Body}
      >
        <Card text="card" />
        {isWritingNewCard ? (
          <S.CardInputContainer>
            <C bodyStyle={S.CardInput}>
              <TextArea placeholder="Enter a title for this card..." autoSize bordered={false} />
            </C>
            <S.AddCardButtonContainer>
              <S.AddCardButtonWrapper>
                <Button buttonColor="blue">Add card</Button>
                <CloseOutlined style={S.CancleAddCardButton} onClick={handleClickAddACard} />
              </S.AddCardButtonWrapper>
              <Button icon={<EllipsisOutlined />} />
            </S.AddCardButtonContainer>
          </S.CardInputContainer>
        ) : (
          <S.ButtonWrapper onClick={handleClickAddACard}>
            <Button icon={<PlusOutlined />}>Add a card</Button>
            <Button icon={<PicLeftOutlined />} />
          </S.ButtonWrapper>
        )}
      </C>
    </S.Container>
  );
};

export default CardList;
