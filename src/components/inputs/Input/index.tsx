import React from "react";
import { useController, useForm } from "react-hook-form";
import * as S from "./style";

interface Props {
  onSubmit: (data: any) => void;
  name: string;
  placeHolder: string;
}

function Input({ placeHolder, name, onSubmit }: Props) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      [name]: "",
    },
    mode: "onChange",
  });

  const { field } = useController({
    control,
    name,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Input {...field} placeholder={placeHolder} />
    </form>
  );
}

export default Input;
