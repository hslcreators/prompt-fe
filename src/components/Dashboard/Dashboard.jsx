import React from "react";
import dashboard from "../../../public/assets/icons/dashboard.svg";
import dashboardMob from "../../../public/assets/icons/dashboardMob.svg";

const Dashboard = () => {
	return (
		<React.Fragment>
			<button className="flex flex-row gap-[1.1vw] justify-center lg:justify-normal">
				<div className="lg:w-[18px] lg:h-[18px]">
					<picture className="">
						<source
							className=""
							media="(min-width: 565px)"
							srcSet={dashboard}
						/>
						<img
							src={dashboardMob}
							alt="A dashboard icon"
							className="w-full h-full object-cover"
						/>
					</picture>
				</div>
				<div className="hidden lg:block text-[#242424] font-Roboto text-[2.2vw] nxl:text-[18px] font-medium relative nxl:bottom-[4px]">Dashboard</div>
			</button>
		</React.Fragment>
	);
};

export default Dashboard;
