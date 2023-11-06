import { useContext } from "react";
import { ModalsDipatchContext } from "@components/Modals/ModalsProvider";

interface ModalProps<P> {
  component: React.ComponentType<any>;
  props?: P;
}

const useModal = <P extends {}>() => {
  const modalDispatch = useContext(ModalsDipatchContext);

  const openModal = ({ component, props }: ModalProps<P>) => {
    if (!modalDispatch) return;
    modalDispatch.open({ component, props });
  };

  const closeModal = ({ component, props }: ModalProps<P>) => {
    if (!modalDispatch) return;

    modalDispatch.close({ component, props });
  };
  return { openModal, closeModal };
};

export default useModal;
