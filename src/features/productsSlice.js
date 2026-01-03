import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addToCart: (state, { payload }) => {
      return !state.find((products) => products.id == payload.id)
        ? [...state, { ...payload, amount: 1 }]
        : state.map((products) =>
            products.id === payload.id
              ? { ...products, amount: products.amount + 1 }
              : products
          );
    },
  },
});

export const { addToCart } = productsSlice.actions;
export default productsSlice.reducer;
