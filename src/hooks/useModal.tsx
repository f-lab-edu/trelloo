import { useContext } from "react";
import { ModalsDipatchContext } from "@components/modals/ModalsProvider";
import { CloseModalState, OpenModal } from "@/interfaces/modal";

const useModal = () => {
  const modalDispatch = useContext(ModalsDipatchContext);

  const openModal = <TProps,>(props: OpenModal<TProps>) => {
    modalDispatch?.open(props);
  };

  const closeModal = ({ index }: CloseModalState) => {
    modalDispatch?.close({ index });
  };
  return { openModal, closeModal };
};

export default useModal;
