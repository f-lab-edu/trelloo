import { theme } from "@/styles/theme";

interface Props {
  hasOverlay?: boolean;
  top?: number;
  left?: number;
}

export const ModalStyle = (options?: Props) => {
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
