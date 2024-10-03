import plansApi from "../api/plansApi";

export const getPlans = async() => {
 const { data } = await plansApi.get();
 const list = await data.list 
return list;



}