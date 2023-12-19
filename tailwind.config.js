/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			vsm: "1px",
			sm: "375px",
			nsm: "600px",
			md: "376px",
			lg: "565px",
			nxl: "800px",
			xl: "1110px",
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
