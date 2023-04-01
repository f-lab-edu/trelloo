import { useContext } from "react";
import { ModalsDipatchContext } from "@components/modals/ModalsProvider";
import { ModalState } from "@/interfaces/modal";

const useModal = () => {
  const modalDispatch = useContext(ModalsDipatchContext);

  const openModal = <TProps,>({ component, props, options }: ModalState<TProps>) => {
    if (!modalDispatch) return;
    modalDispatch.open({ component, props, options });
  };

  const closeModal = <TProps,>({ component, props }: ModalState<TProps>) => {
    if (!modalDispatch) return;

    modalDispatch.close({ component, props });
  };
  return { openModal, closeModal };
};

export default useModal;
