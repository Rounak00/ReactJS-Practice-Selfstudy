import React, { useState } from "react";
import { useEffect } from "react";
import Product from "../components/Product";

const Home = () => {
	const [product, setProduct] = useState([]);
	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((Res) => Res.json())
			.then((data) => setProduct(data));
	}, []);

	return (
		<div>
			<h2>Products</h2>
			<div className="products">
				{product?.map((item, index) => (
 					<Product item={item} key={index} />
				))}
			</div>
		</div>
	);
};

export default Home;
