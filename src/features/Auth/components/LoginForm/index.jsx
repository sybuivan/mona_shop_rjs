import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputFiled from "../../../../form-control/InputField";
import PasswordField from "../../../../form-control/PasswordField";
import "./style.scss";
import Images from "../../../../constants/images";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

function LoginForm({ onSubmit = null }) {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email.")
      .email("Please enter a valid your address email"),
    password: yup.string().required("Please enter your password"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (values) => {
    if (!onSubmit) return;

    onSubmit(values);
  };

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div className="login-form">
      <div className="login-form__top">
        <div className="login-form__logo">
          <img src={Images.LOGO} alt="" />
        </div>
        <div className="login-form__title">
          <p className="login-form__title-name">
            Login to <strong>Mona Shop</strong>
          </p>
          <p className="login-form__title-sign">Sign in with your Mona Shop</p>
        </div>

        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <InputFiled
            name="email"
            control={control}
            label="Email"
            errors={errors}
            className="login-form__input"
          />
          <PasswordField
            name="password"
            control={control}
            label="Password"
            errors={errors}
            className="login-form__input"
          />
          <div className="login-form__forgot">
            <Link to="/">Forgot password?</Link>
          </div>

          <div className="login-form__submit">
            <Button
              variant="outlined"
              className="login-form__submit-btn"
              onClick={handleClick}
            >
              Create account
            </Button>
            <Button
              variant="contained"
              className="login-form__submit-btn"
              type="submit"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

LoginForm.propTypes = {};

export default LoginForm;
