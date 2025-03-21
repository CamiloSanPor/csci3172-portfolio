import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useTheme } from "../../context/ThemeProvider";
import { DARK_THEME, LIGHT_THEME } from "../../constants/constants";
import Sun from "../../assets/header/sun.png";
import Moon from "../../assets/header/moon.png";
import "./hamburger.css";

const Hamburger = () => {
	const [isOpen, setIsOpen] = useState(false);

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
		<div className="hamburger-menu">
			{isOpen && (
				<div className="hamburger-nav">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<button onClick={toggleTheme} className="theme-toggle">
						<img src={icon} alt="" />
					</button>
				</div>
			)}
			<button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? "✖" : "☰"}
			</button>
		</div>
	);
};

export default Hamburger;
