import { useEffect, useState } from "react";
import productApi from "../../../api/productApi";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("product ",product);
  useEffect(() => {
    (async () => {
      try {
        console.log(productId);
        const data = await productApi.getDetailProduct(productId);
        const detailImages = await productApi.getDetailImages(productId);
        
        setProduct(data);
      } catch (error) {
        console.log("Failed to fetch product", error);
      }

      setLoading(false);
    })();
  }, [productId]);

  return {
    product,
    loading,
  };
}
