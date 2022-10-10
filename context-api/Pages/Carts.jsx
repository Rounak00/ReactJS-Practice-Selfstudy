import React, { useContext } from "react";
import Product from "../components/Product";
import { Cart } from "../context/CartContext";

const Carts = () => {
	const { cart } = useContext(Cart);
	return (
		<>
			<div className="products">
				{cart.length === 0 ? (
					<h1>Cart Is Empty</h1>
				) : (
					<>
						{cart?.map((item, index) => (
							<Product item={item} key={index} />
						))}
					</>
				)}
			</div>
		</>
	);
};

export default Carts;
