import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Images from "../../../constants/images";
import "./style.scss";


function Product({ position }) {
  return (
    <div className="product">
      <div className="product-wrapper">
        <div className="product-image">
          <Link to="/">
            <img src={Images.DOG[0]} alt="" className="product-image__link" />
          </Link>
          <div className="product-image__icon">
            <strong>+</strong>
          </div>
        </div>
        <div className="product-info">
          <p className="product-info__type">Chó cảnh</p>
          <p className="product-info__name">Chó Phú Quốc thuần chủng</p>
          <p className="product-info__price">5,896,000 ₫</p>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {};

export default Product;
