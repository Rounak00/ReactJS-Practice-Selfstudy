import { Link } from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi"
import { useState } from "react";

const linkStyle = {
	textDecoration: "none",
	color: "#fff",
	fontSize: "1.2rem",
	marginRight: "1rem",
};

const Nav = () => {

    const [color, setColor] = useState("white");

	return (
		<nav
			style={{
				background: "blue",
				padding: "1rem 4rem",
			}}
		>
			<ul
				style={{
					listStyle: "none",
				}}
			>
				<li>
					<Link to="/" style={linkStyle}>
						Home
					</Link>
					<Link to="/cart" style={linkStyle}>
                        <FiShoppingCart style={{
                            color: `${color}`,
                            marginRight: "0.5rem"
                        }} />
						Cart
					</Link>

                    <button onClick={() => setColor("red")}>Click</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
