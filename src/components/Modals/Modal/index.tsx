import React, { Suspense, useCallback } from "react";
import ReactModal from "react-modal";
import { CloseModalState, ModalState } from "@/interfaces/modal";
import * as S from "./style";

interface Props<P> extends ModalState<P> {
  onClose: (state: CloseModalState) => void;
}

const Modal = <P extends {}>({ component: Component, index, onClose, props, options }: Props<P>) => {
  const handleClose = useCallback(() => {
    onClose({ component: Component, index });
  }, [Component, index, props]);

  return (
    <ReactModal isOpen={true} style={S.ModalStyle(options)} onRequestClose={handleClose}>
      <button onClick={handleClose}>x</button>
      <Suspense fallback={<div>is loading...</div>}>
        <Component {...props} />
      </Suspense>
    </ReactModal>
  );
};

export default Modal;
