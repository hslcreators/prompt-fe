import PageContainer from "@components/PageContainer/PageContainer";
import VendorsSideBar from "@sections/VendorsPage/vendorsSideBar/VendorsSideBar";
import VendorsSearchArea from "@sections/VendorsPage/vendorsSearchArea/VendorsSearchArea";
import VendorsCardRatings from "@sections/VendorsPage/vendorsCardRatings/VendorsCardRatings";
import UsersHero from "@sections/UsersDashboard/usersHero/UsersHero";

const usersDashboard = () => (
	<PageContainer>
		<div className="flex flex-row select-none">
			<VendorsSideBar />
			<div className="w-full ml-[19vw] lg:ml-[30vw] nxl:ml-[240px] lg:border-b-4 lg:border-l-4 flex flex-col bg-[#fcfbfb]">
				<VendorsSearchArea />
				<div className="flex flex-col items-center">
					<div className="w-[78%] lg:w-[86%] bordesr-2">
						<UsersHero />
					</div>
					<div className="w-[78%] lg:w-[86%] ">
						<VendorsCardRatings />
					</div>
				</div>
			</div>
		</div>
	</PageContainer>
);

export default usersDashboard;
