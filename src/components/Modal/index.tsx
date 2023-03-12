import { useRef } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { MODAL_TYPE } from "@utils/constants";
import useOutsideClick from "@utils/useClickOutside";
import useModal from "@utils/hooks/useModal";
import { ModalState } from "@/store/slices/modal";
import CardDetail from "@components/CardDetail";
import CardEdit from "@components/CardEdit";
import * as S from "./style";

interface ModalComponent {
  [key: string]: JSX.Element;
}

const Modal = () => {
  const { closeModal } = useModal();
  const clickOutsideRef = useRef<HTMLDivElement>(null);
  const { type, options, props } = useSelector(
    (state: { modal: ModalState }) => state.modal
  );
  const isModalOpened = type !== MODAL_TYPE.NONE ? true : false;
  useOutsideClick(clickOutsideRef, () => closeModal());
  const modalComponent: ModalComponent = {
    [MODAL_TYPE.CARD_EDIT]: <CardEdit />,
    [MODAL_TYPE.CARD_DETAIL]: <CardDetail />,
  };

  return (
    <ModalPortal>
      {isModalOpened && (
        <S.DimmedBackground>
          <S.Container ref={clickOutsideRef}>
            {modalComponent[type] && modalComponent[type]}
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
