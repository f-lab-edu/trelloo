import { useContext } from "react";
import { ModalsDipatchContext } from "@components/Modals/ModalsProvider";

interface OpenModalProps<P> {
  component: React.ComponentType<any>;
  props?: P;
}

const useModal = <P extends {}>() => {
  const modalDispatch = useContext(ModalsDipatchContext);

  const openModal = ({ component, props }: OpenModalProps<P>) => {
    if (!modalDispatch) return;
    modalDispatch.open({ component, props });
  };

  const closeModal = (component: React.ComponentType) => {
    if (!modalDispatch) return;

    modalDispatch.close(component);
  };
  return { openModal, closeModal };
};

export default useModal;
