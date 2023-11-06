import React, { Suspense } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import { MODAL_TYPE } from "@/constants";
import useModal from "@/hooks/useModal";
import { ModalState } from "@/store/slices/modal";
import * as S from "./style";

interface ModalComponent<T = any> {
  [x: string]: React.LazyExoticComponent<(props: T) => JSX.Element>;
}

const Modal = () => {
  const { closeModal } = useModal();
  const { type, props } = useSelector(
    (state: { modal: ModalState }) => state.modal
  );

  const isModalOpened = type !== MODAL_TYPE.NONE ? true : false;
  const modalComponent: ModalComponent = {
    [MODAL_TYPE.CARD_EDIT]: React.lazy(
      () => import("@/components/Modals/CardEditModal")
    ),
    [MODAL_TYPE.CARD_DETAIL]: React.lazy(
      () => import("@/components/Modals/CardDetailModal")
    ),
  };

  const CurrentComponent = modalComponent[type];
  ReactModal.setAppElement("#root");

  return (
    <ReactModal
      isOpen={isModalOpened}
      onRequestClose={closeModal}
      style={S.ModalStyle}
    >
      <Suspense fallback={<div>is loading...</div>}>
        {modalComponent[type] && <CurrentComponent {...props} />}
      </Suspense>
    </ReactModal>
  );
};

export default Modal;
