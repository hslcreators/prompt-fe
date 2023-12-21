import { motion } from "framer-motion";

const File = ({ fileName, removeFile, index }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3 * index }}
			className="bg-[#524DCA] h-[78px] max-w-[580px] w-full mx-auto rounded-lg"
		>
			<div className="py-6 px-6 pr-14 relative">
				<div className="flex flex-row space-x-[14.22px] lg:space-x-[37px] justify-start items-center break-words">
					<img
						className="w-3 lg:w-[30px] h-3 lg:h-[30px] cursor-pointer"
						src="/assets/icons/file.svg"
						alt=""
					/>
					<p className="text-xl leading-3 lg:leading-[30px] font-[600] text-white max-w-[433px] overflow-ellipsis overflow-hidden whitespace-nowrap">{fileName}</p>
				</div>
				<div
					onClick={() => removeFile(fileName)}
					className="absolute right-[25px] top-[30px] w-[11px] lg:w-[16px] xl:w-[18px] h-[11px]lg:h-[16px] xl:h-[18px] cursor-pointer"
				>
					<img
						src="/assets/icons/close-white.svg"
						className="w-full h-full object-cover"
						alt=""
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default File;
