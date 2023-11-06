import axiosInstance from "./instance";

interface HandleError {
  [status: number]: () => void;
}

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { status } = error.response;
    handleError[status]();

    return Promise.reject(error);
  },
);

const handleError: HandleError = {
  401() {
    redirectToLogin();
  },
};

const redirectToLogin = () => {
  window.location.href = "/login";
};
