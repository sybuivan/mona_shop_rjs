import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import DeliveryAddress from "../components/DeliveryAddress";
import ListProductCheckout from "../components/ListProductCheckout";
import PayMethod from "../components/PayMethod";
import Loading from "../../../components/Loading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function CheckoutPage(props) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLogged = !!loggedInUser.idUser;
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    return <Loading />;
  }

  if (isLogged) {
    return (
      <Container className="container-fixed">
        <DeliveryAddress />
        <ListProductCheckout />
        <PayMethod />
      </Container>
    );
  } else {
    navigate('/login')
  }
}

CheckoutPage.propTypes = {};

export default CheckoutPage;
