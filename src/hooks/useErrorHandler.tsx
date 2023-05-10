import { toast } from "react-toastify";

function useErrorHandler() {
  const handle202Error = () => {
    toast.error("status 202");
  };

  const handle202Error709 = () => {
    toast.error("status 202:709");
  };

  const handle400Error = () => {
    toast.error("Bad request: 01");
  };

  const handle400Error1 = () => {
    toast.error("Bad request");
  };

  const handle401Error = () => {
    window.location.href = "/login";
  };

  const handle500Error = () => {
    toast.error("서버 에러가 발생했습니다.");
  };

  const handle500Error1 = () => {
    toast.error("server error: 01");
  };

  const handle504Error = () => {
    toast.error("timeout error");
  };

  return {
    handle202Error,
    handle202Error709,
    handle400Error,
    handle400Error1,
    handle401Error,
    handle500Error,
    handle500Error1,
    handle504Error,
  };
}

export default useErrorHandler;
