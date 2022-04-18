import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import formatPrice from "../../../utils/common";
import "./style.scss";

function Product({ product = {} }) {
  const navigate = useNavigate();
  const { name, price, thumbnailUrl, idProduct, categoryName, path } = product;

  //navigate to productDetail
  const handleClick = () => {
    navigate(`product/${idProduct}`);
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
          <p className="product-info__type">{categoryName}</p>
          <p className="product-info__name">{name}</p>
          <p className="product-info__price">{formatPrice(price)}</p>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {};

export default Product;
