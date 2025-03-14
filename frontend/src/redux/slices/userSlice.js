import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      const { username, role } = action.payload;
      state.currentUser = username;
      state.role = role;
    },
    logout(state) {
      state.currentUser = null;
      state.role = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
