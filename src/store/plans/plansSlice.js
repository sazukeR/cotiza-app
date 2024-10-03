import { createSlice } from "@reduxjs/toolkit";

export const plansSlice = createSlice({
 name: "plans",
 initialState: {
  isForMeActive: false,
  isForOtherActive: false, 
  plansState: [],

  errorMessage: undefined,
 },
 reducers: {
  chargePlans: (state, { payload }) => {
   state.plansState = payload;
   state.errorMessage = undefined;
  },

  onForMe: (state) => {
   state.isForOtherActive = false;
   state.isForMeActive = true;
  },

  onForOther: (state) => {
   state.isForMeActive = false;
   state.isForOtherActive = true;
  },

  onClearPlans: (state) => {
   state.isForMeActive = false;
   state.isForOtherActive = false;
   state.plansState = [];
   state.errorMessage = undefined;
 },
 },
});

export const { chargePlans, onForMe, onForOther, onClearPlans } =
 plansSlice.actions;