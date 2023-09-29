import React, { ReactNode } from "react";
import * as S from "./style";

interface Props {
  Icon?: ReactNode;
  children: string;
  onClick?: () => void;
}

function MenuButton({ Icon, children, onClick }: Props) {
  return (
    <S.Container onClick={onClick}>
      {Icon}
      <p>{children}</p>
    </S.Container>
  );
}

export default MenuButton;
