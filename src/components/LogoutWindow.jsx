import { navigateToLogin } from "@/pages/home"
import { root, useAuthStore } from "@/utils/AuthStore"
import { LogoutWindowStore } from "@/utils/OtherStores"
import useFetch from "@/utils/useFetch"
import { useState, useRef } from "react"

const LogoutWindow = () => {

    const { isOpen, setIsOpen }  = LogoutWindowStore((state) => ({
        isOpen: state.isOpen,
        setIsOpen: state.setIsOpen
    }))

    const { token, updateToken, updateUser } = useAuthStore((state) => ({
        token: state.token,
        updateToken: state.updateToken,
        updateUser: state.updateUser
    }))

    const [loading, setLoading] = useState(false)

    const logoutUser = () => {
        setLoading(true)
        const url = `${root}/auth/users/logout`
        const headers = {
            'Authorization': `Token ${token}`,
        }	
        useFetch(url, false, headers, 'delete').then(({ data: logoutUserData, error: logoutUserError })=>{
            if(logoutUserData){
                updateToken(false)
                updateUser(false)
                localStorage.removeItem('promptAuth')
                setLoading(false)
                setIsOpen(false)
                navigateToLogin()
            }else{
                setLoading(false)
            }
        })
    }
    

    return (
      <>
        {
            isOpen? (
                <div className=" w-[90vw] max-w-[230px] h-[140px] flex flex-col items-center justify-center fixed top-[50%] left-[50%] z-10 bg-[#fff]" style={ { transform: `translate(-50%, -50%) ${ isOpen? 'scale(1)' : 'scale(0.5)' }`, pointerEvents: `${isOpen? 'all' : 'none'}`, opacity: `${isOpen? 'initial' : 0}`, transition: 'all .3s ease', boxShadow: ' 0 2px 6px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.15)'}}>
                <h1 className="" style={{ fontSize: '20px', fontWeight: 'bold' } }>Confirm Logout?</h1>
                <div className="flex mt-[15px]">
                 <button className="px-[10px] h-[30px] bg-[red] rounded-md mx-[10px] text-[#fff] cursor-[pointer]" style={ { fontSize: '14px', pointerEvents: loading? 'none' : 'all' } } onClick={ () => {
                     logoutUser()
                 } }>{
                     loading? (
                         <img src="/assets/icons/loader.gif" alt="" className="w-[20px] h-[20px]"/>
                     ):(
                         <>Logout</>
                     )
                 }</button>
                 <button className="px-[10px] h-[30px] text-[red]" style={ { fontSize: '14px' } } onClick={() => {
                     setIsOpen(false)
                 }} >Cancel</button>
                </div>
             </div>
            ):(
                <></>
            )
        }
      </>
    )
}

export default LogoutWindow