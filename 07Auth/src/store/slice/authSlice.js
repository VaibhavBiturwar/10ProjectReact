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

    updateUserData: (state, { payload }) => {
      state.userData.username = payload.username;
      state.userData.email = payload.email;
      state.userData.fullName = payload.fullName;
    },
    setLogoutUser: (state) => {
      state.userData = null;
      state.authToken = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setIsLoggedIn, setUserData, setLogoutUser, updateUserData } =
  authSlice.actions;
export default authSlice.reducer;
