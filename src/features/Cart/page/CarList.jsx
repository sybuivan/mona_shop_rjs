import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  IconButton,
  Paper,
} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import formatPrice from "../../../utils/common";
import { checkStatusCartAll, removeCartAll } from "../cartSlice";
import CartItem from "../components/CartItem";
import { countCheckCartItems, totalPriceCartChecked } from "../selector";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

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
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
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

  removeAll: {
    marginLeft: "14px",
  },
});

function CartList({ cartList }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const statusCartAll = useSelector((state) => state.cart.statusCartAll);
  const loggedInUser = useSelector((state) => state.user.current);
  const isLogged = !!loggedInUser.idUser;

  console.log("loggedInUser", isLogged);
  const handleClick = () => {
    isLogged ? navigate("/checkout") : navigate("/login");
  };

  const countCartChecked = useSelector(countCheckCartItems);
  const totalCartChecked = useSelector(totalPriceCartChecked);

  const handleCheck = (event) => {
    dispatch(
      checkStatusCartAll({
        status: event.target.checked,
      })
    );
  };

  const handleRemoveAll = () => {
    dispatch(removeCartAll());

    setOpen(false)
  };

  if (cartList.length > 0) {
    return (
      <div>
        <Paper elevation={0} className={classes.contentTitle}>
          <label htmlFor="">T???t c??? {cartList.length} (s???n ph???m)</label>
          <span>????n gi??</span>
          <span>S??? l?????ng</span>
          <span>Th??nh ti???n</span>
          <span>
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
                Ch???n t???t c??? {cartList.length} s???n ph???m
              </span>

              <span className={classes.removeAll}>
                <IconButton onClick={() => setOpen(true)}>
                  <AiFillDelete />
                </IconButton>
                X??a
              </span>
            </div>

            <div className={classes.cartPay}>
              <div>
                <span>T???ng thanh to??n ({countCartChecked} S???n ph???m): </span>
                <span className={classes.cartPriceText}>
                  {formatPrice(totalCartChecked)}??
                </span>
              </div>

              <div className={classes.cartButton} onClick={handleClick}>
                {countCartChecked > 0 ? (
                  <Button variant="contained">?????t h??ng</Button>
                ) : (
                  <Button
                    variant="contained"
                    disabled
                    style={{ color: "#000", cursor: "no-drop" }}
                  >
                    ?????t h??ng
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <WarningAmberIcon style={{ color: "#fc8918" }} />
            <span>Xo?? s???n ph???m</span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              B???n c?? mu???n x??a {countCartChecked} s???n ph???m ??ang ch???n?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleRemoveAll} variant="outlined">
              X??c nh???n
            </Button>
            <Button onClick={() => setOpen(false)} variant="contained">
              H???y
            </Button>
          </DialogActions>
        </Dialog>
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
            Ch??a c?? s???n ph???m n??o trong gi??? h??ng.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              color="warning"
              variant="contained"
              // onClick={() => navigate("/")}
            >
              Ti???p t???c mua s???m
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

CartList.propTypes = {};

export default CartList;
