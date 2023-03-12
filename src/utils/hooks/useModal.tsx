import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { handleModal } from "@/store/slices/modal";
import { MODAL_TYPE } from "@utils/constants";

const useModal = () => {
  const dispatch = useDispatch();

  const openModal = (content: string) => {
    dispatch(handleModal(content));
  };

  const closeModal = () => {
    dispatch(handleModal(MODAL_TYPE.NONE));
  };
  return { openModal, closeModal };
};

export default useModal;
