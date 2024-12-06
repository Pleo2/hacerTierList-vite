import MillionLint from '@million/lint';
import { defineConfig } from 'vite'
import path from "node:path";
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		MillionLint.vite({
			enabled: true,
		}),
		react(),
	],
	build : {
		outDir: 'dist'
	},
	publicDir: 'public',
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
