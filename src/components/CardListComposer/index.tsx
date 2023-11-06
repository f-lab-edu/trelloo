import React, { useState, useContext } from "react";
import { Input } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { CardListContext } from "@components/Board/Provider";
import Button from "@components/Button";
import * as S from "./style";

const { TextArea } = Input;

function CardListComposer() {
  const [isInputOpened, setIsInputOpened] = useState(false);
  const [listTitleInputValue, setListTitleInputValue] = useState("");
  const { onAddList } = useContext(CardListContext);

  const handleInputOpen = () => {
    setIsInputOpened(!isInputOpened);
  };

  return (
    <S.Container>
      {!isInputOpened ? (
        <S.ButtonWrapper onClick={handleInputOpen}>
          <Button type="transparent" icon={<PlusOutlined />}>
            Add another list
          </Button>
        </S.ButtonWrapper>
      ) : (
        <S.InputWrapper>
          <TextArea
            onChange={(e) => setListTitleInputValue(e.target.value)}
            placeholder="Enter list title..."
            autoSize
          />
          <S.SubmitButtonWrapper>
            <Button type="blue" onClick={() => onAddList({ title: listTitleInputValue })}>
              Add a list
            </Button>
            <CloseOutlined style={S.CancleAddListButton} onClick={handleInputOpen} />
          </S.SubmitButtonWrapper>
        </S.InputWrapper>
      )}
    </S.Container>
  );
}

export default CardListComposer;
