import React from "react";
import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
	return (
		<nav>
			<section>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/projects">Projects</NavLink>
			</section>
		</nav>
	);
};

export default Header;
