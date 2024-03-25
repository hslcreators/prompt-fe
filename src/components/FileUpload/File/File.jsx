/* eslint-disable @stylistic/js/newline-per-chained-call */
import { motion } from "framer-motion";

const shortenFileName = (value) => {
	const words = value.split(" ");
	return words.length >= 8 ? words.slice(0, 8).join(" ") + "..." : words.join(" ");
};

const File = ({ fileName, removeFile, index }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3 * index }}
			className="bg-[#524DCA] relative flex items-center justify-between w-full h-[84px] rounded-lg py-2 px-3 pr-8"
		>
			<div className="flex gap-x-5 items-center">
				<img
					className="w-6 sm:w-[30px] h-6 lg:h-[30px] cursor-pointer"
					src="/assets/icons/file-white.svg"
					alt=""
				/>
				{/* <p className="font-semibold text-white hidden sm:block sm:text-lg">{fileName}</p> */}
				<p className="font-semibold text-white sm:text-lg">{shortenFileName(fileName)}</p>
			</div>
			<div
				onClick={() => removeFile(fileName)}
				className="absolute right-[15px] top-[1/2] w-3 h-3 sm:w-[14px] sm:h-[14px] cursor-pointer"
			>
				<img
					src="/assets/icons/close-white.svg"
					className="w-full h-full object-cover"
					alt="close file icon"
				/>
			</div>
		</motion.div>
	);
};

export default File;
