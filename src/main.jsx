import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { CotizaApp } from "./CotizaApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <BrowserRouter>
   <CotizaApp />
  </BrowserRouter>
 </StrictMode>
);
