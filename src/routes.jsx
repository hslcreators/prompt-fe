import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/home";

const router = createBrowserRouter([
	{
		path: "/", // Root Route
		element: <Home />,
	},
]);

export default router;
