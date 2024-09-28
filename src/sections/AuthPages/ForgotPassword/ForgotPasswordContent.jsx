import { useNavigate } from "react-router-dom";
import "./ForgotPassoword.css";
import '../Login/loginContent.css'
import { progressRef } from "@/components/Progress/Progress";
import { useTransition } from "react";

const ForgotPasswordContent = () => {
	const navigate = useNavigate();
	const [isPending, startTransition] = useTransition()

	if(isPending){
				document.querySelector('.main-progress').classList.remove('end')
				document.querySelector('.main-progress').classList.add('start')
	}else{
				document.querySelector('.main-progress').classList.remove('start')
				document.querySelector('.main-progress').classList.add('end')
			setTimeout(() => {
					document.querySelector('.main-progress').classList.remove('start')
				document.querySelector('.main-progress').classList.remove('end')
			}, 1200)
	}



	return (
		<div className="forgot-content page-content">
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
					onClick={() => { 
						startTransition(() => {
							navigate('/login')
						})
					 }}
					className="submit-btn"
				>
					NEXT
				</button>
			</form>
		</div>
	);
};

export default ForgotPasswordContent;
