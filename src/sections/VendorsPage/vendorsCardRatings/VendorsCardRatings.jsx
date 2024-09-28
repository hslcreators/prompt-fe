import React, { useEffect, useState } from "react";
import VendorCard from "@components/VendorCard/VendorCard";

import { useAuthStore } from "@/utils/AuthStore";
import useFetch from "@/utils/useFetch";
import { root } from "@/utils/AuthStore";
import LoadSpinner from "@/components/LoadSpnnner";

const VendorsCardRatings = () => {

	const { token, user, isVendor } = useAuthStore((state) => ({
		token: state.token,
		user: state.user,
		isVendor: state.isVendor
	}))

	const [allVendors, setAllVendors] = useState([]);
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)


	useEffect(() => {
		setLoading(true)

		const url = `${root}/auth/vendors/all/`
		const headers = {
			'Authorization': `Token ${token}`
		}	
		useFetch(url, false, headers, 'get').then(({ data: allVendorsData, error, allVendorsError }) => {
			if(allVendorsData){
				setLoading(false)
				setAllVendors((prev) => allVendorsData)
				setError(false)
			}else{
				setLoading(false)
				setError(true)
			}
			// console.log(allVendorsData, allVendorsError)
		})
		// const uri = `${root}/auth/vendors`
		// const body = JSON.stringify({
		// 	location: 'cst lab'
		// })
		// useFetch(uri, body, headers, 'post').then(({ data: allVendorsData, error, allVendorsError }) => {
		// 	console.log(allVendorsData, allVendorsError)
		// })
	}, [])

	return (
		<React.Fragment>
			<div className="flex flex-row min-h-[300px] flex-wrap content-center justify-center gap-x-[4.5vw] gap-y-[4.5vw] nxl:gap-x-[3vw] xl:gap-x-[1.5vw]">
				{
					loading? (
						<LoadSpinner />
					):(
						<>
							{
								error? (
									<>
										<p>An error occured. Check your connection</p>
									</>
								):(
									<>
									{
										allVendors.length > 0? (
											<>
												{
													allVendors.map((vendor) => (
														<VendorCard vendorData = { vendor }/>
													))
												}
											</>
										):(
											<>
											</>
										)
									}
								</>
										)
									}
								</>
							)
				}
			</div>
		</React.Fragment>
	);
};

export default VendorsCardRatings;
