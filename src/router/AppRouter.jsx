import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import { CheckingAuth } from "../components/CheckingAuth";
import { login, logout } from "../store/auth/authSlice";
import { CotizaPage } from "../cotiza/pages/CotizaPage";
import { LoginPage } from "../auth/pages/LoginPage";

export const AppRouter = () => {
 const { status } = useAuthStore();
 const dispatch = useDispatch();

 useEffect(() => {
  const checking = async () => {
   if (!localStorage.getItem("user_data")) return dispatch(logout());
   return dispatch(login(JSON.parse(localStorage.getItem("user_data"))));
  };
  checking();
 }, []);

 if (status === "checking") {
  return <CheckingAuth />;
 }

 return (
  <>
   <Routes>
    {status === "not-authenticated" ? (
     <>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
     </>
    ) : (
     <>
      <Route path="/cotiza" element={<CotizaPage />} />
      <Route path="/*" element={<Navigate to="/cotiza" />} />
     </>
    )}
   </Routes>
  </>
 );
};
