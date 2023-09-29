import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import * as S from "./style";

interface Props {
  onClick: () => void;
  isHidden: boolean;
}

function GoBackButton({ onClick, isHidden }: Props) {
  return (
    <S.Button isHidden={isHidden} onClick={onClick}>
      <IoIosArrowBack />
    </S.Button>
  );
}

export default GoBackButton;
