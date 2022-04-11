import { createSelector } from "@reduxjs/toolkit";

const cartItemsSelector = (state) => state.cart.cartItems;

// count cart item of product
export const countCartItems = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count, cart) => count + cart.quantity, 0)
);

// Total price of list product
export const totalPriceCartItems = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce(
      (total, cart) => total + cart.quantity * cart.product[0].price,
      0
    )
);
