import { CloseModalState, ModalState } from "@/interfaces/modal";
import React, { Suspense, useCallback } from "react";
import { modalContents } from "../modalContents";
import * as S from "./style";

interface Props extends ModalState {
  onClose: (state: CloseModalState) => void;
}

const Modal = ({ component, index, onClose, props }: Props) => {
  const handleClose = useCallback(() => {
    onClose({ component, index });
  }, [component, index, props]);

  const Component = modalContents[component];

  return (
    <S.ModalContainer isOpen={true} onRequestClose={handleClose}>
      <Suspense fallback={<div>is loading...</div>}>
        <Component {...props} onClose={handleClose} />
      </Suspense>
    </S.ModalContainer>
  );
};
export default Modal;
