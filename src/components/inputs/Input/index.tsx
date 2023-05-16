import React from "react";
import { useController, useForm } from "react-hook-form";
import * as S from "./style";

export interface Props {
  onSubmit: (params: Record<string, string>) => void;
  name: string;
  defaultValue: string;
  placeHolder: string;
  onChange?: (data: string) => void;
}

function Input({ placeHolder, name, defaultValue = "", onSubmit, onChange }: Props) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      [name]: defaultValue,
    },
    mode: "onChange",
  });

  const { field } = useController({
    control,
    name,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Input
        {...field}
        placeholder={placeHolder}
        onChange={(e) => {
          field.onChange(e.target.value);
          onChange?.(e.target.value);
        }}
      />
    </form>
  );
}

export default Input;
