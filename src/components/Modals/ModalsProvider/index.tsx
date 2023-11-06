import React, { createContext, useState, useMemo, useCallback } from "react";

export interface ModalState<TProps = any> {
  component: React.ComponentType<TProps>;
  props: TProps;
}

interface ModalDispatch<T = any> {
  open: (state: ModalState<T>) => void;
  close: (component: React.ComponentType) => void;
}

interface Props {
  children: React.ReactNode;
}

export const ModalsStateContext = createContext<ModalState[]>([]);
export const ModalsDipatchContext = createContext<ModalDispatch | null>(null);

function ModalsProvider({ children }: Props) {
  const [modals, setModals] = useState<ModalState[]>([]);

  const open = (state: ModalState) => {
    setModals((modals) => {
      return [...modals, state];
    });
  };

  const close = useCallback((component: React.ComponentType) => {
    setModals((modals) => {
      return modals.filter((modal) => {
        return modal.component !== component;
      });
    });
  }, []);

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={modals}>
      <ModalsDipatchContext.Provider value={dispatch}>{children}</ModalsDipatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}

export default ModalsProvider;
