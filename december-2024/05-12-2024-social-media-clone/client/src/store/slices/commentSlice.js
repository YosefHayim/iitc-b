import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    isDisplayed: "hidden",
  },
  reducers: {
    displayComment: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { displayComment } = commentSlice.actions;
export default commentSlice.reducer;
