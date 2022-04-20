import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import formatPrice from "../../../utils/common";
import { useDispatch } from "react-redux";
import { showMiniCart, addToCart } from "../../../features/Cart/cartSlice";
import "./style.scss";

function Product({ product = {} }) {
  const navigate = useNavigate();
  const { name, price, thumbnailUrl, idProduct, categoryName, path } = product;
  const [loading, setLoading] = useState(false);
  //navigate to productDetail
  const handleClick = () => {
    navigate(`product/${idProduct}`);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const action = {
      id: idProduct,
      quantity: 1,
      status: false,
      product,
    };

    console.log(action);
    dispatch(addToCart(action));
    dispatch(showMiniCart());
  };

  return (
    <div className="product">
      <div className="product-wrapper">
        <div className="product-image">
          <div onClick={handleClick} className="product-image__wrapper">
            <img src={thumbnailUrl} alt="" className="product-image__link" />
          </div>
          <div className="product-image__icon" onClick={handleAddToCart}>
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
