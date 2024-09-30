import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<>
			<Link
				to="/user-dashboard"
				className="flex flex-row gap-[1.1vw] justify-center alg:justify-normal"
			>
				<div className="alg:w-[18px] alg:h-[18px]">
					<picture className="">
						<source
							className=""
							media="(min-width: 565px)"
							srcSet="/assets/icons/dashboard.svg"
						/>
						<img
							src="/assets/icons/dashboardMob.svg"
							alt="A dashboard icon"
							className="w-full h-full object-cover"
						/>
					</picture>
				</div>
				<div className="hidden alg:block text-[#242424] font-Roboto text-[2.2vw] nxl:text-[18px] font-medium relative nxl:bottom-[4px]">Dashboard</div>
			</Link>
		</>
	);
};

export default Dashboard;
