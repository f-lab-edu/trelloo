import React, { useState } from "react";
import { Input } from "antd";
import { AddListRequest } from "@/queries/cards/interface";
import Composer from "@components/forms/Composer";
import { useController, useForm } from "react-hook-form";
import * as S from "./style";

interface Props {
  onAddList: (params: AddListRequest) => Promise<void>;
}

function CardListComposer({ onAddList }: Props) {
  const [isInputOpened, setIsInputOpened] = useState(false);

  const handleInputOpen = () => {
    setIsInputOpened(!isInputOpened);
  };

  const { control, reset, handleSubmit } = useForm({
    defaultValues: { title: "" },
    mode: "onSubmit",
  });

  const {
    field: { onChange, value },
  } = useController({
    name: "title",
    control,
    rules: { required: true },
  });

  const handleAddList = async () => {
    await onAddList({
      title: value,
    });
    reset();
  };

  const wrappedOnSubmit = handleSubmit(handleAddList);

  return (
    <S.Container>
      <Composer
        isOpen={isInputOpened}
        toggleInputOpen={handleInputOpen}
        btnText="Add a list"
        submitBtnText="Add list"
        onSubmit={wrappedOnSubmit}
      >
        <Input onChange={onChange} value={value} placeholder="Enter list title..." />
      </Composer>
    </S.Container>
  );
}

export default CardListComposer;
