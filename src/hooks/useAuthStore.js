import { useDispatch, useSelector } from "react-redux";
import usersApi from "../api/usersApi";
import {
 checkingCredentials,
 login,
 logout,
} from "../store/auth/authSlice";
import { usePlans } from "./usePlans";

export const useAuthStore = () => {
 const dispatch = useDispatch();

 const { status, user, errorMessage } = useSelector((state) => state.auth);

 const {clearPlans} = usePlans()

 const startLogin = async () => {
  dispatch(checkingCredentials());

   const { data } = await usersApi.get();


   const foundUser = {
    name: data.name,
    lastName: data.lastName,
    birthDay: data.birthDay,
   }

   localStorage.setItem("user_data", JSON.stringify(foundUser));

   dispatch(
    login(foundUser)
   );

  
  }
 
  const startLogout = () => {
   
  localStorage.clear();
  dispatch(logout());
 };

 return {
  // props

  status,
  user,
  errorMessage,

  // methods
  startLogin,
  startLogout,
 };
};