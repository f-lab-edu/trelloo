import { useDispatch } from "react-redux";
import { handleModal, ModalState } from "@/store/slices/modal";
import { MODAL_TYPE } from "@utils/constants";

const useModal = () => {
  const dispatch = useDispatch();

  const openModal = <TOptions, TProps>(props: ModalState<TOptions, TProps>) => {
    dispatch(handleModal(props));
  };

  const closeModal = () => {
    dispatch(handleModal({ type: MODAL_TYPE.NONE }));
  };
  return { openModal, closeModal };
};

export default useModal;
