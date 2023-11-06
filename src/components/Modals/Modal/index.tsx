import React, { Suspense } from "react";
import ReactModal from "react-modal";
import * as S from "./style";

interface Props<P> {
  Component: React.ComponentType<P>;
  onClose: (component: React.ComponentType<P>) => void;
  props: P;
}

const Modal = <P extends {}>({ Component, onClose, props }: Props<P>) => {
  return (
    <ReactModal isOpen={true} style={S.ModalStyle}>
      <button onClick={() => onClose(Component)}>x</button>
      <Suspense fallback={<div>is loading...</div>}>
        <Component {...props} />
      </Suspense>
    </ReactModal>
  );
};

export default Modal;
