import React from "react";
import { Input as AntdInput } from "antd";
import { MutationOptions } from "@/interfaces/httpRequest";
import { AddListRequest } from "@/queries/cards/interface";
import Composer from "@components/forms/Composer";
import { useController, useForm } from "react-hook-form";
import * as S from "./style";

interface Props {
  isInputOpen: boolean;
  toggleInputOpen: () => void;
  onAddList: (params: AddListRequest, options?: MutationOptions) => void;
}

function CardListComposer({ isInputOpen, toggleInputOpen, onAddList }: Props) {
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      title: "",
    },
    mode: "onSubmit",
  });

  const {
    field: { onChange, value },
  } = useController({ name: "title", control, rules: { required: true } });

  const handleAddList = () => {
    onAddList(
      {
        title: value,
      },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  };

  const wrappedOnSubmit = handleSubmit(handleAddList);

  return (
    <S.Container>
      <Composer
        isOpen={isInputOpen}
        toggleInputOpen={toggleInputOpen}
        btnText="Add a list"
        submitBtnText="Add list"
        onSubmit={wrappedOnSubmit}
      >
        <AntdInput onChange={onChange} value={value} placeholder="Enter list title..." />
      </Composer>
    </S.Container>
  );
}

export default CardListComposer;
