import SignUpContent from "@sections/AuthPages/SignUp/SignupContent.jsx";
import "../sections/AuthPages/AuthPages.css";
import SideImage from "@sections/AuthPages/SideImage.jsx";
import { useEffect } from "react";
import { progressRef } from "@/components/Progress/Progress";

const SignUp = () => {
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
			<SignUpContent />
		</div>
	);
};

export default SignUp;
