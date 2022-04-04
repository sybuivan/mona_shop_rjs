import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import RegisterForm from "../RegisterForm";

function RegisterFeature(props) {
   const handleOnSubmit  = (values) => {
      console.log("values", values)
   }
  return (
    <div>
      <Container className="container-fixed">
        <RegisterForm onSubmit={handleOnSubmit} />
      </Container>
    </div>
  );
}

RegisterFeature.propTypes = {};

export default RegisterFeature;
