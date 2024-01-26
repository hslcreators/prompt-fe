import React from "react";
import notifications from "../../../public/assets/icons/notifications.svg";
import { Link } from "react-router-dom";

const Notification = () => {
	return (
		<React.Fragment>
			<Link
				to="/vendors"
				className="flex flex-row gap-[1.1vw] justify-center lg:justify-normal"
			>
				<div className="lg:w-[18px] lg:h-[18px]">
					<img
						className="w-full h-full object-cover"
						src={notifications}
						alt="A notification icon"
					/>
				</div>
				<div className="hidden lg:block text-[#242424] font-Roboto text-[2.2vw] nxl:text-[18px] font-medium relative nxl:bottom-[4px]">Vendors</div>
			</Link>
		</React.Fragment>
	);
};

export default Notification;
