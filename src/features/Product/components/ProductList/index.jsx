import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../../../components/Content/Product";

function ProductList({ products }) {
  return (
    <div className="product-list-main">
      <Container>
        <Row>
          {products.map((product) => (
            <Col lg={3} key={product.idProduct} md={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;
