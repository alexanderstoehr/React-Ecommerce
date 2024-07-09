import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import NoPageFound from "../components/NoPageFound";
import ProtectedRoute from "../layouts/ProtectedRoute";
import ProductListing from "./ProductListing";
import Login from "./Login";
import Register from "./Register";
import Cart from "./Cart";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="*" element={<NoPageFound />} />
					<Route path="/" element={<h1>Welcome Home</h1>} />
					<Route path="/shop" element={<ProductListing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/wishlist" element={<h1>Wishlist</h1>} />
					<Route element={<ProtectedRoute />}>
						<Route path="/account" element={<h1>Account</h1>} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
