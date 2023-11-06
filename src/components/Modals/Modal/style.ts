import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ModalStyle = (options: any) => {
  console.log(options);
  return {
    overlay: {
      top: 0,
      left: 0,
      width: options?.isMultiple ? 0 : "100vw",
      height: options?.isMultiple ? 0 : "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: `${theme.color.dimmedBackground}`,
    },
    content: {
      inset: "unset",
    },
  };
};
