import { useNavigate } from "react-router-dom"
import { progressRef } from "../Progress/Progress"
import { useTransition } from "react"


const MobileFooter = () => {
   const navigate = useNavigate()

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
    return (
        <div className="fixed bottom-0 w-full h-[55px] border-t-[1.75px] border-[#D9D9D9] bg-[white] flex" >
            <div className="w-[25%] h-full flex items-center justify-center cursor-[pointer]" onClick={() => {
            startTransition(() => {
               navigate('/user-dashboard')
            })
        }}>
                <img
					className="w-[18px] h-[18px]"
				   src="/assets/icons/dashboard.svg"
				/>
            </div>
            <div className="w-[25%] h-full flex items-center justify-center cursor-[pointer]" onClick={() => {
            startTransition(() => {
               navigate('/vendors')
            })
        }}>
                <img
					className="w-[18px] h-[18px]"
				   src="/assets/icons/vendor.svg"
				/>
            </div>
            <div className="w-[25%] h-full flex items-center justify-center cursor-[pointer]" onClick={() => {
             startTransition(() => {
               navigate('/search')
             })
        }}>
                <img
					className="w-[18px] h-[18px]"
				   src="/assets/icons/search.svg"
				/>
            </div>
            <div className="w-[25%] h-full flex items-center justify-center cursor-[pointer]" onClick={() => {
               startTransition(() => {
                  navigate('/activity')
               })
        }}>
                <img
					className=" w-[18px] h-[18px]"
				   src="/assets/icons/activity.svg"
				/>
            </div>
        </div>
    )
}

export default MobileFooter