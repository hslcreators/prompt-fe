import React from "react";
import card from "../../../public/assets/icons/card.svg";

const PaymentHistory = () => {
	return (
		<React.Fragment>
			<button className="flex flex-row gap-[1.1vw] justify-center lg:justify-normal whitespace-fnowrap">
				<div className="lg:w-[18px] lg:h-[18px]">
					<img
						className="w-full h-full object-cover"
						src={card}
						alt="A card icon"
					/>
				</div>
				<div className="hidden lg:block text-[#242424] font-Roboto text-[2.2vw] nxl:text-[18px] font-medium relative nxl:bottom-[4px]">Payment History</div>
			</button>
		</React.Fragment>
	);
};

export default PaymentHistory;
