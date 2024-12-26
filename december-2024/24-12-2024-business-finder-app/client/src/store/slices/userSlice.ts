import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "id",
    name: "user",
    email: "example@gmail.com",
    profileImg: "images/default-profile-img.svg",
    plan: "unknown",
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setProfilePicUser: (state, action) => {
      state.profileImg = action.payload;
    },
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setName, setProfilePicUser, setPlan, setId, setEmail } =
  userSlice.actions;

export default userSlice.reducer;
