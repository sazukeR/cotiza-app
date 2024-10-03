import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { plansSlice } from "./plans/plansSlice";


export const store = configureStore({
 reducer: {
  auth: authSlice.reducer,
  plans: plansSlice.reducer,
 },
});

