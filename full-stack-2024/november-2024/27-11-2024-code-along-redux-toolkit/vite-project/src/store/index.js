import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlicer.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
