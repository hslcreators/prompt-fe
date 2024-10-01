import PageContainer from "@components/PageContainer/PageContainer";
import VendorsSideBar from "@sections/VendorsPage/vendorsSideBar/VendorsSideBar";
import VendorsSearchArea from "@sections/VendorsPage/vendorsSearchArea/VendorsSearchArea";
import VendorsSearchFilter from "@sections/VendorsPage/vendorsSearchFilter/VendorsSearchFilter";
import VendorsCardRatings from "@sections/VendorsPage/vendorsCardRatings/VendorsCardRatings";
import PriceUpdateOptions from "@/sections/VendorsPage/PriceUpdateOptions";
import MobileHeading from "@/components/MobileHeading/MobileHeading";
import MobileFooter from "@/components/MobileFooter/MobileFooter";

import React, { useState, useEffect } from "react";
import SearchResults from "@/sections/SearchPage/SearchResults";
import { progressRef } from "@/components/Progress/Progress";



const SearchPage = () => {
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
				<div className="ml-[0px] w-full mobile:ml-[70px] alg:ml-majorClamp lg:border-l-4 flex flex-col bg-[#fcfbfb]">
					{
						isMobile? (
							<MobileHeading search = { true }/>
						):(
							<VendorsSearchArea />
						)
					}
					<div className="flex flex-col items-center pt-[80px] pb-[60px] mobile:pt-[0px]">
						<div className="w-[90%] mobile:w-[86%]">
                            <React.Fragment>
                                <div className="flex flex-col pt-[3vw] pb-[7vw] lg:pt-[4vw] lg:pb-[6vw] nxl:pt-[1vw] nxl:pb-[4vw]">
                                    <button className="flex flex-row vsm:mb-0 lg:mb-[2vw]">
                                        <div className="w-[5.2vw] h-[5.2vw] lg:w-[14px] lg:h-[14px] xl:w-[24px] xl:h-[24px] relative top-[1.3vw] lg:top-[8px] xl:top-[10px]">
                                            <img
                                                className="w-full h-full object-cover"
                                                src="/assets/icons/left.svg"
                                                alt="A left arrow"
                                            />
                                        </div>
                                        <div className="text-[#4A5568] font-bold vsm:text-[5.2vw] lg:text-[20px] xl:text-[30px] ml-[1.5vw] lg:ml-[12px] xl:ml-[20px]">Search</div>
                                    </button>
                                    {/* <div className="vsm:hidden lg:flex flex-row justify-between">
                                        <div>
                                            <input
                                                id="FName"
                                                type="text"
                                                placeholder="Search list..."
                                                className="border-[1px] border-[#919396] rounded-full py-[0.15vw] xl:py-[0.35vw] px-[1.75vw] w-[35vw] lg:fmax-w-[484px] xl:mafx-w-[584px]"
                                            />
                                        </div>
                                        <button className="flex flex-row  lg:text-[15px] xl:text-[20px]">
                                            Filter
                                            <div className="lg:w-[18px] lg:h-[18px] relative top-[2px] xl:top-[7px] ml-[10px]">
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src="/assets/icons/downArrow.svg"
                                                    alt="A down arrow"
                                                />
                                            </div>
                                        </button>
                                    </div> */}
                                </div>
                            </React.Fragment>
						</div>
						<div className="w-[90%] mobile:w-[86%]">
							<SearchResults />
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

export default SearchPage;
