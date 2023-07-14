//const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import cartItemReducer from "./AddToCart";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartItem: cartItemReducer,
  },
});

export default store;
