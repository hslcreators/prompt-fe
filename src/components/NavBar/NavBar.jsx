const NavBar = () => {
	return (
		<nav className="w-full h-[167px] border-b-[0.5px] border-[#24262F] px-[54px] py-[48px] flex items-center justify-between">
			<img
				className="object-cover"
				src="/assets/images/logo.png"
				alt="Prompt Logo"
			/>
			<div className="flex justify-between text-[#23262F] gap-x-[160px] tracking-tight font-medium">
				<span className="text-[32px]">
					<a href="/">About</a>
				</span>
				<span className="text-[32px]">
					<a href="/">FAQ</a>
				</span>
			</div>
			<button className="bg-[#054C73] text-white font-bold px-[72px] py-[25px] text-center rounded-xl font-montserrat shadow-[0px_4px_4px_0px_#00000040]">SIGN IN</button>
		</nav>
	);
};

export default NavBar;
