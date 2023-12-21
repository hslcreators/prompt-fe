import './ForgotPassoword.css'

const ForgotPasswordContent = () => {
    return (
        <div className="forgot-content">
             <div className="heading">
                <h1>Forgot Password?</h1>
                <p>Enter your account details</p>
             </div>
             <form className="form-content">
                <div className="input-label">
                    <span>Email</span>
                    <input type="email" name="" id="" placeholder='mail@abc.com'/>
                </div>
                <button className="submit-btn">
                    NEXT
                </button>
            </form>
        </div>
    )
}

export default ForgotPasswordContent