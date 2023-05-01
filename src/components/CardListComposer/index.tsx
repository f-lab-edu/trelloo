import React, { useState } from "react";
import { Input } from "antd";
import { type AddListRequest } from "@/queries/cards/interface";
import Composer from "@components/forms/Composer";
import { useController, useForm } from "react-hook-form";
import * as S from "./style";

const { TextArea } = Input;

interface Props {
  onAddList: (params: AddListRequest) => void;
}

function CardListComposer({ onAddList }: Props) {
  const [isInputOpened, setIsInputOpened] = useState(false);

  const handleInputOpen = () => {
    setIsInputOpened(!isInputOpened);
  };

  const { control, reset,handleSubmit } = useForm({
    defaultValues: {
      title: "",
    },
  });

  const {
      field: {onChange, value}
  } = useController({ name: "title", control });

  const handleAddList = () => {
    onAddList({
      title:value
    });
    reset()
  };

  const wrappedOnSubmit = handleSubmit(handleAddList)

  return (
    <S.Container>
    <Composer isOpen={isInputOpened} toggleInputOpen={handleInputOpen} btnText="Add a list" submitBtnText="Add list" onSubmit={wrappedOnSubmit}>
      <TextArea
        onChange={onChange}
        value={value}
        placeholder="Enter list title..."
        autoSize
      />
    </Composer>
    </S.Container>

  );
}

export default CardListComposer;
