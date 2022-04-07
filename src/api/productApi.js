import axiosClient from "./axiosClient";

const productApi = {
  getProductByCategory(params) {
    const url = `/product/${params}`;
    console.log('url productApi', url);
    return axiosClient.get(url, params);
  }
};

export default productApi
