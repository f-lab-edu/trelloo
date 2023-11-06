import React from "react";
import * as S from "./style";

interface Props {
  url: string;
}

function ImageThumbnail({ url }: Props) {
  return <S.Image src={url}></S.Image>;
}

export default ImageThumbnail;
