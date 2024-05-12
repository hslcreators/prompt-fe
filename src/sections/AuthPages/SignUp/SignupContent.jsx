import "../Login/loginContent.css";
import googleImg from "/assets/images/google.png";
import "./SignUpContent.css";
import { useNavigate } from "react-router-dom";

const SignUpContent = () => {
	const navigate = useNavigate();
	return (
		<div className="login-content signup-content">
			<div className="heading">
				<h1>Create Account</h1>
				<p>Start your journey with us today!</p>
			</div>
			<div className="google-btn">
				<img
					src={googleImg}
					alt=""
				/>
				<p>Continue with Google</p>
			</div>
			<form className="form-content">
				<div className="form-title">
					<div className="dotted-line"></div>
					<div className="p-text">
						<p>or Sign up with Email</p>
					</div>
				</div>
				<div className="input-label">
					<span>Email</span>
					<input
						type="email"
						name=""
						id=""
						placeholder="mail@abc.com"
					/>
				</div>
				<div className="input-label">
					<span>Password</span>
					<input
						type="password"
						name=""
						id=""
						placeholder="..............."
					/>
				</div>
				<div className="input-label">
					<span>Re-enter password</span>
					<input
						type="password"
						name=""
						id=""
						placeholder="..............."
					/>
				</div>

				<button
					onClick={() => navigate("/login")}
					className="submit-btn"
				>
					SIGN UP
				</button>
			</form>
			{/* <div className="bottom-text">
				<p>Not Registered Yet?</p>
				<p style={{ color: "#524ECA", cursor: "pointer" }}>Create an Account</p>
			</div> */}
		</div>
	);
};

export default SignUpContent;
