import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Button, Checkbox, IconButton, Paper } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { STATIC_HOST, THUMBNAIL_DEMO } from "../../../constants";
import formatPrice from "../../../utils/common";
import { checkBoxCart, removeFromCart, setQuantity } from "../cartSlice";

const useStyles = makeStyles({
  boxCartItem: {
    display: "grid",
    gridTemplateColumns: "500px 200px 200px 200px 40px",
    alignItems: "center",
    marginBottom: "12px",
    padding: "20px 12px",
    borderBottom: "1px solid #c1c1c1",

    // "&:last-child": {
    //   borderBottom: "none",
    // }
  },

  wrapperProduct: {
    display: "flex",
    alignItems: "center",
  },

  productImage: {
    display: "flex",
    marginLeft: "8px",
    alignItems: "center",

    "& > img": {
      width: "90px",
      height: "90px",
      marginRight: "12px",
      borderRadius: "5px",
    },
  },

  productName: {
    fontWeight: "700",
    fontSize: "1.2em",
  },
  productPrice: {
    fontWeight: "700",
  },
  boxQuantity: {
    display: "flex",
    alignItems: "center",

    "& > input": {
      width: "30px",
      height: "30px",
      ouline: "none",
      textAlign: "center",
    },
  },
});

function CartItem({ cart }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { product, quantity, id, status } = cart;

  const handleAddQuantity = () => {
    const action = setQuantity({
      id: id,
      quantity: quantity + 1,
    });

    dispatch(action);
  };
  const handleRemoveQuantity = () => {
    const action = setQuantity({
      id: id,
      quantity: quantity - 1,
    });

    dispatch(action);
  };

  const handleOnChange = (e) => {};

  const handleRemoveCart = () => {
    dispatch(removeFromCart({ id }));
    setOpen(false);
  };

  const handleCheck = (event) => {
    const actionValue = checkBoxCart({
      id: id,
      status: event.target.checked,
    });

    dispatch(actionValue);
  };

  return (
    <Paper elevation={0}>
      <Box className={classes.boxCartItem}>
        <Box className={classes.wrapperProduct}>
          <label htmlFor="">
            <Checkbox checked={status || false} onChange={handleCheck} />
          </label>
          <Box className={classes.productImage}>
            <img src={product.thumbnailUrl} alt="" />
            <span className={classes.productName}>{product.name}</span>
          </Box>
        </Box>
        <span className={classes.productPrice}>
          {formatPrice(product.price)}
        </span>
        <Box className={classes.boxQuantity}>
          <IconButton
            onClick={handleRemoveQuantity}
            disabled={quantity > 1 ? false : true}
          >
            <RemoveIcon />
          </IconButton>
          <input type="text" value={quantity} onChange={handleOnChange} />
          <IconButton onClick={handleAddQuantity}>
            <AddIcon />
          </IconButton>
        </Box>
        <p style={{ color: "red", marginTop: 0, fontWeight: "600" }}>
          {formatPrice(product.price * quantity)}
        </p>
        <IconButton onClick={() => setOpen(true)}>
          <DeleteOutlineIcon />
        </IconButton>
      </Box>

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
          <span>Xoá sản phẩm</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có muốn xóa sản phẩm đang chọn?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemoveCart} variant="outlined">
            Xác nhận
          </Button>
          <Button onClick={() => setOpen(false)} variant="contained">
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

CartItem.propTypes = {};

export default CartItem;
