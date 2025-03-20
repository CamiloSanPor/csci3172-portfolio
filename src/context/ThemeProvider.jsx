import { createContext, useState, useContext, useEffect } from "react";
import { DARK_THEME, LIGHT_THEME } from "../constants/constants";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || DARK_THEME
	);

	useEffect(() => {
		if (theme === LIGHT_THEME) {
			document.body.classList.remove(DARK_THEME);
			document.body.classList.add(LIGHT_THEME);
		} else {
			document.body.classList.remove(LIGHT_THEME);
			document.body.classList.add(DARK_THEME);
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export function useTheme() {
	return useContext(ThemeContext);
}
