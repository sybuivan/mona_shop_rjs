import { LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import ProductInfo from "../../components/ProductInfo";
import ProductSidebar from "../../components/ProductSidebar";
import productApi from "../../../../api/productApi";
import "./style.scss";

function DetailProduct(props) {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { product, loading } = useProductDetail(productId);
  useEffect(() => {
    (async () => {
      try {
        const data = await productApi.getDetailProduct(productId);
        const dataImages = await productApi.getDetailImages(productId);
        
        setProduct(data.data.productDetail);
        setImages(dataImages.data.detailImages);

      } catch (error) {
        console.log("Failed to fetch product", error);
      }

      setLoading(false);
    })();
  }, [productId]);

  if (loading) {
    return (
      <Box className="progress-bar">
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  return (
    <Container className="container-fixed">
      <Row>
        <Col lg={3}>
          <ProductSidebar />
        </Col>
        <Col lg={9}>
          <ProductInfo product={product} images={images}/>
        </Col>
      </Row>
    </Container>
  );
}

DetailProduct.propTypes = {};

export default DetailProduct;
