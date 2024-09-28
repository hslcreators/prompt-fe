import "./VerifyContent.css";
import { OTPLogic, clearOTP } from "./OTPLogic.jsx";
import { useEffect, useRef, useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import TopLoader from "../TopLoader";
import axios from "axios";
import { root } from "@/utils/AuthStore";
import useFetch from "@/utils/useFetch";
import { useAuthStore } from "@/utils/AuthStore";
import Error from "@/components/Error";
import { emailApiKey } from "@/utils/AuthStore";
import emailTemplate from "./emailTemplate";
import { progressRef } from "@/components/Progress/Progress";

const VerifyContent = () => {
	const inputRefs = useRef(false);

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [otp, setOTP] = useState(false)
	const [signupToken, setSignUpToken] = useState(false)

	const { token, updateToken, user, updateUser, updateIsVendor } = useAuthStore((state) => ({
        token: state.token,
        updateToken: state.updateToken,
        user: state.user,
        updateUser: state.updateUser,
		updateIsVendor: state.updateIsVendor
    }))

	

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

	const sendEmail = async (otp, email, name) => {
			try{
				const url = "https://api.brevo.com/v3/smtp/email";
			// Define the API key and email data
			const emailData = {
			sender: {
				name: "Prompt",
				email: "omagadvd@gmail.com",
			},
			to: [
				{
				email: email,
				name: name,
				},
			],
			subject: "Here is your 6 digit verification code",
			htmlContent: emailTemplate(otp, new Date().getFullYear()),
			textContent: `Your 6 digit verification code to activate your prompt account is ${otp}`
			};
			const response = await fetch(url, {
				method: "POST", 
				headers: {
				  accept: "application/json",
				  "api-key": emailApiKey,
				  "content-type": "application/json",
				},
				body: JSON.stringify(emailData),
			  })
			const data = await response.json()
			return data
		}catch(err){
			return err
		}
	}

	useEffect(() => {
		console.log(sessionStorage.getItem('promptFD'))
		if(sessionStorage.getItem('promptFD')){
			if(JSON.parse(sessionStorage.getItem('promptFD')).signupToken){
				const url = `${root}/auth/generate-otp`
				setSignUpToken(prev => JSON.parse(sessionStorage.getItem('promptFD')).signupToken)
				console.log(JSON.parse(sessionStorage.getItem('promptFD')).signupToken)
				const headers = {
					'Authorization': `Token ${JSON.parse(sessionStorage.getItem('promptFD')).signupToken}`
				}	
				inputRefs.current.querySelectorAll('input').forEach(element => {
					element.value = ''
				});
				inputRefs.current.querySelectorAll('input')[0].focus()
				useFetch(url, false, headers, 'get').then(({error, data})=>{
					if(error){
						console.log(error)
						setLoading(false)
						setError('An Error Occured')
					}else{
						sendEmail(data.otp, JSON.parse(sessionStorage.getItem('promptFD')).email, `${ JSON.parse(sessionStorage.getItem('promptFD')).first_name } ${JSON.parse(sessionStorage.getItem('promptFD')).last_name}`).then((apiData)=>{
							setOTP(data.otp)
							setLoading(false)
							setError(false)
						}).catch((err) => {
							setError('An Error Occured')
						})
						if (inputRefs) {
							OTPLogic(inputRefs);
						}
					}
				})
			}else{
				startTransition(() => {
					navigate('/signup')
				})	
			}
		}else{
			startTransition(() =>{
				navigate('/signup')
			})
		}
	}, []);

	console.log(otp)

	const checkOTP = (e) => {
		e.preventDefault()
		const userInput = Number(e.target.pin1.value + e.target.pin2.value + e.target.pin3.value + e.target.pin4.value + e.target.pin5.value + e.target.pin6.value)
		console.log(userInput, otp)
		if(userInput == otp){
			console.log(true)
			const url = `${root}/auth/verify-otp/`
			const headers = {
				'Authorization': `Token ${signupToken}`,
				'Content-Type': 'application/json'
			}
			const body = {
				otp: userInput
			}	
			setLoading(true)
			useFetch(url, body, headers, 'post').then(({ error : verifyOTPError, data : verifyOTPData })=>{
				if(verifyOTPError){
					console.log(verifyOTPError)
					setError('An Error Occured!')
					setLoading(false)
					clearOTP(inputRefs)
				}else{
					console.log(verifyOTPData)
					if(JSON.parse(sessionStorage.getItem('promptFD')).isVendor){
						startTransition(() =>{
							navigate('/vendorsignup')
						})
					}else{
						const formData = JSON.parse(sessionStorage.getItem('promptFD'))
						// console.log(formData)
						const userData = {
							id: verifyOTPData.id,
							first_name: formData.first_name,
							last_name: formData.last_name,
							email: formData.email
						}
						updateToken(signupToken)
						updateUser(userData)
						updateIsVendor(false)
						localStorage.setItem('promptAuth', JSON.stringify({
							authToken: signupToken,
							user: userData
						}))
						startTransition(()=>{
							navigate('/user-dashboard')
						})
					}
				}
			})
		}else{
			console.log(false)
			setError('Invalid OTP!')
			setLoading(false)
			clearOTP(inputRefs)
		}
	}
	

	return (
		<>
			{
				JSON.parse(sessionStorage.getItem('promptFD'))? (
					<div className="verify-content page-content" style={ { pointerEvents: loading? 'none': 'all', opacity: loading? .7 : 'initial' }  }>
						{
							loading? (
								<TopLoader />
							):(
								<></>
							)
						}

						<Error error={ error ? true: false } msg = { error } setError = { setError }/>

						<div className="heading">
							<h1>Verify Code</h1>
							<p>Enter 6 digits code that you received on { JSON.parse(sessionStorage.getItem('promptFD')).email }</p>
						</div>
						<form className="form-content" onSubmit={ (e) => {
							checkOTP(e)
						} }>
							<div
								className="pin-input"
								ref={inputRefs}
							>
								<input
									type="number"
									name="pin1"
									id=""
									className="pin1"
								/>
								<input
									type="number"
									name="pin2"
									id=""
									className="pin2"
								/>
								<input
									type="number"
									name="pin3"
									id=""
									className="pin3"
								/>
								<input
									type="number"
									name="pin4"
									id=""
									className="pin4"
								/>
								<input
									type="number"
									name="pin5"
									id=""
									className="pin5"
								/>
								<input
									type="number"
									name="pin6"
									id=""
									className="pin6"
								/>
							</div>
							<div className="form-bottom">
								<p className="forgot">Resend Code</p>
							</div>
							<button
								className="submit-btn"
							>
								Verify
							</button>
						</form>
					</div>
				):(
					<></>
				)
			}
		</>
	);
};

export default VerifyContent;
