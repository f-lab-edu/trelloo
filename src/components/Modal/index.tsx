import React, { useRef, Suspense } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { MODAL_TYPE } from "@utils/constants";
import useOutsideClick from "@utils/hooks/useClickOutside";
import useModal from "@utils/hooks/useModal";
import { ModalState } from "@/store/slices/modal";
import * as S from "./style";

interface ModalComponent {
  [key: string]: any;
}

const Modal = () => {
  const { closeModal } = useModal();
  const clickOutsideRef = useRef<HTMLDivElement>(null);
  const { type, props } = useSelector(
    (state: { modal: ModalState }) => state.modal
  );
  const isModalOpened = type !== MODAL_TYPE.NONE ? true : false;
  useOutsideClick(clickOutsideRef, () => closeModal());
  const modalComponent: ModalComponent = {
    [MODAL_TYPE.CARD_EDIT]: React.lazy(() => import("@components/CardEdit")),
    [MODAL_TYPE.CARD_DETAIL]: React.lazy(
      () => import("@components/CardDetail")
    ),
  };

  const CurrentComponent = modalComponent[type];

  return (
    <ModalPortal>
      {isModalOpened && (
        <S.DimmedBackground>
          <S.Container ref={clickOutsideRef}>
            <Suspense fallback={<div>is loading...</div>}>
              {modalComponent[type] && <CurrentComponent {...props} />}
            </Suspense>
          </S.Container>
        </S.DimmedBackground>
      )}
    </ModalPortal>
  );
};

export default Modal;

const ModalPortal = ({ children }: { children: JSX.Element | boolean }) => {
  const el = document.getElementById("modal") as HTMLElement;
  return createPortal(children, el);
};
