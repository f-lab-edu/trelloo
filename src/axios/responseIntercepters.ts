import axiosInstance from "./instance";

interface HandleError {
  [status: number]: () => void;
}

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => handleInterceptError(error),
);

const handleInterceptError = (error: any) => {
  const { status } = error.response;
  handleError[status]();
  return Promise.reject(error);
};

const handleError: HandleError = {
  401() {
    redirectToLogin();
  },
};

const redirectToLogin = () => {
  window.location.href = "/login";
};
