import Home from "@pages/home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/", // Root Route
		element: <Home />,
	},
]);

export default router;
