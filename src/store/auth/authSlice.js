import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
 name: "auth",
 initialState: {
  status: "checking", // not-authenticated, "authenticated", checking
  user: {
   name: null,
   lastName: null,
   birthday: null,
   doc: null,
   noDoc: null,
   cel: null,
  },

  errorMessage: undefined,
 },
 reducers: {
  login: (state, { payload }) => {
   state.status = "authenticated";
   state.user = payload;
   state.errorMessage = undefined;
  },
  logout: (state, { payload }) => {
   state.status = "not-authenticated";
   state.user = {};
   state.errorMessage = payload;
  },
  checkingCredentials: (state) => {
   state.status = "checking";
   state.user = {};
   state.errorMessage = undefined;
  },
  clearErrorMessage: (state) => {
   state.errorMessage = undefined;
  },
 },
});

export const { login, logout, checkingCredentials, clearErrorMessage } =
 authSlice.actions;