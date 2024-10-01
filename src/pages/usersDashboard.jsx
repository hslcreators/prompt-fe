import PageContainer from "@components/PageContainer/PageContainer";
import VendorsSideBar from "@sections/VendorsPage/vendorsSideBar/VendorsSideBar";
import VendorsSearchArea from "@sections/VendorsPage/vendorsSearchArea/VendorsSearchArea";
import VendorsCardRatings from "@sections/VendorsPage/vendorsCardRatings/VendorsCardRatings";
import UsersHero from "@sections/UsersDashboard/usersHero/UsersHero";
import { useEffect, useState } from "react";
import MobileHeading from "@/components/MobileHeading/MobileHeading";
import MobileFooter from "@/components/MobileFooter/MobileFooter";
import { progressRef } from "@/components/Progress/Progress";

const usersDashboard = () => {
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
			<div className="flex flex-row select-none">
				<VendorsSideBar />
				<div className="ml-[0px] w-full mobile:ml-[70px] alg:ml-majorClamp  lg:border-l-4 flex flex-col">
					{
						isMobile? (
							<MobileHeading />
						):(
							<VendorsSearchArea />
						)
					}
					<div className="flex flex-col items-center pt-[80px]  pb-[60px] mobile:pt-[0px]">
						<div className="w-[90%] mobile:w-[86%] bordesr-2">
							<UsersHero />
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
	)
};

export default usersDashboard;
