import React from "react";
import { useNavigate } from "react-router-dom";
import useDrawer from "@/hooks/useDrawer";
import CloseButton from "@components/buttons/CloseButton";
import GoBackButton from "@components/buttons/GoBackButton";
import * as S from "./style";

interface Props {
  hasGoBackButton?: boolean;
  children: string;
}

function MenuTitle({ hasGoBackButton = false, children }: Props) {
  const { closeDrawer } = useDrawer();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <GoBackButton isHidden={!hasGoBackButton} onClick={handleGoBack} />
      {children}
      <CloseButton onClick={closeDrawer} />
    </S.Container>
  );
}

export default MenuTitle;
