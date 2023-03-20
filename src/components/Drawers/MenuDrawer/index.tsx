import React from "react";
import * as S from "./style";

interface Props {
  onClose: () => void;
}

function MenuDrawer({ onClose }: Props) {
  return (
    <S.Container>
      MenuDrawer
      <button onClick={onClose}>x</button>
    </S.Container>
  );
}

export default MenuDrawer;
