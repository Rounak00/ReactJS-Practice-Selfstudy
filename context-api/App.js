import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import Carts from "./Pages/Carts";

import "./app.css";
import Nav from "./components/Nav";

const App = () => {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/cart" element={<Carts />} />
			</Routes>
		</Router>
	);
};

export default App;
