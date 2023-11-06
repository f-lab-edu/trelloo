import { AxiosResponse } from "axios";
interface HandleError {
  [status: number]: () => void;
}

export const handleInterceptResponse = (response: AxiosResponse) => {
  return response;
};

export const handleResponseInterceptError = (error: any) => {
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
