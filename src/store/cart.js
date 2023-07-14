import { createSlice } from "@reduxjs/toolkit";
//const showcart = JSON.parse(localStorage.getItem("showcart"))
const initialCartState = {
  showCart: false,
  notification: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    onShowCart(state, action) {
      state.showCart = !state.showCart;

      // localStorage.setItem("showcart", JSON.stringify(state.showCart));
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
