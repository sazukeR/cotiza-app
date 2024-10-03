/*import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlans } from "../helpers/getPlans";
import { chargePlans, onForMe, onForOther } from "../store/plans/plansSlice";
import { calculateUserAge } from "../helpers/calculateUserAge";

export const usePlans = () => {
 const [repoPlans, setRepoPlans] = useState([]);
 const dispatch = useDispatch();
 const { user } = useSelector((state) => state.auth);
 const { isForMeActive, isForOtherActive, plansState } = useSelector(
  (state) => state.plans
 );

 useEffect(() => {
  const userAge = calculateUserAge(user.birthDay);

  getPlans().then((plansApi) => {
   const filteredPlans = plansApi.filter((p) => p.age >= userAge);
   dispatch(chargePlans(filteredPlans));
  });
 }, []);

 const startForOther = () => {
  if (isForOtherActive) {
   return;
  }

  const discountedPlans = plansState.map((plan) => ({
   ...plan,
   price: plan.price - plan.price * 0.05,
  }));
  console.log(discountedPlans, "rr");

  dispatch(chargePlans(discountedPlans));
  dispatch(onForOther());
 };

 return {
  startForOther,
 };
};*/

/*import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlans } from "../helpers/getPlans";
import { chargePlans, onForMe, onForOther } from "../store/plans/plansSlice";
import { calculateUserAge } from "../helpers/calculateUserAge";

export const usePlans = () => {
 const [repoPlans, setRepoPlans] = useState(() => {
  // Intenta leer los planes desde localStorage al iniciar
  const savedPlans = localStorage.getItem("plans");
  return savedPlans ? JSON.parse(savedPlans) : [];
 });

 const dispatch = useDispatch();
 const { user } = useSelector((state) => state.auth);
 const { isForMeActive, isForOtherActive, plansState } = useSelector(
  (state) => state.plans
 );

 useEffect(() => {
  console.log("plansState");
  const userAge = calculateUserAge(user.birthDay);

  // Si ya hay planes en el estado local, no vuelvas a cargarlos
  if (repoPlans.length === 0) {
   getPlans().then((plansApi) => {
    const filteredPlans = plansApi.filter((p) => p.age >= userAge);

    // Guarda los planes filtrados en el estado local y en localStorage
    setRepoPlans(filteredPlans);
    localStorage.setItem("plans", JSON.stringify(filteredPlans));

    // Despacha los planes filtrados al store
    dispatch(chargePlans(filteredPlans));
   });
  } else {
   // Si hay planes guardados, despáchalos directamente
   dispatch(chargePlans(repoPlans));
  }
 }, [user, dispatch, repoPlans]);

 const startForOther = () => {
  console.log("startfor");
  if (isForOtherActive) {
   return;
  }

  const discountedPlans = plansState.map((plan) => ({
   ...plan,
   price: plan.price - plan.price * 0.05,
  }));
  console.log(discountedPlans);
  // Guarda los planes con descuento en localStorage
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

 return {
  startForOther,
  startForMe,
 };
}; */

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPlans } from "../helpers/getPlans";
// import { chargePlans, onForMe, onForOther } from "../store/plans/plansSlice";
// import { calculateUserAge } from "../helpers/calculateUserAge";

// export const usePlans = () => {
//  const [repoPlans, setRepoPlans] = useState(() => {
//   const savedPlans = localStorage.getItem("plans");
//   return savedPlans ? JSON.parse(savedPlans) : [];
//  });

//  const dispatch = useDispatch();
//  const { user } = useSelector((state) => state.auth);

//  // Intenta leer los estados de isForMeActive e isForOtherActive desde localStorage al iniciar

//  const { isForMeActive, isForOtherActive, plansState } = useSelector(
//   (state) => state.plans
//  );

//  useEffect(() => {
//   console.log("plansState");
//   const userAge = calculateUserAge(user.birthDay);

//   if (repoPlans.length === 0) {
//    getPlans().then((plansApi) => {
//     const filteredPlans = plansApi.filter((p) => p.age >= userAge);

//     // Guarda los planes filtrados en el estado local y en localStorage
//     setRepoPlans(filteredPlans);
//     localStorage.setItem("plans", JSON.stringify(filteredPlans));

//     // Despacha los planes filtrados al store
//     dispatch(chargePlans(filteredPlans));
//    });
//   } else {
//    // Si hay planes guardados, despáchalos directamente
//    dispatch(chargePlans(repoPlans));
//   }
//  }, [user, dispatch, repoPlans]);

//  // Guarda isForMeActive e isForOtherActive en localStorage cuando cambien
//  useEffect(() => {
//   localStorage.setItem("isForMeActive", isForMeActive);
//  }, [isForMeActive]);

//  useEffect(() => {
//   localStorage.setItem("isForOtherActive", isForOtherActive);
//  }, [isForOtherActive]);

//  const startForOther = () => {
//   console.log("startfor");
//   if (isForOtherActive) {
//    return;
//   }

//   const discountedPlans = plansState.map((plan) => ({
//    ...plan,
//    price: plan.price - plan.price * 0.05,
//   }));
//   console.log(discountedPlans);

//   setRepoPlans(discountedPlans);
//   localStorage.setItem("plans", JSON.stringify(discountedPlans));

//   dispatch(chargePlans(discountedPlans));
//   dispatch(onForOther());
//  };

//  const startForMe = () => {
//   if (isForMeActive) {
//    return;
//   }

//   setRepoPlans([]);
//   dispatch(chargePlans(repoPlans));
//   dispatch(onForMe());
//  };

//  return {
//   startForOther,
//   startForMe,
//  };
// };

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

 // Lee los estados de isForMeActive e isForOtherActive desde localStorage al iniciar
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

    // Guarda los planes filtrados en el estado local y en localStorage
    setRepoPlans(filteredPlans);
    localStorage.setItem("plans", JSON.stringify(filteredPlans));

    // Despacha los planes filtrados al store
    dispatch(chargePlans(filteredPlans));
   });
  } else {
   // Si hay planes guardados, despáchalos directamente
   dispatch(chargePlans(repoPlans));
  }
 }, [user, dispatch, repoPlans]);

 // Guarda isForMeActive e isForOtherActive en localStorage cuando cambien
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
