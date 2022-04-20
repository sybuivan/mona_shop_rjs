import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../../../components/Content/Product";
import Filtersortoption from "../Filter/filterSortOption";

function ProductList({ products }) {
  return (
    <div className="product-list-main">
      <Container>
        <Row>
          <Filtersortoption />
        </Row>
        <Row>
          {products.map((product) => (
            <Col lg={3} key={product.idProduct}>
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
