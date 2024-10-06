import React, { useEffect, useState } from "react";
import VendorCard from "@components/VendorCard/VendorCard";

import { useAuthStore } from "@/utils/AuthStore";
import useFetch from "@/utils/useFetch";
import { root } from "@/utils/AuthStore";
import LoadSpinner from "@/components/LoadSpnnner";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchStore } from "@/utils/OtherStores";

const SearchResults = () => {
    const [ searchParams ] = useSearchParams()
	const { token, user, isVendor } = useAuthStore((state) => ({
		token: state.token,
		user: state.user,
		isVendor: state.isVendor
	}))
    const [isQuery, setIsQuery] = useState(false)

	const [allVendors, setAllVendors] = useState([]);
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)


	const { searchText, setSearchText } = searchStore((state) => ({
		searchText: state.searchText,
		setSearchText: state.setSearchText
	}))

    const navigate = useNavigate()

    const fetchResults = (query) => {
        setLoading(true)
		const url = `${root}/auth/vendors/search/${searchText}`
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
 
		})
    }

    const getRecents = () => {
		setError(prev => false)
        const recents = JSON.parse(localStorage.getItem('recentSearch'))
        setAllVendors(prev => recents? recents : [])
    }


	useEffect(() => {
		const linkParams = searchParams.get('q')
		setSearchText(linkParams? linkParams : '')
	}, [])

	useEffect(() => {
        const linkParams = searchParams.get('q')
        setIsQuery(linkParams)
		navigate(`/search/?q=${searchText}`)
        if(searchText === ''){
           getRecents()
        }else{
            fetchResults()
        }
	}, [searchText])

	return (
		<React.Fragment>
			{
				searchText === ''?(
					<h1 className="font-bold  text-[20px] text-[#4A5568]">Recent Searches</h1>
				):(
					<></>
				)
			}
			<div className="flex flex-row min-h-[300px] flex-wrap content-center gap-x-[4.5vw] gap-y-[4.5vw] nxl:gap-x-[3vw] xl:gap-x-[1.5vw]">
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
														<div className="search-result">
                                                            <VendorCard vendorData = { vendor } search = { true }/>
                                                        </div>
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

export default SearchResults;
