import React, { ReactNode } from "react";
import * as S from "./style";

interface Props {
  name: string;
  onClick?: () => void;
  children: ReactNode;
}

function ImageCard({ name, onClick, children }: Props) {
  return (
    <S.Button onClick={onClick}>
      {children}
      <S.NameBackground>
        <p>{name ?? "-"}</p>
      </S.NameBackground>
    </S.Button>
  );
}

export default ImageCard;
