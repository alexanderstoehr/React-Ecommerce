import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./UserSlice";
import productReducers from "./ProductSlice";

const store = configureStore({
	reducer: {
		user: userReducers,
		product: productReducers,
	},
});

export default store;
