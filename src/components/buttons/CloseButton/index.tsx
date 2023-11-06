import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

function CloseButton({ onClick }: Props) {
  return (
    <button onClick={onClick}>
      <AiOutlineClose />
    </button>
  );
}

export default CloseButton;
