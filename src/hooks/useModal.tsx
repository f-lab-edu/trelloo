import { useContext } from "react";
import { ModalsDipatchContext } from "@components/Modals/ModalsProvider";

const useModal = () => {
  const modalDispatch = useContext(ModalsDipatchContext);

  const openModal = ({ component, props }: { component: any; props?: any }) => {
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
