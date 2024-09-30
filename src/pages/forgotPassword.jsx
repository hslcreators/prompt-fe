import "../sections/AuthPages/AuthPages.css";
import ForgotPasswordContent from "@/sections/AuthPages/ForgotPassword/ForgotPasswordContent";
import SideImage from "@sections/AuthPages/SideImage.jsx";
import { useEffect } from "react";
import { progressRef } from "@/components/Progress/Progress";

const ForgotPassword = () => {
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
			<ForgotPasswordContent />
		</div>
	);
};

export default ForgotPassword;
