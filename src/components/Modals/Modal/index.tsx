import { ModalState } from "@/interfaces/modal";
import React, { Suspense } from "react";
import ReactModal from "react-modal";
import * as S from "./style";

interface Props<P> extends ModalState<P> {
  onClose: (state: ModalState<P>) => void;
}

const Modal = <P extends {}>({ component: Component, onClose, props, options }: Props<P>) => {
  const handleClose = () => {
    onClose({ component: Component, props });
  };
  return (
    <ReactModal isOpen={true} style={S.ModalStyle(options)} onRequestClose={handleClose}>
      <button onClick={() => onClose({ component: Component, props, options })}>x</button>
      <Suspense fallback={<div>is loading...</div>}>
        <Component {...props} />
      </Suspense>
    </ReactModal>
  );
};

export default Modal;
