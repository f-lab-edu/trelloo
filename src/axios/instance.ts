import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

export default axiosInstance;
