import axios from "axios";

const plansApi = axios.create({
 baseURL: "https://rimac-front-end-challenge.netlify.app/api/plans.json",
});

export default plansApi;