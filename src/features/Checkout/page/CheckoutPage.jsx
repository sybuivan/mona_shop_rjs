import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import DeliveryAddress from "../components/DeliveryAddress";
import ListProductCheckout from "../components/ListProductCheckout";
import PayMethod from "../components/PayMethod";
import Loading from "../../../components/Loading";

function CheckoutPage(props) {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container className="container-fixed">
      <DeliveryAddress />
      <ListProductCheckout />
      <PayMethod />
    </Container>
  );
}

CheckoutPage.propTypes = {};

export default CheckoutPage;
