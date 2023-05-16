import { CloseModalState, ModalState } from "@/interfaces/modal";
import React, { Suspense, useCallback } from "react";
import * as S from "./style";

interface Props extends ModalState {
  onClose: (state: CloseModalState) => void;
}

const Modal = ({ component: Component, index, onClose, props }: Props) => {
  const handleClose = useCallback(() => {
    onClose({ index });
  }, [Component, index, props]);

  return (
    <S.ModalContainer isOpen={true} onRequestClose={handleClose}>
      <Suspense fallback={<div>is loading...</div>}>
        <Component {...props} onClose={handleClose} />
      </Suspense>
    </S.ModalContainer>
  );
};
export default Modal;
