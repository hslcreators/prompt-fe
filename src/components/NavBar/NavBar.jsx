import "./navbar.css";

const NavBar = () => {
	return (
		<div className="n-wrapper">
			<div className="n-left">
				<div className="n-logo">
					<img></img>
				</div>
			</div>
			<div className="n-right">
				<div className="n-list">
					<ul>
						<li>ABOUT</li>
						<li>FAQ</li>
					</ul>
				</div>
				<button className="button">SIGN IN</button>
			</div>
		</div>
	);
};

export default NavBar;
