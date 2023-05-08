import { toast } from "react-toastify";

type HttpStatus = Record<number, () => void>;

function useApiError(handlers?: any) {
  const httpStatus: HttpStatus = {
    400() {
      toast.error("입력값을 다시 확인해주세요.");
    },
    401() {
      toast.error("로그인이 필요합니다.");
    },
    403() {
      toast.error("접근 권한이 없습니다.");
    },
    500() {
      toast.error("서버 에러가 발생했습니다.");
    },
    504() {
      toast.error("타임아웃 에러가 발생했습니다. 잠시 뒤 다시 시도해주세요.");
    },
  };

  const getErrorCode = (errorMessage: string) => {
    const [statusString, detailString] = errorMessage.split(" ");

    const statusCode = parseInt(statusString.replace("status:", ""));
    const detailCode = parseInt(detailString.replace("detail:", ""));
    return { statusCode, detailCode };
  };

  const handleError = (error: Error) => {
    const { statusCode } = getErrorCode(error.message);
    httpStatus[statusCode]();
  };
  return { handleError };
}

export default useApiError;
