import { toast } from "react-toastify";

function useErrorHandler() {
  const handleServerErrorType1 = () => {
    toast.error("서버 에러가 발생했습니다.");
  };

  const handleServerErrorType2 = () => {
    //
  };

  const handleBadRequestType1 = () => {
    toast.error("bad request type 1");
  };

  const handleBadRequestType2 = () => {
    //
  };
  return { handleServerErrorType1, handleServerErrorType2, handleBadRequestType1, handleBadRequestType2 };
}

export default useErrorHandler;
