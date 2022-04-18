import axiosClient from "./axiosClient";

const productApi = {
  getProductByCategory(params) {
    const url = `/product/${params}`;
    return axiosClient.get(url, params);
  },

  getDetailProduct(id) {
    const url = `/product-detail/${id}`;
    return axiosClient.get(url);
  },

  getDetailImages(id) {
    const url = `/product-detail-images/${id}`;
    return axiosClient.get(url);
  },

  getAllProductsByCateogry(path){
    const url = `/products/${path}`;
    return axiosClient.get(url);
  }
};

export default productApi
