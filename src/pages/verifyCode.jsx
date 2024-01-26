import "../sections/AuthPages/AuthPages.css";
import SideImage from "@sections/AuthPages/SideImage.jsx";
import VerifyContent from "@sections/AuthPages/VerifyCode/VerifyContent.jsx";

const VerifyCode = () => {
	return (
		<div className="auth-container">
			<SideImage />
			<VerifyContent />
		</div>
	);
};

export default VerifyCode;
