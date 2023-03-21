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
  children: JSX.Element;
}

export const ModalsStateContext = createContext<ModalState[]>([]);
export const ModalsDipatchContext = createContext<ModalDispatch | null>(null);

function ModalsProvider({ children }: Props) {
  const [modals, setModals] = useState<ModalState[]>([]);

  const open = useCallback((state: ModalState) => {
    const updatedModals = [state, ...modals];
    setModals(updatedModals);
  }, []);

  const close = useCallback((component: React.ComponentType) => {
    const updatedModals = modals.filter((modal) => modal.component !== component);
    setModals(updatedModals);
  }, []);

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={modals}>
      <ModalsDipatchContext.Provider value={dispatch}>{children}</ModalsDipatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}

export default ModalsProvider;
