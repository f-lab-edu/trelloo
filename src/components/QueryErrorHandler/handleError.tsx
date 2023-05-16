import { toast } from "react-toastify";
import { STATUS_CODE } from "@/constants";

export const errorHandlers: Record<string, () => void> = {
  [STATUS_CODE[400]]() {
    toast.error("잘못된 요청입니다");
  },
  [STATUS_CODE[401]]: () => {
    window.location.href = "/login";
  },
  [STATUS_CODE[404]]: () => {
    window.location.href = "/not-found";
  },
  [STATUS_CODE[500]]: () => {
    toast.error("서버 에러가 발생했습니다");
  },
};
