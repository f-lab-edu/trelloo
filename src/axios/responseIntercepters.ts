import { type AxiosResponse } from "axios";
type HandleError = Record<number, () => void>;

export const handleInterceptResponse = (response: AxiosResponse) => {
  return response;
};

export const handleResponseInterceptError = async (error: any) => {
  const { status } = error.response;
  handleError[status]();
  return await Promise.reject(error);
};

const handleError: HandleError = {
  401() {
    redirectToLogin();
  },
};

const redirectToLogin = () => {
  window.location.href = "/login";
};
