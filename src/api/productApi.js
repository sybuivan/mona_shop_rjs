import axiosClient from "./axiosClient";

const productApi = {
  getProductByCategory(params) {
    const url = `/product/${params}`;
    console.log('url productApi', url);
    return axiosClient.get(url, params);
  },
  getDetailProduct(id) {
    const url = `/product-detail/${id}`;
    console.log('url productApi', url);
    return axiosClient.get(url);
  },
  getDetailImages(id) {
    const url = `/product-detail-images/${id}`;
    console.log('url productApi', url);
    return axiosClient.get(url);
  }
};

export default productApi
