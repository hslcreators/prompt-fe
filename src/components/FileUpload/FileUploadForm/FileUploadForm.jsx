import { useRef, useState, useEffect } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import File from "../File/File";
import { AnimatePresence } from "framer-motion";

const config = {
	id: "progressBar",
	percent: 10,
	linearGradient: ["#A855F7", "#3B82F6"],
	colorCircle: "#F5F5F5",
	fontSize: "1.25rem",
	fontColor: "#0A0A0A",
	fontWeight: 700,
	textPosition: "13px",
	// animationSmooth: "200ms linear",
	styles: {
		position: "relative",
		// width: "192px",
		// height: "184px",
	},
};

const FileUploadForm = () => {
	const icons = ["excelIcon", "pdfIcon", "wordIcon"];
	const fileInputRef = useRef(null);
	const uploadContainerRef = useRef(null);
	const uploadButtonRef = useRef(null);
	const uploadTextRef = useRef(null);

	const [isOpen, setIsOpen] = useState(false);

	const [selectedFiles, setSelectedFiles] = useState([]);
	const [description, setDescription] = useState("");

	const [update, setUpdate] = useState({ ...config });

	const onUploadContainerClick = (e) => {
		e.stopPropagation();
		if (e.target == uploadContainerRef.current || e.target == uploadButtonRef.current || e.target == uploadTextRef.current) fileInputRef.current.click();
	};

	const onFileChange = (e) => {
		const files = e.currentTarget.files;
		setSelectedFiles((prev) => [...prev, ...files]);
	};

	const removeSelectedFile = (fileName) => setSelectedFiles((prev) => [...prev.filter((file) => file.name !== fileName)]);

	// Correct this Implementation
	useEffect(() => {
		if (isOpen) {
			// const interval = setInterval(() => {
			// 	setUpdate((prev) => ({ ...prev, percent: prev.percent + 20 }));
			// }, 3000);
			setTimeout(() => setUpdate((prev) => ({ ...prev, percent: 100 })), 3000);
			console.log(update.percent);
		}
	}, [update, isOpen]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (selectedFiles.length > 0) {
			setSelectedFiles([]);
			setDescription("");
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
			setIsOpen(true);
			// console.log(selectedFiles);
			// console.log(description);
		} else alert("Please select some files...");
	};

	return (
		<section className={`${isOpen && "overflow-hidden"}`}>
			<form
				onSubmit={handleSubmit}
				className="mt-[53px] mb-8"
			>
				<div className="w-full bg-[#524ECA] rounded-xl relative lg:p-9 p-5">
					<div
						onClick={onUploadContainerClick}
						ref={uploadContainerRef}
						className="w-full h-full border border-dotted rounded-lg flex flex-col gap-y-5 items-center justify-center cursor-pointer lg:py-20 py-7 md:py-10 px-4"
					>
						<input
							ref={fileInputRef}
							type="file"
							multiple
							onChange={onFileChange}
							style={{ display: "none" }}
						/>
						<div className="flex gap-x-6 h-fit sm:mb-3">
							{icons.map((path) => (
								<img
									className="md:w-12 w-8 h-10 md:h-[51px] object-cover"
									key={path}
									src={`/assets/icons/${path}.svg`}
								/>
							))}
						</div>
						<div className="grid grid-cols-[auto_25%] max-w-[383px] w-full rounded-xl bg-white pl-5">
							<div className="flex items-center gap-x-4 border-r h-full border-[#7C7C7CB2] py-5">
								<img
									className="w-[30px] h-[30px] object-cover"
									src="/assets/icons/file.svg"
									alt="file icon"
								/>
								<span
									ref={uploadButtonRef}
									className="text-[#525252] tracking-[-0.28px] lg:text-2xl sm:text-lg font-bold"
								>
									CHOOSE FILES
								</span>
							</div>
							<div className="flex justify-center items-center w-full">
								<img
									className="w-4 h-3 object-cover"
									src="/assets/icons/downArrow.svg"
									alt=""
								/>
							</div>
						</div>
						<span
							ref={uploadTextRef}
							className="text-[#FFFFFFE5] tracking-[-0.48px] text-lg lg:text-2xl font-bold"
						>
							Or drag files here
						</span>
					</div>
				</div>
				<AnimatePresence mode="popLayout">
					{selectedFiles.length > 0 && (
						<div className="grid md:grid-cols-2 mt-10 gap-x-5 gap-y-7">
							{selectedFiles.map((file, index) => (
								<File
									key={file.name}
									index={index}
									fileName={file.name}
									removeFile={removeSelectedFile}
								/>
							))}
						</div>
					)}
				</AnimatePresence>
				<div className="lg:mt-16 mt-14 max-w-[675px] w-full">
					<h2 className="text-2xl text-[#000000D9] font-bold">Description (Optional)</h2>
					<div className="md:mt-7 mt-4">
						<p className="tracking-[-0.4px] text-xl font-bold text-[#00000099] text-right pr-7">{description.replaceAll(" ", "").length}</p>
						<textarea
							className="w-full placeholder:text-[#C4C4C4] text-[#000000D9] border-2 border-[#24262F] bg-[#FFFFFF99] rounded-xl px-5 py-6 text-xl placeholder:font-bold tracking-[-0.4px]"
							rows="4"
							placeholder="Leave your description here..."
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
					</div>
				</div>
				<div className="flex w-full justify-center">
					<button
						type="submit"
						className="max-w-[458px] w-full py-3 px-6 bg-[#524ECA] text-white rounded-lg self-center mt-16 text-xl font-bold tracking-[0.8px]"
					>
						NEXT
					</button>
				</div>
			</form>
			<ProgressBar
				config={update}
				setConfig={setUpdate}
				setIsOpen={setIsOpen}
				isOpen={isOpen}
			/>
		</section>
	);
};

export default FileUploadForm;
