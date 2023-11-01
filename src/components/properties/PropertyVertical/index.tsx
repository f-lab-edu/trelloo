import React, { ReactNode } from "react";
import { Label } from "@components/ui/label";
import * as S from "./style";

interface Props {
  name: string;
  id?: string;
  children: ReactNode;
}
function PropertyVertical({ name, id, children }: Props) {
  return (
    <S.Container>
      <Label htmlFor={id ?? name}>{name}</Label>
      {children}
    </S.Container>
  );
}

export default PropertyVertical;
