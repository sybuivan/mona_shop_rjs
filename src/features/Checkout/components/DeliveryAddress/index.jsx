import React from "react";
import PropTypes from "prop-types";
import { BiMap } from "react-icons/bi";
import Button from "../../../../components/Common/Button";
import './style.scss'

function DeliveryAddress(props) {
  return (
    <div className="delivery-address">
      <div className="delivery-address__head">
        <BiMap />
        <p>Địa Chỉ Nhận Hàng</p>
      </div>

      <div className="delivery-address__info">
        <b>Sy Bui 0947895039</b>
        <p className="delivery-address__info-address">
          113 Nguyen Du, Phường Thạch Thang, Quận Hải Châu, Đà Nẵng
        </p>
        <p className="delivery-address__info-default">Mặc định</p>

        <Button
            text="Thay đổi"
            option={{
              backgroundColor: "#0093dd",
              padding: "10px 30px",
            }}
          />
      </div>
    </div>
  );
}

DeliveryAddress.propTypes = {};

export default DeliveryAddress;
