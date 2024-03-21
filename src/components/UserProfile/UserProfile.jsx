import React from "react";

const UserProfile = () => {
	return (
		<React.Fragment>
			<button className="flex flex-col lg:flex-row gap-[1.1vw] items-center lg:justify-center lg:bg-[#F1F1F1] mb-[5vw] md:mb-[2vw] lg:mb-[28px]">
				<div className="w-[8vw] h-[8vw] sm:w-[44px] lg:w-[51px] sm:h-[44px] lg:h-[49px]">
					<picture className="">
						<source
							className=""
							media="(min-width: 565px)"
							srcSet="/assets/images/avatar.png"
						/>
						<img
							src="/assets/images/avatarMob.png"
							alt="A user avatar"
							className="w-full h-full object-cover"
						/>
					</picture>
				</div>
				<div className="hidden lg:block font-Roboto text-[10px] font-bold relative top-[4px] flex flex-row">
					<div>John Doe</div> <div>Web Designer</div>
				</div>
				<div className="border-2 p-[1vw] rounded-sm w-[70%] lg:w-auto flex flex-row justify-center items-center bg-[#CEC3C3] border-[#CEC3C3] lg:bg-inherit lg:border-0 w-[8vw] h-[8vw] lg:max-h-[80px]">
					<div className="sm:w-[24px] sm:h-[24px]">
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
