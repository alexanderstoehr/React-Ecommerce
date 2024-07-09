import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		add_products: (state, action) => {
			state.products = action.payload;
			// console.log("payloaded: ", action.payload);
			// console.log("fetched");
		},
	},
});

export const { add_products } = productSlice.actions;

export default productSlice.reducer;
