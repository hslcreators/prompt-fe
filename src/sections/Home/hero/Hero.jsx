import Container from "@components/Container/Container";
import "./Hero.css";

const Hero = () => {
	return (
		<Container>
			<section className="text-[#23262F] flex">
				<div>
					<h1 className="font-montagu text-[110px] tracking-[-2.2px]">Jump queues and print 101</h1>
				</div>
				<img
					className="w-[564px] h-[717px] object-cover"
					src="/assets/images/heroImage.png"
					alt=""
				/>
			</section>
		</Container>
	);
};

export default Hero;
