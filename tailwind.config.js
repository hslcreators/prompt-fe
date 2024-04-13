/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				montagu: ["Montagu Slab", "serif"],
				manrope: ["Manrope", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
			},
			screens: {
				vsm: "1px",
				sm: "375px",
				nsm: "600px",
				md: "424px",
				lg: "565px",
				alg: "700px",
				nxl: "800px",
				xl: "1100px",
			},
			fontSize: {
				settingsHead: "clamp(20px, 2.4vw, 30px)",
			},
			textColor: {
				customGray: "#3b3b3b",
			},
		},
		plugins: [],
	},
};
