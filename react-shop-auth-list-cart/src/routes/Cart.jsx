import { useDispatch, useSelector } from "react-redux";
import {
	CartItemStyled,
	CartItemsContainer,
	CartSummary,
	ErrorStyled,
	SuccessStyled,
	VoucherMessageStyled,
	VoucherStyled,
} from "../styled";
import { Link } from "react-router-dom";
import { change_quantity, remove_from_cart } from "../redux/UserSlice";
import { useEffect, useRef, useState } from "react";

export default function Cart() {
	const dispatch = useDispatch();
	const inputRef = useRef(null);
	const [hasVoucher, setHasVoucher] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const [voucherValid, setVoucherValid] = useState(undefined);

	const cartItems = useSelector((state) => state.user.itemsInCart);

	useEffect(() => {
		let sum = 0;
		cartItems.forEach((item) => {
			sum += item.price * item.quantity;
		});
		setTotalPrice(sum / 100);
	}, [cartItems]);

	const handleQuantityChange = (e, itemID) => {
		// console.log(e.target.value);
		const newQuantity = parseInt(e.target.value);
		// console.log("ca q: ", newQuantity);
		// console.log("ca id: ", itemID);
		dispatch(change_quantity({ itemID, newQuantity }));
	};

	const handleRemoveClick = (e) => {
		// console.log("remove me", e.target.id);
		dispatch(remove_from_cart(e.target.id));
	};

	let totalSum = 0;

	const redeemVoucher = () => {
		setHasVoucher(!hasVoucher);
		if (inputRef.current.value === "PAYFIVE") {
			setTotalPrice(5);
			setVoucherValid(true);
		} else {
			setTotalPrice((prevTotalPrice) => prevTotalPrice * 2);
			setVoucherValid(false);
		}
	};

	return (
		<CartItemsContainer>
			<h1>Cart</h1>

			{cartItems.map((item) => {
				return (
					<CartItemStyled key={item.id}>
						<div className="product-info">
							<img src={item.img} />
							<div>{item.title}</div>
							<div className="item-price">{item.price / 100} CHF</div>
						</div>
						<div className="product-actions">
							<input
								type="number"
								id={item.id}
								onChange={(e) => handleQuantityChange(e, item.id)}
								value={item.quantity}
							/>
							<button
								className="remove"
								id={item.id}
								onClick={(e) => handleRemoveClick(e)}
							>
								{" "}
								Remove
							</button>
						</div>
					</CartItemStyled>
				);
			})}

			<CartSummary>
				{totalPrice > 0 && (
					<>
						<div>
							{!hasVoucher && (
								<>
									<VoucherStyled>
										<Link onClick={() => setHasVoucher(!hasVoucher)}>
											Have a voucher?
										</Link>
									</VoucherStyled>
									<VoucherMessageStyled>
										{voucherValid && (
											<SuccessStyled className="voucher-noti">
												Congratulations! That voucher was valid.
											</SuccessStyled>
										)}
										{voucherValid !== undefined && !voucherValid && (
											<ErrorStyled className="voucher-noti">
												Bad Luck, now you pay twice as much. <br /> Try
												"PAYFIVE".
											</ErrorStyled>
										)}
									</VoucherMessageStyled>
								</>
							)}
							{hasVoucher && (
								<VoucherStyled>
									<input
										type="text"
										ref={inputRef}
										placeholder="VOUCHER CODE"
									/>
									<button onClick={() => redeemVoucher()}>REDEEM</button>
								</VoucherStyled>
							)}
						</div>
						<div>
							<div>
								<div>
									<b>Order Total: {totalPrice} CHF</b>
								</div>
								<div className="tax">
									including 20% Tax: {(totalPrice * 0.2).toFixed(2)} CHF
								</div>
								<Link to={`https://paypal.me/ahlewurscht/${totalSum / 100}`}>
									{cartItems.length >= 1 && (
										<button className="order">Pay now</button>
									)}
								</Link>
							</div>
						</div>
					</>
				)}
			</CartSummary>

			{cartItems.length < 1 && (
				<div>
					Nothing here yet.. how about some new <Link to="/shop">Stuff?</Link>
				</div>
			)}
		</CartItemsContainer>
	);
}
