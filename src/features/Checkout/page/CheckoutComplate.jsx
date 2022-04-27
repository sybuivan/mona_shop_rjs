import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";

const CheckoutComplate = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className="checkout-complate"
      style={{ margin: "auto", width: "300px" }}
    >
      <img
        src="https://static1.bigstockphoto.com/8/2/1/large1500/128510240.jpg"
        alt="Complate"
        width="100%"
      />
      <h2 style={{ textAlign: "center", padding: "20px 0", fontSize: "1.2em" }}>
        Cảm ơn bạn đã đặt hàng bên chúng tôi.
      </h2>
      <Link
        to=""
        style={{
          textAlign: "center",
          display: "block",
          textDecoration: "none",
        }}
      >
        Bấm vào đây để đi đến chi tiết đơn hàng.
      </Link>
    </div>
  );
};

CheckoutComplate.propTypes = {};

export default CheckoutComplate;
