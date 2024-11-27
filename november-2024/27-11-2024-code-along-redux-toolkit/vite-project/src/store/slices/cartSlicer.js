import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: 4,
        name: "Coca Cola Bottle",
        price: 8.9,
        quantity: 1,
        totalItemPrice: 8.9,
      },
      {
        id: 5,
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
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.items.push(action.payload);
        state.totalQuantity++;
        state.totalPrice += action.payload.price;
      } else {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalItemPrice += action.payload.totalItemPrice;
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const item = state.items(itemIndex);
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price;
      state.items.splice(itemIndex, 1);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
