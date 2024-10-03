import { useState } from "react";

export const useForm = (initialForm = {}) => {
 const [formState, setFormState] = useState(initialForm);

 const onInputChange = ({ target }) => {
  const { name, value } = target;
  let transformedValue = value;

  if (name === "cel") {
   transformedValue = value.replace(/\D/g, "");
   if (transformedValue.length > 9) {
    transformedValue = transformedValue.slice(0, 9);
   }
  }

  if (name === "noDoc") {
   transformedValue = value.replace(/\D/g, "");
   if (transformedValue.length > 20) {
    transformedValue = transformedValue.slice(0, 20);
   }
  }

  setFormState({
   ...formState,
   [name]: transformedValue,
  });
 };

 const onResetForm = () => {
  setFormState(initialForm);
 };

 return {
  ...formState,
  formState,
  onInputChange,
  onResetForm,
 };
};
