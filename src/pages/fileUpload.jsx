import Container from "@components/Container/Container";
import FileUploadForm from "@components/FileUpload/FileUploadForm/FileUploadForm";
import FileUploadNav from "@components/FileUpload/Nav/FileUploadNav";
import PageContainer from "@components/PageContainer/PageContainer";
import PaymentForm from "@components/Payment/PaymentForm";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const FileUpload = () => {
	const [page, setPage] = useState("file-upload");

	return (
		<PageContainer>
			<Container>
				<FileUploadNav
					currentPage={page}
					setPage={setPage}
				/>
				<AnimatePresence>{page == "file-upload" ? <FileUploadForm /> : <PaymentForm />}</AnimatePresence>
			</Container>
		</PageContainer>
	);
};

export default FileUpload;
