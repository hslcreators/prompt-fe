import React from "react";
import wave from "../../../../public/assets/icons/wave.svg";
import megaSale from "../../../../public/assets/images/megaSale.png";
import VendorCard from "@components/VendorCard/VendorCard";

const VendorsDescription = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col pts-[3vw] pb-[7vw] lgs:pt-[4vw] lg:pb-[6vw] nxl:pt-[1vw] nxl:pb-[4vw] text-[#4A5568] font-bold vsm:text-[5.2vw] lg:text-[20px] xl:text-[30px] border-4">
				<div className="sm:text-[18px] flex flex-row justify-between font-normal vsdm:mt-[8vw] lg:smt-[60px]">
					<div>Categories</div>
					<button className="text-[#524ECA] flex flex-row sm:text-[14px] lg:text-[10px] xl:text-[15px] underline">View All</button>
				</div>
				<div className="lg:mb-[60px] vsm:mb-[8vw] mt-[30px] flex flex-row flex-wrap content-center justify-center gap-x-[4.5vw] gap-y-[4.5vw] nxl:gap-x-[3vw] xl:gap-x-[1.5vw]">
					<VendorCard />
					<VendorCard />
					<VendorCard />
					<VendorCard />
					<VendorCard />
					<div className="lg:hidden">
						<VendorCard />
					</div>
				</div>
				<div className="vsm:fhidden flex flex-row justify-between font-normal sm:text-[18px]">
					<div>Vendors</div>
					<button className="text-[#524ECA] flex flex-row sm:text-[14px] lg:text-[10px] xl:text-[15px] underline">View All</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default VendorsDescription;
