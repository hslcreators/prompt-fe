import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import { useNavigate } from "react-router-dom";
import { useTransition } from "react";
import { progressRef } from "../Progress/Progress";

const VendorCard = ({ vendorData, search }) => {
	const navigate = useNavigate()
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
		<div className="flex flex-col text-[2.65vw] lg:text-[13px] select-none" key={ vendorData.id } onClick={() => { 
			if(search){
				let recents = JSON.parse(localStorage.getItem('recentSearch')) || []
				recents = recents.filter(function(el) { 
					return el.id != vendorData.id && el.print_service_name != vendorData.print_service_name
				})
				localStorage.setItem('recentSearch', JSON.stringify([...recents, {...vendorData, ml: Date.now() }].sort((a, b) => b.ml - a.ml)))
			}
			startTransition(() => {
				navigate(`/vendor-profile/${vendorData.id}`) 
			})
		}}>
				<button className="w-[29vw] h-[22vw] lg:max-w-[155px] alg:max-w-[185px] lg:max-h-[130px] nxl:max-w-[159px] nxl:max-h-[130px]">
					<img
						className="w-full h-full object-cover rounded-lg"
						src="/assets/images/printingStand.png"
						alt="A card icon"
					/>
				</button>
				<div className="text-[#4A5568] font-roboto font-medium">
					<div className="mt-[8px]">{ vendorData.print_service_name }</div>
					<div>₦ { vendorData.uncoloured_rate }</div>
				</div>
				<div className="text-[#525252] font-normal w-[90%] mb-[7px]">{ vendorData.location }</div>
				<Ratings rating = { vendorData.average_rating }/>
		</div>
	);
};

export default VendorCard;
