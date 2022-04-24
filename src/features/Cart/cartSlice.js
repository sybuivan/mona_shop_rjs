import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: JSON.parse(localStorage.getItem("listProductCart")) || [],
    statusCartAll: false,
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },

    hiddenMiniCart(state) {
      state.showMiniCart = false;
    },

    addToCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((cart) => cart.id === newItem.id);

      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
      localStorage.setItem("listProductCart", JSON.stringify(state.cartItems));
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((cart) => cart.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
        localStorage.removeItem("listProductCart");
        localStorage.setItem(
          "listProductCart",
          JSON.stringify(state.cartItems)
        );
      }
    },

    removeFromCart(state, action) {
      const idNeedRemove = action.payload;
      console.log("payload", idNeedRemove.id);
      state.cartItems = state.cartItems.filter(
        (cart) => cart.id !== idNeedRemove.id
      );
      console.log("removeCart", state.cartItems);
      localStorage.removeItem("listProductCart");
      localStorage.setItem("listProductCart", JSON.stringify(state.cartItems));
    },

    checkBoxCart(state, action) {
      const { id, status } = action.payload;
      let countCheck = 0;
      const index = state.cartItems.findIndex((cart) => cart.id === id);
      if (index >= 0) {
        state.cartItems[index].status = status;
        localStorage.removeItem("listProductCart");
        localStorage.setItem(
          "listProductCart",
          JSON.stringify(state.cartItems)
        );

        state.cartItems.map((cart) => {
          if (cart.status) {
            countCheck++;
          }
        });

        if (countCheck === state.cartItems.length) {
          state.statusCartAll = true;
        } else {
          state.statusCartAll = false;
        }
      }
    },

    checkStatusCartAll(state, action) {
      const { status } = action.payload;

      if (status) {
        state.cartItems = state.cartItems.map((cart) => ({
          ...cart,
          status: true,
        }));

        localStorage.removeItem("listProductCart");
        localStorage.setItem(
          "listProductCart",
          JSON.stringify(state.cartItems)
        );

        state.statusCartAll = status;
        // localStorage.setItem("statusCartAll", status);
      } else {
        state.cartItems = state.cartItems.map((cart) => ({
          ...cart,
          status: false,
        }));

        localStorage.removeItem("listProductCart");
        localStorage.removeItem("statusCartAll");
        localStorage.setItem(
          "listProductCart",
          JSON.stringify(state.cartItems)
        );

        state.statusCartAll = status;
        // localStorage.setItem("statusCartAll", status);
      }
    },

    removeCartAll(state, action) {
      state.cartItems = state.cartItems.filter((cart) => cart.status === false);

      localStorage.removeItem("listProductCart");
      localStorage.setItem("listProductCart", JSON.stringify(state.cartItems));
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  showMiniCart,
  hiddenMiniCart,
  addToCart,
  removeFromCart,
  setQuantity,
  checkBoxCart,
  checkStatusCartAll,
  removeCartAll,
} = actions;
export default reducer;
