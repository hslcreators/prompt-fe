import NavBar from "@components/NavBar/NavBar";
import PageContainer from "@components/PageContainer/PageContainer";
import Hero from "@sections/Home/hero/Hero";
import { useEffect, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { progressRef } from "@/components/Progress/Progress";

let navigateToLogin
const Home = () => {
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

	navigateToLogin = () => {
		startTransition(() => {
			navigate('/login')
		})
	}

	useEffect(() => {
		document.querySelector('.main-progress').classList.remove('start')
		document.querySelector('.main-progress').classList.add('end')
		setTimeout(() => {
			document.querySelector('.main-progress').classList.remove('start')
			document.querySelector('.main-progress').classList.remove('end')
		}, 1200)
	}, [])

	return (
		<PageContainer>
			<NavBar />
			<Hero />
		</PageContainer>
	);
};

export { navigateToLogin }
export default Home;

