import React from "react";
import PropTypes from "prop-types";
import Button from "../../../../components/Common/Button";
import "./style.scss";
import formatPrice from "../../../../utils/common";
import { useSelector } from "react-redux";
import { totalPriceCartChecked } from "../../../Cart/selector";

function PayMethod(props) {
  const totalPrice = useSelector(totalPriceCartChecked)
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
      <div className="pay-method__footer">
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
