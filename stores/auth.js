import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  isInProgress: false,
  userId: null,
  token: null
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    signInStarted(state, action) {
      state.isAuthenticated = false;
      state.isInProgress = true;
      state.userId = action.payload;
    },
    signInFinished(state, action) {
      state.isAuthenticated = action.payload.isSuccessfull;
      state.isInProgress = true;
      state.token = action.payload.token;
    },
    signOut(state) {
      state.isAuthenticated = false;
      state.isInProgress = false;
      state.userId = null;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;