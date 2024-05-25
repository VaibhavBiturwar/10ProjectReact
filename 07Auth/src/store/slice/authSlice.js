import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userData: null,
  authToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUserData: (state, { payload }) => {
      state.authToken = payload.accessToken;
      delete payload.accessToken;
      delete payload.refreshToken;
      state.userData = payload;
    },
    setLogoutUser: (state) => {
      state.userData = null;
      state.authToken = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setIsLoggedIn, setUserData, setLogoutUser } = authSlice.actions;
export default authSlice.reducer;
