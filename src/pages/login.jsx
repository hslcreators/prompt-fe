import '../sections/AuthPages/AuthPages.css'
import SideImage from '@sections/AuthPages/SideImage.jsx'
import LoginContent from '@sections/AuthPages/Login/LoginContent.jsx'

const LoginPage = () => {
 return (
    <div className="auth-container">
        <SideImage /> 
        <LoginContent />
    </div>
 )   
}

export default LoginPage