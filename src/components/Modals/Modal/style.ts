import { theme } from "@/styles/theme";

interface Props {
  hasOverlay?: boolean;
  top?: number;
  left?: number;
}

export const ModalStyle = (options?: Props) => {
  return {
    overlay: {
      top: options?.top || 0,
      left: options?.left || 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: options?.hasOverlay ? theme.color.dimmedBackground : "transparent",
    },
    content: {
      inset: "unset",
    },
  };
};
