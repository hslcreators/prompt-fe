import { useRef, useState, useEffect } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import File from "../File/File";
import { AnimatePresence } from "framer-motion";
import { root, useAuthStore } from "@/utils/AuthStore";
import useFetch from "@/utils/useFetch";
import Error from "@/components/Error";
import TopLoader from "@/sections/AuthPages/TopLoader";
import { getPdfPageCount, getPptxSlideCount } from "./getFilePageCount";


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


	const { token, user } = useAuthStore((state) => ({
		token: state.token,
		user: state.user
	}))

	const [ status, setStatus] = useState(false)

	// let timeInterval

	const [time, setCurrentTime] = useState(false)
	const [timeInterval, setTimeInterval] = useState(false)
	const [coloured, setColoured] = useState(false)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

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

	//  console.log(selectedFiles)

	const removeSelectedFile = (fileName) => setSelectedFiles((prev) => [...prev.filter((file) => file.name !== fileName)]);

	// Correct this Implementation
	useEffect(() => {
		if (isOpen) {
			// const interval = setInterval(() => {
			// 	setUpdate((prev) => ({ ...prev, percent: prev.percent + 20 }));
			// }, 3000);
			setTimeout(() => setUpdate((prev) => ({ ...prev, percent: 100 })), 3000);
			// console.log(update.percent);
		}
	}, [update, isOpen]);

	// console.log(time)

	const handleSubmit = (e) => {
		setLoading(prev => true)
		e.preventDefault();
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
		if (selectedFiles.length > 0) {
			const formData = new FormData()

			const vendorID = Number(window.location.href.split('/')[4])	
			console.log(vendorID, token)
			if(e.target.description.value != '' && e.target.no_of_pages.value != '' && e.target.no_of_copies.value != ''){
				console.log('seleted', selectedFiles[0])
				console.log(fileInputRef.current.files)
				formData.append('no_of_copies', e.target.no_of_copies.value);
				formData.append('printer_id', vendorID);
				for (let index = 0; index < selectedFiles.length; index++) {
					const file = selectedFiles[index];
					formData.append('documents', file);
				}
				formData.append('pages',  e.target.no_of_pages.value);
				formData.append('coloured', coloured? 'True' : 'False');
				formData.append('description', e.target.description.value);
				formData.append('time_expected', time);


				const url = `${root}/orders/`
				const headers = {
					'Authorization': `Token ${token}`,
					'Content-Type': 'multipart/form-data',
				}	
				useFetch(url, formData, headers, 'post').then(({data: uploadData, eror: uploadError}) => {
					// console.log(uploadData, uploadError)
					if(uploadData){
						setLoading(prev => false)
						// setIsOpen(true);
						setStatus(prev => true)
						setError('File Uploaded Successfully!')
						setSelectedFiles([]);
						setDescription("");
						e.target.no_of_copies.value = ''
						e.target.no_of_pages.value = ''
					}else{
						setStatus(prev => false)
						setLoading(prev => false )
						setError('An Error Occured. Check your Connection!')
					}
				})
			}else{
				setStatus(prev => false)
				setLoading(prev => false)
				setError('Required Field Missing')
			}

			// console.log(selectedFiles);
			// console.log(description);
		} else{
			setStatus(prev => false)
			setLoading(prev => false)
			setError('Please Select some Files')
		}
	};

	useEffect(() => {
		const intervalID = setInterval(() => {
			const date = new Date()
			const hours = date.getHours() >= 10? `${date.getHours()}` : `0${date.getHours()}`
			const minutes = date.getMinutes() >= 10? `${date.getMinutes()}` : `0${date.getMinutes()}`
			const timeExpected = `${hours}:${minutes}`
			setCurrentTime(prev => timeExpected)
		}, 1000);

		setTimeInterval(prev => intervalID)

		return () => clearInterval(timeInterval)
	}, [])


	return (
		<section className={`${isOpen && "overflow-hidden"} `} style={{ pointerEvents: loading? 'none' : 'all', opacity: loading? '.8' : 'initial' }}>
			{
				loading? (
					<TopLoader />
				):(
					<></>
				)
			}
			
			<Error error={ error ? true: false } status={ status } msg = { error } setError = { setError }/>
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
				<div className="w-[100%] h-[auto] flex-column">
					<div className="lg:mt-16 mt-14 max-w-[675px] w-full">
						<h2 className="text-2xl text-[#000000D9] font-bold">Description</h2>
						<div className="md:mt-7 mt-4">
							<p className="tracking-[-0.4px] text-xl font-bold text-[#00000099] text-right pr-7">{description.replaceAll(" ", "").length}</p>
							<textarea
								className="w-full placeholder:text-[#C4C4C4] text-[#000000D9] border-2 border-[#24262F] bg-[#FFFFFF99] rounded-xl px-5 py-6 text-xl placeholder:font-bold tracking-[-0.4px]"
								rows="4"
								name="description"
								placeholder="Leave your description here..."
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></textarea>
						</div>
					</div>
					<div className="max-w-[300px] w-full h-[100px] flex">
						<div className="w-full">
							<div className="mt-[10px]">
								<h5>Coloured</h5>
								<div className={`w-[80px] h-[30px] ${ coloured? `bg-[green]` : `bg-[gray]` } mt-[10px] flex items-center relative`} style={{ borderRadius: '15px'}} onClick={() => {
									setColoured(prev =>  prev? false : true )
								}}>
									<div className={`w-[28px] h-[28px] bg-[white] ml-[6px] absolute ${ coloured? `right-[5px]`: ``  }`} style={{ borderRadius: '50%' }} ></div>
								</div>
							</div>
							<div className="mt-[10px]">
								<h5>Time Expected</h5>
								<input type="time" value={ time } onChange = { (e) => {
									clearInterval(timeInterval)
									setCurrentTime(prev => e.target.value)
								} } />
							</div>
						</div>
						<div className="w-full">
							<div className="mt-[10px]">
								<h5>No of Pages</h5>
								<input type="number" name="no_of_pages" className="border-gray-500 w-[60px]  pl-[2px]" style={{ borderWidth: '3px', borderRadius: '5px' }}/>
							</div>
							<div className="mt-[10px]">
								<h5>No of Copies</h5>
								<input type="number" name="no_of_copies" className="border-gray-500 w-[60px] pl-[2px]" style={{ borderWidth: '3px', borderRadius: '5px' }}/>
							</div>
						</div>
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
