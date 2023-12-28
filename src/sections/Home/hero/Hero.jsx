import Container from "@components/Container/Container";
import "./Hero.css";

const Hero = () => {
	return (
		<Container>
			<link
				rel="preconnect"
				href="https://fonts.googleapis.com"
			/>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,400;16..144,500&display=swap"
				rel="stylesheet"
			></link>
			<link
				rel="preconnect"
				href="https://fonts.googleapis.com"
			/>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,400;16..144,500&family=Roboto+Slab:wght@300&display=swap"
				rel="stylesheet"
			/>
			<link
				rel="preconnect"
				href="https://fonts.googleapis.com"
			/>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,400;16..144,500&family=Roboto+Slab:wght@300&family=Saira&display=swap"
				rel="stylesheet"
			/>

			<div className="homepage">
				<section className="section1">
					<div className="section1-left">
						<div className="text1">
							<h1 id="print101">Jump queues and print 101</h1>
						</div>
						<div className="text2">
							<h3>
								Print as many documents as possible without having to wait. <bre />
								You can make schoolwork easier by using PrintHub services.
							</h3>
						</div>
						<button className="start">START NOW</button>
					</div>
					<div className="section1-right">
						<img
							src="/public/assets/images/Rectangle 89.svg"
							id="print-image"
						></img>
					</div>
				</section>

				<section className="section2">
					<div className="section2-top">
						<h2>How PrintHub works</h2>
						<section className="section2-body">
							<div className="section2-left">
								<img
									src="/public/assets/images/questionmark.jpg"
									id="question-mark"
								></img>
							</div>
							<div className="section2-right"></div>
							<div>
								<h2 className="subhead">Find an available vendor</h2>
								<h3 className="explain">Begin your journey by looking up an available vendor close to your location.</h3>
								<h2 className="subhead">Upload Documents Online</h2>
								<h3 className="explain">Attach a description and upload as many documents as you want for printing: just sit back and relax while we handle the rest.</h3>
								<h2 className="subhead">Seamless Payment option</h2>
								<h3 className="explain">We accept debit cards, so you can pay for services without worrying about cash.</h3>
							</div>
						</section>
					</div>
				</section>

				<section className="section3">
					<div className="section3-top">
						<h2>Featured Vendors</h2>
						<div className="section3-body">
							<div className="box1"></div>
							<div className="box2"></div>
						</div>
					</div>
				</section>

				<section className="section4">
					<section className="section4-body">
						<div>
							<h2 className="newsletter">SIGN UP TO OUR NEWSLETTER</h2>
							<h3 className="deals">Be the first to know about our juiciest deals</h3>
						</div>
						<div>
							<input
								type="text"
								placeholder="  Your email address"
							></input>
							<button>Shop Now</button>
						</div>
					</section>
				</section>

				<footer className="footer">
					<div className="footer-logo">
						<img
							src="/public/assets/images/footer logo.jpg"
							alt="footer-logo"
						/>
						<h3 className="About-us">About Us</h3>
						<h3 className="Terms">Terms of Use</h3>
					</div>
					<div className="email">
						<img
							src="/public/assets/icons/sms.png"
							alt="email-icon"
						/>
						<p className="icon-text">help@printhub.com</p>

						<h3 className="career">Career</h3>
						<h3 className="privacy">Privacy Policy</h3>
					</div>
					<img
						src="/public/assets/icons/messages.png"
						alt="messages-icon"
					/>
					<div className="reminder">
						<img
							src="/public/assets/icons/clock.png"
							alt="reminder"
							className="clock"
						/>
						<p className="icon-text">Mon-Sun 8:am-9:pm</p>
						<div className="instagram-twitter-icons">
							<img
								src="/public/assets/icons/ig icon.png"
								alt="instagram-icon"
							/>
							<img
								src="/public/assets/icons/twitter icon.png"
								alt="twitter-icon"
							/>
						</div>
					</div>
				</footer>
			</div>
		</Container>
	);
};

export default Hero;
