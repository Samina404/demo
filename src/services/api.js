import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const loginUser = (data) => API.post("/auth/user/login", data);
export const loginFoodPartner = (data) => API.post("/auth/food-partner/login", data);
export const registerUser = (data) => API.post("/auth/user/register", data);
export const registerFoodPartner = (data) => API.post("/auth/food-partner/register", data);

export default API; // ✅ add this line
