import "./VerifyContent.css";
import { OTPLogic } from "./OTPLogic.jsx";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const VerifyContent = () => {
	const inputRefs = useRef(false);

	useEffect(() => {
		if (inputRefs) {
			OTPLogic(inputRefs);
		}
	}, []);

	const navigate = useNavigate();

	return (
		<div className="verify-content page-content">
			<div className="heading">
				<h1>Verify Code</h1>
				<p>Enter 4 digits code that you received on username@gmail.com.</p>
			</div>
			<form className="form-content">
				<div
					className="pin-input"
					ref={inputRefs}
				>
					<input
						type="number"
						name=""
						id=""
						className="pin1"
					/>
					<input
						type="number"
						name=""
						id=""
						className="pin2"
					/>
					<input
						type="number"
						name=""
						id=""
						className="pin3"
					/>
					<input
						type="number"
						name=""
						id=""
						className="pin4"
					/>
					<input
						type="number"
						name=""
						id=""
						className="pin5"
					/>
					<input
						type="number"
						name=""
						id=""
						className="pin6"
					/>
				</div>
				<div className="form-bottom">
					<p className="forgot">Resend Code</p>
				</div>
				<button
					onClick={() => navigate("/")}
					className="submit-btn"
				>
					Verify
				</button>
			</form>
		</div>
	);
};

export default VerifyContent;
