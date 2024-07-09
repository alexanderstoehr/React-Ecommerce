import { useEffect } from "react";
import Router from "./routes";
import { apiProducts, apiUser } from "./common/api";
import { useDispatch, useSelector } from "react-redux";
import { add_products } from "./redux/ProductSlice";
import { login, logout } from "./redux/UserSlice";
import { LoadingScreenStyled } from "./styled";

function App() {
	const dispatch = useDispatch();
	const accessToken = useSelector((state) => state.user.validAccessToken);

	useEffect(() => {
		const localToken = localStorage.getItem("accessToken");
		// console.log(localToken);
		if (localToken) {
			console.log("token there");
			const res = apiUser
				.post("auth/token/verify/", { token: localToken })
				.then(dispatch(login(localToken)))
				.catch(() => {
					localStorage.removeItem("accessToken");
					dispatch(logout());
					console.log("wrong token");
					console.log(res);
				});
		} else {
			console.log("no token");
			dispatch(logout());
		}
	}, []);

	const productsInStore = useSelector((state) => state.product.products);

	const fetchProducts = () => {
		apiProducts("?limit=28").then((res) => dispatch(add_products(res.data)));
		// console.log("fetched");
	};

	useEffect(() => {
		!productsInStore.length ? fetchProducts() : null;
	}, []);

	return accessToken === undefined ? (
		<LoadingScreenStyled>Loading...</LoadingScreenStyled>
	) : (
		<>
			<Router />
		</>
	);
}

export default App;
