import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../userSlice";
import LoginForm from "../LoginForm";

function LoginFeature(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleOnSubmit = async (values) => {
    try {
      // dispatch action
      const resultAction = await dispatch(login(values));

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
