import React from "react";
import PropTypes from "prop-types";
import LoginForm from "../LoginForm";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";

function LoginFeature(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleOnSubmit = async (values) => {
    try {
      // dispatch action
      const resultAction = dispatch(login(values));

      unwrapResult(resultAction);

      enqueueSnackbar("Logged in successfully", {
        variant: "success",
        autoHideDuration: 2000,
      });

      navigate("/");
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
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
