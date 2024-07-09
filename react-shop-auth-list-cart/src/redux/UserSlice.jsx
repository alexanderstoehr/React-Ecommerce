import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	validAccessToken: undefined, // undefined (maybe token) or null (no token)
	userDetails: null,
	userData: {
		email: "",
		username: "",
		password: "",
		first_name: "",
		last_name: "",
	},
	itemsInCart: [],
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.validAccessToken = action.payload;
			console.log("login", state.validAccessToken);
		},
		logout: (state) => {
			state.validAccessToken = null;
			console.log("logout");
		},
		load_user: () => {
			console.log("load user");
		},
		validate_token: (state, action) => {
			console.log("check: ", state, action);
		},
		add_to_cart: (state, action) => {
			const existingItemIndex = state.itemsInCart.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingItemIndex !== -1) {
				// Item ID exists in the cart, update its quantity
				state.itemsInCart[existingItemIndex].quantity +=
					action.payload.quantity;
			} else {
				// Item ID does not exist in the cart, add the new item
				state.itemsInCart.push(action.payload);
			}
		},
		remove_from_cart: (state, action) => {
			console.log("remove me: ", action.payload);
			//find occurrences of id and delete them
			// arr = arr.filter( obj => obj.id !== id)
			const newCartArr = state.itemsInCart.filter(
				(item) => item.id !== action.payload
			);
			console.log("in cart: ", state.itemsInCart.length);
			console.log("new in cart: ", newCartArr.length);
			state.itemsInCart = newCartArr;
		},
		change_quantity(state, action) {
			const { itemID, newQuantity } = action.payload;
			// console.log("us q: ", newQuantity);
			// console.log("us id: ", itemID);

			const itemIndex = state.itemsInCart.findIndex(
				(item) => item.id === itemID
			);
			// console.log(itemIndex);
			state.itemsInCart[itemIndex].quantity = newQuantity;
		},
	},
});

export const {
	login,
	logout,
	load_user,
	add_to_cart,
	change_quantity,
	remove_from_cart,
} = userSlice.actions;

export default userSlice.reducer;
