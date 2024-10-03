import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlans } from "../helpers/getPlans";
import {
 chargePlans,
 onForMe,
 onForOther,
 onClearPlans,
} from "../store/plans/plansSlice";
import { calculateUserAge } from "../helpers/calculateUserAge";

export const usePlans = () => {
 const [repoPlans, setRepoPlans] = useState(() => {
  const savedPlans = localStorage.getItem("plans");
  return savedPlans ? JSON.parse(savedPlans) : [];
 });

 const dispatch = useDispatch();
 const { user } = useSelector((state) => state.auth);

 const { isForMeActive, isForOtherActive, plansState } = useSelector(
  (state) => state.plans
 );

 useEffect(() => {
  const savedIsForMeActive = localStorage.getItem("isForMeActive");
  const savedIsForOtherActive = localStorage.getItem("isForOtherActive");

  if (savedIsForMeActive === "true") {
   dispatch(onForMe());
  }

  if (savedIsForOtherActive === "true") {
   dispatch(onForOther());
  }
 }, [dispatch]);

 useEffect(() => {
  const userAge = calculateUserAge(user.birthDay);

  if (repoPlans.length === 0) {
   getPlans().then((plansApi) => {
    const filteredPlans = plansApi.filter((p) => p.age >= userAge);

    setRepoPlans(filteredPlans);
    localStorage.setItem("plans", JSON.stringify(filteredPlans));

    dispatch(chargePlans(filteredPlans));
   });
  } else {
   dispatch(chargePlans(repoPlans));
  }
 }, [user, dispatch, repoPlans]);

 useEffect(() => {
  localStorage.setItem("isForMeActive", isForMeActive);
 }, [isForMeActive]);

 useEffect(() => {
  localStorage.setItem("isForOtherActive", isForOtherActive);
 }, [isForOtherActive]);

 const startForOther = () => {
  if (isForOtherActive) {
   return;
  }

  const discountedPlans = plansState.map((plan) => ({
   ...plan,
   price: plan.price - plan.price * 0.05,
  }));

  setRepoPlans(discountedPlans);
  localStorage.setItem("plans", JSON.stringify(discountedPlans));

  dispatch(chargePlans(discountedPlans));
  dispatch(onForOther());
 };

 const startForMe = () => {
  if (isForMeActive) {
   return;
  }

  setRepoPlans([]);
  dispatch(chargePlans(repoPlans));
  dispatch(onForMe());
 };

 const clearPlans = () => {
  dispatch(onClearPlans());
 };

 return {
  startForOther,
  startForMe,
  clearPlans,
 };
};
