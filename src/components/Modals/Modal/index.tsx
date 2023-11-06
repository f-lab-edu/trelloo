import React, { Suspense, useCallback } from "react";
import { type CloseModalState, type ModalState } from "@/interfaces/modal";
import { modalContents } from "../modalContents";
import * as S from "./style";

interface Props<P> extends ModalState<P> {
  onClose: (state: CloseModalState) => void;
}

const Modal = <P extends Record<string,unknown>>({ component: Component, index, onClose, props, options }: Props<P>) => {
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
