import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
    const Themes = [
					"dark",
					"cyberpunk",
					"ocean",
					"pastelDreams",
					"dark-pastelDreams",
					"cyberpunkNeon",
					"white-cyberpunkNeon",
					"softPink",
					"desertSand",
				];

	const value = {

	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};