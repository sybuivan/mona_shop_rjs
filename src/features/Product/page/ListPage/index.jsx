import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import ProductList from "../../components/ProductList";
import productApi from "../../../../api/productApi";
import { useParams, Outlet } from "react-router";
import BreadcrumbCom from "../../../../components/Common/Breadcrumb";

function ListPageProduct(props) {
  const [products, setProducts] = useState([]);

  const { nameCategory, productId } = useParams();

  if(products.length > 0) {
    var title = products[0].categoryName
  }

  useEffect(() => {
    try {
      (async () => {
        const response = await productApi.getAllProductsByCateogry(
          nameCategory
        );
        const dataProducts = response.data.products;
        setProducts(dataProducts);
      })();
    } catch (error) {
      console.error(error);
    }
  }, [nameCategory]);

  if (!!productId) {
    return (
      <div className="list-page-product">
        <Outlet />
      </div>
    );
  } else
    return (
      <div className="list-page-product">
        <Container className="container-fixed">
          <Row>
            <Col lg={3}>
              <BreadcrumbCom title={title}/>
            </Col>
            <Col lg={9}>
              <ProductList products={products} />
            </Col>
          </Row>
        </Container>
      </div>
    );
}

ListPageProduct.propTypes = {};

export default ListPageProduct;
