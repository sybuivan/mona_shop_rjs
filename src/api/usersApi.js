import axiosClient from "./axiosClient";

const usersApi = {
  register(data) {
    const url = "/register";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/login";
    return axiosClient.post(url, data);
  },
};

export default usersApi
