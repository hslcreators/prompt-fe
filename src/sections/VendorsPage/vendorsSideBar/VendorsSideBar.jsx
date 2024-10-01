import React from "react";
import Logo from "@components/Logo/Logo";
import UserProfile from "@components/UserProfile/UserProfile";
import { useNavigate } from "react-router-dom";
import { useTransition } from "react";
import { progressRef } from "@/components/Progress/Progress";


const navLinks = [
	{
		label: 'Dashboard',
		icon: '/assets/icons/dashboard.svg',
		link: '/user-dashboard'
	},
	{
		label: 'Vendors',
		icon: '/assets/icons/vendor.svg',
		link: '/vendors'
	},
	{
		label: 'Activity',
		icon: '/assets/icons/activity.svg',
		link: '/activity'
	}
]


const LinkElm = ({ link }) => {
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
		<div className="flex flex-row gap-[1.1vw] justify-center alg:justify-normal cursor-[pointer]" onClick={() => {
			startTransition(() => {
				navigate(link.link)
			})
		}}>
				<div className="alg:w-[18px] alg:h-[18px]">
						<img
							className=""
							media="(min-width: 565px)"
							src={ link.icon }
						/>
				</div>
				<div className="hidden alg:block text-[#242424] font-Roboto text-[2.2vw] nxl:text-[18px] font-medium relative nxl:bottom-[4px]">{ link.label }</div>
		</div>
	)
}

const VendorsSideBar = () => {
	return (
		<React.Fragment>
			<div className="hidden fixed border-r-[1.5px] border-[#00000040] w-[70px] alg:w-[30vw] alg:max-w-[240px] select-none mobile:flex flex-col h-[100vh] justify-between rounded-md">
				<div className="flex flex-col gap-[10vw] sm:gap-[52px] items-center max-h-[316px] sm:max-h-none mt-[5vw] md:mt-[2vw] lg:mt-[28px]">
					<div className="">
						<Logo />
					</div>
					<div className="flex flex-col h-[78vw] sm:h-[225px] justify-between">
						{
							navLinks.map(link => (
								<LinkElm link={ link } />
							))
						}
					</div>
				</div>
				<UserProfile />
			</div>
		</React.Fragment>
	);
};

export default VendorsSideBar;
