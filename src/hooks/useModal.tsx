import { useContext } from "react";
import { ModalsDipatchContext } from "@components/modals/ModalsProvider";
import { CloseModalState, OpenModalState } from "@/interfaces/modal";

const useModal = () => {
  const modalDispatch = useContext(ModalsDipatchContext);

  const openModal = ({ component, props, options }: OpenModalState) => {
    modalDispatch?.open({ component, props, options });
  };

  const closeModal = ({ component, index }: CloseModalState) => {
    modalDispatch?.close({ component, index });
  };
  return { openModal, closeModal };
};

export default useModal;
