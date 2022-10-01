import React from "react";
import { useEffect, useState } from "react";

const HomePage = () => {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((res) => res.json())
			.then((data) => setApiData(data));
	}, []);
	console.log(apiData);

	return (
		<div
			style={{
				height: "80vh",
				width: "100%",
			}}
		>
			<h2>Products</h2>
			<div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>
				{apiData.map((item, indx) => {
					return (
						<div key={indx}>
							<img src={item.images[0]} alt="product" width="120px" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomePage;
