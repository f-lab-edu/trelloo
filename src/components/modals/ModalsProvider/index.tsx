import { CloseModalState, ModalState, OpenModalState } from "@/interfaces/modal";
import React, { createContext, useState, useMemo, useCallback } from "react";
import Modals from "../Modals";

interface ModalDispatch {
  open: (state: OpenModalState) => void;
  close: (state: CloseModalState) => void;
}

interface Props {
  children: React.ReactNode;
}

export const ModalsStateContext = createContext<ModalState[]>([]);
export const ModalsDipatchContext = createContext<ModalDispatch | null>(null);

function ModalsProvider({ children }: Props) {
  const [modals, setModals] = useState<ModalState[]>([]);

  const open = useCallback((state: OpenModalState) => {
    setModals((modals) => [...modals, { ...state, index: modals.length }]);
  }, []);

  const close = useCallback(({ index }: CloseModalState) => {
    setModals((modals) => modals.filter((modal) => modal.index !== index));
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
