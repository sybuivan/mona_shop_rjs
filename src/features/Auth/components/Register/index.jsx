import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from 'notistack';
import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { register } from "../../userSlice";
import RegisterForm from "../RegisterForm";

function RegisterFeature(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();
  const handleOnSubmit = async (values) => {
    try {
      const resultAction = await dispatch(register(values));

      unwrapResult(resultAction);

      enqueueSnackbar("Register successfully!!", {
        variant: "success",
        autoHideDuration: 2000,
      });

      setTimeout(function() {
        navigate('/login');
      },3000)


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
        <RegisterForm onSubmit={handleOnSubmit} />
      </Container>
    </div>
  );
}

RegisterFeature.propTypes = {};

export default RegisterFeature;
