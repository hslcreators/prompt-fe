import React from "react";
import wave from "../../../../public/assets/icons/wave.svg";
import down from "../../../../public/assets/icons/downArrow.svg";
import megaSale from "../../../../public/assets/images/megaSale.png";
import VendorCard from "@components/VendorCard/VendorCard";

const UsersHero = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col pt-[3vw] pb-[7vw] lg:pt-[4vw] lg:pb-[6vw] nxl:pt-[1vw] nxl:pb-[4vw] text-[#4A5568] font-bold vsm:text-[5.2vw] lg:text-[20px] xl:text-[30px]">
				<div className="flex flex-row vsm:mb-0">
					<div className=" mr-[1.5vw] lg:mr-[8px] xl:mr-[16px]">Hello Loyce!</div>
					<div className="w-[5.2vw] h-[5.2vw] lg:w-[14px] lg:h-[14px] xl:w-[24px] xl:h-[24px] relative top-[1.3vw] lg:top-[8px] xl:top-[10px]">
						<img
							className="w-full h-full object-cover"
							src={wave}
							alt="A left arrow"
						/>
					</div>
				</div>
				<div className="vsm:text-[2.2vw] lg:text-[8px] xl:text-[12px]">Take one step at a time</div>
				<div className="w-100% max-w-[1048px] h-100%  ">
					<img
						className="w-full h-full object-cover"
						src={megaSale}
						alt="A left arrow"
					/>
				</div>
				<div className="vsm:hidden lg:flex flex-row justify-between font-normal mt-[40px] pb-[30px]">
					<div>Categories</div>
					<button className="text-[#524ECA] flex flex-row  lg:text-[10px] xl:text-[15px] underline">View All</button>
				</div>
				<div className="mb-[40px] flex flex-row flex-wrap content-center justify-center gap-x-[2vw] gap-y-[4vw] nsm:gap-x-[1.5vw]  lg:gap-y-[3vw]">
					<VendorCard />
					<VendorCard />
					<VendorCard />
                    <VendorCard />
                    <VendorCard />
				</div>
				<div className="vsm:hidden lg:flex flex-row justify-between font-normal">
					<div>Vendors</div>
					<button className="text-[#524ECA] flex flex-row  lg:text-[10px] xl:text-[15px] underline">View All</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default UsersHero;
