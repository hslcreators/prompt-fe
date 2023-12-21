import { motion } from "framer-motion";

const FileUploadNav = ({ page, setPage }) => {
	return (
		<section className="w-full relative flex items-center">
			<img
				className="absolute left-0"
				src="/assets/icons/leftArrow.svg"
				alt=""
			/>
			<div className="max-w-[706px] w-full mx-auto">
				<div className="flex justify-around mb-2">
					<button
						onClick={() => setPage("file-upload")}
						className={`${page === "file-upload" ? "text-[#3876BFE5]" : "text-[#C4C4C4]"} text-2xl font-bold tracking-[-0.48px] w-full`}
					>
						Upload File
					</button>
					<button
						onClick={() => setPage("payment")}
						className={`${page !== "file-upload" ? "text-[#3876BFE5]" : "text-[#C4C4C4]"} text-2xl font-bold tracking-[-0.48px] w-full`}
					>
						Make Payment
					</button>
				</div>
				<div className={`w-full rounded-[50px] h-1 bg-[#E8EAED] flex relative ${page === "file-upload" ? "justify-start" : "justify-end"}`}>
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
