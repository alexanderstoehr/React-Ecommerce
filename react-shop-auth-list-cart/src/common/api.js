import axios from "axios";

export const apiUser = axios.create({
	baseURL: "https://motion.propulsion-home.ch/backend/api",
});

export const apiProducts = axios.create({
	baseURL: "https://fakestoreapi.com/products/",
});
