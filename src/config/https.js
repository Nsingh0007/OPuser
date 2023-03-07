import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
});

axiosInstance.interceptors.request.use(
    async (config) => {
      const token =""
      if (token) {
        config.headers.accessToken = token;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);