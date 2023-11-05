import React, { createContext, useState, useMemo, useCallback } from "react";

interface DrawerDispatch {
  open: () => void;
  close: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const DrawerStateContext = createContext(false);
export const DrawerDispatchContext = createContext<DrawerDispatch | null>(null);

function DrawerProvider({ children }: Props) {
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => {
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <DrawerStateContext.Provider value={isOpen}>
      <DrawerDispatchContext.Provider value={dispatch}>{children}</DrawerDispatchContext.Provider>
    </DrawerStateContext.Provider>
  );
}

export default DrawerProvider;
