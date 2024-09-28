import VendorReviews from "@/sections/VendorReviews/VendorReviews";
import useFetch from "@/utils/useFetch";
import React, { useEffect, useState } from "react";
import Error from "@/components/Error";
import { root, useAuthStore } from "@/utils/AuthStore";
import { reviewsStore } from "@/utils/OtherStores";

const VendorsDescription = ({ vendorData }) => {

	const { token } = useAuthStore((state) => ({
        token: state.token,
    }));

	// const [allReviews, setAllReviews] = useState(false)
	const [error, setError] = useState(false)

	const { allReviews, setAllReviews } = reviewsStore((state) => ({
		allReviews: state.allReviews,
		setAllReviews: state.setAllReviews
	}))

	console.log(vendorData)

	console.log(allReviews)

	useEffect(() => {
		const headers = {
			'Authorization': `Token ${token}`
		}
		const url = `${root}/reviews/all/`
		useFetch(url, false, headers, 'get').then(({ data: getReviewData, error: getReviewError }) => {
			if(getReviewData){
				const filtedReviews = getReviewData.filter(function(el){
					return el.printer == vendorData.id
				})
				setAllReviews(filtedReviews)
				// console.log(getReviewData, vendorData)
			}else{
				setError(prev => true)
			}
			// console.log(getReviewData, getReviewError)
		})
	}, [])
	return (
		<React.Fragment>
			<div className="flex flex-col jusstify-between text-[#171328]">
				<Error error={ error } setError={ setError } msg={ 'Error fetching vendor reviews !' }/>
				<div className="">
					<div className="font-bold vsm:text-[5.2vw] lg:text-[24.5px] xl:text-[27px]">Description</div>
					<div className="text-[#525252] flex flex-row vsm:text-[3vw] lg:text-[15px] xl:text-[17px] text-left tracking-tight mb-[20px]">{vendorData.description}.</div>
				</div>
				<div className="pb-[20px]">
					<div className="font-bold vsm:text-[5.2vw] lg:text-[18px] xl:text-[20px]">Bank Details</div>
					<div className="vsm:text-[3vw] lg:text-[13px] xl:text-[17px] font-normal text-[#494949]">Account Name: { vendorData.account_name }</div>
					<div className="vsm:text-[3vw] lg:text-[13px] xl:text-[17px] font-normal text-[#494949]">Account Number: { vendorData.account_number }</div>
					<div className="vsm:text-[3vw] lg:text-[13px] xl:text-[17px] font-normal text-[#494949]">Bank Name: { vendorData.bank_name }</div>
				</div>
				{/* <div className="mt-[30px] flex flex-row flex-wrap content-center justify-evenly gap-y-[4.5vw] lg:gap-y-[1.5vw] lg:gap-x-[5px] px-0">
					<div className="nxl:max-w-[285px]">
						<img
							className="w-full h-full object-cover"
							src="/assets/images/userDescription.png"
							alt="A userDesc icon"
						/>
					</div>
					<div className="nxl:max-w-[285px]">
						<img
							className="w-full h-full object-cover"
							src="/assets/images/userDescription.png"
							alt="A userDesc icon"
						/>
					</div>
					<div className="nxl:max-w-[285px]">
						<img
							className="w-full h-full object-cover"
							src="/assets/images/userDescription.png"
							alt="A userDesc icon"
						/>
					</div>
				</div> */}
				{
					allReviews? (
						<VendorReviews reviews = { allReviews }/>
					):(
						<></>
					)
				}
			</div>
		</React.Fragment>
	);
};

export default VendorsDescription;
