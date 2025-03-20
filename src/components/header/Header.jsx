import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import "./Header.css";
import { DARK_THEME, LIGHT_THEME } from "../../constants/constants";
import Sun from "../../assets/header/sun.png";
import Moon from "../../assets/header/moon.png";

const Header = () => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || DARK_THEME
	);

	const [icon, setIcon] = useState();

	useEffect(() => {
		if (theme === LIGHT_THEME) {
			document.body.classList.remove(DARK_THEME);
			document.body.classList.add(LIGHT_THEME);
			setIcon(Sun);
		} else {
			document.body.classList.remove(LIGHT_THEME);
			document.body.classList.add(DARK_THEME);
			setIcon(Moon);
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		if (theme === DARK_THEME) {
			setTheme(LIGHT_THEME);
		} else {
			setTheme(DARK_THEME);
		}
	};

	return (
		<nav>
			<div>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/projects">Projects</NavLink>
				<button onClick={toggleTheme} className="theme-toggle">
					<img src={icon} alt="" />
				</button>
			</div>
		</nav>
	);
};

export default Header;
