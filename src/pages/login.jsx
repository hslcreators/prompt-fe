import "../sections/AuthPages/AuthPages.css";
import SideImage from "@sections/AuthPages/SideImage.jsx";
import LoginContent from "@sections/AuthPages/Login/LoginContent.jsx";
import { useEffect } from "react";
import { progressRef } from "@/components/Progress/Progress";

const LoginPage = () => {
	useEffect(() => {
		document.querySelector('.main-progress').classList.remove('start')
		document.querySelector('.main-progress').classList.add('end')
		setTimeout(() => {
			document.querySelector('.main-progress').classList.remove('start')
			document.querySelector('.main-progress').classList.remove('end')
		}, 1200)
	}, [])
	return (
		<div className="auth-container">
			<SideImage />
			<LoginContent />
		</div>
	);
};

export default LoginPage;
