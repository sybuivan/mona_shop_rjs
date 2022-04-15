import {
  FormHelperText,
  IconButton,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system";
import React from "react";
import { Controller } from "react-hook-form";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  boxQuantity: {
    maxWidth: "350px",
    display: "flex",
    width: "140px",
    justifyContent: "center",
  },
  inputField : {
    backgroundColor: '#fff'
  },
  
});

function QuantityField(props) {
  const { name, errors, control, setValue } = props;
  const classes = useStyles();

  //   console.log("setValue", setValue);
  const hasError = errors[name];
  return (
    <FormControl sx={{ m: 1, margin: "0px" }} size="small">
      <Controller
        id={name}
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Box className={classes.boxQuantity} mb={2}>
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                )
              }
              disabled={Number.parseInt(value) === 1 ? true : false}
            >
              <RemoveIcon />
            </IconButton>
            <TextField
              className={classes.inputField}
              id={name}
              fullWidth
              value={value}
              variant="filled"
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              error={!!hasError}
            />

            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                )
              }
            >
              <AddIcon />
            </IconButton>
          </Box>
        )}
      />
      <FormHelperText error={!!hasError}>
        {errors[name]?.message}
      </FormHelperText>
    </FormControl>
  );
}

QuantityField.propTypes = {};

export default QuantityField;
