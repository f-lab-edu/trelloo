import React from "react";
import * as S from "./style";

interface Props {
  url: string;
  name: string;
  onClick?: () => void;
}

function Image({ url, name, onClick }: Props) {
  return (
    <S.Button onClick={onClick}>
      <S.Image src={url}></S.Image>
      <S.NameBackground>
        <p>{name ?? "-"}</p>
      </S.NameBackground>
    </S.Button>
  );
}

export default Image;
