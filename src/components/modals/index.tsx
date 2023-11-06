import React, { useContext } from "react";
import { ModalsStateContext } from "./ModalsProvider";
import useModal from "@/hooks/useModal";
import Modal from "./Modal";

function Modals() {
  const { closeModal } = useModal();
  const modalStates = useContext(ModalsStateContext);

  return (
    <>
      {modalStates.map(({ component, index, props, options }) => (
        <Modal key={index} index={index} component={component} onClose={closeModal} props={props} options={options} />
      ))}
    </>
  );
}

export default Modals;
