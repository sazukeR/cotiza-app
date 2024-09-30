import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CotizaRoutes } from "../cotiza/routes/CotizaRoutes";

export const AppRouter = () => {
 return (
  <Routes>
   <Route path="/auth/*" element={<AuthRoutes />} />

   <Route path="/*" element={<CotizaRoutes />} />
  </Routes>
 );
};
