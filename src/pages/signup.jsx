import SignUpContent from "@sections/AuthPages/SignUp/SignupContent.jsx";
import "../sections/AuthPages/AuthPages.css";
import SideImage from "@sections/AuthPages/SideImage.jsx";

const SignUp = () => {
	return (
		<div className="auth-container">
			<SideImage />
			<SignUpContent />
		</div>
	);
};

export default SignUp;
