import React from "react";
import { useState } from "react";

const CartPage = () => {
	const [num, setNum] = useState(0)

	const handleMinus = () => {
		setNum(previus => previus-1)
	}
	const handlePlus = () => {
		setNum(previus => previus+1)
	}
	
	return (
		<div
			style={{
				height: "80vh",
				width: "100%",
			}}
		>
			<h1>CartPage</h1>
			{/* disabled={num<=0} */}
			<button  onClick={handleMinus}>Minus</button>
			{num}
			<button onClick={handlePlus}>Plus</button>
		</div>
	);
};

export default CartPage;
