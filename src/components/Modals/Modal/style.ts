import { theme } from "@/styles/theme";

interface Props {
  hasOverlay?: boolean;
  top?: number;
  left?: number;
}

export const ModalStyle = (options?: Props) => {
  return {
    overlay: {
      top: "50vh",
      left: "50vw",
      width: 0,
      height: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.color.dimmedBackground,
    },
    content: {
      inset: "unset",
    },
  };
};
