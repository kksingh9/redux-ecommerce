import { createSlice } from "@reduxjs/toolkit";
//const showcart = JSON.parse(localStorage.getItem("showcart"))
const initialCartState = {
    showCart : false,
}

const cartSlice = createSlice({
    name : "cart",
    initialState : initialCartState,
    reducers : {
        onShowCart(state,action){
            state.showCart = !state.showCart
           // localStorage.setItem("showcart", JSON.stringify(state.showCart));
        },
     
    }
})

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;