import ReactModal from "react-modal";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ModalContainer = styled(ReactModal).attrs(() => ({
  style: {
    overlay: {
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.color.dimmedBackground,
    },
    content: {
      inset: "unset",
      backgroundColor: "transparent",
      border: "none",
      overflow: "unset",
    },
  },
}))``;

export const ModalStyle = () => {
  return {
    overlay: {
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.color.dimmedBackground,
    },
    content: {
      inset: "unset",
      backgroundColor: "transparent",
      border: "none",
      overflow: "unset",
    },
  };
};
