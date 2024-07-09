import { AuthForm, ErrorStyled, LostPasswordStyled } from "../styled";
import { apiUser } from "../common/api";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/UserSlice";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		console.log("log run");
		try {
			const res = await apiUser.post("/auth/token/", { email, password });
			console.log(res.data.access);
			localStorage.setItem("accessToken", res.data.access);
			dispatch(login(res.data.access));
			navigate("/account");
		} catch (error) {
			console.error(error);
			setErrorMessage(error);
		}
	};

	return (
		<AuthForm>
			<h1>Login</h1>
			<form onSubmit={(e) => handleLoginSubmit(e)}>
				<input
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					required
					value={email}
					placeholder="snoopy@peanuts.com"
				/>
				<input
					type="text"
					onChange={(e) => setPassword(e.target.value)}
					required
					placeholder="password"
				/>
				<button type="submit">Log in</button>
				<LostPasswordStyled>
					<Link>
						<u>Lost your password?</u>
					</Link>
				</LostPasswordStyled>
				{errorMessage && (
					<ErrorStyled>
						Username or password incorrect. Please try again.
					</ErrorStyled>
				)}
			</form>
		</AuthForm>
	);
}
