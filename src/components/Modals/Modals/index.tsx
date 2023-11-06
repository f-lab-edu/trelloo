import React, { useContext } from "react";
import { MODAL_TYPE } from "@/constants";
import useModal from "@/hooks/useModal";
import { ModalsStateContext, ModalState } from "../ModalsProvider";
import Modal from "../Modal";

export const modals = {
  [MODAL_TYPE.CARD_EDIT]: React.lazy(() => import("@/components/Modals/CardEditModal")),
  [MODAL_TYPE.CARD_DETAIL]: React.lazy(() => import("@/components/Modals/CardDetailModal")),
};

function Modals() {
  const { closeModal } = useModal();
  const modalStates = useContext(ModalsStateContext);

  return (
    <>
      {modalStates.map(({ component, props }) => (
        <Modal component={component} onClose={closeModal} {...props} />
      ))}
    </>
  );
}

export default Modals;

{
  /* <Component {...props} onClose={closeModal} />
        </Modal> */
}
