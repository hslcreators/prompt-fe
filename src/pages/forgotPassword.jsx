import '../sections/AuthPages/AuthPages.css'
import ForgotPasswordContent from '@sections/ForgotPassword/ForgotPasswordContent.jsx'
import SideImage from '@sections/AuthPages/SideImage.jsx'

const ForgotPassword = () => {
   return (
        <div className="auth-container">
            <SideImage /> 
            <ForgotPasswordContent />
        </div>
   )
}

export default ForgotPassword