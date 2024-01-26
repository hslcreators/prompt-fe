import PageContainer from "@components/PageContainer/PageContainer";
import VendorsDescription from "@sections/VendorsPage/vendorsDescription/VendorsDescription";
import VendorsSideBar from "@sections/VendorsPage/vendorsSideBar/VendorsSideBar";
import VendorsSearchArea from "@sections/VendorsPage/vendorsSearchArea/VendorsSearchArea";
import VendorsDetails from "@sections/VendorsPage/vendorsDetails/VendorsDetails";

const vendorsProfile = () => {
	return (
		<PageContainer>
			<div className="flex flex-row select-none">
				<VendorsSideBar />
				<div className="w-full ml-[19vw] lg:ml-[30vw] nxl:ml-[240px] lg:border-b-4 lg:border-l-4 flex flex-col bg-[#fcfbfb]">
					<VendorsSearchArea />
					<div className="flex flex-col items-center">
						<div className="w-[78%] lg:w-[86%] ">
							<VendorsDetails />
						</div>
						<div className="w-[78%] lg:w-[86%] ">
							<VendorsDescription />
						</div>
					</div>
				</div>
			</div>
		</PageContainer>
	);
};

export default vendorsProfile;
