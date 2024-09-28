import "../sections/AuthPages/AuthPages.css";
import SideImage from "@sections/AuthPages/SideImage.jsx";
import VerifyContent from "@sections/AuthPages/VerifyCode/VerifyContent.jsx";
import { progressRef } from "@/components/Progress/Progress";
import { useEffect } from "react";

const VerifyCode = () => {
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
			<VerifyContent />
		</div>
	);
};

export default VerifyCode;
