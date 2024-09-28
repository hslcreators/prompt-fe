import Container from "@components/Container/Container";
import FileUploadForm from "@components/FileUpload/FileUploadForm/FileUploadForm";
import FileUploadNav from "@components/FileUpload/Nav/FileUploadNav";
import PageContainer from "@components/PageContainer/PageContainer";
import PaymentForm from "@components/Payment/PaymentForm";
import { AnimatePresence } from "framer-motion";
import { progressRef } from "@/components/Progress/Progress";
import { useEffect, useState } from "react";

const FileUpload = () => {
	const [page, setPage] = useState("file-upload");

	useEffect(() => {
		document.querySelector('.main-progress').classList.remove('start')
		document.querySelector('.main-progress').classList.add('end')
		setTimeout(() => {
			document.querySelector('.main-progress').classList.remove('start')
			document.querySelector('.main-progress').classList.remove('end')
		}, 1200)
	}, [])

	return (
		<PageContainer>
			<Container>
				{/* <FileUploadNav
					currentPage={page}
					setPage={setPage}
				/> */}
				<AnimatePresence>{page == "file-upload" ? <FileUploadForm /> : <PaymentForm />}</AnimatePresence>
			</Container>
		</PageContainer>
	);
};

export default FileUpload;
