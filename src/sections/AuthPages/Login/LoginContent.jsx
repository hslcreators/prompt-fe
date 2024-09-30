import { useNavigate } from "react-router-dom";
import "./loginContent.css";
import googleImg from "/assets/images/google.png";
import { useAuthStore,  } from "@/utils/AuthStore";
import useFetch from "@/utils/useFetch";
import { root } from "@/utils/AuthStore";
import { useState, useTransition } from "react";
import TopLoader from "../TopLoader";
import Error from "@/components/Error";
import axios from "axios"
import { progressRef } from "@/components/Progress/Progress";


const LoginContent = () => {
	const { token, updateToken, user, updateUser, updateIsVendor, isVendor } = useAuthStore((state) => ({
        token: state.token,
        updateToken: state.updateToken,
        user: state.user,
        updateUser: state.updateUser,
		isVendor: state.isVendor,
		updateIsVendor: state.updateIsVendor
    }))

	const navigate = useNavigate();
	const [isPending, startTransition] = useTransition()

	if(isPending){
		if(progressRef && progressRef.current){
			document.querySelector('.main-progress').classList.remove('end')
			document.querySelector('.main-progress').classList.add('start')
		}
	}

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const loginUser = (e) => {
		setLoading(true)
		e.preventDefault()
		const url = `${root}/auth/users/login/`
		const body = {
			email: e.target.email.value,
			password: e.target.password.value
		}
		const headers = {
			'Content-Type': 'application/json'
		}
		useFetch(url, body, headers, 'post').then(({ error: loginError, data: loginData })=>{
			if(loginError){
				if(loginError.message == 'Network Error'){
					setLoading(false)
					setError(loginError.message)
				}else{
					setLoading(false)
					setError(loginError.response.data.detail)
				}
			}else{
				setLoading(false)
 
				const userData = {
					id: loginData.user_id,
					first_name: loginData.first_name,
					last_name: loginData.last_name,
					email: loginData.email
				}
				// console.log(loginData)
				const promptAuth = {
					authToken: loginData.token,
					user: userData,
					isVendor: loginData.is_printer
				}
				localStorage.setItem('promptAuth', JSON.stringify(promptAuth))
				setLoading(false)
				updateToken(loginData.token)
				updateUser(userData)
				updateIsVendor(loginData.is_printer)
				startTransition(() => {
					navigate('/user-dashboard');
				})
			}
		})
	}


	
	
	return (
		<div className="login-content lc page-content" style={ { pointerEvents: loading? 'none': 'all', opacity: loading? '.7' : 'initial' } }>
			{
				loading? (
					<TopLoader />
				):(
					<></>
				)
			}
			<Error error={ error ? true: false } msg = { error } setError = { setError }/>
			
			<div className="heading">
				<h1>Login to your Account</h1>
				<p>Login with your details</p>
			</div>
			{/* <div className="google-btn">
				<img
					src={googleImg}
					alt=""
				/>
				<p>Continue with Google</p>
			</div> */}
			<form className="form-content" onSubmit={(e)=>{
				loginUser(e)
			}}>
				<div className="form-title">
					<div className="dotted-line"></div>
					<div className="p-text">
						<p>Login with Email</p>
					</div>
				</div>
				<div className="input-label">
					<span>Email</span>
					<input
						type="email"
						name="email"
						id=""
						placeholder="mail@abc.com"
					/>
				</div>
				<div className="input-label">
					<span>Password</span>
					<input
						type="password"
						name="password"
						id=""
						placeholder="..............."
					/>
				</div>
				<div className="form-bottom">
					{/* <div className="remember-check">
						<input
							type="checkbox"
							name=""
							id=""
						/>
						Remember me
					</div>
					<p
						onClick={() => navigate("/forgotpassword")}
						className="forgot"
					>
						Forgot Password?
					</p> */}
				</div>
				<button
					className="submit-btn"
				>
					LOGIN
				</button>
			</form>
			<div className="bottom-text">
				<p>Not Registered Yet?</p>
				<p style={{ color: "#524ECA", cursor: "pointer" }} onClick={() => { 
					startTransition(() => {
						navigate("/signup")
					})
				}}>Create an Account</p>
			</div>
		</div>
	);
};

export default LoginContent;
