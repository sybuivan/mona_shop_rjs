import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function InputFiled({ label, name, errors, control}) {
  const hasError = errors[name];
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, ref, value } }) => (
        <TextField
          label={label}
          fullWidth
          variant="outlined"
          margin="dense"
          onChange={onChange}
          onBlur={onBlur}
          selected={value}
          error={!!hasError}
          style={{ marginBottom: "18px" }}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

InputFiled.propTypes = {};

export default InputFiled;
