import React, { ReactNode } from "react";
import * as S from "./style";

interface Props {
  children: ReactNode;
}

function ImageList({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}

export default ImageList;
