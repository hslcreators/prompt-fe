import PageContainer from "@components/PageContainer/PageContainer";
import VendorsDescription from "@sections/VendorsPage/vendorsDescription/VendorsDescription";
import VendorsSideBar from "@sections/VendorsPage/vendorsSideBar/VendorsSideBar";
import VendorsSearchArea from "@sections/VendorsPage/vendorsSearchArea/VendorsSearchArea";
import VendorsDetails from "@sections/VendorsPage/vendorsDetails/VendorsDetails";
import { useEffect, useState } from "react";
import useFetch from "@/utils/useFetch";
import { root, useAuthStore } from "@/utils/AuthStore";
import LoadSpinner from "@/components/LoadSpnnner";
import PriceUpdateOptions from "@/sections/VendorsPage/PriceUpdateOptions";
import MobileHeading from "@/components/MobileHeading/MobileHeading";
import MobileFooter from "@/components/MobileFooter/MobileFooter";
import { showPriceUpdateStore } from "@/utils/OtherStores";
import { progressRef } from "@/components/Progress/Progress";


const vendorsProfile = () => {

	const { token, user, isVendor } = useAuthStore((state) => ({
		token: state.token,
		user: state.user,
		isVendor: state.isVendor
	}))

	const [vendor, setVendor] = useState(false)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)



	const [isMobile, setIsMobile] = useState(window.innerWidth <= 550)

	window.addEventListener('resize', ()=>{
		setIsMobile(prev => window.innerWidth <= 550)
	})

	const { isOpen, setIsOpen }  = showPriceUpdateStore((state) => ({
        isOpen: state.isOpen,
		setIsOpen: state.setIsOpen
    }))

	console.log('open', isOpen)

	useEffect(() => {
		setLoading(true)
		setIsMobile(prev => window.innerWidth <= 550)
		document.querySelector('.main-progress').classList.remove('start')
		document.querySelector('.main-progress').classList.add('end')
		setTimeout(() => {
			document.querySelector('.main-progress').classList.remove('start')
			document.querySelector('.main-progress').classList.remove('end')
		}, 1200)


		const vendorID = Number(window.location.href.split('/')[4])
		const url = `${root}/auth/vendors/${vendorID}`
		const headers = {
			'Authorization': `Token ${token}`
		}	
		useFetch(url, false, headers, 'get').then(({ data: vendorData, error: vendorError })=>{
			if(vendorData){
				setVendor((prev) => vendorData)
				setLoading(false)
				setError(false)
			}else{
				setLoading(false)
				setError(true)
			}
		})
	}, [])
 

	return (
		<PageContainer>
			<div className="flex flex-row select-none">
				<VendorsSideBar />
				<div className="ml-[0px] w-full mobile:ml-[70px] alg:ml-majorClamp lg:border-b-4 lg:border-l-4 flex flex-col bg-[#fcfbfb]">
					{
						isMobile? (
							<MobileHeading />
						):(
							<VendorsSearchArea />
						)
					}
					<div className="flex flex-col items-center pt-[50px] justify-center pb-[50px] mobile:pt-[0px]" style={ { minHeight: 'calc(100vh - 84.7px)' } }>
						{
							loading? (
								<LoadSpinner/>
							):(
								<>
									{
										error? (
											<p>An error occured. Check your connection</p>
										):(
											<>
												<div className="w-[96%] mobile:w-[86%]">
													<VendorsDetails vendorData = { vendor } isVendor = { isVendor }/>
												</div>
												<div className="w-[96%] mobile:w-[86%]">
													<VendorsDescription vendorData = { vendor }/>
												</div>
											</>
										)
									}
								</>
							)
						}
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
			{
				isOpen? (
					<PriceUpdateOptions vendor={ isOpen } setIsOpen = { setIsOpen }/>
				):(
					<></>
				)
			}
		</PageContainer>
	);
};

export default vendorsProfile;
