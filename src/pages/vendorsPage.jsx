import PageContainer from "@components/PageContainer/PageContainer";
import VendorsSideBar from "@sections/VendorsPage/vendorsSideBar/VendorsSideBar";
import VendorsSearchArea from "@sections/VendorsPage/vendorsSearchArea/VendorsSearchArea";
import VendorsSearchFilter from "@sections/VendorsPage/vendorsSearchFilter/VendorsSearchFilter";
import VendorsCardRatings from "@sections/VendorsPage/vendorsCardRatings/VendorsCardRatings";

const VendorsPage = () => {
	return (
		<PageContainer>
			<div className="flex flex-row">
				<VendorsSideBar />
				<div className="w-full ml-[30vw] nxl:ml-[240px] lg:border-b-4 lg:border-l-4 flex flex-col bg-[#fcfbfb]">
					<VendorsSearchArea />
					<div className="flex flex-col items-center">
						<div className="w-[78%] lg:w-[86%] border-2">
							<VendorsSearchFilter />
						</div>
						<div className="w-[78%] lg:w-[86%] border-2">
							<VendorsCardRatings />
						</div>
					</div>
				</div>
			</div>
		</PageContainer>
	);
};

export default VendorsPage;
