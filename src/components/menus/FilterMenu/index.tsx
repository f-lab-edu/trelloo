import React from "react";
import Input from "@components/inputs/Input";
import { useForm } from "react-hook-form";
import * as S from "./style";

function FilterMenu() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      filterMenu: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    // TODO: add onSubmit
  };

  return (
    <div>
      <S.Title>Keyword</S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} placeHolder="Enter a keyword..." name="filterMenu" />
      </form>
      <S.Description>Search cards, members, labels, and more.</S.Description>
    </div>
  );
}

export default FilterMenu;
