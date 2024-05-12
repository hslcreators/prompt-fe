import { useNavigate } from "react-router-dom";
import "./ForgotPassoword.css";

const ForgotPasswordContent = () => {
	const navigate = useNavigate();
	return (
		<div className="forgot-content">
			<div className="heading">
				<h1>Forgot Password?</h1>
				<p>Enter your account details</p>
			</div>
			<form className="form-content">
				<div className="input-label">
					<span>Email</span>
					<input
						type="email"
						name=""
						id=""
						placeholder="mail@abc.com"
					/>
				</div>
				<button
					onClick={() => navigate("/login")}
					className="submit-btn"
				>
					NEXT
				</button>
			</form>
		</div>
	);
};

export default ForgotPasswordContent;
