/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			vsm: "1px",
			sm: "375px",
			nsm: "600px",
			md: "424px",
			lg: "565px",
			alg: "700px",
			nxl: "894px",
			xl: "1100px",
		},

		extend: {
			fontFamily: {
				manrope: ["Manrope", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};
