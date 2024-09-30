import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { CotizaApp } from "./CotizaApp";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <CotizaApp />
 </StrictMode>
);
