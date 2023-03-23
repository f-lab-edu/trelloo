import { useContext } from "react";
import { ModalsDipatchContext } from "@components/Modals/ModalsProvider";
import { ModalState } from "@/interfaces/modal";

const useModal = <P extends {}>() => {
  const modalDispatch = useContext(ModalsDipatchContext);

  const openModal = ({ component, props, isMultiple }: ModalState) => {
    if (!modalDispatch) return;
    modalDispatch.open({ component, props, isMultiple });
  };

  const closeModal = ({ component, props }: ModalState) => {
    if (!modalDispatch) return;

    modalDispatch.close({ component, props });
  };
  return { openModal, closeModal };
};

export default useModal;
