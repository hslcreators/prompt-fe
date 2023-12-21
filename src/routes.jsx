import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import FileUpload from "@pages/fileUpload";

const router = createBrowserRouter([
	{
		path: "/", // Root Route
		element: <Home />,
	},
	{
		path: "/file-upload", // File Upload Route
		element: <FileUpload />,
	},
]);

export default router;
