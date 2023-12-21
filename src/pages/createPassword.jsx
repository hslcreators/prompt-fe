import CreatePasswordContent from '@sections/AuthPages/CreatePassword/CreatePasswordContent.jsx'
import '../sections/AuthPages/AuthPages.css'
import SideImage from '@sections/AuthPages/SideImage.jsx'

const CreatePassword = () => {
    return (
        <div className="auth-container">
            <SideImage /> 
            <CreatePasswordContent />
        </div>
    )
}

export default CreatePassword