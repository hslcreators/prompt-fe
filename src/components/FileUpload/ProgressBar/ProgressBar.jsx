import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

const ProgressBar = ({ config, setIsOpen, isOpen, setConfig }) => {
	// const navigate = useNavigate();

	const closeModal = () => {
		setConfig((prev) => {
 
			return { ...prev, percent: 0 };
		});
		setIsOpen(false);
 
	};

	if (!isOpen) return null;
	return createPortal(
		<section
			style={{ backdropFilter: "blur(2px)" }}
			className="absolute top-0 left-0 w-full h-[100vh] bg-[#1E1E1E33] overflow-hidden"
		>
			<dialog
				open
				className="lg:w-[654px] w-[90%] h-[70%] lg:h-[473px] bg-white rounded-2xl -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex flex-col justify-center items-center px-6"
			>
				<button
					className="absolute top-5 right-5"
					onClick={() => closeModal()}
				>
					<img
						className="w-4 h-4 sm:w-full sm:h-full object-cover"
						src="/assets/icons/close.svg"
						alt="close button"
					/>
				</button>
				<AnimatePresence>
					{config?.percent < 100 ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
						>
							<CircularProgressBar {...config}>
								<span
									style={{
										left: "48%",
										top: "38%",
									}}
									className="text-[#737373] absolute -translate-x-1/2 -translate-y-1/2 text-sm font-bold leading-4"
								>
									Completed
								</span>
							</CircularProgressBar>
							<div className="flex flex-col gap-y-[23px] mt-7 items-center">
								<h2 className="text-2xl font-bold text-[#525252] tracking-[-0.48px]">Uploading File...</h2>
								<span className="font-bold tracking-[-0.32px] text-[#525252]">It will take a moment</span>
							</div>
						</motion.div>
					) : (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2 }}
							className="flex flex-col items-center w-full"
						>
							<div className="lg:w-[143px] w-[90px] sm:w-[120px] h-full">
								<img
									className="object-cover"
									src="/assets/icons/success.svg"
									alt=""
								/>
							</div>
							<p className="font-bold text-xl mt-8 text-center">
								Your document has been uploaded <br /> successfully
							</p>
							<button
								onClick={() => closeModal()}
								className="max-w-[408px] mt-11 w-full bg-[#524ECA] uppercase text-white tracking-[0.64px] font-bold rounded-lg py-3 px-6"
							>
								Proceed to Payment
							</button>
						</motion.div>
					)}
				</AnimatePresence>
			</dialog>
		</section>,
		document.body
	);
};

export default ProgressBar;
