import React, { Suspense } from "react";
import ReactModal from "react-modal";
import * as S from "./style";

interface Props {
  component: React.ReactNode;
  onClose: (component: any) => void;
}

const Modal = ({ component: Component, onClose }: Props) => {
  return (
    <ReactModal isOpen={true} style={S.ModalStyle}>
      <button onClick={() => onClose(Component)}>x</button>
      <Suspense fallback={<div>is loading...</div>}>{Component}</Suspense>
    </ReactModal>
  );
};

export default Modal;
