import { useEffect, useState, useTransition } from 'react'
import './vendorSignup.css'
import "../Login/loginContent.css";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuthErrorsStore, useAuthStore } from '@/utils/AuthStore'
import { root } from '@/utils/AuthStore'
import useFetch from '@/utils/useFetch'
import TopLoader from '../TopLoader'
import Error from '@/components/Error'
import { progressRef } from '@/components/Progress/Progress';

const VendorSignUp = () => {
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

    const [error, setError] = useState(false)

    const [loading, setLoading] = useState(false)

    const getMyVendor = async (loginData) => {
		const url = `${root}/auth/vendors/all`
		const headers = {
			'Authorization': `Token ${loginData.token}`,
		}	
		try {
			const response = await axios.get(url, {headers: headers });
			const data = response.data
		    const myVendorId = data.filter(function(el){
				return el.user == loginData.user_id
			})
			if(myVendorId.length == 0){
				const result = false
				return result
			}else{
				const result = myVendorId[0].id
				return result
			}
		  } catch (error) {
			throw error
		  }
	}

    const loginUser = () => {
		setLoading(true)
		const url = `${root}/auth/users/login/`
		const body = {
			email: JSON.parse(sessionStorage.getItem('promptFD')).email,
			password: JSON.parse(sessionStorage.getItem('promptFD')).password
		}   
		const headers = {
			'Content-Type': 'application/json'
		}
		useFetch(url, body, headers, 'post').then(({ error: loginError, data: loginData })=>{
			if(loginError){
				setError('An Error Occured!')
				setLoading(false)
			}else{
                setLoading(false)
                const userData = {
					id: loginData.user_id,
					first_name: loginData.first_name,
					last_name: loginData.last_name,
					email: loginData.email
				}
                const promptAuth = {
                    authToken: loginData.token,
                    user: userData,
                    isVendor: true
                }
				updateToken(loginData.token)
				updateUser(userData)
				updateIsVendor(true)
                localStorage.setItem('promptAuth', JSON.stringify(promptAuth))
                startTransition(() => {
                    navigate('/user-dashboard');
                })
			}
		})
	}


    const [banks, setBanks] = useState([])

    useEffect(() => {
        if(JSON.parse(sessionStorage.getItem('promptFD')).email != null || JSON.parse(sessionStorage.getItem('promptFD')).password != null){
            if(JSON.parse(sessionStorage.getItem('promptFD')).first_name != null || JSON.parse(sessionStorage.getItem('promptFD')).last_name != null){
                if(!JSON.parse(sessionStorage.getItem('promptFD')).isVendor || JSON.parse(sessionStorage.getItem('promptFD')).isVendor == null){
                    startTransition(() => {
                        navigate('/personaldetails')
                    })
                }
            }else{
                startTransition(()=>{
                      navigate('/personaldetails')
                })
            }
        }else{
            startTransition(() =>{
                navigate('/signup')
            })
         }
        fetch('/bank.json')
          .then((response) => response.json())
          .then((json) => {
            setBanks(json.data)
          });   
      }, []);


      const signupUser =  (vendorBody) => {
 
        const signUpData = JSON.parse(sessionStorage.getItem('promptFD'))
        if (signUpData) {
            const vendorCreateHeaders = {
                'Content-Type': 'application/json',
                'Authorization': `Token ${signUpData.signupToken}`
            }
            signUpData.vendorData = vendorBody
            sessionStorage.setItem('promptFD', JSON.stringify(signUpData))
            const url = `${root}/auth/vendors/`
            setLoading(true)
            useFetch(url, vendorBody, vendorCreateHeaders, 'post').then(({ error: vendorSignupError, data: vendorSignupData })=>{
 
                if(vendorSignupError){
                    setError('An Error Occured!')
                    setLoading(false)
                }else{
                    loginUser()
                }
            })
        }else{
            startTransition(() => {
                navigate('/signup')
            })
        }
    }
    
    

      const submitForm = (e) => {
            e.preventDefault()
            const vendorBody = {
                print_service_name: e.target.service_name.value,
                description: e.target.description.value,
                phone_number: e.target.phone_number.value,
                location: e.target.location.value,
                offers_coloured: false,
                coloured_rate: e.target.coloured_rate.value,
                uncoloured_rate: e.target.uncoloured_rate.value,
                account_name: e.target.account_name.value,
                account_number: e.target.account_number.value,
                bank_name: e.target.bank_name.value,
            }
            // if(vendorBody.description != ''  && vendorBody.print_service_name != '' && vendorBody.phone_number != ''  && vendorBody.location  != '' 
            //     && vendorBody.offers_coloured  != ''  && vendorBody.coloured_rate != ''  && vendorBody.uncoloured_rate != '' 
            //     && vendorBody.account_name  != ''  && vendorBody.account_number != ''  && vendorBody.bank_name != '' ){
                    signupUser(vendorBody)
            // }else{
                // setError('Required Field Missing!')
            // }
      }
        
    
      
      
    return (
        <div className={`vendor-signup-page page-content ${ loading? 'loading': '' }`}>
            {
				loading? (
					<TopLoader />
				):(
					<></>
				)
			}
            <Error error={ error ? true: false } msg = { error } setError = { setError }/>
             <div className="vendor-form">
                <div className="heading">
                    <h1>Vendor Signup</h1>
                    <p>Enter your business details to continue the signup process</p>
                </div>
                <form className="form-content" onSubmit={ (e) => {
 
                    submitForm(e)
                } }>
                    <div className="input-label">
                        <span>Service Name</span>
                        <input type="text" name="service_name" id="" placeholder='Enter your Print Shop Name' autoComplete='false'/>
                    </div>
                    <div className="input-label">
                        <span>Location</span>
                        <input type="text" name="location" id="" placeholder='Enter your Location E.g CST BOOKSTORE' autoComplete='false'/>
                    </div>
                    <div className="input-label">
                        <span>Description</span>
                        <input type="text" name="description" id="" placeholder='A brief description on your business an services'  autoComplete='false'/>
                    </div>
                    <div className="input-label">
                        <span>Phone Number</span>
                        <input type="text" name="phone_number" id="" placeholder='Your phone number in intl format e.g +234****'  autoComplete='false'/>
                    </div>
                    <div className="input-label">
                        <span>Bank Name</span>
                        <select name="bank_name" id="">
                            {
                                banks.map((bank)=>(
                                    <option value={bank.name }>{bank.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="input-label">
                        <span>Coloured Rate</span>
                        <input type="number" name="coloured_rate" id="" placeholder='Price of coloured printing per page in naira (optional)'  autoComplete='false'/>
                    </div>
                    <div className="input-label">
                        <span>Uncoloured Rate</span>
                        <input type="number" name="uncoloured_rate" id=""  placeholder='Price of uncoloured printing per page in naira'  autoComplete='false'/>
                    </div>
                    <div className="input-label">
                        <span>Account Number</span>
                        <input type="number" name="account_number" id="" placeholder='Your 10 digit bank account number'  autoComplete='false'/>
                    </div>
                    <div className="input-label">
                        <span>Account Name</span>
                        <input type="text" name="account_name" id="" placeholder='The full name assigned to your bank account'  autoComplete='false'/>
                    </div>
                    <button className="submit-btn">
                    SIGN UP
                    </button>
                </form>
             </div>
        </div>
    )
}

export default VendorSignUp