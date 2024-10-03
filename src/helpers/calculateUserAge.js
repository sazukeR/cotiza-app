import { differenceInYears } from 'date-fns';

export  const calculateUserAge = (birthDay) => {
 const today = new Date();
 const birthDate = new Date(birthDay);
 return differenceInYears(today, birthDate);
};