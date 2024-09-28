import './CreatePasswordContent.css'
import '../Login/loginContent.css'

const CreatePasswordContent = () => {
    return (
        <div className="create-password-content page-content">
            <div className="heading">
                <h1>Create New Password</h1>
                <p>Set new password for your account so you can login and access all the features</p>
            </div>
            <form className="form-content">
                <div className="input-label">
                    <span>Password</span>
                    <input type="password" name="" id="" placeholder='...............'/>
                </div>
                <div className="input-label">
                    <span>Confirm Password</span>
                    <input type="password" name="" id="" placeholder='...............'/>
                </div>
                <div className="form-bottom">
                    {/* <div className="remember-check">
                        <input type="checkbox" name="" id="" />
                        Remember me
                    </div> */}
                </div>
                <button className="submit-btn">
                    RESET PASSWORD
                </button>
            </form> 
            
        </div>
    )
}

export default CreatePasswordContent