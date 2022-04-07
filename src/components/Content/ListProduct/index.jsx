import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Product";
import Fade from "react-reveal/Fade";

function ListProduct({ title, products = {} }) {
  console.log(products);
  return (
    <div>
      <Container className="container-fixed">
        <div className="list-product-title-content">
          <h2 className="list-product-tilte-text">{title}</h2>
        </div>
        <Row>
          {products.map((product, index) => (
            <Col lg={3} key={index}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

ListProduct.propTypes = {};

export default ListProduct;
