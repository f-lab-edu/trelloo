import { DrawerDispatchContext } from "@components/providers/DrawerProvider";
import { useContext } from "react";

const useDrawer = () => {
  const drawerDispatch = useContext(DrawerDispatchContext);

  const openDrawer = () => {
    drawerDispatch?.open();
  };

  const closeDrawer = () => {
    drawerDispatch?.close();
  };
  return { openDrawer, closeDrawer };
};

export default useDrawer;
