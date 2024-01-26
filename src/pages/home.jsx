import NavBar from "@components/NavBar/NavBar";
import PageContainer from "@components/PageContainer/PageContainer";
import Hero from "@sections/Home/hero/Hero";
const Home = () => {
	return (
		<PageContainer>
			<NavBar />
			<Hero />
		</PageContainer>
	);
};

export default Home;
