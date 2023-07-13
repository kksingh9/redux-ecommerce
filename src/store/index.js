//const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";

const store = configureStore({
    reducer : {
        cart: cartReducer,
    }
});

export default store;