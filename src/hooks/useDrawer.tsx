import { DrawerDispatchContext } from "@components/providers/DrawerProvider";
import { useContext } from "react";
import useFunnel from "./useFunnel";
import { SEARCH_PARAMS_KEY } from "@/constants";

const useDrawer = () => {
  const drawerDispatch = useContext(DrawerDispatchContext);
  const { initializeStep, goBack } = useFunnel();

  const openDrawer = () => {
    drawerDispatch?.open();
  };

  const closeDrawer = () => {
    drawerDispatch?.close();
    initializeStep(SEARCH_PARAMS_KEY.MENU);
  };

  return { openDrawer, closeDrawer, goBack };
};

export default useDrawer;
