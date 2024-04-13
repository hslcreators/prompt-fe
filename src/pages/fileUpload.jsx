import Container from "@components/Container/Container";
import FileUploadForm from "@components/FileUpload/FileUploadForm/FileUploadForm";
import FileUploadNav from "@components/FileUpload/Nav/FileUploadNav";
import PageContainer from "@components/PageContainer/PageContainer";
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
				<FileUploadForm />
			</Container>
		</PageContainer>
	);
};

export default FileUpload;
