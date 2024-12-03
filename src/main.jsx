import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ImagesContextProvider } from "./context/ImagesContext.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeContextProvider>
			<ImagesContextProvider>
				<App />
			</ImagesContextProvider>
		</ThemeContextProvider>
	</StrictMode>,
);
