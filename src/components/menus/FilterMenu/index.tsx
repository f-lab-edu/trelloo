import React from "react";
import * as S from "./style";

function FilterMenu() {
  return (
    <div>
      <S.Title>Keyword</S.Title>
      <S.Input placeholder="Enter a keyword..." />
      <S.Description>Search cards, members, labels, and more.</S.Description>
    </div>
  );
}

export default FilterMenu;
