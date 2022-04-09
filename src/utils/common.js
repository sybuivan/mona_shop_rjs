export default function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

export const formatUrl = (urlString) => {
  return urlString.replace(/ /g, '-');
}