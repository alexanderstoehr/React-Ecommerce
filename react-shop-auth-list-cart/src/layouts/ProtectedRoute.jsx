import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { apiUser } from "../common/api";
import { login, logout } from "../redux/UserSlice";

export default function ProtectedRoute() {
	const navigate = useNavigate();
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
				});
		} else {
			console.log("no token");
			dispatch(logout());
			navigate("/login");
		}
	}, []);

	return accessToken === undefined ? (
		<>Loading...</>
	) : (
		<>
			<Outlet />
		</>
	);
}
