import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { DRAWER_MENU, SEARCH_PARAMS_KEY } from "@/constants";
import ChangeBackground from "@components/drawerMenus/ChangeBackground";
import AllLists from "@components/drawerMenus/AllLists";
import useDrawer from "@/hooks/useDrawer";
import { DrawerStateContext } from "@components/providers/DrawerProvider";
import * as S from "./style";

function Drawer() {
  const isDrawerOpen = useContext(DrawerStateContext);
  const { closeDrawer } = useDrawer();
  const [searchParams] = useSearchParams(`${SEARCH_PARAMS_KEY.MENU}=${DRAWER_MENU.ALL}`);
  const content = searchParams.get(SEARCH_PARAMS_KEY.MENU) ?? DRAWER_MENU.ALL;
  const contents = {
    [DRAWER_MENU.CHANGE_BACKGROUND]: <ChangeBackground />,
  };

  return (
    <S.Drawer
      aria-label="drawer"
      placement="right"
      closable={false}
      onClose={closeDrawer}
      open={isDrawerOpen}
      getContainer={false}
    >
      {contents[content] || <AllLists />}
    </S.Drawer>
  );
}

export default Drawer;
