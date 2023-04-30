import React from "react";
import Input from "@components/inputs/Input";
import * as S from "./style";

interface Props {
  onClick: (keyword: string) => void;
}

function FilterMenu({ onClick }: Props) {
  const onSubmit = ({ filterMenu }: { filterMenu: string }) => {
    onClick(filterMenu);
  };
  return (
    <div>
      <S.Title>Keyword</S.Title>
      <Input placeHolder="Enter a keyword..." name="filterMenu" onSubmit={onSubmit} />
      <S.Description>Search cards, members, labels, and more.</S.Description>
    </div>
  );
}

export default FilterMenu;
