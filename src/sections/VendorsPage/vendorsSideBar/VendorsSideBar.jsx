import React from "react";
import Dashboard from "@components/Dashboard/Dashboard";
import Notification from "@components/Notification/Notification";
import PaymentHistory from "@components/PaymentHistory/PaymentHistory";
import Settings from "@components/Settings/Settings";
import Logo from "@components/Logo/Logo";
import UserProfile from "@components/UserProfile/UserProfile";

const VendorsSideBar = () => {
	return (
		<React.Fragment>
			<div className="fixed border-r-[1.5px] border-[#00000040] w-[19.5vw] lg:w-[30vw] lg:max-w-[240px] select-none flex flex-col h-[100vh] justify-between rounded-md">
				<div className="flex flex-col gap-[10vw] sm:gap-[52px] items-center max-h-[316px] sm:max-h-none mt-[5vw] md:mt-[2vw] lg:mt-[28px]">
					<div className="">
						<Logo />
					</div>
					<div className="flex flex-col h-[78vw] sm:h-[225px] justify-between">
						<Dashboard />
						<Notification />
						<PaymentHistory />
						<Settings />
					</div>
				</div>
				<UserProfile />
			</div>
		</React.Fragment>
	);
};

export default VendorsSideBar;
