import { motion } from "framer-motion";

const FileUploadNav = ({ currentPage, setPage }) => {
	const pages = [
		{ title: "Upload File", path: "file-upload" },
		{ title: "Make Payment", path: "make-payment" },
	];

	return (
		<section className="lg:flex items-center lg:mt-8 mt-16">
			<div className="w-5 h-5 left-3 top-6 absolute lg:hidden">
				<img
					className="object-cover"
					src="/assets/icons/leftArrow.svg"
					alt=""
				/>
			</div>
			<div className="w-6 h-6 hidden lg:block">
				<img
					className="object-cover"
					src="/assets/icons/leftArrow.svg"
					alt=""
				/>
			</div>
			<div className="max-w-[706px] w-full mx-auto">
				<div className="flex justify-around mb-2">
					{pages.map((page) => (
						<button
							key={page.title}
							onClick={() => setPage(page.path)}
							className={`${page === currentPage ? "text-[#3876BFE5]" : "text-[#C4C4C4]"} lg:text-2xl text-xl font-bold tracking-[-0.48px] w-full`}
						>
							{page.title}
						</button>
					))}
				</div>
				<div className={`w-full rounded-[50px] h-1 bg-[#E8EAED] flex relative ${currentPage === "file-upload" ? "justify-start" : "justify-end"}`}>
					<motion.div
						layout
						className="bg-[#524ECA] h-1 w-1/2 rounded-[50px]"
					></motion.div>
				</div>
			</div>
		</section>
	);
};

export default FileUploadNav;
