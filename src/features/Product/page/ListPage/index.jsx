import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import ProductList from "../../components/ProductList";
import productApi from "../../../../api/productApi";
import { useParams, Outlet, useNavigate, useLocation } from "react-router";
import BreadcrumbCom from "../../../../components/Common/Breadcrumb";
import FilterBar from "../../components/FilterBar";
import categoryApi from "../../../../api/categoryApi";
import FilterSortOption from "../../components/Filter/filterSortOption";
import queryString from 'query-string';
import SkeletonProductlist from '../../components/ProductList/skeletonProductList'

function ListPageProduct(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  const { idCategory, productId } = useParams();
  const location = useLocation()
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    idCategory: idCategory,
    price: "ASC",
    sortBy: "",
  });

  if (products.length > 0) {
    var title = products[0].categoryName;
  }

  console.log("filters", filters);
  useEffect(() => {
    try {
      (async () => {
        setLoading(true)
        const response = await productApi.getAllProductsByParams(filters);

        const dataProducts = response.data.products;

        setProducts(dataProducts);
        setLoading(false)
      })();
    } catch (error) {
      console.error(error);
    }
  }, [filters]);

  useEffect(() => {
    try {
      (async () => {
        setLoading(false)
        const response = await productApi.getAllProductsByCateogry(idCategory);

        const dataProducts = response.data.products;

        setProducts(dataProducts);
       
        setFilters({ idCategory });
      })();
    } catch (error) {
      console.error(error);
    }
  }, [idCategory]);

  const setFiltersViewer = (newFilters) => {

    console.log('newFilters', newFilters);
    navigate(
      {
        pathname: location.pathName,
        search: queryString.stringify(newFilters)
      }
    )
    setFilters(newFilters);
  };

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
            <Col lg={2}>
              <BreadcrumbCom title={title} />

              <FilterBar filters={filters} onChange={setFiltersViewer} />
            </Col>
            <Col lg={10}>
              <FilterSortOption filters={filters} onChange={setFiltersViewer} />
              {
             
                loading ? <SkeletonProductlist /> : <ProductList products={products} />
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
}

ListPageProduct.propTypes = {};

export default ListPageProduct;
