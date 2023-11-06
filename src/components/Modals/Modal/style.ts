import { theme } from "@/styles/theme";

export const ModalStyle = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${theme.color.dimmedBackground}`,
  },
  content: {
    inset: "unset",
  },
};
