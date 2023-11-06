import { ModalState } from "@/interfaces/modal";
import React, { createContext, useState, useMemo, useCallback } from "react";
import Modals from "@components/Modals/Modals";

interface ModalDispatch<T = any> {
  open: (state: ModalState<T>) => void;
  close: (state: ModalState<T>) => void;
}

interface Props {
  children: React.ReactNode;
}

export const ModalsStateContext = createContext<ModalState[]>([]);
export const ModalsDipatchContext = createContext<ModalDispatch | null>(null);

function ModalsProvider({ children }: Props) {
  const [modals, setModals] = useState<ModalState[]>([]);

  const open = useCallback((state: ModalState) => {
    setModals((modals) => {
      return [...modals, state];
    });
  }, []);

  const close = useCallback((state: ModalState) => {
    setModals((modals) => {
      return modals.filter((modal) => {
        return modal.component !== state.component || modal.props !== state.props;
      });
    });
  }, []);

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={modals}>
      <ModalsDipatchContext.Provider value={dispatch}>
        {children}
        <Modals />
      </ModalsDipatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}

export default ModalsProvider;
