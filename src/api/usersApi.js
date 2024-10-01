import axios from "axios";

const usersApi = axios.create({
 baseURL: "https://rimac-front-end-challenge.netlify.app/api/user.json",
});

export default usersApi;