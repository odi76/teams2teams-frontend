import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    signIn(state, action) {
      state.isAuthenticated = true;
      state.userId = action.payload;
    },
    signOut(state) {
      state.isAuthenticated = false;
      state.userId = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
