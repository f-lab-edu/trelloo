import React, { Suspense } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import { MODAL_TYPE } from "@/constants";
import { ModalState } from "@/store/slices/modal";
import * as S from "./style";

interface Props {
  component: React.ComponentType;
  onClose: () => void;
}

const Modal = ({ component: Component, onClose }: Props) => {
  const { type, props } = useSelector((state: { modal: ModalState }) => state.modal);

  const isModalOpened = type !== MODAL_TYPE.NONE ? true : false;

  return (
    <ReactModal isOpen={isModalOpened} onRequestClose={onClose} style={S.ModalStyle}>
      <Suspense fallback={<div>is loading...</div>}>{<Component {...props} />}</Suspense>
    </ReactModal>
  );
};

export default Modal;
