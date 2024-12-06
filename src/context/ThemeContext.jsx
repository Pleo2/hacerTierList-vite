import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
	const [nameTheme, setNameTheme] = useState(
		localStorage.getItem("theme") || "dark",
	);
	const THEMES = ["dark", "light", "desertSand", "cyberpunk", "pastelDreams"];

	useEffect(() => {
		if (localStorage.getItem("theme")) {
			localStorage.setItem("theme", nameTheme);
			setNameTheme(localStorage.getItem("theme"));
		} else {
			localStorage.setItem("theme", nameTheme);
		}

		document.documentElement.setAttribute("data-theme", nameTheme);
	}, [nameTheme]);
	const value = {
		THEMES,
		nameTheme,
		setNameTheme,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
