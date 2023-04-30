import React from "react";
import { useController } from "react-hook-form";
import * as S from "./style";

interface Props {
  control: any;
  name: string;
  placeHolder: string;
}

function Input({ placeHolder, control, name }: Props) {
  const { field } = useController({
    control,
    name,
  });
  return (
    <div>
      <S.Input {...field} placeholder={placeHolder} />
    </div>
  );
}

export default Input;
