import React, { useContext } from "react";
import useModal from "@/hooks/useModal";
import { ModalsStateContext } from "../ModalsProvider";
import Modal from "../Modal";

function Modals() {
  const { closeModal } = useModal();
  const modalStates = useContext(ModalsStateContext);

  return (
    <>
      {modalStates.map(({ component, props, options }, idx) => (
        <Modal key={idx} component={component} onClose={closeModal} props={props} options={options} />
      ))}
    </>
  );
}

export default Modals;
