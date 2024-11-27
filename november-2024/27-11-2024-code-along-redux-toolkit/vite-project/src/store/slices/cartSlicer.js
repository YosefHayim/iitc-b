import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: 1234,
        name: "Coca Cola Bottle",
        price: 8.9,
        quantity: 1,
        totalItemPrice: 8.9,
      },
      {
        id: 1234,
        name: "Mana-Hama",
        price: 7,
        quantity: 3,
        totalItemPrice: 21,
      },
    ],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalQuantity++;
      state.totalPrice += state.action.payload.price;
    },
    appendToCart: (state, action) => {},
    removeItem: (state, action) => {
      // Find item index
      // Filter index
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const item = state.items(itemIndex);
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
