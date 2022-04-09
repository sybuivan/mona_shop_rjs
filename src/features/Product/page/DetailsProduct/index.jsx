import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import { Box } from "@mui/system";
import ProductSidebar from "../../components/ProductSidebar";
import ProductInfo from "../../components/ProductInfo";
import ProductTabs from "../../components/ProductTabs";
import { useParams } from "react-router";
import useProductDetail from "../../hooks/useProductDetail";
import { LinearProgress } from "@mui/material";
import "./style.scss";

function DetailProduct(props) {
  const { productId } = useParams();
  const { product, loading } = useProductDetail(productId);

  console.log('product details', product)
  
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
          <ProductInfo product={product} />
        </Col>
      </Row>
    </Container>
  );
}

DetailProduct.propTypes = {};

export default DetailProduct;
