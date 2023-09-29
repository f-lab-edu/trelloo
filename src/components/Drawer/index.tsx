import React from "react";
import { useSearchParams } from "react-router-dom";
import { DRAWER_CONTENT, DRAWER_MENU_SEARCH_PARAMS, SEARCH_PARAMS_KEY } from "@/constants";
import ChangeBackground from "@components/drawerMenus/ChangeBackground";
import AllLists from "@components/drawerMenus/AllLists";
import BackgroundPhotos from "@components/drawerMenus/BackgroundPhotos";
import * as S from "./style";

interface Props {
  isOpen: boolean;
  onClose: (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
}

function Drawer({ isOpen, onClose }: Props) {
  const [searchParams] = useSearchParams();
  const content = searchParams.get(SEARCH_PARAMS_KEY.MENU) ?? DRAWER_MENU_SEARCH_PARAMS.ALL;

  const contents = {
    [DRAWER_CONTENT.CHANGE_BACKGROUND]: <ChangeBackground />,
    [DRAWER_CONTENT.PHOTOS]: <BackgroundPhotos />,
  };

  return (
    <S.Drawer placement="right" closable={false} onClose={onClose} open={isOpen} getContainer={false}>
      {contents[content] || <AllLists />}
    </S.Drawer>
  );
}

export default Drawer;
