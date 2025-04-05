import { createSlice } from "@reduxjs/toolkit";

const CartReducers = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
    emptyCart: (state) => {
      state.items.length = 0;
      // return {items: []} Either we can write this
    }
  }
});

export const {addItem, removeItem, emptyCart} = CartReducers.actions;

export default CartReducers.reducer;