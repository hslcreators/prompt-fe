import React from "react";
import logo from "../../../public/assets/icons/prompt-logo.svg";

const Logo = () => {
	return (
		<React.Fragment>
			<div className="lg:w-[107px] lg:h-[39px]">
				<img
					className="w-full h-full object-cover"
					src={logo}
					alt="A logo icon"
				/>
			</div>
		</React.Fragment>
	);
};

export default Logo;
