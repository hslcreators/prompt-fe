import PageContainer from "@components/PageContainer/PageContainer";
import VendorsSideBar from "@sections/VendorsPage/vendorsSideBar/VendorsSideBar";
import VendorsSearchArea from "@sections/VendorsPage/vendorsSearchArea/VendorsSearchArea";
import VendorsSearchFilter from "@sections/VendorsPage/vendorsSearchFilter/VendorsSearchFilter";
import VendorsCardRatings from "@sections/VendorsPage/vendorsCardRatings/VendorsCardRatings";
import PriceUpdateOptions from "@/sections/VendorsPage/PriceUpdateOptions";
import MobileHeading from "@/components/MobileHeading/MobileHeading";
import MobileFooter from "@/components/MobileFooter/MobileFooter";
import { progressRef } from "@/components/Progress/Progress";

import { useState, useEffect } from "react";


const VendorsPage = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 550)

	window.addEventListener('resize', ()=>{
		setIsMobile(prev => window.innerWidth <= 550)
	})

	useEffect(()=>{
		setIsMobile(prev => window.innerWidth <= 550)
		document.querySelector('.main-progress').classList.remove('start')
		document.querySelector('.main-progress').classList.add('end')
		setTimeout(() => {
			document.querySelector('.main-progress').classList.remove('start')
			document.querySelector('.main-progress').classList.remove('end')
		}, 1200)
	}, [])
	return (
		<PageContainer>
			<div className="flex flex-column select-none">
				<VendorsSideBar />
				<div className="ml-[0px] w-full mobile:ml-[70px] alg:ml-majorClamp lg:border-b-4 lg:border-l-4 flex flex-col bg-[#fcfbfb]">
					{
						isMobile? (
							<MobileHeading />
						):(
							<VendorsSearchArea />
						)
					}
					<div className="flex flex-col items-center pt-[80px] pb-[60px]  mobile:pt-[0px]">
						<div className="w-[90%] mobile:w-[86%]">
							<VendorsSearchFilter />
						</div>
						<div className="w-[90%] mobile:w-[86%]">
							<VendorsCardRatings />
						</div>
					</div>
					{
						isMobile? (
							<MobileFooter />
						):(
							<></>
						)
					}
				</div>
			</div>
		</PageContainer>
	);
};

export default VendorsPage;
