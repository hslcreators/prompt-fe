import React from "react"

import { useNavigate } from "react-router-dom"
import { useTransition } from "react"

const VendorHeading = ({settings}) => {
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
        <React.Fragment>
            <div className="w-[5.2vw] my-[3vw]  lg:mt-[1vw] lg:mb-[3vw] lg:w-[24px] lg:h-[24px]" onClick={() => {
				  startTransition(() => {
					navigate('/user-dashboard')
				 })
			}}>
					<img
						className="w-full h-full object-cover"
						src="/assets/icons/left.svg"
						alt="A left arrow"
					/>
				</div>
				<div className="w-100% max-w-[1048px]">
					<img
						className="w-full h-full object-cover rounded-lg"
						src="/assets/images/userProfileBg.png"
						alt="A left arrow"
					/>
				</div>
				<div className="flex flex-row justify-between relative">
					<div className="w-[10vw] h-[10vw] relative bottom-[6vw] left-[2vw]">
						<img
							className="w-full h-full object-cover"
							src="/assets/images/userProfile.png"
							alt="A user profile icon"
						/>
					</div>
					{
						settings ? (
							<div className="absolute left-[21%] top-[15px] text-customGray">
								<h2 className="text-settingsHead font-bold">Settings</h2>
								<p>Ikeokwu Somtochi</p>
							</div>
						):(
							<div className="w-[6vw] h-[6vw] relative bottom-[3vw]">
								{/* <img
									className="w-full h-full object-cover"
									src="/assets/images/message.png"
									alt="A message icon"
								/> */}
							</div>
						)
					}
				</div>
        </React.Fragment>
    )
}

export default VendorHeading