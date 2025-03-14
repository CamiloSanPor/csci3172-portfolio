import React from "react";
import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
	return (
		<nav>
			<div>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/projects">Projects</NavLink>
			</div>
		</nav>
	);
};

export default Header;
