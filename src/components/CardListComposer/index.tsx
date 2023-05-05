import React, { useState } from "react";
import { Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AddListRequest } from "@/queries/cards/interface";
import Button from "@components/buttons/Button";
import * as S from "./style";

const { TextArea } = Input;

interface Props {
  onAddList: (params: AddListRequest) => void;
}

function CardListComposer({ onAddList }: Props) {
  const [isInputOpened, setIsInputOpened] = useState(false);
  const [listTitleInputValue, setListTitleInputValue] = useState("");

  const handleInputOpen = () => {
    setIsInputOpened(!isInputOpened);
  };

  const handleAddList = (params: AddListRequest) => {
    onAddList(params);
    setListTitleInputValue("");
  };

  return (
    <S.Container>
      {!isInputOpened ? (
        <S.ButtonWrapper onClick={handleInputOpen}>
          <Button appearance={{ type: "transparent" }} Icon={<PlusOutlined />}>
            Add another list
          </Button>
        </S.ButtonWrapper>
      ) : (
        <S.InputWrapper>
          <TextArea
            value={listTitleInputValue}
            onChange={(e) => {
              setListTitleInputValue(e.target.value);
            }}
            placeholder="Enter list title..."
            autoSize
          />
          <S.SubmitButtonWrapper>
            <Button
              appearance={{ type: "blue" }}
              onClick={() => {
                handleAddList({ title: listTitleInputValue });
              }}
            >
              Add a list
            </Button>
            <S.CloseButton onClick={handleInputOpen} />
          </S.SubmitButtonWrapper>
        </S.InputWrapper>
      )}
    </S.Container>
  );
}

export default CardListComposer;
