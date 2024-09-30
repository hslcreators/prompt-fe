import { useEffect, useRef, useState, useTransition } from "react"
import "../Login/loginContent.css";
import "../SignUp/SignUpContent.css"
import '../CreatePassword/CreatePasswordContent.css'
import { appendData } from "@/utils/formUtility"
import { useNavigate } from "react-router-dom";
import { useAuthErrorsStore } from "@/utils/AuthStore";
import { toast } from "react-toastify";
import useFetch from "@/utils/useFetch";
import { root } from "@/utils/AuthStore";
import Error from "@/components/Error";
import TopLoader from "../TopLoader";
import { progressRef } from "@/components/Progress/Progress";


const PersonalDetailsContent = () => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

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
    const vendorCheckRef = useRef(false)
    const formRef = useRef(false)
    const { error: authError, setError: setAuthError } = useAuthErrorsStore((state) => ({
        error: state.error,
        setError: state.setError
    }))
    

    const notify = () => {
        toast('error')
    }

    const submitForm = (e) => {
 
        e.preventDefault()
        setLoading(prev => true)
        if(e.target.first_name.value != '' && e.target.last_name.value != '' && e.target.username.value != ''){
            setError(false)
            const formInputs =  [
                {
                    key: 'first_name',
                    value: e.target.first_name.value
                },
                {
                    key: 'last_name',
                    value: e.target.last_name.value
                },
                {
                    key: 'username',
                    value: e.target.username.value
                }
            ]
            formInputs.forEach(input => {
                appendData(input.key, input.value)
            })
            const url = `${root}/auth/users/signup/`
            const signUpData = JSON.parse(sessionStorage.getItem('promptFD'))
            const headers = {
                'Content-Type': 'application/json',
            }
            if (signUpData) {
                const body = {
                    email: signUpData.email,
                    password: signUpData.password,
                    first_name: signUpData.first_name,
                    last_name: signUpData.last_name,
                    username: signUpData.username
                }
                useFetch(url, body, headers, 'post').then(({error, data})=>{
                    setLoading(prev => false)
                    if(error){
                        if(error.response.data.email && error.response.data.username){
                            setAuthError({
                                error: ['username', 'email'],
                                msg: {
                                    email: error.response.data.email[0],
                                    username: error.response.data.username[0]
                                }
                            })
                        }else if(error.response.data.email){
                            setAuthError({
                                error: ['email'],
                                msg: {
                                    email: error.response.data.email[0]
                                }
                            })
                            startTransition(() => {
                                navigate('/signup')
                            })
                        }else if(error.response.data.username){
                            setAuthError({
                                error: ['username'],
                                msg: {
                                    username: error.response.data.username[0]
                                }
                            })
                            startTransition(() => {
                                navigate('/personaldetails')
                            })
                        }
                    }else{
                        signUpData.signupToken = data.token
                        sessionStorage.setItem('promptFD', JSON.stringify(signUpData))
                        startTransition(() => {
                            navigate('/verify')
                        })
                    }
                })
            }else{
                startTransition(() => {
                    navigate('/signup')
                })
            }

            // if(JSON.parse(sessionStorage.getItem('promptFD')).isVendor){
 
            //     navigate('/vendorsignup')
            // }else{
            //     const SSData  = JSON.parse(sessionStorage.getItem('promptFD'))
            //     const body = {
            //         email: SSData.email,
            //         password: SSData.password,
            //     }

            // }
        }else{
            setError('Required field missing')
        }
    }

    useEffect(()=>{
        if(sessionStorage.getItem('promptFD')){
            if(JSON.parse(sessionStorage.getItem('promptFD')).email
             != null || JSON.parse(sessionStorage.getItem('promptFD')).password != null||
              JSON.parse(sessionStorage.getItem('promptFD')).first_name != null
              || JSON.parse(sessionStorage.getItem('promptFD')).last_name != null
              || JSON.parse(sessionStorage.getItem('promptFD')).username != null
            ){
                if(formRef){
                    const SSData = JSON.parse(sessionStorage.getItem('promptFD'))
                    formRef.current.elements.first_name.value = SSData.first_name
                    formRef.current.elements.last_name.value = SSData.last_name
                    formRef.current.elements.username.value = SSData.username
                    formRef.current.elements.isVendor.checked = SSData.isVendor
                }
            }else{
                startTransition(() => {
                    navigate('/signup')
                })
            }
            if(authError){
                if(authError.error == 'username'){
 
                }
            }
        }
        
    }, [])

    return (
        <div className="personal-details-content" style={ { pointerEvents: loading? 'none' : 'all', opacity: loading? 0.6 : 'initial' }}>
             {
				loading? (
					<TopLoader />
				):(
					<></>
				)
			}
            <Error error={ error ? true: false } msg = { error } setError = { setError }/>
			{
				authError? (
					<Error error={ authError.error.includes('username') ? true: false} msg = { authError.msg.username } setError = { setAuthError }/>
				): (
					<></>
				)
			}
             <div className="heading">
                <h1>Personal Details</h1>
                <p>Enter your vendor details to continue the signup process</p>
            </div>
            <form className="form-content" ref = { formRef } onSubmit={ (e) => {
                submitForm(e)
            } }>
                <div className="input-label">
                    <span>First Name</span>
                    <input type="text" name="first_name" id="" placeholder='Enter First Name'/>
                </div>
                <div className="input-label">
                    <span>Last Name</span>
                    <input type="text" name="last_name" id="" placeholder='Enter Last Name'/>
                </div>
                <div className="input-label">
                    <span>Username</span>
                    <input type="text" name="username" id="" placeholder='Enter a username e.g johndoe111'/>
                </div>
                <div className="form-bottom">
                    <div className="remember-check">
                        <input type="checkbox" name="isVendor" id="" ref={ vendorCheckRef} onChange={(e) => {
							appendData('isVendor', e.target.checked)
						}} />
                        Sign up as vendor
                    </div>
                </div>
                <button className="submit-btn">
                    NEXT
                </button>
            </form>
        </div>
    )
}

export default PersonalDetailsContent