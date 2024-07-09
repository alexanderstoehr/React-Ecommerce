import { Link, NavLink, useNavigate } from "react-router-dom";
import {
	CartIconStyled,
	HeaderLogo,
	HeaderStyled,
	NavigationStyled,
	CartBubble,
} from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/UserSlice";

export default function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.user.itemsInCart);
	const isLoggedIn = useSelector((state) => state.user.validAccessToken);
	// console.log(isLoggedIn);

	let cartTotalItems = 0;
	let cartItemQuantities = () =>
		cartItems.map((item) => (cartTotalItems += item.quantity));
	cartItemQuantities();
	// console.log("cart items: ", cartItems);

	const handleLogout = () => {
		localStorage.removeItem("accessToken");
		dispatch(logout());
		navigate("/login");
	};

	return (
		<HeaderStyled>
			<HeaderLogo>
				<Link to="/">Awesome Logo</Link>
			</HeaderLogo>
			<NavigationStyled>
				<NavLink to="/wishlist">Wishlist</NavLink>
				<NavLink to="/shop">Shop</NavLink>
				{!isLoggedIn ? (
					<>
						<NavLink to="/login">Login</NavLink>
						<NavLink to="/register">Register</NavLink>
					</>
				) : (
					<>
						<NavLink to="/account">Account</NavLink>
						<a onClick={() => handleLogout()}> Logout</a>
					</>
				)}
				<CartIconStyled>
					<CartBubble>{cartTotalItems}</CartBubble>
					<Link to={"/cart"}>
						<img src="/cart-icon.svg" alt="" />
					</Link>
				</CartIconStyled>
			</NavigationStyled>
		</HeaderStyled>
	);
}
