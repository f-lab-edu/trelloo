import React from "react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAMS_KEY } from "@/constants";
import Input from "@components/inputs/Input";
import * as S from "./style";

interface Props {
  onClick: (keyword: string) => void;
}

function FilterMenu({ onClick }: Props) {
  const [searchParams] = useSearchParams(window.location.search);
  const searchKeyword = searchParams.get(SEARCH_PARAMS_KEY.SEARCH) ?? "";

  const onSubmit = ({ filterMenu }: Record<"filterMenu", string>) => {
    onClick(filterMenu);
  };

  const onChange = (data: string) => {
    onClick(data);
  };

  return (
    <div>
      <S.Title>Keyword</S.Title>
      <Input
        placeHolder="Enter a keyword..."
        name="filterMenu"
        onSubmit={onSubmit}
        onChange={onChange}
        defaultValue={searchKeyword}
      />
      <S.Description>Search cards, members, labels, and more.</S.Description>
    </div>
  );
}

export default FilterMenu;
