import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
  reducers: {
    addToCart: (state, { payload }) => {
      const cartProducts = !state.find(
        (products) => products.id === payload.id
      )
        ? [...state, { ...payload, amount: 1 }]
        : state.map((products) =>
            products.id === payload.id
              ? { ...products, amount: products.amount + 1 }
              : products
          );

      localStorage.setItem(
        "cartProducts",
        JSON.stringify(cartProducts)
      );

      return cartProducts;
    },

    increase: (state, { payload }) => {
      const cartProducts = state.map((products) =>
        products.id === payload
          ? { ...products, amount: products.amount + 1 }
          : products
      );

      localStorage.setItem(
        "cartProducts",
        JSON.stringify(cartProducts)
      );

      return cartProducts;
    },

    decrease: (state, { payload }) => {
      const cartProducts = state
        .map((products) =>
          products.id === payload
            ? { ...products, amount: products.amount - 1 }
            : products
        )
        .filter((products) => products.amount > 0);

      localStorage.setItem(
        "cartProducts",
        JSON.stringify(cartProducts)
      );

      return cartProducts;
    },

    removeFromCart: (state, { payload }) => {
      const cartProducts = state.filter(
        (products) => products.id !== payload
      );

      localStorage.setItem(
        "cartProducts",
        JSON.stringify(cartProducts)
      );

      return cartProducts;
    },
  },
});

export const {
  addToCart,
  increase,
  decrease,
  removeFromCart,
} = productsSlice.actions;

export default productsSlice.reducer;
