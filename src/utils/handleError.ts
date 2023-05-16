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
  [STATUS_CODE[504]]: () => {
    toast.error("응답이 지연되어 에러가 발생했습니다.\n 잠시 후 다시 시도해주세요.");
  },
};

export const handleError = (errorCode: string, handlers?: Record<string, () => void>) => {
  if (!!handlers && !!handlers?.[errorCode]) {
    handlers[errorCode]();
    return;
  }
  errorHandlers[errorCode]();
};
