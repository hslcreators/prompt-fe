import React from "react";
import userProfile from "../../../../public/assets/images/userProfile.png";
import left from "../../../../public/assets/icons/left.svg";
import message from "../../../../public/assets/images/message.png";
import userProfileBg from "../../../../public/assets/images/userProfileBg.png";
import ratings from "../../../../public/assets/icons/ratings.svg";

const VendorsDetails = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col text-[#525252] font-bold vsm:text-[4.2vw] lg:text-[20px] xl:text-[30px] my-[6vw] nsm:my-[3vw]">
				<div className="w-[5.2vw] my-[3vw]  lg:mt-[1vw] lg:mb-[3vw] lg:w-[24px] lg:h-[24px]">
					<img
						className="w-full h-full object-cover"
						src={left}
						alt="A left arrow"
					/>
				</div>
				<div className="w-100% max-w-[1048px]">
					<img
						className="w-full h-full object-cover rounded-lg"
						src={userProfileBg}
						alt="A left arrow"
					/>
				</div>
				<div className="flex flex-row justify-between">
					<div className="w-[10vw] h-[10vw] relative bottom-[6vw] left-[2vw]">
						<img
							className="w-full h-full object-cover"
							src={userProfile}
							alt="A user profile icon"
						/>
					</div>
					<div className="w-[6vw] h-[6vw] relative bottom-[3vw]">
						<img
							className="w-full h-full object-cover"
							src={message}
							alt="A message icon"
						/>
					</div>
				</div>
				<div>
					<div>CST COMPUTER LAB</div>
					<div className="vsm:text-[3vw] lg:text-[13px] xl:text-[21px] font-normal">Price : N50.000</div>
					<div className="vsm:text-[3vw] lg:text-[13px] xl:text-[21px] font-normal">Location: CST Building</div>
					<div className="w-[20vw] h-[4vw] max-w-[144px] max-h-[24px] lg:relative right-[4px]">
						<img
							className="w-full h-full object-cover"
							src={ratings}
							alt="A card icon"
						/>
					</div>
				</div>
				<div className="flex flex-row w-[80%] alg:w-[70%] nxl:w-[50%] justify-between vsm:text-[2.2vw] lg:text-[13px] xl:text-[21px] font-normal mt-[4vw] lg:mt-[24px] nxl:mt-[30px]">
					<button className="rounded-md bg-[#524ECA] w-[49%] text-white p-[1vw] sm:p-[5px] nxl:p-[7px] ">USE VENDOR</button>
					<button className="rounded-md border-2 w-[49%] border-[#524ECA] text-[#524ECA] p-[1vw] sm:p-[5px] nxl:p-[7px]">ADD TO WISHLIST</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default VendorsDetails;
