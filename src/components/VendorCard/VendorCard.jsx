import React from "react";
import card from "../../../public/assets/images/printingStand.png";
import ratings from "../../../public/assets/icons/ratings.svg";

const VendorCard = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col text-[1.3vw] nxl:text-[11px] select-none">
				<button className="w-[20vw] h-[20vw] max-w-[159px] max-h-[159px]">
					<img
						className="w-full h-full object-cover"
						src={card}
						alt="A card icon"
					/>
				</button>
				<div className="flex flex-row text-[#4A5568] font-roboto font-medium">
					<div>OLEM PRINTING INT</div>
					<div>₦ 30,000</div>
				</div>
				<div className="text-[#525252] font-normal">CAFETERIA 1</div>
				<div className="w-[10vw] h-[2vw] max-w-[124px] max-h-[24px] relative right-[4px]">
					<img
						className="w-full h-full object-cover"
						src={ratings}
						alt="A card icon"
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default VendorCard;
