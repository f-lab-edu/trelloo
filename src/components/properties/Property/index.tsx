import React, { ReactNode } from "react";
import * as S from "./style";

interface Props {
  name: string;
  id?: string;
  children: ReactNode;
  appearance?: {
    isVertical?: boolean;
  };
}
function Property({ name, id, children, appearance }: Props) {
  return (
    <S.Container isVertical={appearance?.isVertical}>
      <S.Label htmlFor={id ?? name}>{name}</S.Label>
      {children}
    </S.Container>
  );
}

export default Property;
