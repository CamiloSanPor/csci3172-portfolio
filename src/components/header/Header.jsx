import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { DARK_THEME, LIGHT_THEME } from "../../constants/constants";
import "./Header.css";
import Sun from "../../assets/header/sun.png";
import Moon from "../../assets/header/moon.png";
import { useTheme } from "../../context/ThemeProvider";

const Header = () => {
	const { theme, setTheme } = useTheme();

	const [icon, setIcon] = useState();

	const toggleTheme = () => {
		if (theme === DARK_THEME) {
			setTheme(LIGHT_THEME);
		} else {
			setTheme(DARK_THEME);
		}
	};

	useEffect(() => {
		if (theme === LIGHT_THEME) {
			setIcon(Sun);
		} else {
			setIcon(Moon);
		}
	}, [theme]);

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
