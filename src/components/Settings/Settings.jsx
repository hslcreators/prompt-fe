import React from "react";
import settings from "../../../public/assets/icons/settings.svg";

const Settings = () => {
	return (
		<React.Fragment>
			<button className="flex flex-row gap-[1.1vw] justify-center lg:justify-normal">
				<div className="lg:w-[18px] lg:h-[18px]">
					<img
						className="w-full h-full object-cover"
						src={settings}
						alt="A settings icon"
					/>
				</div>
				<div className="hidden lg:block text-[#242424] font-Roboto text-[2.2vw] nxl:text-[18px] font-medium relative nxl:bottom-[4px]">Settings</div>
			</button>
		</React.Fragment>
	);
};

export default Settings;
