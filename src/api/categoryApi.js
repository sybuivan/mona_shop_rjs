import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(data) {
    const url = "/category";
    return axiosClient.get(url, data);
  }
};

export default categoryApi
