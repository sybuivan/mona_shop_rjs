import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import CartList from "./page/CarList";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },

  contentTitle: {
    display: "grid",
    gridTemplateColumns: "400px 145px 125px 130px 30px",
    alignItems: "center",
    padding: "0 10px",
    marginBottom: "12px",
    paddingBottom: "12px",
    borderBottom: "2px solid #c1c1c1",
  },

  removeAll: {},
});

function CartFeature(props) {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Container style={{ padding: "20px 0" }}>
      <h2 style={{ fontWeight: "600" }}>GIỎ HÀNG</h2>
      <Grid container>
        <Grid item className={classes.contentLeft} xs={12}>
          <CartList cartList={cartItems} />
        </Grid>
      </Grid>
    </Container>
  );
}

CartFeature.propTypes = {};

export default CartFeature;
