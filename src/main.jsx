import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { CotizaApp } from "./CotizaApp";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <Provider store={store}>
   <BrowserRouter>
    <CotizaApp />
   </BrowserRouter>
  </Provider>
 </StrictMode>
);
