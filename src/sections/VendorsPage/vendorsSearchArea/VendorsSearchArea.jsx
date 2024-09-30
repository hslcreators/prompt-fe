import { searchStore } from "@/utils/OtherStores";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTransition } from "react";
import { progressRef } from "@/components/Progress/Progress";

const VendorsSearchArea = () => {

	const { searchText, setSearchText } = searchStore((state) => ({
		searchText: state.searchText,
		setSearchText: state.setSearchText
	}))
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


	return (
		<React.Fragment>
			<div className="min-h-[65px] md:h-[12vw] lg:h-[15vw] max-h-[86px] border-b-[1.75px] rounded-md w-full h-fit border-[#D9D9D9] bg-white">
				<form className="flex flex-row justify-center items-center h-full" onSubmit={ (e) => {
					e.preventDefault()
					if(window.location.href.split('/')[3] == 'search'){
						navigate(`/search/?q=${searchText}`)
					}else{
						startTransition(() => {
							navigate(`/search/?q=${searchText}`)
						})
					}
				} }>
					<div className="h-[50px] border-[1px] border-[#919396] rounded-full  w-[45vw] lg:max-w-[484px] nxl:max-w-[584px] flex items-center">
						<input
							id="FName"
							type="text"
							placeholder="Search vendors..."
							value={ searchText }
							className="bg-[transparent] w-searchBar h-full pl-[18px]"
							onChange={(e) => {
								setSearchText(e.target.value)
							}}
						/>
						<button className="w-[40px] h-full flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  class="bi bi-search w-[17px] h-[17px] font-[#919396]" viewBox="0 0 16 16">
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
							</svg>
						</button>
					</div>					
					{/* <div className="flex flex-row gap-[11px] ml-[4vw]">
						<button className=" ">
							<div className="w-[6vw] h-[6vw] lg:w-[28px] lg:h-[28px]">
								<picture className="">
									<source
										className=""
										media="(min-width: 565px)"
										srcSet="/assets/images/imageUsr.png"
									/>
									<img
										src="/assets/images/avatarMob.png"
										alt="A user avatar"
										className="w-full h-full object-cover rounded-full"
									/>
								</picture>
							</div>
						</button>
						<button className=" ">
							<div className="w-[6vw] h-[6vw] lg:w-[24px] lg:h-[30px]">
								<picture className="">
									<source
										className=""
										media="(min-width: 565px)"
										srcSet="/assets/icons/bell.svg"
									/>
									<img
										src="/assets/icons/bellMob.svg"
										alt="A notification svg"
										className="w-full h-full object-cover rounded-full"
									/>
								</picture>
							</div>
						</button>
					</div> */}
				</form>
			</div>
		</React.Fragment>
	);
};

export default VendorsSearchArea;
