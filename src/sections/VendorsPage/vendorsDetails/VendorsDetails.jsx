import React from "react";
import { useNavigate } from "react-router-dom";

import VendorHeading from "@/components/VendorHeading/VendorHeading";

const VendorsDetails = () => {
	const navigate = useNavigate();
	return (
		<React.Fragment>
			<div className="flex flex-col text-[#525252] font-bold vsm:text-[4.2vw] lg:text-[20px] xl:text-[30px] my-[6vw] nsm:my-[3vw]">
				<VendorHeading />
				<div>
					<div>CST COMPUTER LAB</div>
					<div className="vsm:text-[3vw] lg:text-[13px] xl:text-[21px] font-normal">Price : N50.000</div>
					<div className="vsm:text-[3vw] lg:text-[13px] xl:text-[21px] font-normal">Location: CST Building</div>
					<div className="w-[20vw] h-[4vw] max-w-[144px] max-h-[24px] lg:relative right-[4px]">
						<img
							className="w-full h-full object-cover"
							src="/assets/icons/ratings.svg"
							alt="A card icon"
						/>
					</div>
				</div>
				<div className="flex flex-row w-[80%] alg:w-[70%] nxl:w-[50%] justify-between vsm:text-[2.2vw] lg:text-[13px] xl:text-[21px] font-normal mt-[4vw] lg:mt-[24px] nxl:mt-[30px]">
					<button
						onClick={() => navigate("/file-upload")}
						className="rounded-md bg-[#524ECA] w-[49%] text-white p-[1vw] sm:p-[5px] nxl:p-[7px] "
					>
						USE VENDOR
					</button>
					<button className="rounded-md border-2 w-[49%] border-[#524ECA] text-[#524ECA] p-[1vw] sm:p-[5px] nxl:p-[7px]">ADD TO WISHLIST</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default VendorsDetails;
