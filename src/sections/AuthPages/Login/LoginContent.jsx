import './loginContent.css'
import googleImg from '/assets/images/google.png'

const LoginContent = () => {
    return (
        <div className="login-content lc">
            <div className="heading">
                <h1>Login to your Account</h1>
                <p>Login with your details</p>
            </div>
            <div className="google-btn">
                <img src={ googleImg } alt="" />
                <p>Continue with Google</p>
            </div>
            <form className="form-content">
                <div className="form-title">
                    <div className="dotted-line"></div>
                   <div className="p-text">
                        <p>or Sign up with Email</p>
                   </div>
                </div>
                <div className="input-label">
                    <span>Email</span>
                    <input type="email" name="" id="" placeholder='mail@abc.com'/>
                </div>
                <div className="input-label">
                    <span>Password</span>
                    <input type="password" name="" id="" placeholder='...............'/>
                </div>
                <div className="form-bottom">
                    <div className="remember-check">
                        <input type="checkbox" name="" id="" />
                        Remember me
                    </div>
                    <p className="forgot">
                        Forgot Password?
                    </p>
                </div>
                <button className="submit-btn">
                    LOGIN
                </button>
            </form>
            <div className="bottom-text">
                <p>Not Registered Yet?</p>
                <p style={{ "color": '#524ECA', "cursor": 'pointer' } }>Create an Account</p>
            </div>
        </div>
    )
}

export default LoginContent