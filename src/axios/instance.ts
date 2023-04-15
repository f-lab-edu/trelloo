import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

export default axiosInstance;
