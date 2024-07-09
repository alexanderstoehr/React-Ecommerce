import { useEffect, useState } from "react";
import { AuthForm, HiddenInputStyled } from "../styled";
import { apiUser } from "../common/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
	const [email, setEmail] = useState("");

	const [code, setCode] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const [codeSent, setCodeSent] = useState(false);
	const [reDoPossible, setReDoPossible] = useState(false);

	const navigate = useNavigate();

	console.log("email ", email);
	console.log("pass ", password);

	const handleCodeRequest = async (e) => {
		console.log(codeSent);
		e.preventDefault();
		console.log("log run", e);

		try {
			const res = await apiUser.post("/auth/registration/", { email });
			console.log(res);
			setCodeSent(true);
		} catch (error) {
			console.error(error);
		}
	};
	const reDoRegistering = () => {
		setCodeSent(false);
		setReDoPossible(false);
	};
	const handleRegisterSubmit = async (e) => {
		console.log(codeSent);
		e.preventDefault();
		console.log("log run", e);

		try {
			const res = await apiUser.patch("/auth/registration/validation/", {
				email: email,
				username: userName,
				code: code,
				password: password,
				password_repeat: password,
				first_name: firstName,
				last_name: lastName,
			});
			console.log(res);

			navigate("/account");
		} catch (error) {
			console.error(error);
			setReDoPossible(true);
		}
	};

	const todoSendCode = (
		<p>
			Please enter your Email Address.
			<br />
			We will send you a 6 digit verification code.
		</p>
	);
	const todoRegister = (
		<p>Please enter the 6-digit verification code and your user details:</p>
	);

	return (
		<AuthForm>
			<h1>Register</h1>
			<div>{codeSent ? todoRegister : todoSendCode}</div>
			<form
				onSubmit={(e) =>
					codeSent ? handleRegisterSubmit(e) : handleCodeRequest(e)
				}
			>
				<input
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					placeholder="snoopy@peanuts.com"
				/>
				{codeSent && (
					<HiddenInputStyled>
						<input
							type="text"
							onChange={(e) => setCode(e.target.value)}
							placeholder="Verification Code (6 digits)"
						/>
						<input
							type="text"
							onChange={(e) => setUserName(e.target.value)}
							placeholder="Username"
						/>
						<input
							type="text"
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
						<input
							type="text"
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="First Name"
						/>
						<input
							type="text"
							onChange={(e) => setLastName(e.target.value)}
							placeholder="Last Name"
						/>
					</HiddenInputStyled>
				)}
				<button>{codeSent ? "Register now" : "Send code"}</button>
				{reDoPossible && (
					<span>
						Need a new code?
						<a onClick={() => reDoRegistering()}>
							{" "}
							<u>Request a new Code</u>
						</a>
					</span>
				)}
			</form>
		</AuthForm>
	);
}
