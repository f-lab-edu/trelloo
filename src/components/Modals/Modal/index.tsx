import { ModalState } from "@/interfaces/modal";
import React, { Suspense } from "react";
import ReactModal from "react-modal";
import * as S from "./style";

interface Props<P> extends ModalState<P> {
  onClose: (state: ModalState<P>) => void;
}

const Modal = <P extends {}>({ component: Component, onClose, props, isMultiple }: Props<P>) => {
  const handleClose = () => {
    if (!isMultiple) onClose({ component: Component, props });
  };
  return (
    <ReactModal isOpen={true} style={S.ModalStyle} onRequestClose={handleClose}>
      <button onClick={() => onClose({ component: Component, props })}>x</button>
      <Suspense fallback={<div>is loading...</div>}>
        <Component {...props} />
      </Suspense>
    </ReactModal>
  );
};

export default Modal;
