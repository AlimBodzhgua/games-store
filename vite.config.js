import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [
		react(),
		svgr({
			include: '**/*.svg',
			svgrOptions: {
				exportType: 'default',
			},
		}),
	],
	build: {
		outDir: 'build', // CRA's default build output
	},
	resolve: {
		alias: {
			'@': '/src',
		},
	},
});
