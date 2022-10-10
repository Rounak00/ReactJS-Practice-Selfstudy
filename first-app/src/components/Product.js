import { useContext } from "react";
import { Cart } from "../context/CartContext";

const Product = ({ item }) => {
	const { cart, setCart } = useContext(Cart);

	const addToCart = (e, item) => {
		e.preventDefault();
		setCart([...cart, item]);
	};

    const removeFromCart = (e, item) => {
		e.preventDefault();
		setCart(cart.filter(product => product.id !== item.id));
	};

	return (
		<div>
			<img
				src={item?.images[1]}
				alt="product_image"
				width="120px"
				height="120px"
			/>
			<p>{item?.title}</p>
			<p>${item?.price}</p>
			{cart.includes(item) ? (
				<button onClick={(e) => removeFromCart(e, item)} className="btn_sec">Remove from Cart</button>
			) : (
				<button onClick={(e) => addToCart(e, item)} className="btn">
					Add to Cart
				</button>
			)}
		</div>
	);
};

export default Product;
