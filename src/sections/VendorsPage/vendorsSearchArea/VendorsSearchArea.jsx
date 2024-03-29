import React from "react";

const VendorsSearchArea = () => {
	return (
		<React.Fragment>
			<div className="min-h-[65px] md:h-[12vw] lg:h-[15vw] max-h-[86px] border-b-[1.75px] rounded-md w-full h-fit border-[#D9D9D9] bg-white">
				<div className="flex flex-row justify-center items-center h-full">
					<input
						id="FName"
						type="text"
						placeholder="Search list..."
						className="border-[1px] border-[#919396] rounded-full py-[.75vw] px-[1.75vw] w-[45vw] lg:max-w-[484px] nxl:max-w-[584px]"
					/>
					<div className="flex flex-row gap-[11px] ml-[4vw]">
						<button className=" ">
							<div className="w-[6vw] h-[6vw] lg:w-[28px] lg:h-[28px]">
								<picture className="">
									<source
										className=""
										media="(min-width: 565px)"
										srcSet="/assets/images/imageUsr.png"
									/>
									<img
										src="/assets/images/avatarMob.png"
										alt="A user avatar"
										className="w-full h-full object-cover rounded-full"
									/>
								</picture>
							</div>
						</button>
						<button className=" ">
							<div className="w-[6vw] h-[6vw] lg:w-[24px] lg:h-[30px]">
								<picture className="">
									<source
										className=""
										media="(min-width: 565px)"
										srcSet="/assets/icons/bell.svg"
									/>
									<img
										src="/assets/icons/bellMob.svg"
										alt="A notification svg"
										className="w-full h-full object-cover rounded-full"
									/>
								</picture>
							</div>
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default VendorsSearchArea;
