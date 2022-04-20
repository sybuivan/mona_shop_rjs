import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { hiddenMiniCart } from "../cartSlice";
import './style.scss'

function NotistackCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(hiddenMiniCart());
  };
  return (
    <Box className="paperBox">
      <Box className="wrapper">
        <span>Thêm sản phẩm vào giỏ hành thành công</span>
        <Box className="boxButton">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/cart")}
          >
            Đi đến giỏ hàng
          </Button>
          <Button variant="contained" color="error" onClick={handleClose}>
            Đóng
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

NotistackCart.propTypes = {};

export default NotistackCart;
