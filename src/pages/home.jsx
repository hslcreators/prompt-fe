import PageContainer from "@components/PageContainer/PageContainer";
import Hero from "@sections/Home/hero/Hero";
import VendorsPage from "./vendorsPage";
import UsersDashboard from "./usersDashboard";
const Home = () => {
	return (
		<PageContainer>
			{/* <Hero />
			<div>rere</div> */}
			{/* <VendorsPage /> */}
			<UsersDashboard />
			<div>rere</div>
		</PageContainer>
	);
};

export default Home;
