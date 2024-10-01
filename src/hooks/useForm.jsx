import { useState } from "react";

export const useForm = (initialForm = {}) => {
 const [formState, setFormState] = useState(initialForm);

 const onInputChange = ({ target }) => {
  const { name, value } = target;
  let transformedValue = value;

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
