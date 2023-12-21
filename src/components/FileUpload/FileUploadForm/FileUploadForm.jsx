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

	useEffect(() => {
		if (isOpen) {
			const interval = setInterval(() => {
				setUpdate((prev) => ({ ...prev, percent: prev.percent + 20 }));
			}, 3000);
			if (update?.percent >= 100) clearInterval(interval);
			console.log(update.percent);
		}
	}, [update.percent, isOpen]);

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
				className="mt-[53px] flex flex-col mb-8"
			>
				<div className="h-[454px] w-full bg-[#524ECA] rounded-xl relative p-9">
					<div
						onClick={onUploadContainerClick}
						ref={uploadContainerRef}
						className="w-full h-full border border-dotted rounded-lg flex flex-col gap-y-5 items-center justify-center cursor-pointer"
					>
						<input
							ref={fileInputRef}
							type="file"
							multiple
							onChange={onFileChange}
							style={{ display: "none" }}
						/>
						<div className="flex gap-x-6 h-fit">
							{icons.map((path) => (
								<img
									className="w-12 h-[51px] object-cover"
									key={path}
									src={`/assets/icons/${path}.svg`}
								/>
							))}
						</div>
						<div className="grid grid-cols-[auto_93px] max-w-[383px] w-full rounded-xl bg-white h-[101px] pl-5">
							<div className="flex items-center gap-x-4 border-r h-full border-[#7C7C7CB2]">
								<img
									className="w-[30px] h-[30px] object-cover"
									src="/assets/icons/file.svg"
									alt=""
								/>
								<span
									ref={uploadButtonRef}
									className="text-[#525252] tracking-[-0.28px] text-2xl font-bold"
								>
									CHOOSE FILES
								</span>
							</div>
							<div className="flex justify-center items-center w-full">
								<img
									className="w-[23px] h-3 object-cover"
									src="/assets/icons/downArrow.svg"
									alt=""
								/>
							</div>
						</div>
						<span
							ref={uploadTextRef}
							className="text-[#FFFFFFE5] tracking-[-0.48px] text-2xl font-bold"
						>
							Or drag files here
						</span>
					</div>
				</div>
				<AnimatePresence mode="popLayout">
					<div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-10 mt-10">
						{selectedFiles.length > 0 &&
							selectedFiles.map((file, index) => (
								<File
									key={file.name}
									index={index}
									fileName={file.name}
									removeFile={removeSelectedFile}
								/>
							))}
					</div>
				</AnimatePresence>
				<div className="mt-16 max-w-[675px] w-full">
					<h2 className="text-2xl text-[#000000D9] font-bold">Description (Optional)</h2>
					<div className="mt-7">
						<p className="tracking-[-0.4px] text-xl font-bold text-[#00000099] text-right pr-7">160</p>
						<textarea
							className="w-full placeholder:text-[#C4C4C4] text-[#000000D9] border-2 border-[#00000091] bg-[#FFFFFF99] rounded-xl px-5 py-6 text-xl placeholder:font-bold tracking-[-0.4px]"
							cols="30"
							rows="10"
							placeholder="Leave your description here..."
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
					</div>
				</div>
				<button
					type="submit"
					className="max-w-[458px] w-full py-3 px-6 bg-[#524ECA] text-white rounded-lg self-center mt-16 text-xl font-bold tracking-[0.8px]"
				>
					NEXT
				</button>
			</form>
			<ProgressBar
				config={update}
				setIsOpen={setIsOpen}
				isOpen={isOpen}
			/>
		</section>
	);
};

export default FileUploadForm;
