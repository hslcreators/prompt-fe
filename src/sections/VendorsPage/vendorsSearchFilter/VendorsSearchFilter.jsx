import React from "react";
import left from "../../../../public/assets/icons/left.svg";
import down from "../../../../public/assets/icons/downArrow.svg";

const VendorsSearchFilter = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col pt-[3vw] pb-[7vw] lg:pt-[4vw] lg:pb-[6vw] nxl:pt-[1vw] nxl:pb-[4vw]">
				<div className="flex flex-row vsm:mb-0 lg:mb-[2vw]">
					<div className="w-[5.2vw] h-[5.2vw] lg:w-[14px] lg:h-[14px] xl:w-[24px] xl:h-[24px] relative top-[1.3vw] lg:top-[8px] xl:top-[10px]">
						<img
							className="w-full h-full object-cover"
							src={left}
							alt="A left arrow"
						/>
					</div>
					<div className="text-[#4A5568] font-bold vsm:text-[5.2vw] lg:text-[20px] xl:text-[30px] ml-[1.5vw] lg:ml-[12px] xl:ml-[20px]">Vendors</div>
				</div>
				<div className="vsm:hidden lg:flex flex-row justify-between">
					<div>
						<input
							id="FName"
							type="text"
							placeholder="Search list..."
							className="border-[1px] border-[#919396] rounded-full py-[0.15vw] xl:py-[0.35vw] px-[1.75vw] w-[35vw] lg:fmax-w-[484px] xl:mafx-w-[584px]"
						/>
					</div>
					<button className="flex flex-row  lg:text-[15px] xl:text-[20px]">
						Filter
						<div className="lg:w-[18px] lg:h-[18px] relative top-[2px] xl:top-[7px] ml-[10px]">
							<img
								className="w-full h-full object-cover"
								src={down}
								alt="A down arrow"
							/>
						</div>
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default VendorsSearchFilter;
