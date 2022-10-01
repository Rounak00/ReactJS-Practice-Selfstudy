import { Link } from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi"

const linkStyle = {
	textDecoration: "none",
	color: "#fff",
	fontSize: "1.2rem",
	marginRight: "1rem",
};

const Nav = () => {


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
                            color: "#fff",
                            marginRight: "0.5rem"
                        }} />
						Cart
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
