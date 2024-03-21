import React from "react";

const VendorsDescription = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col jusstify-between text-[#171328]">
				<div className="">
					<div className="font-bold vsm:text-[5.2vw] lg:text-[24.5px] xl:text-[27px]">Description</div>
					<button className="text-[#525252] flex flex-row vsm:text-[3vw] lg:text-[15px] xl:text-[17px] text-left tracking-tight">Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn about its history, usage, variations and sources, and how to generate realistic Lorem Ipsum online.</button>
				</div>
				<div className="mt-[30px] flex flex-row flex-wrap content-center justify-evenly gap-y-[4.5vw] lg:gap-y-[1.5vw] lg:gap-x-[5px] px-0">
					<div className="nxl:max-w-[285px]">
						<img
							className="w-full h-full object-cover"
							src="/assets/images/userDescription.png"
							alt="A userDesc icon"
						/>
					</div>
					<div className="nxl:max-w-[285px]">
						<img
							className="w-full h-full object-cover"
							src="/assets/images/userDescription.png"
							alt="A userDesc icon"
						/>
					</div>
					<div className="nxl:max-w-[285px]">
						<img
							className="w-full h-full object-cover"
							src="/assets/images/userDescription.png"
							alt="A userDesc icon"
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default VendorsDescription;
