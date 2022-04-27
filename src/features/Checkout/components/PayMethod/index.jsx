import React from "react";
import PropTypes from "prop-types";
import Button from "../../../../components/Common/Button";
import "./style.scss";
import formatPrice from "../../../../utils/common";
import { useSelector } from "react-redux";
import { totalPriceCartChecked } from "../../../Cart/selector";
import checkoutApi from "../../../../api/checkoutApi";
import { useNavigate } from "react-router";

function PayMethod(props) {
  const totalPrice = useSelector(totalPriceCartChecked);
  const user = useSelector((state) => state.user.current);
  const cartList = useSelector((state) =>
    state.cart.cartItems.filter((cart) => cart.status === true)
  );
  const navigate = useNavigate();
  const address = "Lac Son - Gio Son - Gio Linh - Quang Tri";
  const userId = user.idUser;

  const handleSubmit = async () => {
    try {
      const params = {
        totalPrice,
        address,
        userId,
      };

      await checkoutApi.payMethod(params);
      const res = await checkoutApi.getIdOrder();
      if (res) {
        const idOrder = res.data.result[0].idOrder;
        await checkoutApi.orderDetails({ cartList, idOrder });
        navigate("/checkout/complate");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pay-method">
      <div className="pay-method__head">
        <div>Phương thức thanh toán</div>
        <div>
          <span>Thanh toán khi nhận hàng</span>
          <Button
            text="Thay đổi"
            option={{
              backgroundColor: "#0093dd",
              padding: "10px 30px",
            }}
          />
        </div>
      </div>
      <div className="pay-method__main">
        <div className="pay-method__main-wrapper">
          <div className="pay-method__main-row">
            <span>Tổng tiền hàng</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="pay-method__main-row">
            <span>Phí vận chuyển</span>
            <span>{formatPrice(0)}</span>
          </div>
          <div className="pay-method__main-row">
            <span>Tổng thanh toán</span>
            <span className="pay-method__main-total">
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>
      </div>
      <div className="pay-method__footer" onClick={handleSubmit}>
        <Button
          text="Đặt hàng"
          option={{
            backgroundColor: "#fb6017",
            padding: "10px 40px",
          }}
        />
      </div>
    </div>
  );
}

PayMethod.propTypes = {};

export default PayMethod;
