import React from "react";
import card from "../../../public/assets/images/printingStand.png";
import ratings from "../../../public/assets/icons/ratings.svg";

const VendorCard = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col text-[2.65vw] lg:text-[13px] select-none">
				<button className="w-[29vw] h-[22vw] lg:max-w-[155px] alg:max-w-[185px] lg:max-h-[130px] nxl:max-w-[159px] nxl:max-h-[130px]">
					<img
						className="w-full h-full object-cover rounded-lg"
						src={card}
						alt="A card icon"
					/>
				</button>
				<div className="text-[#4A5568] font-roboto font-medium">
					<div>OLEM PRINTING INT</div>
					<div>₦ 30,000</div>
				</div>
				<div className="text-[#525252] font-normal">CAFETERIA 1</div>
				<div className="w-[10vw] h-[2vw] max-w-[124px] max-h-[24px] lg:relative right-[4px]">
					<img
						className="w-full h-full object-cover"
						src={ratings}
						alt="A rating icon"
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default VendorCard;
