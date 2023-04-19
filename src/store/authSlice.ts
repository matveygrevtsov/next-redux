import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

const authSliceName = "authSlice";

export const authSlice = createSlice({
  name: authSliceName,
  initialState,
  reducers: {
    // Экшен для установки статуса аутентификации (на клиенте)
    setAuthState(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  // extraReducers: {
  //   // payload из HYDRATE action будет содержать стейт в момент рендеринга на сервере, поэтому редьюсер должен подмержить стейт с уже существующими значениями стейта на клиенте.
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload[authSliceName],
  //     };
  //   },
  // },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.authSlice.isLoggedIn;

export default authSlice.reducer;
