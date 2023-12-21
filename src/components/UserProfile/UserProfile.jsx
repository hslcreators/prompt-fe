import React from "react";
import avatar from "../../../public/assets/images/avatar.png";
import avatarMob from "../../../public/assets/images/avatarMob.png";
import back from "../../../public/assets/icons/back.svg";
import backMob from "../../../public/assets/icons/backMob.svg";

const UserProfile = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col lg:flex-row gap-[1.1vw] items-center lg:justify-center lg:bg-[#F1F1F1] mb-[5vw] md:mb-[2vw] lg:mb-[28px]">
				<div className="sm:w-[44px] lg:w-[51px] sm:h-[44px] lg:h-[49px]">
					<picture className="">
						<source
							className=""
							media="(min-width: 565px)"
							srcSet={avatar}
						/>
						<img
							src={avatarMob}
							alt="A user avatar"
							className="w-full h-full object-cover"
						/>
					</picture>
				</div>
				<div className="hidden lg:block font-Roboto text-[10px] font-bold relative top-[4px] flex flex-row">
					<div>John Doe</div> <div>Web Designer</div>
				</div>
				<div className="border-2 p-[1vw] rounded-sm w-[70%] lg:w-auto flex flex-row justify-center bg-[#CEC3C3] border-[#CEC3C3] lg:bg-inherit lg:border-0">
					<div className="sm:w-[24px] sm:h-[24px]">
						<picture className="">
							<source
								className=""
								media="(min-width: 565px)"
								srcSet={back}
							/>
							<img
								src={backMob}
								alt="An exit icon"
								className="w-full h-full object-cover"
							/>
						</picture>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default UserProfile;
