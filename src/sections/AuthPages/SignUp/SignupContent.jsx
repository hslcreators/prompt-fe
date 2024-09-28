import "../Login/loginContent.css";
import '../AuthPages.css'
import googleImg from "/assets/images/google.png";
import "./SignUpContent.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useRef, useState, useTransition } from "react";
import { appendData, setStorage } from "@/utils/formUtility";
import { useAuthErrorsStore } from "@/utils/AuthStore";
import { toast } from "react-toastify";
import { progressRef } from "@/components/Progress/Progress";

import Error from "@/components/Error";

//signup page

const SignUpContent = () => {

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
	
	const [error, setError] = useState(false)
	const formRef = useRef(false)

	const { error: authError, setError: setAuthError } = useAuthErrorsStore((state) => ({
		error: state.error,
		setError: state.setError
	}))



	const submitForm = (e) => {
		e.preventDefault()
		if(e.target.email.value != '' && e.target.password.value != '' && e.target.validate_password.value != ''){
			setError(false)
			if(e.target.password.value == e.target.validate_password.value){
				setError(false)
				const formInputs =  [
					{
						key: 'emall',
						value: e.target.email.value
					},
					{
						key: 'password',
						value: e.target.password.value
					}
				]
				formInputs.forEach(input => {
					appendData(input.key, input.value)
				})
				startTransition(() => {
						navigate('/personaldetails')
				})
			
			}else{
				setError('Passwords do not match!')
			}
		}else{
			setError('Required field missing!')
		}
	}

	useEffect(()=>{
		const SSData = sessionStorage.getItem('promptFD')
		console.log(authError)
		if(SSData){
			if(formRef){
				console.log(formRef.current.elements.email)
				formRef.current.elements.email.value = JSON.parse(SSData).email? JSON.parse(SSData).email : ''
				formRef.current.elements.password.value = JSON.parse(SSData).password? JSON.parse(SSData).password : '' 
				formRef.current.elements.validate_password.value = JSON.parse(SSData).password? JSON.parse(SSData).password : '' 
				formRef.current.elements.isVendor.checked = JSON.parse(SSData).isVendor
			}
		}else{
			setStorage()
		}
		// if(authError){
		// 	if(authError.error == 'email'){
				
		// 	}
		// }
	},[])


	return (
		<div className="login-content signup-content page-content">
			<Error error={ error ? true: false } msg = { error } setError = { setError }/>
			{
				authError? (
					<Error error={ authError.error.includes('email') ? true: false} msg = { authError.msg.email } setError = { setAuthError }/>
				): (
					<></>
				)
			}
			<div className="heading">
				<h1>Create Account</h1>
				<p>Start your journey with us today!</p>
			</div>
			{/* <div className="google-btn">
				<img
					src={googleImg}
					alt=""
				/>
				<p>Continue with Google</p>
			</div> */}
			<form className="form-content" ref={ formRef } onSubmit={(e) => {
				submitForm(e)
			} }>
				<div className="form-title">
					<div className="dotted-line"></div>
					<div className="p-text">
						<p>Sign up with Email</p>
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
				<div className="input-label">
					<span>Re-enter password</span>
					<input
						type="password"
						name="validate_password"
						id=""
						placeholder="..............."
					/>
				</div>
				<div className="form-bottom">
                    <div className="remember-check">
                        <input type="checkbox" name="isVendor" id="" onChange={(e) => {
							appendData('isVendor', e.target.checked)
						}} />
                        Sign up as vendor
                    </div>
                </div>
				<button
					// onClick={() => navigate("/login")}
					className="submit-btn"
				>
					NEXT
				</button>
			</form>
			<div className="bottom-text">
				<p>Have an account?</p>
				<p style={{ color: "#524ECA", cursor: "pointer" }} onClick={() => {
					startTransition(() =>{
						navigate("/login")
					})
				}}>Login</p>
			</div>
		</div>
	);
};

export default SignUpContent;
