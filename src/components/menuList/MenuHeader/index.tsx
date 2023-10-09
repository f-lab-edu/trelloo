import React from "react";
import useDrawer from "@/hooks/useDrawer";
import CloseButton from "@components/buttons/CloseButton";
import GoBackButton from "@components/buttons/GoBackButton";
import * as S from "./style";

interface Props {
  hasGoBackButton?: boolean;
  children: string;
}

function MenuHeader({ hasGoBackButton = false, children }: Props) {
  const { closeDrawer, goBack } = useDrawer();

  const handleGoBack = () => {
    goBack();
  };

  const handleClose = () => {
    closeDrawer();
  };

  return (
    <S.Container>
      <GoBackButton isHidden={!hasGoBackButton} onClick={handleGoBack} />
      {children}
      <CloseButton onClick={handleClose} />
    </S.Container>
  );
}

export default MenuHeader;
