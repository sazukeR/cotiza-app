import { Navigate, Route, Routes } from "react-router-dom";
import { CotizaPage } from "../pages/CotizaPage";

export const CotizaRoutes = () => {
 return (
  <Routes>
   <Route path="/" element={<CotizaPage />} />
   <Route path="/*" element={<Navigate to="/" />} />
  </Routes>
 );
};
