import tailwindcss from "@tailwindcss/vite";
import postcssLit from "rollup-plugin-postcss-lit";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [tailwindcss(), postcssLit()],
});
