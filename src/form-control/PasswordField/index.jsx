import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

function PasswordField({ name, control, errors, label }) {
  const hasError = errors[name];

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((x) => !x);
  };
  return (
    <FormControl sx={{ m: 1, width: "100%", margin: "0 0 18px 0" }}>
      <InputLabel htmlFor={name} error={!!hasError}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
            error={!!hasError}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
          />
        )}
      />
      <FormHelperText style={{ marginLeft: "0" }} error={!!hasError}>
        {errors[name]?.message}
      </FormHelperText>
    </FormControl>
  );
}

PasswordField.propTypes = {};

export default PasswordField;
