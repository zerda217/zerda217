import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    id: 0,
    name: "",
    level: 0,
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id
    },

    logout: (state, action) => {
      state.name = "";
      state.level = 0;
      state.id = 0;
    },
  },
});

export const {
  login,
  logout,
} = UserSlice.actions;

export default UserSlice.reducer;