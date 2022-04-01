import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Product";

function ListProduct({title, length =8}) {
  return (
    <div>
      <Container className="container-fixed">
        <div className="list-product-title-content">
          <h2 className="list-product-tilte-text">{title}</h2>
        </div>
        <Row>
          {Array.from(new Array(length)).map((item, index) => (
            <Col lg={3}>
              <Product />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

ListProduct.propTypes = {};

export default ListProduct;
