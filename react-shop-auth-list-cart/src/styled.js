import styled, { withTheme } from "styled-components";

//colors
// white EBF5FF
// black 021B33
// brand 0A89FF
// brandlight 70BAFF
// branddark 042D66
// greylight CACBCC
// greymid B1BFCC
// greydark 596066
// red #BD1B0F
// green #619475
// pink #D36582

export const MainContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	input:focus {
		border: 2px solid #619475;
	}
`;

export const HeaderStyled = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #042d66;
	width: 100%;
	padding: 2rem;
	box-sizing: border-box;
	margin-bottom: 4rem;
	z-index: 99;

	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;

export const MainContent = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10rem;
	padding: 1rem;
`;

export const FooterStyled = styled.div`
	display: flex;
	justify-content: center;
	background-color: #042d66;
	width: 100%;
	padding: 2rem;
	margin-top: 8rem;
	box-sizing: border-box;
`;

export const NavigationStyled = styled.nav`
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-left: 4rem;
	margin-right: 4rem;

	a {
		cursor: pointer;
	}

	a:hover {
		border-style: solid;
		border-color: #70baff;
		border-width: 0 0 2px 0;
	}

	.active {
		border-style: solid;
		border-color: #70baff;
		border-width: 0 0 2px 0;
	}
`;

export const CartIconStyled = styled.div`
	background-color: #ebf5ff;
	position: relative;
	border-radius: 50%;
	height: 40px;
	img {
		height: 30px;
		margin-bottom: -15px;
	}
	&:hover {
		transform: scale(1.1);
		transition: all 0.2s ease-in-out;
	}
	a:hover {
		border: none;
	}
`;

export const HeaderLogo = styled.div`
	margin-left: 4rem;
	@media (max-width: 1200px) {
		margin: 0 0 1rem 0;
	}
`;

export const ProductList = styled.div`
	width: 80%;
`;

export const ProductGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
	padding: 2rem;
	@media (max-width: 1400px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const ProductCard = styled.div`
	border: 1px solid #ebf5ff50;
	background-color: #ebf5ff10;
	padding: 1rem;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	img {
		width: 100%;
		object-fit: cover;
	}
`;

export const AddWishList = styled.button`
	color: black;
	font-size: 30px;
	border-radius: 50%;
	border: none;
	position: absolute;
	margin: 0.5rem 0.8rem;
	background-color: transparent;

	&:hover {
		color: #d36582;
		cursor: pointer;
	}
`;
export const AddCart = styled.button`
	width: 100%;
	padding: 12px;
	margin-top: 1rem;
	background-color: #70baff;
	text-transform: uppercase;
	font-weight: 600;
	border: none;
	border-radius: 6px;

	&:hover {
		background-color: #0a89ff;
		cursor: pointer;
	}
`;

export const AuthForm = styled.div`
	border: 1px solid #ebf5ff50;
	padding: 1rem 2rem 4rem 2rem;
	width: 350px;
	border-radius: 6px;
	background-color: #ebf5ff10;

	form {
		display: flex;
		flex-direction: column;

		input {
			padding: 0.5rem;
			font-size: 18px;
			border-radius: 6px;
			border: 1px solid #cacbcc;
			margin: 1px;

			&:focus {
				outline: none;
			}
		}

		button {
			background-color: #70baff;
			text-transform: uppercase;
			font-weight: 600;
			border: none;
			border-radius: 6px;
			padding: 12px;
			margin-top: 1rem;

			&:hover {
				background-color: #0a89ff;
				cursor: pointer;
			}
		}
	}
`;

export const HiddenInputStyled = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LoadingScreenStyled = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	animation: shake1 0.5s;
	animation-iteration-count: infinite;

	@keyframes shake1 {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		50% {
			transform: translate(2px, 2px) rotate(2deg);
		}
		100% {
			transform: translate(1px, 1px) rotate(-1deg);
		}
	}
`;

export const ProductImageStyled = styled.div`
	background-color: white;
	padding: 4rem;
	margin-bottom: 1rem;

	img {
		height: 200px;
		object-fit: contain;
	}
`;

export const CartBubble = styled.div`
	border-radius: 50%;
	position: absolute;
	background-color: #d36582;
	width: 20px;
	height: 20px;
	padding: 0;
	font-size: 13px;
	text-align: center;
	top: -8px;
	right: -8px;
`;

export const CartItemsContainer = styled.div`
	border: 1px solid #ebf5ff50;
	padding: 1rem 2rem 4rem 2rem;
	border-radius: 6px;
	background-color: #ebf5ff10;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const CartItemStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	justify-content: space-between;
	border: 1px solid #ebf5ff50;

	.product-info {
		display: flex;
		align-items: center;
		gap: 1rem;
		width: 100%;

		@media (max-width: 1000px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 1rem 0 1rem 1rem;
	}

		img {
			height: 50px;
			width: 50px;
			object-fit: contain;
			background-color: white;
		}

		.item-price {
			font-weight: 700;
			padding-left: 2rem;
			margin-left: auto;

			@media (max-width: 1000px) {
				padding:0;
				margin:0;
			}
		}
	}
	.product-actions {
		display: flex;

		@media (max-width: 1000px) {
				padding:0 1rem 0 0 ;
				
			}

		input {
			width: 50px;
			height: 100%;
			padding:0.5rem;
			font-size: 16px;
			font-weight: 600;
			border-radius:6px;
			outline:none;
		}
		button {
			margin:0 0.5rem 0 0.5rem;
			background-color: transparent;
			color: #EBF5FF;
			text-transform: uppercase;
			font-weight: 600;
			border: none;

			&:hover {
				color: #0a89ff;
				cursor: pointer;
			}
	}
`;

export const CartSummary = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	.tax {
		font-size: 14px;
		text-align: right;
		margin-right: 0.2rem;
	}

	button {
		background-color: #70baff;
		text-transform: uppercase;
		float: right;
		font-weight: 600;
		border: none;
		border-radius: 6px;
		padding: 12px;
		margin: 1rem 0.2rem 0 0;

		animation: shake2 2s;
		animation-iteration-count: infinite;
		@keyframes shake2 {
			0% {
				transform: translate(0px, 0px) rotate(-2deg);
			}
			5% {
				transform: translate(0px, 0px) rotate(-4deg);
			}
			10% {
				transform: translate(0px, 0px) rotate(+2deg);
			}
			15% {
				transform: translate(0px, 0px) rotate(0deg);
			}
		}

		&:hover {
			background-color: #0a89ff;
			cursor: pointer;
		}
	}
`;

export const ErrorStyled = styled.div`
	border: 1px solid #bd1b0f;
	background-color: #bd1b0f75;
	border-radius: 6px;
	padding: 1rem;
	margin-top: 2rem;
`;

export const SuccessStyled = styled.div`
	border: 1px solid #619475;
	background-color: #61947575;
	border-radius: 6px;
	padding: 1rem;
	margin-top: 2rem;
`;

export const LostPasswordStyled = styled.div`
	margin-top: 1rem;
`;

export const VoucherStyled = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	input {
		font-size: 16px;
		outline: none;
		padding: 0.5rem;
		border-radius: 6px;
	}

	button {
		margin: 0 0 0 0.5rem;
		background-color: transparent;
		color: #ebf5ff;
		text-transform: uppercase;
		font-weight: 600;
		border: none;
		cursor: pointer;
		animation: none;
	}
`;

export const VoucherMessageStyled = styled.div``;
