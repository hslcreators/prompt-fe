import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import VendorHeading from "@/components/VendorHeading/VendorHeading";
import ReviewOptions from "@/sections/VendorReviews/ReviewOptions";
import { reviewsStore } from "@/utils/OtherStores";
import Ratings from "@/components/VendorCard/Ratings";
import PriceUpdateOptions from "../PriceUpdateOptions";
import { showPriceUpdateStore, vendorPriceStore } from "@/utils/OtherStores";
import { useTransition } from "react";
import { progressRef } from "@/components/Progress/Progress";


const VendorsDetails = ({ vendorData, isVendor }) => {

	const navigate = useNavigate();
	const [isPending, startTransition] = useTransition()

	if(isPending){
				document.querySelector('.main-progress').classList.remove('end')
				document.querySelector('.main-progress').classList.add('start')
	}else{
				document.querySelector('.main-progress').classList.remove('start')
				document.querySelector('.main-progress').classList.add('end')
			setTimeout(() => {
					document.querySelector('.main-progress').classList.remove('start')
				document.querySelector('.main-progress').classList.remove('end')
			}, 1200)
	}
	const vendorID = Number(window.location.href.split('/')[4])


	const { optionID, setOptionID } = reviewsStore((state) => ({
		optionID: state.optionID,
		setOptionID: state.setOptionID
	}))

	const { setIsOpen }  = showPriceUpdateStore((state) => ({
        setIsOpen: state.setIsOpen
    }))

	const { updateColoured, coloured,  updateUncoloured, uncoloured  } = vendorPriceStore((state)=> ({
		coloured: state.coloured,
		uncoloured: state.uncoloured,
		updateColoured: state.updateColoured,
		updateUncoloured: state.updateUncoloured
	}))

	useEffect(() => {
		updateColoured(vendorData.offers_coloured? vendorData.coloured_rate : false )
		updateUncoloured(vendorData.uncoloured_rate)
	}, [])
	// console.log(optionID)

	return (
		<React.Fragment>
			<div className="flex flex-col text-[#525252] font-bold vsm:text-[4.2vw] lg:text-[20px] xl:text-[30px] my-[6vw] nsm:my-[3vw] relative">
				<VendorHeading />
				<div>
					<div>{vendorData.print_service_name}</div>
					<div className="vsm:text-[3vw] lg:text-[13px] xl:text-[21px] font-normal flex items-center">Price : N{uncoloured} {
							isVendor == vendorData.id? (
								<div className="ml-[7px] cursor-[pointer]" onClick={() => { setIsOpen(vendorData) }}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
										<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
										</svg>
									</div>
							):(
								<></>
							)
						}
					</div>
					{
						coloured || coloured != 0 ? (
							<div className="vsm:text-[3vw] lg:text-[13px] xl:text-[21px] font-normal">Coloured Rate: N{coloured}</div>
						):(
							<></>
						)
					}
					<div className="vsm:text-[3vw] lg:text-[13px] xl:text-[21px] font-normal">Location: {vendorData.location}</div>
					<div className="vsm:text-[3vw] lg:text-[13px] xl:text-[21px] font-normal">Status: {vendorData.is_open? 'Open': 'Closed'}</div>

					<div className="w-[20vw] h-[4vw] max-w-[144px] max-h-[24px] lg:relative right-[4px]">
					<Ratings rating = { vendorData.average_rating }/>
					</div>
				</div>
				<div className="flex flex-row w-[80%] alg:w-[70%] nxl:w-[50%] justify-between vsm:text-[2.2vw] lg:text-[13px] xl:text-[21px] font-normal mt-[4vw] lg:mt-[24px] nxl:mt-[30px]">
					<button
						onClick={() => {
							startTransition(() => {
								navigate(`/file-upload/${vendorID}`)
							})
						}}
						className="rounded-md bg-[#524ECA] w-[49%] text-white p-[1vw] sm:p-[5px] nxl:p-[7px] "
					>
						USE VENDOR
					</button>
					{/* <button className="rounded-md border-2 w-[49%] border-[#524ECA] text-[#524ECA] p-[1vw] sm:p-[5px] nxl:p-[7px]">ADD TO WISHLIST</button> */}
				</div>
			</div>
			<ReviewOptions optionID = { optionID } setOptionID = { setOptionID } />
		</React.Fragment>
	);
};

export default VendorsDetails;
