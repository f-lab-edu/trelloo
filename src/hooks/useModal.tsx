import { useContext } from "react";
import { ModalsDipatchContext } from "@components/Modals/ModalsProvider";
import { ModalState } from "@/interfaces/modal";

const useModal = () => {
  const modalDispatch = useContext(ModalsDipatchContext);

  const openModal = <TProps,>({ component, props, isMultiple }: ModalState<TProps>) => {
    if (!modalDispatch) return;
    modalDispatch.open({ component, props, isMultiple });
  };

  const closeModal = <TProps,>({ component, props }: ModalState<TProps>) => {
    if (!modalDispatch) return;

    modalDispatch.close({ component, props });
  };
  return { openModal, closeModal };
};

export default useModal;
