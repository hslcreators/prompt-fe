import './personalDetails.css'

const PersonalDetailsContent = () => {
    return (
        <div className="personal-details-content">
             <div className="heading">
                <h1>Personal Details</h1>
                <p>Enter your personal details to continue the signup process</p>
            </div>
            <form className="form-content">
                <div className="input-label">
                    <span>First Name</span>
                    <input type="password" name="" id="" placeholder='...............'/>
                </div>
                <div className="input-label">
                    <span>Last Name</span>
                    <input type="password" name="" id="" placeholder='...............'/>
                </div>
                <div className="form-bottom">
                    <div className="remember-check">
                        <input type="checkbox" name="" id="" />
                        Sign up as vendor
                    </div>
                </div>
                <button className="submit-btn">
                   SIGN UP
                </button>
            </form>
        </div>
    )
}

export default PersonalDetailsContent