import React from "react";
import VendorCard from "@components/VendorCard/VendorCard";

const VendorsCardRatings = () => {
	return (
		<React.Fragment>
			<div className="flex flex-row flex-wrap content-center justify-center gap-x-[2vw] gap-y-[4vw] lg:gap-x-[1.5vw]  lg:gap-y-[3vw]">
				<VendorCard />
				<VendorCard />
				<VendorCard />
				<VendorCard />
				<VendorCard />
				<VendorCard />
				<VendorCard />
				<VendorCard />
				<VendorCard />
				<VendorCard />
			</div>
		</React.Fragment>
	);
};

export default VendorsCardRatings;
