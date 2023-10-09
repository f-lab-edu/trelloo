import React from "react";
import { SEARCH_PARAMS_KEY } from "@/constants";
import useDrawer from "@/hooks/useDrawer";
import CloseButton from "@components/buttons/CloseButton";
import GoBackButton from "@components/buttons/GoBackButton";
import useFunnel from "@/hooks/useFunnel";
import * as S from "./style";

interface Props {
  hasGoBackButton?: boolean;
  children: string;
}

function MenuTitle({ hasGoBackButton = false, children }: Props) {
  const { closeDrawer } = useDrawer();
  const { goBack, initializeStep } = useFunnel();

  const handleGoBack = () => {
    goBack();
  };

  const handleClose = () => {
    initializeStep(SEARCH_PARAMS_KEY.MENU);

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

export default MenuTitle;
