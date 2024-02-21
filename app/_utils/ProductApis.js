const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = () => axiosClient.get("/products");
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);
const getProductsByCategory = (category)=>axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)


export default {
  getLatestProducts,
  getProductById,
  getProductsByCategory,
};
