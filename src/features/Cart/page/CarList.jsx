import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button, Checkbox, IconButton, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import formatPrice from "../../../utils/common";
import { checkStatusCartAll } from "../cartSlice";
import CartItem from "../components/CartItem";
import { countCheckCartItems, totalPriceCartChecked } from "../selector";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },

  contentTitle: {
    display: "grid",
    gridTemplateColumns: "500px 200px 200px 200px 40px",
    alignItems: "center",
    padding: "0 10px",
    marginBottom: "12px",
    paddingBottom: "12px",
    borderBottom: "2px solid #c1c1c1",
  },

  cartFixed: {
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#fff",
    zIndex: 3,
  },
  cartWrapper: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 40px",
    alignItems: "center",

    "& span": {
      fontSize: "1.2em",
    },
  },
  cartPay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cartButton: {
    padding: "12px 20px",

    "& button": {
      backgroundColor: "#fb6017",
      padding: "12px 30px",
    },
  },
  cartPriceText: {
    fontWeight: 600,
    color: "red",
  },

  removeAll: {},
});

function CartList({ cartList }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const statusCartAll = useSelector((state) => state.cart.statusCartAll);

  console.log("statusCartAll", statusCartAll);

  const countCartChecked = useSelector(countCheckCartItems);
  const totalCartChecked = useSelector(totalPriceCartChecked);

  const handleCheck = (event) => {
    dispatch(
      checkStatusCartAll({
        status: event.target.checked,
      })
    );
  };
  if (cartList.length > 0) {
    return (
      <div>
        <Paper elevation={0} className={classes.contentTitle}>
          <label htmlFor="">Tất cả {cartList.length} (sản phẩm)</label>
          <span>Đơn giá</span>
          <span>Số lượng</span>
          <span>Thành tiền</span>
          <span className={classes.removeAll}>
            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
          </span>
        </Paper>
        {cartList.map((cart) => (
          <CartItem cart={cart} key={cart.id} />
        ))}

        <div className={classes.cartFixed}>
          <div className={classes.cartWrapper}>
            <div>
              <label htmlFor="">
                <Checkbox
                  checked={
                    statusCartAll
                      ? statusCartAll
                      : countCartChecked === cartList.length
                      ? true
                      : false
                  }
                  onChange={handleCheck}
                />
              </label>
              <span style={{ marginLeft: "12px" }}>
                Chọn tất cả {cartList.length} sản phẩm
              </span>
            </div>

            <div className={classes.cartPay}>
              <div>
                <span>Tổng thanh toán ({countCartChecked} Sản phẩm): </span>
                <span className={classes.cartPriceText}>
                  {formatPrice(totalCartChecked)}đ
                </span>
              </div>

              <div className={classes.cartButton}>
                {countCartChecked > 0 ? (
                  <Button variant="contained">Đặt hàng</Button>
                ) : (
                  <Button
                    variant="contained"
                    disabled
                    style={{ color: "#000", cursor: "no-drop" }}
                  >
                    Đặt hàng
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
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
          <img
            src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs="
            alt=""
            style={{ marign: "auto", width: "300px" }}
          />
          <p
            style={{
              textAlign: "center",
              paddingBottom: "20px",
              fontSize: "1.2em",
            }}
          >
            Chưa có sản phẩm nào trong giỏ hàng.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              color="warning"
              variant="contained"
              // onClick={() => navigate("/")}
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
