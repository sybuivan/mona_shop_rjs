import React from "react";
import PropTypes from "prop-types";
import LoginForm from "../LoginForm";
import { Container } from "react-bootstrap";

function LoginFeature(props) {
  const handleOnSubmit = (values) => {
    console.log("Values form", values);
  };

  return (
    <div>
      <Container className="container-fixed">
        <LoginForm onSubmit={handleOnSubmit} />
      </Container>
    </div>
  );
}

LoginFeature.propTypes = {};

export default LoginFeature;
