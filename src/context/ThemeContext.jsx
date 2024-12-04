import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
		const [nameTheme, setNameTheme] = useState("dark");
	const THEMES = ["dark", "cyberpunk", "pastelDreams", "light"];




	const value = {
		THEMES, 
		nameTheme, 
		setNameTheme,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
