import { createSlice } from "@reduxjs/toolkit";
import MeatData from "../data/meats";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const exist = state.products.find(
        (p) => p.item.id == action.payload.item.id
      );
      if (exist) return;

      state.products = [...state.products, action.payload];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (p) => p.item.id !== action.payload
      );
    },
    clearItems: (state, action) => {
      state.products = [];
    },
    addQuantity: (state, action) => {
      state.products.forEach((p, i) => {
        if (p.item.id == action.payload) state.products[i].quantity += 1;
      });
    },
    decreaseQuantity: (state, action) => {
      state.products.forEach((p, i) => {
        if (p.item.id == action.payload && p.quantity > 1)
          state.products[i].quantity -= 1;
      });
    },
  },
});

export const {
  addProduct,
  removeProduct,
  clearItems,
  addQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
