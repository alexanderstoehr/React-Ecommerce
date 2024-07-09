import { useDispatch, useSelector } from "react-redux";
import { add_to_cart } from "../redux/UserSlice";
import {
	AddCart,
	AddWishList,
	ProductCard,
	ProductGrid,
	ProductImageStyled,
	ProductList,
} from "../styled";

export default function ProductListing() {
	const productList = useSelector((state) => state.product.products);
	const dispatch = useDispatch();
	// console.log("list: ", productList);

	const cartItems = useSelector((state) => state.user.itemsInCart);
	// console.log(cartItems);

	const handleCartClick = (e) => {
		// console.log(e.target);
		let item = {
			id: e.target.id,
			img: e.target.dataset.prodImg,
			title: e.target.dataset.prodTitle,
			quantity: 1,
			price: e.target.dataset.productPrice,
		};
		console.log(item);
		dispatch(add_to_cart(item));
	};

	return (
		<ProductList>
			<ProductGrid>
				{productList.map((product) => {
					return (
						<ProductCard data-product-id={product.id} key={product.id}>
							<div>
								<AddWishList>♥︎</AddWishList>
								<ProductImageStyled>
									<img src={product.image} />
								</ProductImageStyled>
								{product.title}
							</div>
							<AddCart
								id={product.id}
								data-product-price={product.price * 100}
								data-prod-title={product.title}
								data-prod-img={product.image}
								onClick={(e) => handleCartClick(e)}
							>
								Add to Cart
							</AddCart>
						</ProductCard>
					);
				})}
			</ProductGrid>
		</ProductList>
	);
}
