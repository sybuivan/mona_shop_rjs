import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useSelector } from "react-redux";
import formatPrice from "../../../../utils/common";
import { totalPriceCartChecked } from "../../../Cart/selector";

function ListProductCheckout(props) {
  const cartList = useSelector((state) =>
    state.cart.cartItems.filter((cart) => cart.status === true)
  );

  return (
    <div className="list-product-checkout">
      <div className="list-product-checkout__head">
        <div>Sản phẩm</div>
        <div className="list-product-checkout__head-title">Đơn giá</div>
        <div className="list-product-checkout__head-title">Số lượng</div>
        <div className="list-product-checkout__head-title">Thành tiền</div>
      </div>

      <div className="list-product-checkout__main">
        {cartList.map((cart) => (
          <div className="list-product-checkout__main-item" key={cart.id}>
            <div className="list-product-checkout__main-info list-product-checkout__main--default">
              <img
                src={cart.product.thumbnailUrl}
                alt={cart.product.name}
              />
              <p>{cart.product.name}</p>
            </div>
            <div className="list-product-checkout__main-price list-product-checkout__main--default">
              <span>{formatPrice(cart.product.price)}</span>
            </div>
            <div className="list-product-checkout__main-quantity list-product-checkout__main--default">
              <span>{cart.quantity}</span>
            </div>
            <div className="list-product-checkout__main-total list-product-checkout__main--default">
              <span>{formatPrice(cart.product.price * cart.quantity)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ListProductCheckout.propTypes = {};

export default ListProductCheckout;
