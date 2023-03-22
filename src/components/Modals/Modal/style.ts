import { theme } from "@/styles/theme";

export const ModalStyle = {
  overlay: {
    top: "50vh",
    left: "50vw",
    width: 0,
    height: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${theme.color.dimmedBackground}`,
  },
  content: {
    inset: "unset",
  },
};
