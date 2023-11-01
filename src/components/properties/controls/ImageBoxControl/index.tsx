import React from "react";
import * as S from "./style";

interface Props {
  Icon: any;
}

function ImageBoxControl({ Icon }: Props) {
  return (
    <S.Container>
      <Icon />
    </S.Container>
  );
}

export default ImageBoxControl;
