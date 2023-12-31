import { createSlice } from "@reduxjs/toolkit";

const initialaddCartItemState = {
  items: [],
  totalQuantity: 0,
};

const addCartItemSlice = createSlice({
  name: "addCartItem",
  initialState: initialaddCartItemState,
  reducers: {
    replaceCartItem(state, action){
        state.items = action.payload.items;
        state.totalQuantity = action.payload.totalQuantity;
    },
    onAddCartItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
     // console.log(existingItem);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }else{
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    onRemoveCartItem(state, action) {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id);
        state.totalQuantity--;
        if(existingItem.quantity === 1){
            state.items = state.items.filter(item => item.id !== id);
        }else{
            existingItem.quantity-- ;
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price
        }
    },
  },
});

export const addCartItemSliceActions = addCartItemSlice.actions;

export default addCartItemSlice.reducer;
