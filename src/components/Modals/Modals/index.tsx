import React, { useContext } from "react";
import useModal from "@/hooks/useModal";
import { ModalsStateContext } from "../ModalsProvider";
import Modal from "../Modal";

function Modals() {
  const { closeModal } = useModal();
  const modalStates = useContext(ModalsStateContext);

  return (
    <>
      {modalStates.map(({ component, index, props, options }, idx) => (
        <Modal key={idx} index={index} component={component} onClose={closeModal} props={props} options={options} />
      ))}
    </>
  );
}

export default Modals;
