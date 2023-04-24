import React, { Suspense, useCallback } from "react";
import { type CloseModalState, type ModalState } from "@/interfaces/modal";
import * as S from "./style";

interface Props<P> extends ModalState<P> {
  onClose: (state: CloseModalState) => void;
}

const Modal = <P extends Record<string,unknown>>({ component: Component, index, onClose, props, options }: Props<P>) => {
  const handleClose = useCallback(() => {
    onClose({ component: Component, index });
  }, [Component, index, props]);

  return (
    <S.ModalContainer isOpen={true} onRequestClose={handleClose}>
      <button onClick={handleClose}>x</button>
      <Suspense fallback={<div>is loading...</div>}>
        <Component {...props} />
      </Suspense>
    </S.ModalContainer>
  );
};

export default Modal;
