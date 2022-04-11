import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import Images from "../../../constants/images";
import CartItem from "../components/CartItem";

function CartList({ cartList }) {
  const navigate = useNavigate();

  if (cartList.length > 0) {
    return (
      <div>
        {cartList.map((cart) => (
          <CartItem cart={cart} key={cart.id} />
        ))}
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img src={Images.EMPTY_CART} alt="" style={{ marign: "auto" }} />
          <p style={{ textAlign: "center" , paddingBottom: '20px'}}>
            Chưa có sản phẩm nào trong giỏ hàng.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              color="warning"
              variant="contained"
              onClick={() => navigate("/")}
            >
              Tiếp tục mua sắm
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

CartList.propTypes = {};

export default CartList;
