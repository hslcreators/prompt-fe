import React from "react";

import { useAuthStore } from "@/utils/AuthStore";
import { LogoutWindowStore } from "@/utils/OtherStores";

const UserProfile = () => {

	const { user } = useAuthStore((state) => ({
		user: state.user
	}))

	const { setIsOpen } = LogoutWindowStore((state) => ({
		setIsOpen: state.setIsOpen
	}))

	return (
		<React.Fragment>
			<button className="flex flex-col alg:flex-row gap-[1.1vw] items-center alg:justify-center alg:bg-[#e8e8e8] mb-[5vw] md:mb-[2vw] alg:mb-[28px]">
				<div className="w-[8vw] h-[8vw] sm:w-[44px] lg:w-[51px] sm:h-[44px] lg:h-[49px]">
					<picture className="" style={ { borderRadius: '50%' } }>
						<source
							className=""
							media="(min-width: 565px)"
							srcSet="/assets/images/avatar.png"
						/>
						<img style={ { borderRadius: '50%' } }
							src="/assets/images/avatar.png"
							alt="A user avatar"
							className="w-full h-full object-cover"
						/>
					</picture>
				</div>
				<div className="hidden alg:block font-Roboto text-[13px] font-bold relative top-[4px] flex flex-row">
					<div>{ user.first_name } { user.last_name }</div>
				</div>
				<div className="border-2 p-[1vw] rounded-sm w-[70%] alg:w-auto flex flex-row justify-center items-center bg-[#CEC3C3] border-[#CEC3C3] alg:bg-inherit alg:border-0 w-[8vw] h-[8vw] alg:max-h-[80px]">
					<div className="sm:w-[24px] sm:h-[24px]" onClick={ () => {
						setIsOpen(true)
					} }>
						<picture className="">
							<source
								className=""
								media="(min-width: 565px)"
								srcSet="/assets/icons/back.svg"
							/>
							<img
								src="/assets/icons/backMob.svg"
								alt="An exit icon"
								className="w-full h-full object-cover"
							/>
						</picture>
					</div>
				</div>
			</button>
		</React.Fragment>
	);
};

export default UserProfile;
