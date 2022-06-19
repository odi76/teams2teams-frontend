import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  isInProgress: false,
  userId: null,
  sessionId: null
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    signUpStarted(state, action) {
      state.isAuthenticated = false;
      state.isInProgress = true;
      state.userId = action.payload;
      state.sessionId = null;
    },
    signUpFinished(state, action) {
      state.isAuthenticated = action.payload.isSuccessfull;
      state.isInProgress = false;
      state.userId = null;
      state.sessionId = null;
    },
    signInStarted(state, action) {
      state.isAuthenticated = false;
      state.isInProgress = true;
      state.userId = action.payload;
    },
    signInFinished(state, action) {
      state.isAuthenticated = action.payload.isSuccessfull;
      state.isInProgress = false;
      state.sessionId = action.payload.sessionId;
    },
    signOut(state) {
      state.isAuthenticated = false;
      state.isInProgress = false;
      state.userId = null;
      state.sessionId = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;