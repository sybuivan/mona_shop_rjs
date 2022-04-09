import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Images from "../../../constants/images";
import "./style.scss";
import formatPrice from "../../../utils/common";
import { useNavigate } from "react-router-dom";
import { formatUrl } from "../../../utils/common";

function Product({ product = {} }) {
  const navigate = useNavigate();
  const { name, price, thumbnailUrl, idProduct } = product;

  //navigate to productDetail
  const handleClick = () => {
    navigate(`products/${idProduct}`);
  };
  return (
    <div className="product" onClick={handleClick}>
      <div className="product-wrapper">
        <div className="product-image">
          <Link to="/">
            <img src={thumbnailUrl} alt="" className="product-image__link" />
          </Link>
          <div className="product-image__icon">
            <strong>+</strong>
          </div>
        </div>
        <div className="product-info">
          <p className="product-info__type">Chó cảnh</p>
          <p className="product-info__name">{name}</p>
          <p className="product-info__price">{formatPrice(price)}</p>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {};

export default Product;
