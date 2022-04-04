import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputFiled from "../../../../form-control/InputField";
import PasswordField from "../../../../form-control/PasswordField";
import "../LoginForm/style.scss";
import Images from "../../../../constants/images";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

function RegisterForm({ onSubmit }) {

  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email.")
      .email("Please enter a valid your address email"),
    fullName: yup
      .string()
      .required("Please enter your name")
      .test(
        "Should has at least two words",
        "Please enter at least two words",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter at least 6 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    retypePassword: yup
      .string()
      .required("Please retype your retypePassWord")
      .oneOf([yup.ref("password")], "Password does not match"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });



  const handleOnSubmit = (values) => {
     if(!onSubmit) return

     onSubmit(values)
  };
  return (
    <div className="login-form">
      <div className="login-form__top">
        <div className="login-form__logo">
          <img src={Images.LOGO} alt="" />
        </div>
        <div className="login-form__title">
          <p className="login-form__title-name">
            Sign up <strong>Mona Shop</strong>
          </p>
          <p className="login-form__title-sign">Register a new Mona Shop</p>
        </div>

        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <InputFiled
            name="email"
            control={control}
            label="Email"
            errors={errors}
          />
          <InputFiled
            name="fullName"
            control={control}
            label="FullName"
            errors={errors}
          />

          <PasswordField
            name="password"
            control={control}
            label="Password"
            errors={errors}
          />
          <PasswordField
            name="retypePassword"
            control={control}
            label="Retype Password"
            errors={errors}
          />

          <div className="login-form__submit">
            <Button
              variant="outlined"
              className="login-form__submit-btn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              className="login-form__submit-btn"
              type="submit"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

RegisterForm.propTypes = {};

export default RegisterForm;
